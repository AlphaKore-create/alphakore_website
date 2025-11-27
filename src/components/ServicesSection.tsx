import React, { memo } from "react";
import { Bot, Cloud, Code, Lightbulb, CheckCircle } from "lucide-react";

const services = [
  {
    icon: <Bot className="w-8 h-8" />,
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
];

const ServicesSection = memo(() => {
  return (
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
          {services.map((service, index) => (
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
  );
});

export default ServicesSection;
