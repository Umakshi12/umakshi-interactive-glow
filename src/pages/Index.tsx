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

// Define a type for your project data for better code quality
interface Project{
  id: number;
  name:string;
  description:string;
  html_url: string;
  topics: string[];
}

export async function getStaticProps(){
  const username = 'https://github.com/Umakshi12';
  const token = process.env.GH_PAT;

  const response = await fetch('https://api.github.com/users/${username}/repos',{
    headers:{
      // The Authorization header is only added if the token exists
      ...(token && { Authorization: `token ${token}` }),

    }
  });

  if (!response.ok){
    console.error("Failed to fetch GitHub repos.");
    // Return an empty array if there's an error to prevent the build from failing
    return { props: { projects: [] } };
  }

  const repos: Project[] = await response.json();

  // Filter for repos that have the "portfolio" topic
  const portfolioRepos = repos.filter(repo => repo.topics && repo.topics.includes('portfolio'));

  return {
    props: {
      projects: portfolioRepos,
    },
    // Optional: Tells Next.js to re-generate the page every hour (3600 seconds)
    // This allows your portfolio to update without needing a full redeploy.
    revalidate: 3600,
  };


}
const Index = ({projects}:{projects:Project[]}) => {
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
        <Projects projects={projects} />
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
