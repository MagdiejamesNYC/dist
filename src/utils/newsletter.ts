import { db } from '../lib/firebase';
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
import { functions } from '../lib/firebase';

const COLLECTION_NAME = 'newsletter_subscribers';

interface Subscriber {
  email: string;
  subscribeDate: Date;
  unsubscribeToken: string;
}

export const generateToken = () => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

export const subscribeToNewsletter = async (email: string): Promise<DocumentReference> => {
  // Check if already subscribed
  const q = query(collection(db, COLLECTION_NAME), where("email", "==", email));
  const querySnapshot = await getDocs(q);
  console.log(q)
  if (!querySnapshot.empty) {
    throw new Error('Email already subscribed');
  }

  // Add new subscriber
  const subscriber = {
    email,
    subscribeDate: serverTimestamp(),
    unsubscribeToken: generateToken(),
  };

  // Send welcome email using Firebase Cloud Function
  // const sendWelcomeEmail = httpsCallable(functions, 'sendWelcomeEmail');
  // await sendWelcomeEmail({ email, unsubscribeToken: subscriber.unsubscribeToken });

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

  // Delete the subscriber document
  await deleteDoc(querySnapshot.docs[0].ref);

  // Send unsubscribe confirmation email using Firebase Cloud Function
  const sendUnsubscribeEmail = httpsCallable(functions, 'sendUnsubscribeEmail');
  await sendUnsubscribeEmail({ email });

  return true;
};

export const isSubscribed = async (email: string): Promise<boolean> => {
  const q = query(collection(db, COLLECTION_NAME), where("email", "==", email));
  const querySnapshot = await getDocs(q);
  return !querySnapshot.empty;
};
