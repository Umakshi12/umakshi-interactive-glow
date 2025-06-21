
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
        <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-30 animate-pulse" />
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
        <div className="w-8 h-8 border border-purple-600/20 rounded-full animate-spin" />
      </div>
    </>
  );
};

export default CursorFollower;
