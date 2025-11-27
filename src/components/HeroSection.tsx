import React, { memo, useState, useEffect } from "react";
import alphakoreImage from "../assets/images/alphakore.png";

const TerminalWelcome = memo(() => {
  const [displayedLines, setDisplayedLines] = useState<{ text: string; color: string; delay: number; isCursor?: boolean }[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

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

  // Typing Logic
  useEffect(() => {
    if (currentLineIndex < lines.length - 1) {
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
        const timer = setTimeout(() => {
          setCurrentLineIndex(currentLineIndex + 1);
          setCurrentCharIndex(0);
        }, 800);

        return () => clearTimeout(timer);
      }
    } else if (currentLineIndex === lines.length - 1) {
      setDisplayedLines((prev) => [...prev, lines[currentLineIndex]]);
      setCurrentLineIndex(currentLineIndex + 1);
    }
  }, [currentLineIndex, currentCharIndex]);



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
        <div className="w-16"></div>
      </div>

      {/* Terminal Content — STATIC HEIGHT */}
      <div
        className="
          p-6 font-mono text-sm leading-relaxed
          h-56              /* Fixed height */
          w-96
          overflow-hidden   /* Prevent card expansion */
          flex flex-col
          justify-end       /* Stick lines at bottom like a real terminal */
        "
      >
        <div className="space-y-2">
          {displayedLines.map((line, index) => (
            <div key={index} className="mb-1">
              {line.isCursor ? (
                <span className={line.color}>
                  {line.text}
                  <span className="animate-pulse">_</span>
                </span>
              ) : (
                <div className={line.color}>
                  {line.text}
                  {index === currentLineIndex &&
                    currentCharIndex === line.text.length && (
                      <span className="ml-1 animate-pulse">_</span>
                    )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

const HeroSection = memo(({ scrollToSection }: { scrollToSection: (section: string) => void }) => {
  return (
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
  );
});

export default HeroSection;
