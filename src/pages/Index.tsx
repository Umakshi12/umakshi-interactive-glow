
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import TechStack from '../components/TechStack';
import Blog from '../components/Blog';
import Analytics from '../components/Analytics';
import Contact from '../components/Contact';
import CursorFollower from '../components/CursorFollower';
import AIChat from '../components/AIChat';
import ScrollProgress from '../components/ScrollProgress';
import Search from '../components/Search';

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-950/10 via-black to-blue-950/10" />
      
      {/* Scroll progress indicator */}
      <ScrollProgress />
      
      {/* Cursor follower */}
      <CursorFollower mousePosition={mousePosition} />
      
      {/* Search component */}
      <Search />
      
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
        <Analytics />
        <Contact />
      </main>
      
      {/* AI Chat with integrated voice features */}
      <AIChat />
    </div>
  );
};

export default Index;
