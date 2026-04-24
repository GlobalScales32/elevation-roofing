import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ShieldCheck, MapPin } from "lucide-react";
import heroImg from "@/assets/hero.png";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Roofing crew working on a residential home in Ames, Iowa" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
              <MapPin className="w-3.5 h-3.5" /> Serving Story County
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.1] tracking-tight mb-6 font-heading"
          >
            Reliable Roofing Services in <span className="text-primary">Ames, Iowa</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-foreground/80 mb-10 max-w-2xl leading-relaxed"
          >
            Protecting Your Home with Quality Craftsmanship You Can Trust. Locally owned, fully licensed, and committed to doing the job right the first time.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start gap-4 mb-12"
          >
            <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-semibold" asChild>
              <a href="#contact">Request a Free Inspection</a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg font-semibold bg-background/50 backdrop-blur" asChild>
              <a href="tel:+15155550142">
                <Phone className="w-5 h-5 mr-2" />
                Call (515) 555-0142
              </a>
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-6 text-sm font-semibold text-foreground/80"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" />
              Fully Licensed
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" />
              Fully Insured
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              Locally Owned
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}