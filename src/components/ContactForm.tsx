import { X } from 'lucide-react';
import { useState } from 'react';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle contact form submission
    console.log('Contact:', { email, phone, message });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8 max-w-md w-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">Advertise in the Metaverse</h3>
          <p className="text-gray-300">
            Reach over 3,000 XR professionals, educators, and decision-makers in the educational technology space.
          </p>
        </div>

        <div className="space-y-4 mb-6">
          {[
            "Target audience of XR/AR/VR enthusiasts",
            "High-engagement educational community",
            "Premium ad placements available",
            "Custom sponsorship opportunities"
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
            placeholder="Your business email"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone number"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us about your advertising goals"
            rows={4}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
            required
          />
          <button
            type="submit"
            className="w-full px-4 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-colors"
          >
            Get in Touch
          </button>
        </form>
      </div>
    </div>
  );
}
