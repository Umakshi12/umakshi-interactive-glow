import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import TechStack from '../components/TechStack';
import Blog from '../components/Blog';
// import Analytics from '../components/Analytics';
import Contact from '../components/Contact';
import CursorFollower from '../components/CursorFollower';
import ScrollProgress from '../components/ScrollProgress';
// import Search from '../components/Search';
import AIChat from '../components/AIChat';

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseMoving, setIsMouseMoving] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMouseMoving(true);
      
      // Clear existing timeout
      clearTimeout(timeoutId);
      
      // Hide cursor after 2 seconds of no movement
      timeoutId = setTimeout(() => {
        setIsMouseMoving(false);
      }, 2000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/*
        <div className="fixed inset-0 bg-gradient-to-br from-purple-950/10 via-black to-blue-950/10" />
      */}
      
      {/* Scroll progress indicator */}
      <ScrollProgress />
      
      {/* Cursor follower */}
      {isMouseMoving && <CursorFollower mousePosition={mousePosition} />}
      
      {/* Header */}
      <Header />
      
      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <Blog />
        {/* <Analytics /> */}
        <Contact />
      </main>

      <AIChat />
    </div>
  );
};

export default Index;
