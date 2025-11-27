import React, { useState, useEffect, useCallback } from "react";
import { Menu, X, Heart } from "lucide-react";
import alphakoreImage from "./assets/images/alphakore.png";
import HeroSection from "./components/HeroSection";
import RecentWorksSection from "./components/RecentWorksSection";
import CommunitySection from "./components/CommunitySection";
import FeaturesSection from "./components/FeaturesSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";

const NAVIGATION_SECTIONS = [
  "home",
  "recent-works",
  "community",
  "features",
  "services",
];

const SCROLL_SECTIONS = [
  "home",
  "recent-works",
  "community",
  "features",
  "services",
  "docs",
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [enlargedPhoto, setEnlargedPhoto] = useState<string | null>(null);

  const openPhoto = useCallback((image: string) => {
    setEnlargedPhoto(image);
  }, []);

  const closePhoto = useCallback(() => {
    setEnlargedPhoto(null);
  }, []);

  const renderLazycookText = (text: string): JSX.Element => {
    const parts = text.split("LAZYCOOK");
    return (
      <>
        {parts.map((part, index) => (
          <span key={index}>
            {part}
            {index < parts.length - 1 && (
              <span>
                LA<span className="text-red-500">Z</span>YCOOK
              </span>
            )}
          </span>
        ))}
      </>
    );
  };

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
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
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  }, []);

  return (
    <div className="min-h-screen bg-ak-body bg-fixed text-ak-text overflow-x-hidden relative">
      {/* glowing dawn over the orange gradient */}
      <div className="dawn-horizon-glow" aria-hidden="true" />
      {/* stars over gradient, behind all UI */}
      <div className="galaxy-stars" aria-hidden="true" />

      {/* your actual site content */}
      <div className="relative z-10">
        {/* Header */}
       <header
  className="
    fixed top-0 inset-x-0
    bg-transparent
    backdrop-blur-md
    backdrop-saturate-200         /* adds magnification */
    shadow-md
    z-20
    border-b border-ak-border
                  
   
  "
>

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
                {NAVIGATION_SECTIONS.map((section) => (
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
            <div className="md:hidden bg-transparent backdrop-blur-md border-t border-ak-border">
              <div className="px-4 py-4 space-y-4">
                {SCROLL_SECTIONS.map((section) => (
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
        <HeroSection scrollToSection={scrollToSection} />

        <RecentWorksSection renderLazycookText={renderLazycookText} />

        <CommunitySection openPhoto={openPhoto} />

        <FeaturesSection />

        <ServicesSection />

        <ContactSection />

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

        {enlargedPhoto && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closePhoto}>
            <img src={enlargedPhoto} alt="Enlarged" className="max-w-full max-h-full" />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
