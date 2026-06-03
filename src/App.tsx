import { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import DetailsSection from './components/DetailsSection';
import CountdownSection from './components/CountdownSection';
import ParentsSection from './components/ParentsSection';
import StorybookSection from './components/StorybookSection';
import GallerySection from './components/GallerySection';
import MapSection from './components/MapSection';
import Footer from './components/Footer';

interface CursorPos {
  x: number;
  y: number;
}

function CursorEffects() {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        offset: 50,
        once: false,
        mirror: true,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.8) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
        trail.style.background = `hsl(${Math.random() * 60 + 330}, 100%, 60%)`;
        document.body.appendChild(trail);
        setTimeout(() => trail.remove(), 800);
      }

      const dot = document.getElementById('cursor-dot');
      if (dot) {
        dot.style.left = e.clientX + 'px';
        dot.style.top = e.clientY + 'px';
      }

      const ring = document.getElementById('cursor-ring');
      if (ring) {
        ring.style.left = e.clientX + 'px';
        ring.style.top = e.clientY + 'px';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div id="cursor-dot" className="cursor-dot" />
      <div id="cursor-ring" className="cursor-ring" />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <CursorEffects />

      <HeroSection />
      <DetailsSection />
      <CountdownSection />
      <ParentsSection />
      <StorybookSection />
      <GallerySection />
      <MapSection />
      <Footer />
    </div>
  );
}

declare global {
  interface Window {
    AOS: any;
    gsap: any;
    ScrollTrigger: any;
  }
}
