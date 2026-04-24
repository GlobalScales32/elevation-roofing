import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import logoUrl from "@assets/Screenshot_2026-04-23_160835_1777017390159.png";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#why-us", label: "Why Us" },
    { href: "#projects", label: "Projects" },
    { href: "#reviews", label: "Reviews" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img
            src={logoUrl}
            alt="Elevation Roofing — Ames, Iowa"
            className="h-12 md:h-14 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+15155550142" className="hidden lg:flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors">
              <Phone className="w-4 h-4 text-primary" />
              (515) 555-0142
            </a>
            <Button asChild className="font-semibold">
              <a href="#contact">Request Free Inspection</a>
            </Button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="flex md:hidden items-center gap-4">
          <Button asChild size="sm" className="font-semibold">
            <a href="#contact">Free Inspection</a>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-8 mt-8">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
                <div className="flex flex-col gap-4 pt-6 border-t border-border">
                  <a href="tel:+15155550142" className="flex items-center gap-3 text-lg font-semibold hover:text-primary transition-colors">
                    <div className="bg-primary/10 p-2 rounded-full text-primary">
                      <Phone className="w-5 h-5" />
                    </div>
                    (515) 555-0142
                  </a>
                  <Button asChild size="lg" className="w-full font-semibold">
                    <a href="#contact" onClick={() => setIsOpen(false)}>Request Free Inspection</a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}