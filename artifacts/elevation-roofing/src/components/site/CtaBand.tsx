import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";

export function CtaBand() {
  return (
    <section className="py-20 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="bg-card border border-card-border shadow-xl rounded-3xl p-8 md:p-16 text-center max-w-5xl mx-auto relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-6">
              <Calendar className="w-4 h-4" />
              Storm season is here — most inspections scheduled within 48 hours
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-foreground tracking-tight">
              Get Your Free Roof Inspection Today
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Don't wait until a small leak becomes a major repair. Contact us today for a thorough, honest assessment of your roof.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-semibold" asChild>
                <a href="#contact">Request Inspection</a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg font-semibold" asChild>
                <a href="tel:+15155550142">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (515) 555-0142
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}