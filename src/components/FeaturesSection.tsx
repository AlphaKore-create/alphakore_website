import React, { memo } from "react";
import { Brain, Cloud, Shield, BarChart3, CheckCircle } from "lucide-react";

const features = [
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
];

const FeaturesSection = memo(() => {
  return (
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
          {features.map((feature, index) => (
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
  );
});

export default FeaturesSection;
