import React, { memo } from "react";
import { Linkedin, Instagram, ExternalLink } from "lucide-react";
import hitarthImage from "../assets/images/hitarth.jpg";
import parthImage from "../assets/images/parth.jpg";
import shlokImage from "../assets/images/shlok.jpg";
import suhaniImage from "../assets/images/suhani.jpg";
import rajImage from "../assets/images/raj.jpg";
import harshImage from "../assets/images/harsh.jpg";
import manavImage from "../assets/images/manav.jpg";
import pranavImage from "../assets/images/pranav.jpg";
import jiyaImage from "../assets/images/jiya.jpg";

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

const communityStats = [
  { number: "10+", label: "Active Users" },
  { number: "5+", label: "Projects Created" },
  { number: "5+", label: "Tasks Automated" },
];

const forums = [
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
];

const CommunitySection = memo(({ openPhoto }: { openPhoto: (image: string) => void }) => {
  return (
    <section id="community" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {communityStats.map((stat, index) => (
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
            {forums.map((forum, index) => (
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
                  loading="lazy"
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
  );
});

export default CommunitySection;
