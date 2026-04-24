import React from "react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#111] text-white/80 py-16 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="bg-primary text-white p-1.5 rounded-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 22 1-1h3l9-9"/><path d="M3 21v-3l9-9"/><path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z"/></svg>
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">Elevation Roofing</span>
            </Link>
            <p className="mb-6 max-w-sm">
              Protecting homes in Story County with quality craftsmanship, premium materials, and honest service you can trust.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://facebook.com/elevationroofing" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#why-us" className="hover:text-primary transition-colors">Why Choose Us</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Project Gallery</a></li>
              <li><a href="#reviews" className="hover:text-primary transition-colors">Customer Reviews</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Request Estimate</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li><a href="tel:+15156867651" className="hover:text-primary transition-colors">(515) 686-7651</a></li>
              <li><a href="mailto:hello@elevationroofing.com" className="hover:text-primary transition-colors">hello@elevationroofing.com</a></li>
              <li>314 Main Street<br />Ames, IA 50010</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-sm text-white/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>&copy; {new Date().getFullYear()} Elevation Roofing. All rights reserved.</div>
          <div className="max-w-xl text-xs text-center md:text-right">
            Elevation Roofing provides professional <span className="text-white/70">roofing Ames Iowa</span>, expert <span className="text-white/70">roof repair Ames IA</span>, complete <span className="text-white/70">roof replacement Ames Iowa</span>, and emergency <span className="text-white/70">storm damage roofing Ames</span>. Serving all of Story County.
          </div>
        </div>
      </div>
    </footer>
  );
}