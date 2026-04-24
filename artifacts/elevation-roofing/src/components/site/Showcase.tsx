import React from "react";
import { motion } from "framer-motion";
import project1Img from "@/assets/project-1.png";
import project2Img from "@/assets/project-2.png";
import project3Img from "@/assets/project-3.png";
import project4Img from "@/assets/project-4.png";

export function Showcase() {
  const projects = [
    {
      img: project1Img,
      title: "Full Roof Replacement",
      location: "Northridge, Ames",
      desc: "Complete tear-off and installation of architectural shingles."
    },
    {
      img: project2Img,
      title: "Storm Damage Repair",
      location: "Somerset, Ames",
      desc: "Emergency repairs following severe hail storm."
    },
    {
      img: project3Img,
      title: "Detailed Inspection",
      location: "Nevada, IA",
      desc: "Thorough assessment of aging roof structure."
    },
    {
      img: project4Img,
      title: "New Construction",
      location: "Story City, IA",
      desc: "Premium roofing system for a newly built home."
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">
              Recent Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              Take a look at some of our recent work in Ames and surrounding communities. Quality craftsmanship you can see.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-muted shadow-md"
            >
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-8 translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                <div className="inline-block px-3 py-1 bg-primary/90 backdrop-blur text-primary-foreground text-xs font-semibold rounded-full mb-3">
                  {project.location}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}