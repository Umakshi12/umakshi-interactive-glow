import { useRef, useEffect, useState } from 'react';

export function useMagnetic<T extends HTMLElement = HTMLDivElement>(magneticStrength = 40, glowColor = '#a78bfa') {
  const ref = useRef<T | null>(null);
  const [style, setStyle] = useState({});
  useEffect(() => {
    function handleMove(e: MouseEvent) {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const elX = rect.left + rect.width / 2;
      const elY = rect.top + rect.height / 2;
      const dist = Math.hypot(e.clientX - elX, e.clientY - elY);
      if (dist < magneticStrength) {
        const dx = (e.clientX - elX) * 0.3;
        const dy = (e.clientY - elY) * 0.3;
        setStyle({
          transform: `translate(${dx}px, ${dy}px) scale(1.07)`,
          boxShadow: `0 0 16px 4px ${glowColor}, 0 0 32px 8px ${glowColor}33`,
          transition: 'transform 0.2s cubic-bezier(.22,1,.36,1), box-shadow 0.2s',
          zIndex: 10,
        });
      } else {
        setStyle({
          transform: 'translate(0,0) scale(1)',
          boxShadow: 'none',
          transition: 'transform 0.4s cubic-bezier(.22,1,.36,1), box-shadow 0.4s',
        });
      }
    }
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [magneticStrength, glowColor]);
  return [ref, style] as const;
} 