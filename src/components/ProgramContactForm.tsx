import { X } from 'lucide-react';
import { useState } from 'react';

interface Program {
  id: string;
  title: string;
  duration: string;
}

interface ProgramContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  program?: Program;
}

export default function ProgramContactForm({ isOpen, onClose, program }: ProgramContactFormProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [institution, setInstitution] = useState('');
  const [message, setMessage] = useState('');

  if (!isOpen || !program) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Program Interest:', { program, email, name, institution, message });
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
          <h3 className="text-2xl font-bold text-white mb-2">{program.title}</h3>
          <p className="text-gray-300">
            Duration: {program.duration}
          </p>
          <p className="text-gray-300 mt-2">
            Fill out this form to express your interest in this program. Our team will contact you with more information.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
          <input
            type="text"
            value={institution}
            onChange={(e) => setInstitution(e.target.value)}
            placeholder="School/Institution name"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Any specific questions or requirements?"
            rows={4}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
          />
          <button
            type="submit"
            className="w-full px-4 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-colors"
          >
            Request Information
          </button>
        </form>
      </div>
    </div>
  );
}
