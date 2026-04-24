import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Testimonials() {
  const reviews = [
    {
      name: "Sarah M.",
      location: "Northridge",
      text: "Elevation Roofing did an incredible job replacing our roof after the hail storm. They handled the insurance process smoothly and the crew was incredibly polite and clean. Highly recommend!"
    },
    {
      name: "David T.",
      location: "Somerset",
      text: "Honest and straightforward. They inspected my roof and told me I actually didn't need a replacement yet, just some minor repairs around the flashing. Saved me thousands. That's true integrity."
    },
    {
      name: "Jennifer L.",
      location: "North Grand",
      text: "The new architectural shingles completely transformed the look of our home. The team finished the job in one day and you couldn't even tell they had been there — the cleanup was spotless."
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Trusted by Ames Homeowners
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Don't just take our word for it. Here's what your neighbors have to say.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary-foreground/10 p-8 rounded-2xl border border-primary-foreground/20 backdrop-blur-sm"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg leading-relaxed mb-6 font-medium">
                "{review.text}"
              </p>
              <div>
                <div className="font-bold">{review.name}</div>
                <div className="text-primary-foreground/70 text-sm">{review.location}, Ames</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}