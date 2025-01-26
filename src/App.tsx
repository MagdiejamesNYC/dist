import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Article from './pages/Article';
import Resources from './pages/Resources';
import CaseStudies from './pages/CaseStudies';
import Tools from './pages/Tools';
import Research from './pages/Research';
import ProfessionalDevelopment from './pages/ProfessionalDevelopment';
import Unsubscribe from './pages/Unsubscribe';
import JobBoard from './pages/JobBoard';
import WeCanHelpYou from './pages/WeCanHelpYou';
import { useEffect } from 'react';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
      <Layout>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/article/:slug" element={<Article />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/research" element={<Research />} />
          <Route path="/professional-development" element={<ProfessionalDevelopment />} />
          <Route path="/unsubscribe" element={<Unsubscribe />} />
          <Route path="/job-board" element={<JobBoard />} />
          <Route path="/we-can-help-you" element={<WeCanHelpYou />} />
        </Routes>
      </Layout>
  );
}

export default App;
