import React, { memo } from "react";
import lazycook from "../assets/images/lazycook.png";
import synth from "../assets/images/Synth.png";
import petai from "../assets/images/petai.png";

const projects = [
  {
    title: "LAZYCOOK",
    description: "LAZYCOOK is an autonomous multi-agent AI assistant that runs in your terminal. Using Gemini 2.5 Flash with a four-agent architecturefor maximum output with minimum human intervention.",
    tags: ["AI Agents", "Terminal", "Automation", "Gemini 2.5", "Dev Tools"],
    image: lazycook,
    link: "https://lazycook.vercel.app/",
  },
  {
    title: "Synth.Ai",
    description: "This AI-powered tool analyzes your mood and automatically curates personalized playlists from Spotify. It ensures that the music you listen to matches your emotions and enhances your overall listening experience.",
    tags: ["Spotify", "YT MUSIC", "MOOD"],
    image: synth,
    link: "https://synth-ai.onrender.com/synth",
  },
  {
    title: "Pet.Ai",
    description:
      "This AI tool interprets pets’ behaviors by analyzing their videos, sounds, and actions. It helps pet owners better understand their pets’ emotions and needs, improving communication and care.",
    tags: ["Flutter", "Firebase"],
    image: petai,
    link: "https://pet-ai-909u.onrender.com/",
  },
  {
    title: "Quant.Ai(In Progress)",
    description:
      "This AI-powered paper trading tool automates crypto trading using multiple AI agents. It allows users to practice strategies in real-time market conditions without financial risk, enhancing decision-making and trading skills.",
    tags: ["TypeScript", "Docker", "Kubernetes"],
    image:
      "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    link: "https://quant-ai.com",
  },
  {
    title: "Firefly(In Progress)",
    description:
      "This IoT-based fire detection accessory uses sensors to identify smoke or sudden temperature rises, instantly triggering an alarm. It also sends real-time alerts to the owner and responsible officials, ensuring quick response and minimizing fire hazards.",
    tags: ["Python", "Docker", "rasberypi"],
    image:
      "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    link: "https://quant-ai.com",
  },
];

const RecentWorksSection = memo(({ renderLazycookText }: { renderLazycookText: (text: string) => JSX.Element }) => {
  return (
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
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden border border-ak-border bg-ak-bg-mid transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)] hover:-translate-y-2"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-ak-text mb-2">
                  {renderLazycookText(project.title)}
                </h3>
                <p className="text-ak-text-muted mb-4">{renderLazycookText(project.description)}</p>
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
  );
});

export default RecentWorksSection;
