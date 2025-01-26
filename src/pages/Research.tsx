import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import PageContent from '../components/PageContent';
import { imagesConfig } from '../config';

export default function Research() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="pt-16">
      <PageHeader
        title="XR Education Research"
        description="Latest studies and findings on the impact of XR technology in education."
        image={imagesConfig.research}
      />

      <PageContent>
        <p className="text-2xl font-light leading-relaxed">
          Current research in XR education reveals promising trends in student engagement, knowledge retention, and skill development. Studies consistently show that immersive learning experiences can lead to deeper understanding and longer-lasting retention of complex concepts. The multi-sensory nature of XR creates stronger neural connections, making learning more effective and memorable.
        </p>

        <p className="text-xl leading-relaxed">
          Cognitive science research has demonstrated that spatial computing and virtual environments can enhance spatial awareness, problem-solving abilities, and creative thinking. The ability to manipulate 3D objects and experience abstract concepts in tangible ways helps students develop a more intuitive understanding of complex subjects. This is particularly evident in STEM fields, where visualization of mathematical concepts and scientific phenomena can be challenging with traditional teaching methods.
        </p>

        <p className="text-xl leading-relaxed">
          Ongoing studies are also exploring the social and emotional aspects of XR learning environments. Research indicates that collaborative virtual spaces can foster stronger peer connections and improve communication skills, even in remote learning situations. These findings are particularly relevant as educational institutions adapt to hybrid learning models and seek ways to maintain student engagement across different learning modalities.
        </p>
      </PageContent>
    </div>
  );
}
