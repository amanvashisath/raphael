import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { Home, Palette, Briefcase, Users, Mail, Instagram, Facebook, Twitter, Phone, X } from 'lucide-react';

// Simulated API data
const API_DATA = {
  services: [
    {
      id: 1,
      title: 'Residential Design',
      description: 'Creating beautiful, functional living spaces that reflect your personal style and needs. From single rooms to entire homes.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1080&q=80',
    },
    {
      id: 2,
      title: 'Commercial Spaces',
      description: 'Designing professional and welcoming environments that enhance productivity and align with your brand identity.',
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1080&q=80',
    },
    {
      id: 3,
      title: 'Renovation & Remodel',
      description: 'Revitalizing existing spaces with a fresh perspective. We handle everything from concept to completion.',
      image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1080&q=80',
    },
  ],
  projects: [
    {
      id: 1,
      title: 'Minimalist Kitchen Remodel',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1080&q=80',
      description: 'A sleek and modern kitchen featuring clean lines, smart storage solutions, and a neutral color palette to create a spacious feel.',
    },
    {
      id: 2,
      title: 'Modern Living Room',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUyODJ8MHwxfHNlYXJjaHwxNnx8a2l0Y2hlbiUyMGRlc2lnbnxlbnwwfHx8fDE3MDI2NjY1MDl8MA&ixlib=rb-4.0.3&q=80&w=1080',
      description: 'An inviting living room designed for comfort and style. The design incorporates natural light and textures to create a warm atmosphere.',
    },
    {
      id: 3,
      title: 'Contemporary Office Space',
      image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=1080&q=80',
      description: 'A productive and inspiring office environment with ergonomic furniture, a well-lit layout, and a focus on collaboration and creativity.',
    },
  ],
  testimonials: [
    {
      id: 1,
      quote: 'Our home has been completely transformed! The attention to detail and creative vision were simply incredible. We couldn\'t be happier with the result.',
      author: 'Arun rai',
    },
    {
      id: 2,
      quote: 'Working with this team was a fantastic experience. They listened to our needs and delivered a beautiful and functional design for our new office.',
      author: 'Sumita awana',
    },
    {
      id: 3,
      quote: 'Professional, reliable, and exceptionally talented. They made the renovation process smooth and enjoyable. Highly recommended!',
      author: 'Pradeep kumar sharma',
    },
  ],
};

const fetchData = (type) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (API_DATA[type]) {
        resolve(API_DATA[type]);
      } else {
        reject(new Error(`Data for type ${type} not found.`));
      }
    }, 1000); // Simulate network delay
  });
};

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-sm relative text-center">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <X size={24} />
        </button>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h3>
        <p className="text-gray-600 mb-6">Call us now for a free consultation.</p>
        <div className="space-y-4">
          <a href="tel:9871895943" className="block text-xl font-semibold text-indigo-600 hover:underline">
            <span className="flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" /> 9871895943
            </span>
          </a>
          <a href="tel:7870259474" className="block text-xl font-semibold text-indigo-600 hover:underline">
            <span className="flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" /> 7870259474
            </span>
          </a>
          <a href="tel:7836098748" className="block text-xl font-semibold text-indigo-600 hover:underline">
            <span className="flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" /> 7836098748
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

const Navbar = ({ toggleMenu, isMenuOpen }) => {
  const navItems = [
    { name: 'Home', icon: <Home className="w-4 h-4" />, href: '/' },
    { name: 'Services', icon: <Palette className="w-4 h-4" />, href: '/#services' },
    { name: 'Portfolio', icon: <Briefcase className="w-4 h-4" />, href: '/#portfolio' },
    { name: 'Testimonials', icon: <Users className="w-4 h-4" />, href: '/#testimonials' },
    { name: 'Contact', icon: <Mail className="w-4 h-4" />, href: '/#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center">
          <Link to="/">
            <img src="/imaglogo.jpg" alt="House of Raphael" className='h-10 w-auto mr-3' />
          </Link>
          <Link to="/">House of Raphael</Link>
        </h1>
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-600 hover:text-indigo-600 transition duration-300 flex items-center">
              {item.icon}
              <span className="ml-1">{item.name}</span>
            </a>
          ))}
        </nav>
        <button onClick={toggleMenu} className="md:hidden text-gray-600 hover:text-indigo-600 transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <nav className="flex flex-col items-center space-y-4 py-4 bg-white shadow-lg">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} onClick={toggleMenu} className="text-gray-600 hover:text-indigo-600 transition duration-300 flex items-center">
              {item.icon}
              <span className="ml-2 text-lg font-medium">{item.name}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

const HomeSection = ({ openModal }) => {
  const [services, setServices] = useState([]);
  const [servicesLoading, setServicesLoading] = useState(true);
  const [servicesError, setServicesError] = useState(null);

  const [projects, setProjects] = useState([]);
  const [projectsLoading, setProjectsLoading] = useState(true);
  const [projectsError, setProjectsError] = useState(null);

  const [testimonials, setTestimonials] = useState([]);
  const [testimonialsLoading, setTestimonialsLoading] = useState(true);
  const [testimonialsError, setTestimonialsError] = useState(null);

  useEffect(() => {
    // Fetch services
    fetchData('services')
      .then(data => {
        setServices(data);
        setServicesLoading(false);
      })
      .catch(error => {
        setServicesError(error.message);
        setServicesLoading(false);
      });

    // Fetch projects
    fetchData('projects')
      .then(data => {
        setProjects(data);
        setProjectsLoading(false);
      })
      .catch(error => {
        setProjectsError(error.message);
        setProjectsLoading(false);
      });

    // Fetch testimonials
    fetchData('testimonials')
      .then(data => {
        setTestimonials(data);
        setTestimonialsLoading(false);
      })
      .catch(error => {
        setTestimonialsError(error.message);
        setTestimonialsLoading(false);
      });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative h-[80vh] flex items-center justify-center text-white text-center p-4" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in">Design Your Dream Space</h2>
          <p className="text-lg md:text-xl font-light mb-8 animate-fade-in delay-100">We bring your vision to life with passion, creativity, and precision.</p>
          <button onClick={openModal} className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105">
            Get a Free Consultation
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Our Services</h3>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">From initial concept to final touches, we offer a comprehensive range of design services tailored to your needs.</p>
          {servicesLoading && <p>Loading services...</p>}
          {servicesError && <p className="text-red-500">Error: {servicesError}</p>}
          {!servicesLoading && !servicesError && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                  <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Our Recent Projects</h3>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">A look at some of our recent work. We believe every project tells a unique story.</p>
          {projectsLoading && <p>Loading projects...</p>}
          {projectsError && <p className="text-red-500">Error: {projectsError}</p>}
          {!projectsLoading && !projectsError && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Link to={`/portfolio/${project.id}`} key={project.id} className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 block">
                  <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">What Our Clients Say</h3>
          {testimonialsLoading && <p>Loading testimonials...</p>}
          {testimonialsError && <p className="text-red-500">Error: {testimonialsError}</p>}
          {!testimonialsLoading && !testimonialsError && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-indigo-500">
                  <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold text-indigo-600">- {testimonial.author}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-indigo-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-lg mb-8">Let's create something beautiful together.</p>
          <a href="#contact" className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105">
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
};

// New component for individual project details
const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchData('projects')
      .then(data => {
        const foundProject = data.find(p => p.id === parseInt(id));
        if (foundProject) {
          setProject(foundProject);
          setError(null);
        } else {
          setError('Project not found.');
        }
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center py-20">Loading project details...</div>;
  if (error) return <div className="text-center py-20 text-red-500">Error: {error}</div>;
  if (!project) return null;

  return (
    <div className="container mx-auto px-4 py-20 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Link to="/#portfolio" className="text-indigo-600 hover:underline mb-8 block">&larr; Back to Portfolio</Link>
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <img src={project.image} alt={project.title} className="w-full h-96 object-cover rounded-xl shadow-lg mb-8" />
        <p className="text-lg text-gray-700 leading-relaxed">{project.description}</p>
      </div>
    </div>
  );
};

const Footer = () => (
  <footer id="contact" className="bg-gray-800 text-white py-12">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
      <div>
        <h4 className="text-lg font-semibold mb-4">Raphael</h4>
        <p className="text-gray-400">Transforming spaces, one design at a time.</p>
        <span>517 Tower B , Bhutani AlphaThumbB sec90 noida</span>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-4">Contact</h4>
        <ul className="space-y-2 text-gray-400">
          <li className="flex items-center justify-center md:justify-start">
            <Phone className="w-4 h-4 mr-2" />
            <span>9871895943, 7870259474, 7836098748</span>
          </li>
          <li className="flex items-center justify-center md:justify-start">
            <Mail className="w-4 h-4 mr-2" />
            <span>info.raphaelinterio@gmail.com</span>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
        <div className="flex justify-center md:justify-start space-x-4">
          <a href="https://www.instagram.com/_houseofraphael_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-gray-400 hover:text-white transition duration-300">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <Twitter className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
    <div className="mt-8 text-center text-gray-500 text-sm">&copy; 2024 Raphael. All rights reserved.</div>
  </footer>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Router>
      <div className="bg-white text-gray-800 font-sans antialiased">
        <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        <main className="mt-20">
          <Routes>
            <Route path="/" element={<HomeSection openModal={openModal} />} />
            <Route path="/portfolio/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
        <ContactModal isOpen={isModalOpen} onClose={closeModal} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
