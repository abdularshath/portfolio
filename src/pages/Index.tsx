
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone, Download, ExternalLink, Menu, X, Code, Database, Globe, Cpu } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      title: "Smart Garbage Monitoring System",
      description: "IoT-based system for real-time waste management using sensors and Blynk App integration",
      tech: ["Arduino", "IoT", "Blynk", "C++", "Sensors"],
      github: "https://github.com/abdularshath",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      title: "Kovil Management System",
      description: "Complete MERN stack temple management system with user authentication and administrative features",
      tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      github: "https://github.com/abdularshath",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop"
    }
  ];

  const certifications = [
    {
      title: "Full-Stack Java",
      organization: "Infosys Springboard",
      duration: "2024",
      description: "Comprehensive Java development certification"
    },
    {
      title: "Problem Solving through Programming in C",
      organization: "NPTEL, IIT Kharagpur",
      duration: "Jan-Apr 2023",
      description: "Advanced C programming and problem-solving techniques"
    },
    {
      title: "The Joy of Computing Using Python",
      organization: "NPTEL, IIT Madras",
      duration: "Jul-Oct 2023",
      description: "Python programming fundamentals and applications"
    }
  ];

  const techStack = {
    languages: ["Java", "JavaScript", "C", "SQL", "Python"],
    tools: ["MongoDB", "Node.js", "React.js", "GitHub", "Arduino IDE", "Blynk App"],
    frameworks: ["Express.js", "Tailwind CSS", "Bootstrap"],
    databases: ["MongoDB", "MySQL"]
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AbdulArshath A
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors hover:text-blue-400 ${
                    activeSection === item.id ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-blue-400 w-full text-left"
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
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                AbdulArshath A
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
              Full-Stack Developer | IoT Enthusiast
            </h2>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Passionate Computer Science Engineering student specializing in MERN stack development 
              and innovative IoT solutions that bridge the digital and physical worlds.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 text-lg"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </Button>
              <Button 
                variant="outline" 
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 text-lg"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
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
                <div className="p-6 bg-slate-700/50 rounded-lg border border-slate-600">
                  <h4 className="text-xl font-semibold text-white">Computer Science Engineering</h4>
                  <p className="text-blue-400">K.S.Rangasamy College of Technology</p>
                  <p className="text-gray-400">CGPA: 8.82</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Passion & Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm driven by the endless possibilities of technology to solve real-world problems. 
                My expertise spans from building scalable, secure web applications using the MERN stack 
                to creating innovative IoT solutions that seamlessly integrate digital experiences with 
                physical environments.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
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
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-600 hover:border-blue-400 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="aspect-video bg-slate-700 rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">
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
                  <Button variant="outline" className="w-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
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
      <section id="experience" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <Card className="bg-slate-700/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Frontend Developer</CardTitle>
                <CardDescription className="text-blue-400 text-lg">
                  Kovil Management System • Jan-Feb 2024
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Led frontend development for a comprehensive temple management system, focusing on 
                  creating an intuitive user interface and seamless user experience.
                </p>
                <div className="space-y-2">
                  <p className="text-gray-300">• Developed responsive UI components using React.js and Tailwind CSS</p>
                  <p className="text-gray-300">• Integrated RESTful APIs for real-time data management</p>
                  <p className="text-gray-300">• Collaborated with backend developers to ensure smooth API integration</p>
                  <p className="text-gray-300">• Implemented user authentication and role-based access control</p>
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
          
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-600 hover:border-cyan-400 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-white text-lg">{cert.title}</CardTitle>
                  <CardDescription className="text-cyan-400 font-medium">
                    {cert.organization}
                  </CardDescription>
                  <p className="text-gray-400 text-sm">{cert.duration}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{cert.description}</p>
                  <Button variant="outline" className="w-full border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white">
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
      <section id="tech-stack" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Code className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Languages</h3>
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
              <h3 className="text-xl font-semibold text-white mb-4">Tools & Platforms</h3>
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
              <h3 className="text-xl font-semibold text-white mb-4">Frameworks</h3>
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
              <h3 className="text-xl font-semibold text-white mb-4">Databases</h3>
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
              <h3 className="text-2xl font-semibold mb-8 text-white">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-blue-400" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-400">abdularshath.a@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-cyan-400" />
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-gray-400">+91 9445123477</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Linkedin className="h-6 w-6 text-blue-400" />
                  <div>
                    <p className="text-white font-medium">LinkedIn</p>
                    <p className="text-gray-400">Connect with me professionally</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Github className="h-6 w-6 text-white" />
                  <div>
                    <p className="text-white font-medium">GitHub</p>
                    <p className="text-gray-400">Explore my code repositories</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-8">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button className="bg-gray-800 hover:bg-gray-700">
                  <Github className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-white">Send a Message</h3>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                    required
                  />
                </div>
                <div>
                  <Input
                    placeholder="Subject"
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 min-h-[120px]"
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
      <footer className="bg-slate-900 py-8 border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 AbdulArshath A. Built with React & Tailwind CSS.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Crafted with passion for innovation and excellence.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
