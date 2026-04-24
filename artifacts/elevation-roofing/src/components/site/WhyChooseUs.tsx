import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import project4Img from "@/assets/project-4.png";

export function WhyChooseUs() {
  const reasons = [
    "Premium materials (GAF, Owens Corning)",
    "Experienced local crews",
    "Honest, written pricing",
    "Fast turnaround & complete cleanup",
    "Serving Ames since 2009",
    "Fully licensed and insured in Iowa"
  ];

  return (
    <section id="why-us" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-foreground">
                The Contractor Your Neighbors Trust
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We believe in doing things the right way. That means showing up on time, giving you an honest assessment, and standing behind our work long after we've cleaned up the last nail. We're not just roofing houses; we're protecting homes in our community.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="font-medium text-foreground">{reason}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
            >
              <img 
                src={project4Img} 
                alt="Beautiful newly installed roof on a midwestern home" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                <div className="bg-background/95 backdrop-blur px-6 py-4 rounded-xl shadow-lg border border-white/10">
                  <div className="text-3xl font-bold font-heading text-primary mb-1">15+</div>
                  <div className="text-sm font-semibold text-muted-foreground">Years Serving Story County</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}