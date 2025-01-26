import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import PageContent from '../components/PageContent';
import { imagesConfig } from '../config';

export default function Resources() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="pt-16">
      <PageHeader
        title="XR Educational Resources"
        description="Comprehensive guides, tools, and materials for implementing XR technology in education."
        image={imagesConfig.resources}
      />

      <PageContent>
        <p className="text-2xl font-light leading-relaxed">
          The integration of XR technology in education represents a paradigm shift in how we approach teaching and learning. By leveraging immersive experiences, educators can create unprecedented opportunities for student engagement and comprehension. Our curated collection of resources serves as a comprehensive guide for institutions looking to embrace this transformative technology.
        </p>

        <p className="text-xl leading-relaxed">
          From virtual field trips to interactive 3D models, XR technology opens up new possibilities for experiential learning. Students can explore historical sites, conduct virtual science experiments, or practice complex procedures in a safe, controlled environment. These hands-on experiences foster deeper understanding and retention of subject matter, while developing crucial digital literacy skills for the future.
        </p>

        <p className="text-xl leading-relaxed">
          The successful implementation of XR in education requires careful planning, appropriate infrastructure, and well-trained educators. Our resources provide detailed guidance on hardware selection, software evaluation, curriculum integration, and best practices for classroom management in XR-enhanced learning environments. We also address important considerations such as accessibility, student safety, and measuring learning outcomes in immersive environments.
        </p>
      </PageContent>
    </div>
  );
}
