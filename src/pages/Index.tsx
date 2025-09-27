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

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [errorProjects, setErrorProjects] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoadingProjects(true);
      setErrorProjects(null);
      const username = 'Umakshi12';
      const token = import.meta.env.VITE_GH_PAT;

      console.log("VITE_GH_PAT:", token ? "****" : "Not set");

      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`, {
          headers: {
            ...(token && { Authorization: `token ${token}` }),
          },
        });

        console.log("GitHub API Response Status:", response.status);

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Failed to fetch GitHub repos: ${response.statusText} - ${errorText}`);
        }

        const repos: Project[] = await response.json();
        const portfolioRepos = repos.filter(repo => repo.topics && repo.topics.includes('portfolio'));
        setProjects(portfolioRepos);
      } catch (err: any) {
        console.error("Error fetching projects:", err);
        setErrorProjects(err.message);
      } finally {
        setLoadingProjects(false);
      }
    };

    fetchProjects();
  }, []);

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
        <Projects projects={projects} loading={loadingProjects} error={errorProjects} />
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
