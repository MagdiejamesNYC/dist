import { Link } from 'react-router-dom';

interface FeaturedArticleProps {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  slug?: string;
}

export default function FeaturedArticle({ image, category, title, excerpt, slug = '#' }: FeaturedArticleProps) {
  return (
    <Link 
      to={`/article/${slug}`}
      className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 text-xs font-semibold text-cyan-400 bg-cyan-400/10 rounded-full mb-4">
          {category}
        </span>
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400">
          {excerpt}
        </p>
        <span className="mt-4 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors">
          Read More →
        </span>
      </div>
    </Link>
  );
}
