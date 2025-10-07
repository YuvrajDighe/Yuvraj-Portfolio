import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Download, Code, Database, Server, Globe, ChevronDown, Menu, X } from 'lucide-react';
import Logo from '/src/assets/image.jpg';
import Logo2 from '/src/assets/shared.jpg';
import Logo3 from '/src/assets/Mysore.jpg';
import Logo4 from '/src/assets/Savitribai.jpg';
import Logo5 from '/src/assets/Savitribaii.jpg';
import emailjs from "emailjs-com";
import { useRef } from 'react';
const Portfolio = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1w0lt7s",
        "template_wh4x0z3",
        form.current,
        "UoNaOI6Rj5ge737hC"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          e.target.reset(); // Form clear
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
        }
      );
  }


  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'education', 'projects', 'experience', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const skills = {
    frontend: ['React', 'Angular', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
    backend: ['Learning a Node.js'],
    database: ['MongoDB', 'PostgreSQL', 'Firebase'],
    tools: ['Git', 'GitHub', 'VS Code', 'Wix Studio', 'Postman']
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React frontend and Node.js backend",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop"
    },
    {
      title: "Learning Management System",
      description: "LMS (Learning Management System) is a platform to create, manage, and deliver online courses while tracking learner progress and performance.",
      tech: ["React", "Firebase", "Material-UI", "JavaScript"],
      github: "https://github.com/YuvrajDighe/LMS",
      live: "https://yuvraj-dighe-lms.vercel.app/",
      image: "https://apnasite.in/api/download/apnasite.in/Kalpesh/01-a-browser-with-the-word-%E2%80%9CLMS%E2%80%9D.jpg"
    },
    {
      title: "TEK-TURE",
      description: "TEK-TURE is a modern tech initiative focused on delivering innovative digital solutions, combining technology and structure to create smart, scalable, and user-centric products.",
      tech: ["Wix Studio"],
      github: "#",
      live: "https://digheyuvraj2004.wixstudio.com/exam",
      image: "https://static.wixstatic.com/media/11062b_da78e7297d324d7ca36fd38de4bcf64d~mv2.jpg/v1/fill/w_716,h_844,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_da78e7297d324d7ca36fd38de4bcf64d~mv2.jpg"
    }
  ];

  const experiences = [
    {
      company: "The Baap Company",
      position: "Frontend Developer",
      period: "2023 - Present",
      description: "Developed responsive web applications using React and modern JavaScript frameworks"
    },
    {
      company: "The Baap Company",
      position: "Web Developer Intern",
      period: "2022 - 2023",
      description: "Created dynamic websites and collaborated on various client projects"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              <i>Yuvraj</i>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-6 xl:space-x-10">
              {['Home', 'About', 'Skills', 'Education', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-blue-400 transition-colors text-sm xl:text-base ${activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-300'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 space-y-2">
              {['Home', 'About', 'Skills', 'Education', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left py-2 px-2 rounded hover:bg-gray-800 transition-colors ${activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-300'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-24 sm:pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="mb-8">
            <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1 mb-6">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
                <img src={Logo} alt="Logo" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
            Yuvraj Dighe
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8">
            Frontend Developer & UI/UX Enthusiast
          </p>
          <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Passionate about creating beautiful, functional web applications that solve real-world problems.
            Specializing in React, Angular, and modern web technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
            >
              View My Work
            </button>
            <a
              href="/yuvraj_dighe_resume.pdf"
              download="Yuvraj_Resume.pdf"
            >
              <button className="px-8 py-3 border border-gray-600 rounded-lg hover:border-gray-400 transition-colors flex items-center justify-center gap-2">
                <Download size={20} />
                Download Resume
              </button>
            </a>

          </div>

          <div className="flex justify-center space-x-6 mt-8 sm:mt-12">
            <a href="https://github.com/YuvrajDighe" className="text-gray-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/yuvraj-dighe-64807728a/" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
            <ChevronDown size={32} className="text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-400">My Journey</h3>
                <p className="text-gray-300 mb-4 text-sm sm:text-base">
                  I'm a passionate Front-end developer with 2+ years of experience in creating
                  modern web applications. I love turning complex problems into simple,
                  beautiful designs.
                </p>
                <p className="text-gray-300 mb-6 text-sm sm:text-base">
                  My expertise lies in JavaScript ecosystems, particularly React and Node.js,
                  but I'm always eager to learn new technologies and take on challenging projects.
                </p>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-gray-700 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-400">1+</div>
                    <div className="text-gray-300 text-sm sm:text-base">Projects</div>
                  </div>
                  <div className="bg-gray-700 rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-400">1+</div>
                    <div className="text-gray-300 text-sm sm:text-base">Years Experience</div>
                  </div>
                </div>
              </div>
              <div className="text-center order-1 md:order-2">
                <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
                    <img src={Logo2} alt="Logo2" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Skills & Technologies</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-gray-800 rounded-lg p-4 sm:p-6 hover:bg-gray-700 transition-colors">
              <div className="flex items-center mb-4">
                <Globe className="text-blue-400 mr-3" size={28} />
                <h3 className="text-lg sm:text-xl font-semibold">Frontend</h3>
              </div>
              <div className="space-y-2">
                {skills.frontend.map((skill, index) => (
                  <div key={index} className="text-gray-300 text-sm sm:text-base">{skill}</div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-4 sm:p-6 hover:bg-gray-700 transition-colors">
              <div className="flex items-center mb-4">
                <Server className="text-green-400 mr-3" size={28} />
                <h3 className="text-lg sm:text-xl font-semibold">Backend</h3>
              </div>
              <div className="space-y-2">
                {skills.backend.map((skill, index) => (
                  <div key={index} className="text-gray-300 text-sm sm:text-base">{skill}</div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-4 sm:p-6 hover:bg-gray-700 transition-colors">
              <div className="flex items-center mb-4">
                <Database className="text-purple-400 mr-3" size={28} />
                <h3 className="text-lg sm:text-xl font-semibold">Database</h3>
              </div>
              <div className="space-y-2">
                {skills.database.map((skill, index) => (
                  <div key={index} className="text-gray-300 text-sm sm:text-base">{skill}</div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-4 sm:p-6 hover:bg-gray-700 transition-colors">
              <div className="flex items-center mb-4">
                <Code className="text-orange-400 mr-3" size={28} />
                <h3 className="text-lg sm:text-xl font-semibold">Tools</h3>
              </div>
              <div className="space-y-2">
                {skills.tools.map((skill, index) => (
                  <div key={index} className="text-gray-300 text-sm sm:text-base">{skill}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-12 sm:py-16 lg:py-20 bg-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Education</h2>

          <div className="flex flex-wrap justify-center gap-6">
            {/* Education Card 1 */}
            <div className="bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg w-full sm:w-[300px] lg:w-[350px] text-center hover:scale-105 transition-transform duration-300">
              <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full border-2 border-blue-400 mb-4 bg-gray-700 flex items-center justify-center">
                <img src={Logo3} alt="Logo3" className="w-full h-full object-cover" />
              </div>
              <h2 className="text-lg sm:text-xl font-semibold text-blue-400 mb-1">
                Bachelor of Computer Applications - BCA
              </h2>
              <p className="text-gray-300 mb-1 text-sm sm:text-base">University of Mysore</p>
              <p className="text-gray-400 text-xs sm:text-sm">2022 - 2025</p>
              <p className="text-gray-300 mb-4 mt-5 text-sm sm:text-base">
                Completed BCA with a strong foundation in data structures, databases, and web development.
                Built multiple academic projects including a Task Management System (React + Node.js),
                Student Result Portal using PHP and MySQL, and a Portfolio Website using React.js and Tailwind CSS.
              </p>
            </div>

            {/* Education Card 2 */}
            <div className="bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg w-full sm:w-[350px] lg:w-[400px] text-center 
                hover:scale-105 transition-transform duration-300">
              <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full border-2 border-green-400 mb-4 bg-gray-700 flex items-center justify-center">
                <img src={Logo4} alt="Logo4" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-green-400 mb-7">
                Higher Secondary Education - HSC
              </h3>
              <p className="text-gray-300 mb-1 text-sm sm:text-base">Savitribai Phule Pune University</p>
              <p className="text-gray-400 text-xs sm:text-sm">2021 - 2022</p>
              <p className="text-gray-300 mb-4 mt-5 text-sm sm:text-base">
                Completed HSC in Commerce stream with core subjects including Accountancy, Economics,
                Organization of Commerce, and Secretarial Practice. Also studied Information Technology,
                gaining basic skills in programming, office tools, and computer applications.
              </p>
            </div>

            {/* Education Card 3 */}
            <div className="bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg w-full sm:w-[350px] lg:w-[400px] text-center hover:scale-105 transition-transform duration-300">
              <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full border-2 border-purple-400 mb-4 bg-gray-700 flex items-center justify-center">
                <img src={Logo5} alt="Logo5" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-purple-400 mb-7">
                Secondary School Certification – SSC
              </h3>
              <p className="text-gray-300 mb-1 text-sm sm:text-base">Savitribai Phule Pune University</p>
              <p className="text-gray-400 text-xs sm:text-sm">2019 - 2020</p>
              <p className="text-gray-300 mb-4 mt-5 text-sm sm:text-base">
                Completed SSC with subjects like Mathematics, Science, English, and Social Studies.
                Developed a strong academic base and initial interest in technology and computing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Featured Projects</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm sm:text-base">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 sm:px-3 py-1 bg-gray-700 rounded-full text-xs sm:text-sm text-blue-400">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 text-sm sm:text-base">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <Github size={18} />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Experience</h2>

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="flex items-start gap-4 mb-8 last:mb-0">
                <div className="flex-shrink-0 w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full mt-6"></div>
                <div className="bg-gray-800 rounded-lg p-4 sm:p-6 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-lg sm:text-xl font-semibold">{exp.position}</h3>
                    <span className="text-blue-400 text-xs sm:text-sm mt-1 sm:mt-0">{exp.period}</span>
                  </div>
                  <h4 className="text-gray-300 font-medium mb-2 text-sm sm:text-base">{exp.company}</h4>
                  <p className="text-gray-400 text-sm sm:text-base">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
     
      <section id="contact" className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
            Get In Touch
          </h2>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left info section */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-blue-400">
                Let's Work Together
              </h3>
              <div>
              <p className="text-gray-300 mb-8 text-sm sm:text-base">
                I'm always interested in new opportunities and exciting projects.
                Feel free to reach out!
              </p>
            </div>

            
                 <div className="space-y-4">
                   <div className="flex items-center gap-4">
                     <Mail className="text-blue-400" size={24} />
                     <span>digheyuvraj2004@email.com</span>
                   </div>
                   <div className="flex items-center gap-4">
                     <Phone className="text-green-400" size={24} />
                     <span>+91 9767192303</span>
                   </div>
                   <div className="flex items-center gap-4">
                     <MapPin className="text-red-400" size={24} />
                     <span>Sangamner, Maharashtra, India</span>
                   </div>
                 </div>
               </div>

            {/* Contact Form */}
            <div className="bg-gray-800 rounded-lg p-4 sm:p-6">
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:border-blue-400 focus:outline-none transition-colors text-sm sm:text-base"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:border-blue-400 focus:outline-none transition-colors text-sm sm:text-base"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:border-blue-400 focus:outline-none transition-colors resize-none text-sm sm:text-base"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg py-3 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold text-sm sm:text-base"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-gray-300 py-8 sm:py-10 border-t border-gray-800 bg-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
          {/* Left Section */}
          <div className="text-center md:text-left max-w-sm">
            <h1 className="text-2xl sm:text-3xl font-signature">
              <span className="italic font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Yuvraj</span>
            </h1>
            <p className="mt-3 text-gray-400 leading-relaxed text-sm sm:text-base">
              I am a Frontend Developer from Maharashtra, India,
              with experience in building modern web applications.
            </p>
          </div>

          {/* Right Section - Subscribe */}
          <div className="flex flex-col sm:flex-row items-center gap-2 w-full md:w-auto">
            <div className="flex items-center bg-gray-800 rounded-full px-4 py-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent outline-none text-gray-300 placeholder-gray-500 w-full sm:w-48 text-sm sm:text-base"
              />
            </div>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full px-5 py-2 transition-transform transform hover:scale-105 w-full sm:w-auto text-sm sm:text-base">
              Subscribe
            </button>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        {/* Bottom Links */}
        <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-gray-400 gap-4">
          <p className="text-center md:text-left">© 2025 Yuvraj Dighe. All rights reserved.</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Connect with Me</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;