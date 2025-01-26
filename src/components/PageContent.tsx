import { ReactNode } from 'react';

interface PageContentProps {
  children: ReactNode;
}

export default function PageContent({ children }: PageContentProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="space-y-8 text-white">
            {children}
          </div>
        </div>
        <div className="space-y-8">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">Implementation Guide</a>
              </li>
              <li>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">Best Practices</a>
              </li>
              <li>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">Success Stories</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
