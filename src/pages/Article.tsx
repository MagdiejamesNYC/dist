import { useParams, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import AdUnit from '../components/AdUnit';

export default function Article() {
  const { slug } = useParams();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // In a real app, you would fetch the article data based on the slug
  const article = {
    title: "Meta Quest 3 Review: A New Era of Mixed Reality",
    category: "Review",
    date: "March 14, 2024",
    author: "John Doe",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80",
    content: `
      <p>The Meta Quest 3 represents a significant leap forward in mixed reality technology, offering improved resolution, better comfort, and more sophisticated tracking capabilities than its predecessor.</p>
      
      <h2>Hardware Specifications</h2>
      <p>The Quest 3 features a higher resolution display with improved clarity and reduced screen-door effect. The new pancake lenses provide better optical quality while reducing the overall bulk of the headset.</p>
      
      <h2>Mixed Reality Capabilities</h2>
      <p>With full-color passthrough and improved depth sensing, the Quest 3 delivers compelling mixed reality experiences that blend virtual and physical worlds seamlessly.</p>
      
      <h2>Performance and Gaming</h2>
      <p>Powered by the latest Snapdragon XR2 processor, the Quest 3 handles demanding VR applications with ease, maintaining smooth framerates even in complex environments.</p>
    `
  };

  return (
    <div className="pt-16">
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-cyan-400 bg-cyan-400/10 rounded-full mb-4">
              {article.category}
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
              {article.title}
            </h1>
            <div className="flex items-center text-gray-300 text-sm">
              <span>{article.author}</span>
              <span className="mx-2">•</span>
              <span>{article.date}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <article className="prose prose-invert prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </article>
          </div>
          <div className="space-y-8">
            <AdUnit className="sticky top-24 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300 min-h-[600px] flex items-center justify-center" />
          </div>
        </div>
      </div>
    </div>
  );
}
