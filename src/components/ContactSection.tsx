import React, { memo } from "react";
import { Mail, MessageCircle, Headphones } from "lucide-react";

const contactInfo = [
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
];

const ContactSection = memo(() => {
  return (
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
            {contactInfo.map((contact, index) => (
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
  );
});

export default ContactSection;
