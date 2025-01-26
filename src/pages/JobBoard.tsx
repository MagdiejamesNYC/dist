import { useEffect } from 'react';
    import { useLocation } from 'react-router-dom';
    import PageHeader from '../components/PageHeader';
    import PageContent from '../components/PageContent';
    import { imagesConfig } from '../config';

    export default function JobBoard() {
      const location = useLocation();

      useEffect(() => {
        window.scrollTo(0, 0);
      }, [location]);

      return (
        <div className="pt-16">
          <PageHeader
            title="Spatial Web Job Board"
            description="Find your next opportunity in the exciting field of spatial computing and XR education."
            image="https://images.unsplash.com/photo-1588980024944-041116b18964?auto=format&fit=crop&q=80"
          />

          <PageContent>
            <p className="text-2xl font-light leading-relaxed">
              The Spatial Web is rapidly expanding, creating a wealth of new opportunities for professionals in education and technology. Our job board connects talented individuals with leading institutions and companies at the forefront of XR and spatial computing. Whether you're an educator, developer, designer, or researcher, you'll find a range of exciting roles that match your skills and interests.
            </p>

            <p className="text-xl leading-relaxed">
              We feature positions from K-12 schools, universities, research labs, and innovative startups, all focused on advancing the use of XR in education. From curriculum development and instructional design to software engineering and user experience, the opportunities are diverse and impactful. Our job board is updated regularly, ensuring you have access to the latest openings in this dynamic field.
            </p>

            <p className="text-xl leading-relaxed">
              We also provide resources for job seekers, including tips for crafting effective resumes and cover letters, as well as advice on how to prepare for interviews in the XR industry. Our goal is to empower you to find the perfect role that allows you to contribute to the future of education in the Spatial Web.
            </p>
          </PageContent>
        </div>
      );
    }
