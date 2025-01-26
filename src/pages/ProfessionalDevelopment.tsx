import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Brain, Lightbulb, Rocket, Trophy, Users } from 'lucide-react';
import ProgramContactForm from '../components/ProgramContactForm';
import ComingSoonBadge from '../components/ComingSoonBadge';

interface Program {
  id: string;
  title: string;
  description: string;
  duration: string;
  icon: any;
}

export default function ProfessionalDevelopment() {
  const location = useLocation();
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const programs = [
    {
      id: "quick-start",
      title: "Quick Start: Spatial Web & XR in Education",
      description: "Fast-track introduction to implementing spatial computing and XR in your school. Perfect for administrators and teachers looking to begin their journey into the future of education.",
      duration: "3 hours",
      icon: Rocket
    },
    {
      id: "certification",
      title: "Spatial Web Teaching Certification",
      description: "Comprehensive certification program covering spatial computing, VR/AR/XR methodologies, classroom management, and content creation.",
      duration: "12 weeks",
      icon: Trophy
    },
    {
      id: "workshops",
      title: "Immersive Learning Workshop Series",
      description: "Hands-on workshops focused on implementing spatial web and XR technology across various subjects.",
      duration: "4 weeks",
      icon: Lightbulb
    },
    {
      id: "leadership",
      title: "Spatial Computing Leadership in Education",
      description: "Advanced program for educational leaders implementing spatial web and XR programs at institutional level.",
      duration: "8 weeks",
      icon: Users
    },
    {
      id: "cognitive",
      title: "Cognitive Science of Spatial Learning",
      description: "Deep dive into the neuroscience and psychology of spatial computing and immersive learning experiences.",
      duration: "6 weeks",
      icon: Brain
    }
  ];

  return (
    <div className="pt-16">
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80" 
            alt="Professional Development"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
              Professional Development
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Comprehensive training programs for educators entering the world of spatial computing and XR education.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <button
                key={program.id}
                onClick={() => setSelectedProgram(program)}
                className="relative p-6 text-left rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <ComingSoonBadge />
                <Icon className="h-8 w-8 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{program.title}</h3>
                <p className="text-gray-400 mb-4">{program.description}</p>
                <span className="text-cyan-400 font-medium">Duration: {program.duration}</span>
              </button>
            );
          })}
        </div>
      </div>

      <ProgramContactForm
        isOpen={!!selectedProgram}
        onClose={() => setSelectedProgram(null)}
        program={selectedProgram || undefined}
      />
    </div>
  );
}
