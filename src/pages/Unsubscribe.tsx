import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { unsubscribeFromNewsletter } from '../utils/newsletter';

export default function Unsubscribe() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<'processing' | 'success' | 'error'>('processing');

  useEffect(() => {
    const email = searchParams.get('email');
    const token = searchParams.get('token');

    if (!email || !token) {
      setStatus('error');
      return;
    }

    const success = unsubscribeFromNewsletter(email, token);
    setStatus(success ? 'success' : 'error');
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Newsletter Unsubscribe</h1>
        
        {status === 'processing' && (
          <p className="text-gray-300">Processing your unsubscribe request...</p>
        )}

        {status === 'success' && (
          <>
            <p className="text-gray-300 mb-6">
              You have been successfully unsubscribed from our newsletter. We're sorry to see you go!
            </p>
            <Link 
              to="/"
              className="inline-block px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-colors"
            >
              Return to Homepage
            </Link>
          </>
        )}

        {status === 'error' && (
          <>
            <p className="text-gray-300 mb-6">
              Sorry, we couldn't process your unsubscribe request. The link might be invalid or expired.
            </p>
            <Link 
              to="/"
              className="inline-block px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-colors"
            >
              Return to Homepage
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
