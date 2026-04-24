import React from "react";
import { motion } from "framer-motion";

export function Process() {
  const steps = [
    {
      number: "01",
      title: "Free Inspection",
      description: "We'll thoroughly inspect your roof, take photos of any damage, and assess its overall condition without any high-pressure sales tactics."
    },
    {
      number: "02",
      title: "Detailed Estimate",
      description: "You'll receive a clear, written proposal outlining the scope of work, premium material options, and an honest price with no hidden fees."
    },
    {
      number: "03",
      title: "Professional Installation",
      description: "Our experienced local crew will complete your project efficiently, protect your landscaping, and leave your property cleaner than we found it."
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">
            Our Simple Process
          </h2>
          <p className="text-lg text-muted-foreground">
            We've streamlined our process to make your roofing project as stress-free and transparent as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-border z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 bg-background border-4 border-primary text-primary rounded-full flex items-center justify-center text-3xl font-bold font-heading mb-6 shadow-sm">
                {step.number}
              </div>
              <h3 className="text-xl font-bold font-heading mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}