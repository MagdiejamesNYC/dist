import { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
  image: string;
}

export default function PageHeader({ title, description, image }: PageHeaderProps) {
  return (
    <div className="relative h-[40vh] overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
