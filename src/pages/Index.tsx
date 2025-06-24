import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone, Download, ExternalLink, Menu, X, Code, Database, Globe, Cpu, Sun, Moon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { toast } = useToast();

  const navigation = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "certifications", label: "Certifications" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "contact", label: "Contact" },
  ];

  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "Modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features dark/light theme toggle, smooth animations, and responsive design showcasing projects, certifications, and skills.",
      tech: ["React.js", "TypeScript", "Tailwind CSS", "Vite", "Shadcn UI", "Lucide Icons"],
      github: "https://github.com/abdularshath/portfolio",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
    },
    {
      title: "Smart Garbage Monitoring System",
      description: "IoT-based solution that automates waste bin interaction by detecting objects and managing bin lids, integrated with Blynk App for real-time monitoring",
      tech: ["ESP32", "Ultrasonic Sensor", "IR Sensor", "Servo Motor", "Blynk App", "C++", "Arduino IDE"],
      github: "https://github.com/abdularshath/smart",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      title: "Kovil Management System",
      description: "Developed a web application to manage temple operations, including employee records, taxpayer data, stock updates, notes, and pooja schedules, with a structured backend",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "MERN Stack"],
      github: "https://github.com/abdularshath/kovil-management-system", 
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop"
    }
  ];

  const certifications = [
    {
      title: "Java Developer Certification",
      organization: "Infosys Springboard",
      duration: "November 14, 2024",
      description: "Comprehensive Java development certification",
      image: "/lovable-uploads/aaa289a9-3e2d-4935-b30a-695b2f3d1aea.png"
    },
    {
      title: "Problem Solving through Programming in C",
      organization: "NPTEL, IIT Kharagpur",
      duration: "Jan-Apr 2023",
      description: "Advanced C programming and problem-solving techniques with 55% score",
      image: "/lovable-uploads/f8739ab2-0ae7-438c-b137-80fd8cc1f640.png"
    },
    {
      title: "The Joy of Computing Using Python",
      organization: "NPTEL, IIT Madras", 
      duration: "Jul-Oct 2023",
      description: "Python programming fundamentals and applications with 55% score",
      image: "/lovable-uploads/9e5f18e3-c3ca-4d4b-8543-e66c97c54643.png"
    },
    {
      title: "Privacy and Security in Online Social Media",
      organization: "NPTEL, IIT Hyderabad & IIT Madras",
      duration: "Jan-Apr 2025",
      description: "Elite certification with 72% score in online privacy and security",
      image: "/lovable-uploads/925e0078-6edc-4772-b436-6e9cc2d61a75.png"
    }
  ];

  const techStack = {
    languages: ["Java", "JavaScript", "C", "SQL", "Python"],
    tools: ["MongoDB", "Node.js", "React.js", "GitHub", "Arduino IDE", "Blynk App", "VS Code"],
    frameworks: ["Express.js", "Tailwind CSS", "Bootstrap"],
    databases: ["MongoDB", "MySQL"]
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
  };

  const handleDownloadResume = () => {
    // Create a link to the resume image
    const link = document.createElement('a');
    link.href = '/lovable-uploads/7ff79ea3-0a15-4931-899a-ceaca55891a1.png';
    link.download = 'AbdulArshath_A_Resume.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Resume Downloaded!",
      description: "Resume has been downloaded successfully.",
    });
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const themeClasses = isDarkMode 
    ? "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
    : "min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900";

  return (
    <div className={themeClasses}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-sm border-b ${
        isDarkMode ? 'bg-slate-900/95 border-slate-700' : 'bg-white/95 border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AbdulArshath A
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 items-center">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors hover:text-blue-400 ${
                    activeSection === item.id ? 'text-blue-400 border-b-2 border-blue-400' : 
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={toggleTheme}
                className={`ml-4 ${isDarkMode ? 'border-slate-600 hover:bg-slate-700' : 'border-gray-300 hover:bg-gray-100'}`}
              >
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleTheme}
                className={isDarkMode ? 'border-slate-600 hover:bg-slate-700' : 'border-gray-300 hover:bg-gray-100'}
              >
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <button
                className="p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden border-t ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 text-base font-medium hover:text-blue-400 w-full text-left ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="animate-fade-in grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  AbdulArshath A
                </span>
              </h1>
              <h2 className={`text-xl md:text-2xl mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Full-Stack Developer | IoT Enthusiast
              </h2>
              <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Engineering student passionate about full-stack web development, with a strong foundation in React.js, Node.js, 
                and MongoDB. Skilled in developing scalable and secure web applications, and experienced in IoT projects and 
                collaborative development through academic and consultancy projects.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
                  onClick={handleDownloadResume}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
                <Button 
                  variant="outline" 
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-3"
                  onClick={() => scrollToSection('projects')}
                >
                  View Projects
                </Button>
                <Button 
                  variant="outline" 
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-6 py-3"
                  onClick={() => scrollToSection('contact')}
                >
                  Contact Me
                </Button>
              </div>
            </div>
            
            {/* Profile Image */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-cyan-400 shadow-2xl">
                  <img 
                    src="/lovable-uploads/e09ed682-b5c5-4edd-b673-5c5081d5fd19.png" 
                    alt="AbdulArshath A - Professional Photo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${isDarkMode ? 'bg-slate-800/50' : 'bg-gray-50/50'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Education & Background</h3>
              <div className="space-y-4">
                <div className={`p-6 rounded-lg border ${
                  isDarkMode ? 'bg-slate-700/50 border-slate-600' : 'bg-white border-gray-200 shadow-sm'
                }`}>
                  <h4 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Computer Science Engineering
                  </h4>
                  <p className="text-blue-400">K.S.Rangasamy College of Technology, Tiruchengode</p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    2022 - 2026 | CGPA: 8.82/10
                  </p>
                  <p className={`text-sm mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Location: Gobichettipalayam, Tamil Nadu - 638452
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Passion & Vision</h3>
              <p className={`text-lg leading-relaxed mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm driven by the endless possibilities of technology to solve real-world problems. 
                My expertise spans from building scalable, secure web applications using the MERN stack 
                to creating innovative IoT solutions that seamlessly integrate digital experiences with 
                physical environments.
              </p>
              <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Every project I undertake is an opportunity to push boundaries, learn something new, 
                and create meaningful impact through clean, efficient code and thoughtful design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className={`border hover:scale-105 transition-all duration-300 ${
                isDarkMode ? 'bg-slate-800/50 border-slate-600 hover:border-blue-400' : 'bg-white border-gray-200 hover:border-blue-400 shadow-lg'
              }`}>
                <CardHeader>
                  <div className={`aspect-video rounded-lg mb-4 overflow-hidden ${
                    isDarkMode ? 'bg-slate-700' : 'bg-gray-100'
                  }`}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className={`text-xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </CardTitle>
                  <CardDescription className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-blue-600/20 text-blue-400">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 ${isDarkMode ? 'bg-slate-800/50' : 'bg-gray-50/50'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <Card className={`${
              isDarkMode ? 'bg-slate-700/50 border-slate-600' : 'bg-white border-gray-200 shadow-lg'
            }`}>
              <CardHeader>
                <CardTitle className={`text-2xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Frontend Developer
                </CardTitle>
                <CardDescription className="text-blue-400 text-lg">
                  Kovil Management System • Jan-Feb 2024 (6 weeks)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Contributed to the frontend development of a MERN stack web application built for managing temple 
                  operations, including employee records, taxpayer data, stock updates.
                </p>
                <div className="space-y-2">
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    • Developed responsive user interfaces using React.js, Tailwind CSS, focusing on usability and seamless navigation
                  </p>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    • Collaborated with backend developers to integrate frontend components with APIs and ensure smooth data flow
                  </p>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    • Implemented user authentication and role-based access control
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["React.js", "Tailwind CSS", "API Integration", "Team Collaboration"].map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-cyan-600/20 text-cyan-400">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Certifications 🏆
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className={`border hover:scale-105 transition-all duration-300 ${
                isDarkMode ? 'bg-slate-800/50 border-slate-600 hover:border-cyan-400' : 'bg-white border-gray-200 hover:border-cyan-400 shadow-lg'
              }`}>
                <CardHeader>
                  <div className={`aspect-video rounded-lg mb-4 overflow-hidden ${
                    isDarkMode ? 'bg-slate-700' : 'bg-gray-100'
                  }`}>
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-full object-contain bg-white"
                    />
                  </div>
                  <CardTitle className={`text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {cert.title}
                  </CardTitle>
                  <CardDescription className="text-cyan-400 font-medium">
                    {cert.organization}
                  </CardDescription>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {cert.duration}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {cert.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white"
                    onClick={() => window.open(cert.image, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Certificate
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className={`py-20 ${isDarkMode ? 'bg-slate-800/50' : 'bg-gray-50/50'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Code className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Languages
              </h3>
              <div className="space-y-2">
                {techStack.languages.map((lang, index) => (
                  <Badge key={index} variant="secondary" className="bg-blue-600/20 text-blue-400 block w-full">
                    {lang}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <Database className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Tools & Platforms
              </h3>
              <div className="space-y-2">
                {techStack.tools.map((tool, index) => (
                  <Badge key={index} variant="secondary" className="bg-cyan-600/20 text-cyan-400 block w-full">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <Globe className="h-12 w-12 text-teal-400 mx-auto mb-4" />
              <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Frameworks
              </h3>
              <div className="space-y-2">
                {techStack.frameworks.map((framework, index) => (
                  <Badge key={index} variant="secondary" className="bg-teal-600/20 text-teal-400 block w-full">
                    {framework}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <Cpu className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Databases
              </h3>
              <div className="space-y-2">
                {techStack.databases.map((db, index) => (
                  <Badge key={index} variant="secondary" className="bg-purple-600/20 text-purple-400 block w-full">
                    {db}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className={`text-2xl font-semibold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-blue-400" />
                  <div>
                    <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Email</p>
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>abdularshath.a@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-cyan-400" />
                  <div>
                    <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Phone</p>
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>+91 9445123477</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Linkedin className="h-6 w-6 text-blue-400" />
                  <div>
                    <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>LinkedIn</p>
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                      linkedin.com/in/abdul-arshath-a-9a3031259
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Github className="h-6 w-6 text-white" />
                  <div>
                    <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>GitHub</p>
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                      github.com/abdularshath
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-8">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.open('https://linkedin.com/in/abdul-arshath-a-9a3031259', '_blank')}
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button 
                  className="bg-gray-800 hover:bg-gray-700"
                  onClick={() => window.open('https://github.com/abdularshath', '_blank')}
                >
                  <Github className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className={`text-2xl font-semibold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Send a Message
              </h3>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    className={`${
                      isDarkMode 
                        ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className={`${
                      isDarkMode 
                        ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    required
                  />
                </div>
                <div>
                  <Input
                    placeholder="Subject"
                    className={`${
                      isDarkMode 
                        ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    className={`min-h-[120px] ${
                      isDarkMode 
                        ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 border-t ${
        isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-gray-50 border-gray-200'
      }`}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
            © 2024 AbdulArshath A. Built with React & Tailwind CSS.
          </p>
          <p className={`text-sm mt-2 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            Crafted with passion for innovation and excellence.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
