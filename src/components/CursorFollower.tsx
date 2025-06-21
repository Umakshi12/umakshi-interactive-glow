
import React from 'react';

interface CursorFollowerProps {
  mousePosition: { x: number; y: number };
}

const CursorFollower: React.FC<CursorFollowerProps> = ({ mousePosition }) => {
  return (
    <>
      {/* Main cursor follower */}
      <div
        className="fixed pointer-events-none z-40 transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-5 h-5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-60 animate-pulse" />
      </div>
      
      {/* Trailing effect */}
      <div
        className="fixed pointer-events-none z-30 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-10 h-10 border-2 border-purple-400/30 rounded-full animate-spin" />
      </div>
    </>
  );
};

export default CursorFollower;
