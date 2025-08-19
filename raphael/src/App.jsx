import React, { useState } from 'react';
import { Home, Palette, Briefcase, Users, Mail, Instagram, Facebook, Twitter, Phone, X } from 'lucide-react';

// Updated: ContactModal component to show phone numbers
const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-sm relative text-center">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <X size={24} />
        </button>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h3>
        <p className="text-gray-600 mb-6">
          Call us now for a free consultation.
        </p>
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

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: <Home className="w-4 h-4" /> },
    { name: 'Services', icon: <Palette className="w-4 h-4" /> },
    { name: 'Portfolio', icon: <Briefcase className="w-4 h-4" /> },
    { name: 'Testimonials', icon: <Users className="w-4 h-4" /> },
    { name: 'Contact', icon: <Mail className="w-4 h-4" /> },
  ];

  const services = [
    {
      title: 'Residential Design',
      description: 'Creating beautiful, functional living spaces that reflect your personal style and needs. From single rooms to entire homes.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1080&q=80',
    },
    {
      title: 'Commercial Spaces',
      description: 'Designing professional and welcoming environments that enhance productivity and align with your brand identity.',
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1080&q=80',
    },
    {
      title: 'Renovation & Remodel',
      description: 'Revitalizing existing spaces with a fresh perspective. We handle everything from concept to completion.',
      image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1080&q=80',
    },
  ];

  const projects = [
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1080&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUyODJ8MHwxfHNlYXJjaHwxNnx8a2l0Y2hlbiUyMGRlc2lnbnxlbnwwfHx8fDE3MDI2NjY1MDl8MA&ixlib=rb-4.0.3&q=80&w=1080',
    'https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=1080&q=80',
  ];

  const testimonials = [
    {
      quote: 'Our home has been completely transformed! The attention to detail and creative vision were simply incredible. We couldn\'t be happier with the result.',
      author: 'Arun rai',
    },
    {
      quote: 'Working with this team was a fantastic experience. They listened to our needs and delivered a beautiful and functional design for our new office.',
      author: 'Sumita awana',
    },
    {
      quote: 'Professional, reliable, and exceptionally talented. They made the renovation process smooth and enjoyable. Highly recommended!',
      author: 'Pradeep kumar sharma',
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white text-gray-800 font-sans antialiased">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            <img
                            src="/imaglogo.jpg"
                            alt="House of raphael"
                            className='h-10 w-auto mr-3'
                        />
            <a href="#home"> House of Raphael</a>
          </h1>
          <nav className="hidden md:flex space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <a key={item.name} href={`#${item.name.toLowerCase()}`} className="text-gray-600 hover:text-indigo-600 transition duration-300 flex items-center">
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
              <a
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                onClick={toggleMenu}
                className="text-gray-600 hover:text-indigo-600 transition duration-300 flex items-center"
              >
                {item.icon}
                <span className="ml-2 text-lg font-medium">{item.name}</span>
              </a>
            ))}
          </nav>
        </div>
      </header>
      {/* Main Content */}
      <main className="mt-20">
        {/* Hero Section */}
        <section id="home" className="relative h-[80vh] flex items-center justify-center text-white text-center p-4" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in">
              Design Your Dream Space
            </h2>
            <p className="text-lg md:text-xl font-light mb-8 animate-fade-in delay-100">
              We bring your vision to life with passion, creativity, and precision.
            </p>
            <button onClick={openModal} className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105">
              Get a Free Consultation
            </button>
          </div>
        </section>
        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-4">Our Services</h3>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
              From initial concept to final touches, we offer a comprehensive range of design services tailored to your needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                  <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Portfolio Section */}
        <section id="portfolio" className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-4">Our Recent Projects</h3>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
              A look at some of our recent work. We believe every project tells a unique story.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
                  <img src={project} alt={`Project ${index + 1}`} className="w-full h-64 object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-4">What Our Clients Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-indigo-500">
                  <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold text-indigo-600">- {testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Contact CTA */}
        <section className="py-20 bg-indigo-600 text-white text-center">
          <div className="container mx-auto px-4">
            <h3 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-lg mb-8">
              Let's create something beautiful together.
            </p>
            <a href="#contact" className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105">
              Contact Us
            </a>
          </div>
        </section>
      </main>
      {/* New: Render the modal conditionally */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
      {/* Footer */}
      <footer id="contact" className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 className="text-lg font-semibold mb-4">Raphael</h4>
            <p className="text-gray-400">
              Transforming spaces, one design at a time.
            </p>
            <span> 517 Tower B , Bhutani AlphaThumbB sec90 noida </span></div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center justify-center md:justify-start">
                <Phone className="w-4 h-4 mr-2" />
                <span>9871895943 ,
                  7870259474 ,
                  7836098748
                </span>
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
        <div className="mt-8 text-center text-gray-500 text-sm">
          &copy; 2024 Raphael. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;