
import React from 'react';

interface CursorFollowerProps {
  mousePosition: { x: number; y: number };
}

const CursorFollower: React.FC<CursorFollowerProps> = ({ mousePosition }) => {
  return (
    <>
      {/* Main cursor follower with glow */}
      <div
        className="fixed pointer-events-none z-40 transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div 
          className="w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-80 animate-pulse"
          style={{
            boxShadow: `
              0 0 10px rgba(147, 51, 234, 0.8),
              0 0 20px rgba(147, 51, 234, 0.6),
              0 0 30px rgba(147, 51, 234, 0.4),
              0 0 40px rgba(59, 130, 246, 0.3)
            `,
          }}
        />
      </div>
      
      {/* Trailing effect with enhanced glow */}
      <div
        className="fixed pointer-events-none z-30 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div 
          className="w-8 h-8 border border-purple-600/40 rounded-full animate-spin"
          style={{
            boxShadow: `
              0 0 15px rgba(147, 51, 234, 0.6),
              0 0 25px rgba(147, 51, 234, 0.4),
              inset 0 0 10px rgba(147, 51, 234, 0.3)
            `,
          }}
        />
      </div>
      
      {/* Outer glow ring */}
      <div
        className="fixed pointer-events-none z-20 transition-all duration-500 ease-out"
        style={{
          left: mousePosition.x - 30,
          top: mousePosition.y - 30,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div 
          className="w-12 h-12 border border-blue-500/20 rounded-full animate-pulse"
          style={{
            boxShadow: `
              0 0 20px rgba(59, 130, 246, 0.4),
              0 0 40px rgba(59, 130, 246, 0.2),
              0 0 60px rgba(59, 130, 246, 0.1)
            `,
          }}
        />
      </div>
    </>
  );
};

export default CursorFollower;
