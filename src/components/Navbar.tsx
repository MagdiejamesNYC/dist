import { Glasses, Menu, X } from 'lucide-react';
    import { useState } from 'react';
    import { Link } from 'react-router-dom';
    import Newsletter from './Newsletter';
    import ContactForm from './ContactForm';

    export default function Navbar() {
      const [isOpen, setIsOpen] = useState(false);
      const [showNewsletter, setShowNewsletter] = useState(false);
      const [showContactForm, setShowContactForm] = useState(false);

      return (
        <>
          <nav className="fixed w-full z-50 bg-black/10 backdrop-blur-lg border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <Link to="/" className="flex-shrink-0">
                    <Glasses className="h-8 w-8 text-cyan-400" />
                  </Link>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      <Link to="/resources" className="text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Resources</Link>
                      <Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Case Studies</Link>
                      <Link to="/tools" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Tools</Link>
                      <Link to="/research" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Research</Link>
                      <Link to="/professional-development" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Professional Development</Link>
                      <Link to="/job-board" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Job Board</Link>
                      <Link to="/we-can-help-you" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">We Can Help You</Link>
                      <button
                        onClick={() => setShowContactForm(true)}
                        className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                      >
                        Advertise with us
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <button 
                    onClick={() => setShowNewsletter(true)}
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Join Community
                  </button>
                </div>
                <div className="md:hidden">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-gray-400 hover:text-white"
                  >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </button>
                </div>
              </div>
            </div>
            {isOpen && (
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-lg">
                  <Link to="/resources" className="text-white block px-3 py-2 rounded-md text-base font-medium">Resources</Link>
                  <Link to="/case-studies" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Case Studies</Link>
                  <Link to="/tools" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Tools</Link>
                  <Link to="/research" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Research</Link>
                  <Link to="/professional-development" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Professional Development</Link>
                  <Link to="/job-board" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Job Board</Link>
                  <Link to="/we-can-help-you" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">We Can Help You</Link>
                  <button
                    onClick={() => setShowContactForm(true)}
                    className="text-gray-300 w-full text-left block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Advertise with us
                  </button>
                </div>
              </div>
            )}
          </nav>
          <Newsletter isOpen={showNewsletter} onClose={() => setShowNewsletter(false)} />
          <ContactForm isOpen={showContactForm} onClose={() => setShowContactForm(false)} />
        </>
      );
    }
