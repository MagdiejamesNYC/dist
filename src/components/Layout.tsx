import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-black" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1626387346567-68d0c49c78e1?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
      <div className="relative">
        {children}
      </div>
    </div>
  );
}
