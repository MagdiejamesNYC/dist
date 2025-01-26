import { 
  collection, 
  addDoc, 
  query, 
  where, 
  getDocs, 
  deleteDoc,
  serverTimestamp,
  DocumentReference
} from 'firebase/firestore';
import { httpsCallable } from 'firebase/functions';
import { db, functions } from './config';

const COLLECTION_NAME = 'newsletter_subscribers';

export const generateToken = () => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

export const subscribeToNewsletter = async (email: string): Promise<DocumentReference> => {
  const q = query(collection(db, COLLECTION_NAME), where("email", "==", email));
  const querySnapshot = await getDocs(q);
  
  if (!querySnapshot.empty) {
    throw new Error('Email already subscribed');
  }

  const subscriber = {
    email,
    subscribeDate: serverTimestamp(),
    unsubscribeToken: generateToken(),
  };

  const sendWelcomeEmail = httpsCallable(functions, 'sendWelcomeEmail');
  await sendWelcomeEmail({ email, unsubscribeToken: subscriber.unsubscribeToken });

  return addDoc(collection(db, COLLECTION_NAME), subscriber);
};

export const unsubscribeFromNewsletter = async (email: string, token: string): Promise<boolean> => {
  const q = query(
    collection(db, COLLECTION_NAME), 
    where("email", "==", email),
    where("unsubscribeToken", "==", token)
  );
  
  const querySnapshot = await getDocs(q);
  
  if (querySnapshot.empty) {
    return false;
  }

  await deleteDoc(querySnapshot.docs[0].ref);

  const sendUnsubscribeEmail = httpsCallable(functions, 'sendUnsubscribeEmail');
  await sendUnsubscribeEmail({ email });

  return true;
};

export const isSubscribed = async (email: string): Promise<boolean> => {
  const q = query(collection(db, COLLECTION_NAME), where("email", "==", email));
  const querySnapshot = await getDocs(q);
  return !querySnapshot.empty;
};
