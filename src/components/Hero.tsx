import { useState } from 'react';
    import { GraduationCap, BookOpen, Share2 } from 'lucide-react';
    import FeaturedArticle from './FeaturedArticle';
    import AdUnit from './AdUnit';
    import Newsletter from './Newsletter';
    import ComingSoonBadge from './ComingSoonBadge';
    import { Link } from 'react-router-dom';

    export default function Hero() {
      const [showNewsletter, setShowNewsletter] = useState(false);

      const footerItems = [
        {
          icon: <GraduationCap className="h-8 w-8 text-cyan-400" />,
          title: "Spatial Resources",
          description: "Curated guides for spatial computing in education",
          comingSoon: true,
        },
        {
          icon: <BookOpen className="h-8 w-8 text-cyan-400" />,
          title: "Lesson Plans",
          description: "Ready-to-use spatial web lesson templates",
          comingSoon: true,
        },
        {
          icon: <Share2 className="h-8 w-8 text-cyan-400" />,
          title: "Community",
          description: "Connect with spatial computing educators",
          comingSoon: false,
          onClick: () => setShowNewsletter(true),
        },
      ];

      return (
        <div className="relative">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-6xl font-bold text-white mb-8 tracking-tight">
                Transform Education in the
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> Spatial Web</span>
              </h1>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Discover how AR, VR, and the Spatial Web are revolutionizing learning experiences through immersive, interconnected educational environments.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/resources"
                  className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  Explore Resources
                </Link>
                <button 
                  onClick={() => setShowNewsletter(true)}
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold backdrop-blur-lg transition-all transform hover:scale-105"
                >
                  Join Community
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <FeaturedArticle
                image="https://images.unsplash.com/photo-1617802690992-15d93263d3a9?auto=format&fit=crop&q=80"
                category="Spatial Web"
                title="The Future of Learning in Web3 and Spatial Computing"
                excerpt="How the Spatial Web is creating new possibilities for immersive education."
                slug="spatial-web-learning"
              />
              <FeaturedArticle
                image="https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&q=80"
                category="Learning Tools"
                title="Top Educational Apps for Spatial Computing"
                excerpt="The best applications leveraging the Spatial Web for K-12 education."
                slug="spatial-learning-apps"
              />
              <FeaturedArticle
                image="https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80"
                category="Case Study"
                title="Virtual Labs in the Spatial Web Era"
                excerpt="How spatial computing is revolutionizing advanced lab work accessibility."
                slug="virtual-labs-spatial"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <FeaturedArticle
                image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                category="Teaching Methods"
                title="Collaborative Learning in the Spatial Web"
                excerpt="New approaches to group work in interconnected virtual spaces."
                slug="collaborative-spatial-learning"
              />
              <FeaturedArticle
                image="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80"
                category="Technology"
                title="XR and Spatial Computing in Special Education"
                excerpt="Breaking barriers with spatial web technologies."
                slug="spatial-special-education"
              />
              <FeaturedArticle
                image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80"
                category="Research"
                title="Impact of Spatial Computing on Learning"
                excerpt="Latest research on spatial web technology in education."
                slug="spatial-learning-impact"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <FeaturedArticle
                image="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80"
                category="Professional Development"
                title="Teaching in the Spatial Web Era"
                excerpt="Preparing educators for the next generation of learning spaces."
                slug="spatial-teaching-prep"
              />
              <AdUnit className="rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300 aspect-[1.5] flex items-center justify-center" />
              <FeaturedArticle
                image="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80"
                category="Curriculum"
                title="Designing Spatial Learning Experiences"
                excerpt="Best practices for creating educational content in the Spatial Web."
                slug="spatial-curriculum-design"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {footerItems.map((item, index) => (
                <div
                  key={index}
                  className={`relative p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-colors ${
                    item.onClick ? 'cursor-pointer' : ''
                  }`}
                  onClick={item.onClick}
                >
                  {item.comingSoon && <ComingSoonBadge />}
                  <div className="flex flex-col items-center text-center">
                    {item.icon}
                    <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Newsletter isOpen={showNewsletter} onClose={() => setShowNewsletter(false)} />
        </div>
      );
    }
