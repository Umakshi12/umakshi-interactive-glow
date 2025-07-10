import React from 'react';

interface CursorFollowerProps {
  mousePosition: { x: number; y: number };
}

const CursorFollower: React.FC<CursorFollowerProps> = ({ mousePosition }) => {
  return (
    <div
      className="fixed pointer-events-none z-50"
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
        transform: 'translate(-2px, -2px)', // offset for arrow tip
      }}
    >
      {/* SVG pointer arrow */}
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <polygon
          points="2,2 18,10 11,12 14,18 10,16 7,19 7,12 2,2"
          fill="#fff"
          stroke="#222"
          strokeWidth="1.2"
          style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.15))' }}
        />
      </svg>
    </div>
  );
};

export default CursorFollower;
