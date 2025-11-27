import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Brain,
  Cloud,
  Shield,
  BarChart3,
  Notebook as Robot,
  Code,
  Lightbulb,
  Mail,
  MessageCircle,
  Headphones,
  Heart,
  CheckCircle,
  Linkedin,
  Instagram,
  ExternalLink,
} from "lucide-react";
import alphakoreImage from "./assets/images/alphakore.png";
import hitarthImage from "./assets/images/hitarth.jpg";
import parthImage from "./assets/images/parth.jpg";
import petAiImage from "./assets/images/petai.png";
import synthAiImage from "./assets/images/Synth.png";
import lazycookImage from "./assets/images/lazycook.png";
import rajImage from "./assets/images/raj.jpg";
import shlokImage from "./assets/images/shlok.jpg";
import suhaniImage from "./assets/images/suhani.jpg";
import harshImage from "./assets/images/harsh.jpg";
import manavImage from "./assets/images/manav.jpg";
import pranavImage from "./assets/images/pranav.jpg";
import jiyaImage from "./assets/images/jiya.jpg";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [enlargedPhoto, setEnlargedPhoto] = useState<string | null>(null);

  const openPhoto = (image: string) => {
    setEnlargedPhoto(image);
  };

  const closePhoto = () => {
    setEnlargedPhoto(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "recent-works",
        "community",
        "features",
        "services",
        "docs",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const teamMembers = [
    {
      name: "Hitarth",
      image: hitarthImage,
      linkedin: "https://www.linkedin.com/in/hitarth-trivedi-ba1986300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      instagram: "https://www.instagram.com/htrivedi_?igsh=MWN3YzIya3I0NnZibg%3D%3D&utm_source=qr",
      portfolio: "https://github.com/HitarthTrivedi",
    },
    {
      name: "Parth",
      image: parthImage,
      linkedin: "https://linkedin.com/in/parth",
      instagram: "https://www.instagram.com/parth_soni3010",
      portfolio: "https://parth-soni.vercel.app",
    },
    {
      name: "Shlok",
      image: shlokImage,
      linkedin: "https://www.linkedin.com/in/shlok-patel-051b162b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      instagram: "https://www.instagram.com/shlok_1125?igsh=MWczbTdneXY5cTk3eQ%3D%3D&utm_source=qr",
      portfolio: "https://shlok-portfolio.com",
    },
    {
      name: "Suhani",
      image: suhaniImage,
      linkedin: "https://linkedin.com/in/suhani",
      instagram: "https://www.instagram.com/suhanipatel__16",
      portfolio: "https://suhani-portfolio.com",
    },
    {
      name: "Raj",
      image: rajImage,
      linkedin: "https://www.linkedin.com/in/raj-shah-a73926265/",
      instagram: "https://www.instagram.com/rajshah103",
      portfolio: "https://github.com/Raj-Shah10",
    },
    {
      name: "Harsh",
      image: harshImage,
      linkedin: "http://www.linkedin.com/in/harsh8818198",
      instagram: "https://www.instagram.com/0_8818198?igsh=MTE3NW5md2h0NG9zOQ%3D%3D&utm_source=qr",
      portfolio: "https://harsh8818198portfolio.netlify.app/",
    },
    {
      name: "Manav",
      image: manavImage,
      linkedin: "http://www.linkedin.com/in/manav-patel-4930132a6",
      instagram: "",
      portfolio: "",
    },
    {
      name: "Pranav",
      image: pranavImage,
      linkedin: "https://www.linkedin.com/in/pranav-gohil-68934035a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/pranav_gohil_1308?igsh=ZmpmdWkwdm02NWlh",
      portfolio: "",
    },
    { 
      name: "Jiya", 
      image: jiyaImage,
      linkedin: "https://www.linkedin.com/in/jiya-bhadresa-a569a1387?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/jiyabhadresa?igsh=MWU1M2dja2EyNWdlNA==",
      portfolio: "",
    },
  ];
  interface TerminalLine {
    text: string;
    color: string;
    delay: number;
    isCursor?: boolean;
  }
  const TerminalWelcome = () => {
    const [displayedLines, setDisplayedLines] = useState<TerminalLine[]>([]);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);

    const lines = [
      { text: "$ whoweare", color: "text-ak-accent-cyan", delay: 50 },
      {
        text: "At ALPHA.KORE, we innovate at the intersection of software, automation, and blockchain.",
        color: "text-white",
        delay: 50,
      },
      {
        text: "Our mission: to turn next-gen ideas into scalable, secure, and seamless experiences.",
        color: "text-white",
        delay: 50,
      },
      { text: "$ ", color: "text-ak-accent-cyan", delay: 0, isCursor: true },
    ];

    useEffect(() => {
      if (currentLineIndex < lines.length - 1) {
        // Don't type the cursor line
        const currentLine = lines[currentLineIndex];

        if (currentCharIndex < currentLine.text.length) {
          const timer = setTimeout(() => {
            setDisplayedLines((prev) => {
              const newLines = [...prev];
              if (!newLines[currentLineIndex]) {
                newLines[currentLineIndex] = { ...currentLine, text: "" };
              }
              newLines[currentLineIndex] = {
                ...currentLine,
                text: currentLine.text.substring(0, currentCharIndex + 1),
              };
              return newLines;
            });
            setCurrentCharIndex(currentCharIndex + 1);
          }, currentLine.delay);

          return () => clearTimeout(timer);
        } else {
          // Line complete, move to next line after a pause
          const timer = setTimeout(() => {
            setCurrentLineIndex(currentLineIndex + 1);
            setCurrentCharIndex(0);
          }, 800);

          return () => clearTimeout(timer);
        }
      } else if (currentLineIndex === lines.length - 1) {
        // Add the final cursor line
        setDisplayedLines((prev) => [...prev, lines[currentLineIndex]]);
        setCurrentLineIndex(currentLineIndex + 1);
      }
    }, [currentLineIndex, currentCharIndex]);

    // Cursor blinking effect
    useEffect(() => {
      const cursorTimer = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500);

      return () => clearInterval(cursorTimer);
    }, []);

    return (
      <div className="card-solid rounded-lg border border-ak-border shadow-2xl max-w-4xl w-full">
        {/* Terminal Header */}
        <div className="flex items-center justify-between bg-ak-surface-soft px-4 py-3 rounded-t-lg border-b border-ak-border">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-ak-text-muted text-sm font-mono">~/portfolio</div>
          <div className="w-16"></div> {/* Spacer for centering */}
        </div>

        {/* Terminal Content */}
        <div className="p-6 font-mono text-sm leading-relaxed">
          {displayedLines.map((line, index) => (
            <div key={index} className="mb-2">
              {line.isCursor ? (
                <span
                  className={`${line.color} ${
                    showCursor ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {line.text}
                  <span
                    className={`${showCursor ? "opacity-100" : "opacity-0"}`}
                  >
                    _
                  </span>
                </span>
              ) : (
                <div className={line.color}>
                  {line.text}
                  {index === currentLineIndex &&
                    currentCharIndex === line.text.length && (
                      <span
                        className={`ml-1 ${
                          showCursor ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        _
                      </span>
                    )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
     <div className="min-h-screen bg-ak-body bg-fixed text-ak-text overflow-x-hidden relative">
       {/* glowing dawn over the orange gradient */}
  <div className="dawn-horizon-glow" aria-hidden="true" />
    {/* stars over gradient, behind all UI */}
    <div className="galaxy-stars" aria-hidden="true" />

    {/* your actual site content */}
    <div className="relative z-10">
        {/* Header */}
        <header className="fixed top-0 inset-x-0 bg-transparent shadow-md z-20 border-b border-ak-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-ak-text tracking-wider flex items-center">
              <img
                src={alphakoreImage}
                alt="AlphaKore"
                className="h-32 w-auto object-contain filter brightness-0 invert md:my-0 my-2"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {[
                "home",
                "recent-works",
                "community",
                "features",
                "services",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-300 relative ${
                    activeSection === section
                      ? "text-ak-primary border-b-2 border-ak-primary"
                      : "text-ak-text-muted hover:text-ak-text"
                  }`}
                >
                  {section === "recent-works" ? "Recent Works" : section}
                  {activeSection === section && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-ak-primary to-ak-primary-soft"></div>
                  )}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-ak-text"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-transparent border-t border-ak-border">
            <div className="px-4 py-4 space-y-4">
              {[
                "home",
                "recent-works",
                "community",
                "features",
                "services",
                "docs",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left capitalize text-ak-text hover:text-ak-primary transition-colors duration-300"
                >
                  {section === "recent-works" ? "Recent Works" : section}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Content with relative positioning to appear above background */}
        {/* Hero Section */}
        <section id="home" className="pt-20 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-ak-primary to-ak-primary-soft rounded-full text-sm font-medium">
                  Innovate & Create
                </div>
                <TerminalWelcome />
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                      onClick={() => scrollToSection("features")}
                      className="px-8 py-3 bg-gradient-to-r from-ak-primary to-ak-primary-soft text-white rounded-full font-semibold shadow-lg hover:brightness-110 hover:-translate-y-0.5 transition-transform duration-300"
                    >
                    Learn More
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-[500px] relative flex items-center justify-center bg-transparent">
                  <img
                    src={alphakoreImage}
                    alt="AlphaKore"
                    className="w-full h-full object-contain invert rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Works Section */}
        <section id="recent-works" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
        Recent Works
      </h2>
      <p className="text-xl text-ak-text-muted">
        Discover our latest automation projects
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: <span>LAZY<span className="text-red-500">Z</span>COOK</span>,
          description: <span> <span>LAZY<span className="text-red-500">Z</span>COOK</span> is an autonomous multi-agent AI assistant that runs in your terminal. Using Gemini 2.5 Flash with a four-agent architecturefor maximum output with minimum human intervention.</span>,
          tags: ["AI Agents", "Terminal", "Automation", "Gemini 2.5", "Dev Tools"],
          image: lazycookImage,
          link: "https://lazycook.vercel.app/",
        },
        {
          title: "Synth.Ai",
          description: "This AI-powered tool analyzes your mood and automatically curates personalized playlists from Spotify. It ensures that the music you listen to matches your emotions and enhances your overall listening experience.",
          tags: ["Spotify", "YT MUSIC", "MOOD"],
          image: synthAiImage,
          link: "https://synth-ai.onrender.com/synth", // 🔗 added link
        },
        {
          title: "Pet.Ai",
          description:
            "This AI tool interprets pets’ behaviors by analyzing their videos, sounds, and actions. It helps pet owners better understand their pets’ emotions and needs, improving communication and care.",
          tags: ["Flutter", "Firebase"],
          image: petAiImage,
          link: "https://pet-ai-909u.onrender.com/", // 🔗 added link
        },
        {
          title: "Quant.Ai(In Progress)",
          description:
            "This AI-powered paper trading tool automates crypto trading using multiple AI agents. It allows users to practice strategies in real-time market conditions without financial risk, enhancing decision-making and trading skills.",
          tags: ["TypeScript", "Docker", "Kubernetes"],
          image:
            "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
          link: "https://quant-ai.com", // 🔗 added link
        },
       {
          title: "Firefly(In Progress)",
          description:
            "This IoT-based fire detection accessory uses sensors to identify smoke or sudden temperature rises, instantly triggering an alarm. It also sends real-time alerts to the owner and responsible officials, ensuring quick response and minimizing fire hazards.",
          tags: ["Python", "Docker", "rasberypi"],
          image:
            "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
          link: "https://quant-ai.com", // 🔗 added link
        },
      ].map((project, index) => (
        <div
          key={index}
          className="rounded-2xl overflow-hidden border border-ak-border bg-ak-bg-mid transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)] hover:-translate-y-2"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-ak-text mb-2">
              {project.title}
            </h3>
            <p className="text-ak-text-muted mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 bg-ak-surface-soft text-ak-text rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full py-2 border border-ak-border text-ak-text rounded-full hover:bg-ak-surface hover:text-ak-text transition-all duration-300"
              >
                View Project
              </a>
            ) : (
              <button
                className="w-full py-2 border border-ak-border text-ak-text-muted rounded-full opacity-60 cursor-not-allowed"
                disabled
              >
                Coming Soon
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* Community Section */}
        <section id="community" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                { number: "10+", label: "Active Users" },
                { number: "5+", label: "Projects Created" },
                { number: "5+", label: "Tasks Automated" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-ak-bg-mid rounded-2xl p-8 text-center border border-ak-border"
                >
                  <h3 className="text-4xl font-bold text-ak-text mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-ak-text-muted">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Forums */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12 text-white">
                Popular Discussions
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Getting Started",
                    description: "New to AutoMate? Start here!",
                    badge: "Hot",
                  },
                  {
                    title: "Show & Tell",
                    description: "Share your automation projects",
                    badge: "Active",
                  },
                  {
                    title: "Help & Support",
                    description: "Get help from the community",
                    badge: "24/7",
                  },
                ].map((forum, index) => (
                  <div
                      key={index}
                      className="p-6 rounded-2xl border border-ak-border bg-ak-bg-mid hover:border-ak-primary/20 transition-all duration-300"
                    >
                    <h3 className="text-xl font-bold mb-2 text-ak-text">
                      {forum.title}
                    </h3>
                    <p className="text-ak-text-muted mb-4">{forum.description}</p>
                    <span className="inline-block px-3 py-1 bg-ak-surface-soft border border-ak-border rounded-full text-ak-text text-sm">
                      {forum.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Section */}
            <div>
              <h2 className="text-3xl font-bold text-center mb-12 text-white">
                Founder Team
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="bg-ak-surface rounded-2xl p-6 text-center border border-ak-border hover:border-ak-primary/20 transition-all duration-300 hover:transform hover:-translate-y-2"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-ak-border shadow-lg cursor-pointer"
                      onClick={() => openPhoto(member.image)}
                    />
                    <h3 className="text-xl font-bold mb-4 text-ak-text">
                      {member.name}
                    </h3>
                    <div className="flex justify-center space-x-4 mb-4">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ak-text hover:text-ak-text-muted transition-colors"
                      >
                        <Linkedin size={20} />
                      </a>
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ak-text hover:text-ak-text-muted transition-colors"
                      >
                        <Instagram size={20} />
                      </a>
                    </div>
                    <a
                      href={member.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-ak-surface rounded-lg text-sm font-medium border border-ak-border hover:shadow-lg transition-all duration-300 text-ak-text"
                    >
                      Portfolio <ExternalLink size={14} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-white">
                Powerful Features
              </h2>
              <p className="text-xl text-ak-text-muted max-w-3xl mx-auto">
                Discover what makes AutoMate the perfect choice for your
                automation needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "AI-Powered Automation",
                  description:
                    "Our cutting-edge AI algorithms revolutionize your workflow with smart automation.",
                  features: [
                    "Smart Pattern Recognition",
                    "Predictive Task Automation",
                    "Self-Learning Systems",
                    "Custom AI Models",
                    "24/7 Automated Operations",
                  ],
                },
                {
                  icon: <Cloud className="w-8 h-8" />,
                  title: "Seamless Cloud Integration",
                  description:
                    "Connect and synchronize with popular cloud services and tools.",
                  features: [
                    "100+ Service Integrations",
                    "Real-time Data Sync",
                    "Custom API Support",
                    "Cross-platform Compatibility",
                    "Secure Data Transfer",
                  ],
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Enterprise-Grade Security",
                  description:
                    "Industry-leading security measures to protect your sensitive data.",
                  features: [
                    "End-to-end Encryption",
                    "SOC 2 Type II Certified",
                    "Regular Security Audits",
                    "Multi-factor Authentication",
                    "GDPR Compliant",
                  ],
                },
                {
                  icon: <BarChart3 className="w-8 h-8" />,
                  title: "Advanced Analytics",
                  description:
                    "Comprehensive analytics and reporting tools to optimize performance.",
                  features: [
                    "Real-time Monitoring",
                    "Custom Dashboards",
                    "Performance Metrics",
                    "ROI Tracking",
                    "Automated Reports",
                  ],
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-ak-surface rounded-2xl p-8 border border-ak-border transition-all duration-300 hover:transform hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-ak-primary/20 to-ak-primary-soft/20 rounded-full flex items-center justify-center mb-6 text-ak-primary">
                    <div className="w-8 h-8 flex items-center justify-center text-ak-primary">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-ak-text">
                    {feature.title}
                  </h3>
                  <p className="text-ak-text-muted mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.features.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-center gap-3 text-sm"
                      >
                        <CheckCircle className="w-4 h-4 text-ak-accent-cyan flex-shrink-0" />
                        <span className="text-ak-text">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white">
                Our Services
              </h1>
              <p className="text-xl text-ak-text-muted">
                Discover how AutoMate can transform your workflow
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Robot className="w-8 h-8" />,
                  title: "AI Automation",
                  description:
                    "Leverage advanced AI algorithms to automate complex tasks and workflows",
                  features: [
                    "Machine Learning Integration",
                    "Smart Process Automation",
                    "Predictive Analysis",
                  ],
                },
                {
                  icon: <Cloud className="w-8 h-8" />,
                  title: "Cloud Solutions",
                  description:
                    "Scalable cloud infrastructure for seamless automation deployment",
                  features: [
                    "Cloud Integration",
                    "Secure Storage",
                    "Auto-scaling",
                  ],
                },
                {
                  icon: <Code className="w-8 h-8" />,
                  title: "Custom Development",
                  description:
                    "Tailored automation solutions for your specific needs",
                  features: [
                    "Custom Workflows",
                    "API Integration",
                    "Scalable Solutions",
                  ],
                },
                {
                  icon: <Lightbulb className="w-8 h-8" />,
                  title: "Consulting",
                  description: "Expert guidance for your automation journey",
                  features: [
                    "Strategy Planning",
                    "Process Optimization",
                    "Technical Support",
                  ],
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-ak-surface rounded-2xl p-8 text-center border border-ak-border transition-all duration-300 hover:transform hover:-translate-y-2 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-16 h-16 bg-gradient-to-br from-ak-primary/20 to-ak-primary-soft/20 rounded-full flex items-center justify-center mx-auto mb-6 text-ak-primary">
                      <div className="w-8 h-8 flex items-center justify-center text-ak-primary">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-ak-text">
                      {service.title}
                    </h3>
                    <p className="text-ak-text-muted mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-6 text-left">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-3 text-sm"
                        >
                          <CheckCircle className="w-4 h-4 text-ak-accent-cyan flex-shrink-0" />
                          <span className="text-ak-text">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="w-full py-3 bg-transparent border border-ak-primary text-ak-primary rounded-full font-semibold hover:bg-ak-primary hover:text-white transition-all duration-300">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
                Contact Us
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="grid gap-6">
                {[
                  {
                    icon: <Mail className="w-6 h-6" />,
                    title: "Email",
                    content: "alpha.kore25@gmail.com",
                  },
                  {
                    icon: <MessageCircle className="w-6 h-6" />,
                    title: "Live Chat",
                    content: "Available 24/7",
                  },
                  {
                    icon: <Headphones className="w-6 h-6" />,
                    title: "Support",
                    content: "Get instant help",
                  },
                ].map((contact, index) => (
                  <div
                    key={index}
                    className="bg-ak-surface rounded-2xl p-6 border border-ak-border transition-all duration-300 hover:transform hover:-translate-y-2"
                  >
                    <div className="text-ak-primary mb-4">{contact.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-ak-text">
                      {contact.title}
                    </h3>
                    <p className="text-ak-accent-cyan">{contact.content}</p>
                  </div>
                ))}
              </div>

              {/* Contact Button */}
<div className="flex items-center justify-center">
  <a
    href="https://calendly.com/alpha-kore25/new-meeting?month=2025-08"
    data-cal-link="auto-mate-m0o1k7/alphakore"
    data-cal-namespace="alphakore"
    data-cal-config='{"layout":"month_view"}'
    className="px-8 py-4 bg-gradient-to-r from-ak-primary to-ak-primary-soft text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
  >
    Contact Us
  </a>
</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-ak-surface-soft border-t border-ak-border py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-ak-text-muted">
              Designed with{" "}
              <Heart className="inline w-4 h-4 text-ak-primary mx-1" /> by PARTH
              SONI
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
