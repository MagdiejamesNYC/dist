import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import PageContent from '../components/PageContent';
import { imagesConfig } from '../config';

export default function CaseStudies() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="pt-16">
      <PageHeader
        title="XR Education Case Studies"
        description="Real-world examples of successful XR implementation in educational settings."
        image={imagesConfig.caseStudies}
      />

      <PageContent>
        <p className="text-2xl font-light leading-relaxed">
          Our collection of case studies showcases innovative applications of XR technology across diverse educational contexts. From K-12 classrooms to higher education institutions, these real-world examples demonstrate the transformative impact of immersive learning experiences. Each case study provides detailed insights into implementation strategies, challenges encountered, and measurable outcomes achieved.
        </p>

        <p className="text-xl leading-relaxed">
          One particularly notable example comes from a high school physics program that implemented virtual reality labs. Students showed a 40% improvement in understanding complex concepts when compared to traditional teaching methods. The immersive nature of VR allowed them to visualize and interact with abstract phenomena, making theoretical concepts tangible and easier to grasp.
        </p>

        <p className="text-xl leading-relaxed">
          These success stories also highlight the importance of proper training and support systems. Educational institutions that invested in comprehensive teacher training and technical support reported smoother adoption processes and better learning outcomes. The case studies provide valuable lessons learned and best practices that can help other institutions avoid common pitfalls and accelerate their XR implementation journey.
        </p>
      </PageContent>
    </div>
  );
}
