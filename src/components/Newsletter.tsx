import { X } from 'lucide-react';
import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { subscribeToNewsletter, isSubscribed } from '../utils/newsletter';

interface NewsletterProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Newsletter({ isOpen, onClose }: NewsletterProps) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setLoading(true);
    
    try {
      // Check if already subscribed
      const subscribed = await isSubscribed(email);
      if (subscribed) {
        toast.error('This email is already subscribed!');
        return;
      }

      // Subscribe to newsletter
      await subscribeToNewsletter(email);
      
      toast.success('Successfully subscribed to newsletter!');
      setEmail('');
      onClose();
    } catch (error) {
      toast.error('Failed to subscribe. Please try again.');
      console.error('Newsletter subscription error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <Toaster position="top-center" />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8 max-w-md w-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">Join the Spatial Learning Revolution</h3>
          <p className="text-gray-300">
            Be part of an innovative community shaping the future of education in the Spatial Web. Get exclusive access to:
          </p>
        </div>

        <div className="space-y-4 mb-6">
          {[
            "Early access to spatial computing tools",
            "Advanced teaching methodologies",
            "Community events and workshops",
            "Latest spatial web research"
          ].map((benefit, index) => (
            <div key={index} className="flex items-center text-gray-300">
              <div className="h-2 w-2 bg-cyan-400 rounded-full mr-3" />
              {benefit}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your  email"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-3 bg-cyan-500 hover:bg-cyan-600 disabled:bg-cyan-500/50 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-colors"
          >
            {loading ? 'Subscribing...' : 'Join the Spatial Web Community'}
          </button>
        </form>
      </div>
    </div>
  );
}
