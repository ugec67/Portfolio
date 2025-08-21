import { useState, useEffect, useRef } from 'react';
import {
  Linkedin,
  Github,
  Mail,
  Phone,
  Code,
  Book,
  Briefcase,
  Layers,
  Award,
  CircleCheck,
  Star,
  Folder,
} from 'lucide-react';

// Data object to hold all portfolio content
const portfolioData = {
  name: "Reva Digraskar",
  professionalSummary: "Web Developer with hands-on experience in JavaScript, React.js, Node.js, and Firebase. Skilled in building responsive web applications and integrating APIs. My passion lies in creating beautiful and intuitive user experiences through clean, efficient code.",
  glitchTitle: "WEB DEVELOPER",
  contact: {
    email: "digraskarreva288@gmail.com",
    phone: "9407973775",
    linkedin: "https://www.linkedin.com/in/reva-digraskar",
    github: "https://github.com/ugec67",
  },
  education: [
    {
      degree: "B.Tech in Electronics and Communication Engineering",
      institution: "NIT Jamshedpur",
      year: "2023 - Present",
      gpa: "CGPA: 6.3",
    },
    {
      degree: "Class 12th",
      institution: "St. Francis Sr. Secondary School, Bilaspur",
      year: "Apr 2023",
    },
    {
      degree: "Class 10th",
      institution: "St. Francis Sr. Secondary School, Bilaspur",
      year: "Apr 2021",
    },
  ],
  experience: [
    {
      title: "Open Source Contributor",
      company: "GSSOC 2025",
      duration: "Jun - Jul 2025",
      description: "Contributed to GSSOC 2025 by opening 1 PR on DevDisplay and reviewing 1 PR on p5.js-website, collaborating with 10+ developers using Git/GitHub workflows. Improved project functionality and documentation by identifying issues and suggesting fixes.",
    },
  ],
  projects: [
    {
      name: "VibeChat",
      subtitle: "Real-Time Chat App",
      technologies: "React.js, Firebase Auth, Firestore",
      description: "Built a real-time chat app with Firebase Auth and Firestore, tested with 20+ accounts, supporting real-time messaging with sub-second latency. Deployed on Firebase Hosting to ensure scalability and low-latency communication.",
      github: "https://github.com", // Replace with actual link
    },
    {
      name: "Content Management App",
      subtitle: "Full-Stack CMS",
      technologies: "React.js, Node.js, Express.js, MongoDB",
      description: "Developed a full-stack CMS with CRUD functionality and REST APIs, enabling 4+ content types and 30% faster updates through reusable UI components.",
      github: "https://github.com", // Replace with actual link
    },
    {
      name: "Mini Dev Tools Hub v2",
      subtitle: "Developer Tools Suite",
      technologies: "JavaScript, HTML5, CSS3",
      description: "Created a suite of 5+ tools (timer, currency converter, age calculator, password generator, etc.), achieving instant DOM response times (<100ms).",
      github: "https://github.com", // Replace with actual link
    },
    {
      name: "GitHub Profile Finder",
      subtitle: "API Integration App",
      technologies: "React.js, GitHub REST API",
      description: "Integrated GitHub REST API for fast profile search with results under 1s.",
      github: "https://github.com", // Replace with actual link
    },
  ],
  skills: {
    languages: ["JavaScript (ES6+)", "C++", "HTML5", "CSS3", "SQL", "Python (basic)"],
    frameworks: ["React.js", "Bootstrap", "Tailwind CSS", "Node.js", "Express.js"],
    databases: ["Firebase", "Git", "GitHub", "VS Code", "Postman"],
    coreCompetencies: ["RESTful APIs", "CRUD Operations", "Authentication", "Responsive Design", "Agile Development", "Cloud Deployment", "Version Control"],
  },
  activities: [
    "NSS: Organized a Blood Donation Camp with 80+ participants, boosting community engagement.",
    "Faces, NIT Jamshedpur: Member of the Art Team, contributing to design projects for cultural/technical events.",
    "Frontend Battle 2.0, IIT Bhubaneswar (Jun 2025): Participated in a 24-hour hackathon organized by WebnD; built a responsive UI under time constraints.",
  ],
  certifications: [
    "Certificate of Participation Frontend Battle 2.0, IIT Bhubaneswar (Jun 2025)",
  ],
};

// Component for the Glitch text effect
const GlitchText = ({ text }) => {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 100); // Glitch duration
    }, 3000); // Interval between glitches
    return () => clearInterval(interval);
  }, []);

  return (
    <h1
      className={`glitch-text text-5xl md:text-7xl font-extrabold relative inline-block mb-4 uppercase tracking-wider ${glitch ? 'glitch-active' : ''} text-white`}
    >
      {text}
      <span className="glitch-layer z-10 top-0 left-0"></span>
      <span className="glitch-layer z-20 top-0 left-0"></span>
    </h1>
  );
};

// Reusable component for section headers
const SectionHeader = ({ title, icon }) => (
  <h2 className="text-3xl font-bold mb-8 text-center text-gray-100 flex items-center justify-center gap-3">
    {icon} {title}
  </h2>
);

// Reusable component for skill lists
const SkillList = ({ title, skills, icon }) => (
  <div className={`p-6 rounded-2xl shadow-md border bg-gray-800 border-gray-700`}>
    <h3 className={`font-semibold text-lg mb-4 flex items-center gap-2 text-gray-200`}>
      {icon} {title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className={`text-sm font-medium px-4 py-1.5 rounded-full border bg-purple-900 text-purple-200 border-purple-700`}
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

// Particle effect background component
const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    const particles = [];
    const numParticles = 100;
    const particleColors = ['#ff00c1', '#00ffff', '#67e8f9', '#9333ea', '#ec4899'];

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = particleColors[Math.floor(Math.random() * particleColors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap particles around the screen
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    const init = () => {
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0"></canvas>;
};


// Main App Component
const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills', 'education', 'experience', 'contact'];
      let currentSection = 'home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top <= 100) {
          currentSection = section;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainContainerClass = "bg-gray-950 text-gray-100";
  const navClass = "bg-gray-950/80 backdrop-blur-sm shadow-md";
  const projectCardClass = "bg-gray-800 border-gray-700 hover:scale-105 hover:border-cyan-400/50 transition-all duration-300";
  const projectTechClass = "bg-gray-700 text-gray-300 border-gray-600";
  const educationCardClass = "bg-gray-800 border-gray-700";
  const footerClass = "bg-gray-900 text-gray-500";
  
  return (
    <div className={`font-sans leading-relaxed transition-colors duration-500 ${mainContainerClass}`}>
      <style>
        {`
        @keyframes glitch {
          0% { transform: translate(0, 0); }
          20% { transform: translate(-5px, 5px); }
          40% { transform: translate(5px, -5px); }
          60% { transform: translate(-5px, 5px); }
          80% { transform: translate(5px, -5px); }
          100% { transform: translate(0, 0); }
        }

        .glitch-text {
          position: relative;
          color: white;
          text-shadow: -2px -2px 0px #ff00c1, 2px 2px 0px #00ffff;
        }
        
        .glitch-layer {
          content: attr(data-text);
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
        }

        .glitch-text.glitch-active::before {
          content: attr(data-text);
          position: absolute;
          left: -2px;
          text-shadow: 2px 2px 0px #ff00c1;
          animation: glitch 0.5s infinite linear alternate-reverse;
          clip-path: inset(60% 0 20% 0);
          opacity: 0.8;
        }

        .glitch-text.glitch-active::after {
          content: attr(data-text);
          position: absolute;
          left: 2px;
          text-shadow: -2px -2px 0px #00ffff;
          animation: glitch 0.5s infinite linear alternate-reverse;
          clip-path: inset(20% 0 60% 0);
          opacity: 0.8;
        }
        
        .dots-pattern {
            background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
            background-size: 20px 20px;
        }

        .hero-section {
          position: relative;
          overflow: hidden;
        }

        .hero-content {
          position: relative;
          z-index: 10;
        }
        `}
      </style>
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${navClass} rounded-b-2xl transition-all duration-300`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-pink-500 tracking-wider">
            {portfolioData.name}
          </a>
          <div className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection('home')}
              className={`font-medium transition-colors duration-300 hover:text-cyan-400 ${activeSection === 'home' ? 'text-cyan-400' : ''}`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={`font-medium transition-colors duration-300 hover:text-cyan-400 ${activeSection === 'projects' ? 'text-cyan-400' : ''}`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className={`font-medium transition-colors duration-300 hover:text-cyan-400 ${activeSection === 'skills' ? 'text-cyan-400' : ''}`}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className={`font-medium transition-colors duration-300 hover:text-cyan-400 ${activeSection === 'education' ? 'text-cyan-400' : ''}`}
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className={`font-medium transition-colors duration-300 hover:text-cyan-400 ${activeSection === 'experience' ? 'text-cyan-400' : ''}`}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`font-medium transition-colors duration-300 hover:text-cyan-400 ${activeSection === 'contact' ? 'text-cyan-400' : ''}`}
            >
              Contact
            </button>
          </div>
          {/* Mobile menu button (can be implemented later) */}
          <div className="md:hidden">
            {/* You could add a hamburger menu icon here */}
          </div>
        </div>
      </nav>

      <main className="pt-24 dots-pattern">
        {/* Home/Hero Section */}
        <section id="home" className="hero-section container mx-auto px-4 py-20 min-h-screen flex flex-col items-center justify-center text-center">
          <ParticleBackground />
          <div className="hero-content relative z-10">
            <p className="text-xl text-gray-400 mb-2 font-mono">Hello There! I am a</p>
            <GlitchText text={portfolioData.glitchTitle} />
            <p className="text-lg text-gray-300 mb-6 max-w-xl mx-auto">
              {portfolioData.professionalSummary}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-pink-700 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Github size={20} /> View GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container mx-auto px-4 py-20">
          <SectionHeader title="Projects" icon={<Code size={30} />} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl shadow-lg border transition-shadow duration-300 flex flex-col ${projectCardClass}`}
              >
                <div className="flex items-center gap-4 mb-4 text-cyan-400">
                  <Folder size={24} />
                  <h3 className={`text-xl font-bold text-gray-100`}>{project.name}</h3>
                </div>
                <p className={`text-sm mb-2 text-gray-400`}>{project.subtitle}</p>
                <p className={`mb-4 flex-grow text-gray-300`}>{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.split(',').map((tech, i) => (
                    <span
                      key={i}
                      className={`text-xs font-medium px-3 py-1 rounded-full border ${projectTechClass}`}
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto text-pink-500 hover:text-pink-400 hover:underline flex items-center gap-2 font-medium`}
                >
                  <Github size={18} /> View on GitHub
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="container mx-auto px-4 py-20">
          <SectionHeader title="Technical Skills" icon={<Layers size={30} />} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillList
              title="Languages"
              skills={portfolioData.skills.languages}
              icon={<Star size={20} className="text-yellow-400" />}
            />
            <SkillList
              title="Frameworks/Libraries"
              skills={portfolioData.skills.frameworks}
              icon={<Code size={20} className="text-blue-400" />}
            />
            <SkillList
              title="Databases/Tools"
              skills={portfolioData.skills.databases}
              icon={<Book size={20} className="text-green-400" />}
            />
             <SkillList
              title="Core Competencies"
              skills={portfolioData.skills.coreCompetencies}
              icon={<CircleCheck size={20} className="text-red-400" />}
            />
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="container mx-auto px-4 py-20">
          <SectionHeader title="Education" icon={<Book size={30} />} />
          <div className="max-w-3xl mx-auto space-y-8">
            {portfolioData.education.map((edu, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl shadow-md border flex items-start gap-6 ${educationCardClass}`}
              >
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 flex items-center justify-center rounded-full bg-purple-900 text-purple-400`}>
                    <Award size={24} />
                  </div>
                </div>
                <div>
                  <h3 className={`text-xl font-semibold text-gray-100`}>{edu.degree}</h3>
                  <p className={`font-medium text-gray-300`}>{edu.institution}</p>
                  <p className={`text-sm mt-1 text-gray-400`}>{edu.year}</p>
                  {edu.gpa && <p className={`text-sm text-gray-400`}>{edu.gpa}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="container mx-auto px-4 py-20">
          <SectionHeader title="Experience" icon={<Briefcase size={30} />} />
          <div className="max-w-3xl mx-auto space-y-8">
            {portfolioData.experience.map((exp, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl shadow-md border flex items-start gap-6 ${educationCardClass}`}
              >
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 flex items-center justify-center rounded-full bg-purple-900 text-purple-400`}>
                    <Star size={24} />
                  </div>
                </div>
                <div>
                  <h3 className={`text-xl font-semibold text-gray-100`}>{exp.title}</h3>
                  <p className={`font-medium text-gray-300`}>{exp.company}</p>
                  <p className={`text-sm mt-1 mb-2 text-gray-400`}>{exp.duration}</p>
                  <p className={`text-gray-300`}>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-4 py-20">
          <SectionHeader title="Contact" icon={<Mail size={30} />} />
          <div className="max-w-xl mx-auto text-center space-y-6">
            <p className={`text-lg text-gray-300`}>
              I'm always open to new opportunities and collaborations. Feel free to get in touch!
            </p>
            <div className="flex flex-col items-center justify-center gap-4">
              <a href={`mailto:${portfolioData.contact.email}`} className={`flex items-center gap-3 font-medium transition-colors duration-300 text-pink-500 hover:text-pink-400`}>
                <Mail size={20} /> {portfolioData.contact.email}
              </a>
              <a href={`tel:${portfolioData.contact.phone}`} className={`flex items-center gap-3 font-medium transition-colors duration-300 text-pink-500 hover:text-pink-400`}>
                <Phone size={20} /> {portfolioData.contact.phone}
              </a>
            </div>
            <div className="flex justify-center gap-6 mt-6">
              <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className={`transition-colors duration-300 text-gray-400 hover:text-pink-500`}>
                <Linkedin size={32} />
              </a>
              <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className={`transition-colors duration-300 text-gray-400 hover:text-pink-500`}>
                <Github size={32} />
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`py-6 text-center rounded-t-2xl ${footerClass}`}>
          <p>&copy; {new Date().getFullYear()} Reva Digraskar. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
