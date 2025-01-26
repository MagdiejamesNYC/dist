import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import PageContent from '../components/PageContent';
import { imagesConfig } from '../config';

export default function Tools() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="pt-16">
      <PageHeader
        title="XR Educational Tools"
        description="Cutting-edge tools and platforms for creating immersive learning experiences."
        image={imagesConfig.tools}
      />

      <PageContent>
        <p className="text-2xl font-light leading-relaxed">
          The landscape of XR educational tools is rapidly evolving, offering educators an expanding array of options for creating immersive learning experiences. From user-friendly content creation platforms to sophisticated development tools, these resources enable teachers to craft engaging lessons that leverage the full potential of spatial computing and extended reality technologies.
        </p>

        <p className="text-xl leading-relaxed">
          Modern XR tools emphasize accessibility and ease of use, allowing educators to focus on pedagogical objectives rather than technical complexities. Many platforms now offer drag-and-drop interfaces, pre-built templates, and extensive asset libraries that simplify the creation of virtual environments and interactive experiences. This democratization of XR content creation is accelerating the adoption of immersive learning across educational institutions.
        </p>

        <p className="text-xl leading-relaxed">
          The integration of analytics and assessment capabilities within these tools provides valuable insights into student engagement and learning outcomes. Educators can track progress, identify areas where students may be struggling, and adjust their teaching strategies accordingly. This data-driven approach, combined with the immersive nature of XR, creates a powerful framework for personalized learning and improved educational outcomes.
        </p>
      </PageContent>
    </div>
  );
}
