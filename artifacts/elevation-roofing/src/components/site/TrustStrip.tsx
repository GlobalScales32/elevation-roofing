import React from "react";
import { MapPin, Shield, Clock, FileText } from "lucide-react";

export function TrustStrip() {
  const items = [
    { icon: MapPin, text: "Locally Owned & Operated" },
    { icon: Shield, text: "Fully Licensed & Insured" },
    { icon: Clock, text: "Fast & Reliable Service" },
    { icon: FileText, text: "Free Inspections & Estimates" },
  ];

  return (
    <div className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center gap-3">
                <div className="bg-primary-foreground/10 p-3 rounded-full">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="font-medium text-sm md:text-base leading-tight">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}