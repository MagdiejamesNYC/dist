import { useEffect } from 'react';
    import { useLocation } from 'react-router-dom';
    import PageHeader from '../components/PageHeader';
    import PageContent from '../components/PageContent';

    export default function WeCanHelpYou() {
      const location = useLocation();

      useEffect(() => {
        window.scrollTo(0, 0);
      }, [location]);

      return (
        <div className="pt-16">
          <PageHeader
            title="We Can Help You"
            description="Learn how we can assist you with your spatial computing and XR education needs."
          />
          <PageContent>
            <p>
              We understand that navigating the world of spatial computing and XR can be challenging.
              That's why we're here to help! Whether you're an educator looking to integrate XR into
              your curriculum, a researcher exploring new possibilities, or a professional seeking to
              enhance your skills, we offer a range of services and resources tailored to your needs.
            </p>
            <p>
              Our team of experts can provide guidance on curriculum development, technology
              implementation, and best practices in XR education. We also offer workshops, training
              programs, and consulting services to help you achieve your goals.
            </p>
            <p>
              Please contact us to discuss your specific needs and learn how we can support your
              journey in spatial computing and XR.
            </p>
          </PageContent>
        </div>
      );
    }
