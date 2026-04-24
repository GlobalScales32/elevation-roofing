import React from "react";
import { motion } from "framer-motion";
import { Search, Hammer, Home, CloudLightning, ArrowRight } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Search,
      title: "Roof Inspections",
      description: "Thorough assessments to identify potential issues before they become costly repairs. Written reports provided.",
    },
    {
      icon: Hammer,
      title: "Roof Repairs",
      description: "Expert fixing of leaks, missing shingles, and flashing issues to extend the life of your current roof.",
    },
    {
      icon: Home,
      title: "Full Roof Replacement",
      description: "Complete tear-off and installation using premium materials that protect your home for decades.",
    },
    {
      icon: CloudLightning,
      title: "Storm Damage Repair",
      description: "Fast response for wind and hail damage. We'll help you navigate the insurance claims process.",
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">
            Complete Roofing Services
          </h2>
          <p className="text-lg text-muted-foreground">
            From minor repairs to complete replacements, we provide expert craftsmanship for every roofing need in Story County.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-card-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-primary font-semibold hover:underline underline-offset-4 group/link"
                >
                  Get a Quote 
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}