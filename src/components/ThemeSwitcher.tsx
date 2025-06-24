
import React, { useState, useEffect } from 'react';
import { Palette } from 'lucide-react';

type Theme = 'purple' | 'blue' | 'green' | 'orange';

const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState<Theme>('purple');
  const [isOpen, setIsOpen] = useState(false);

  const themes = {
    purple: {
      name: 'Purple',
      primary: 'rgb(147, 51, 234)',
      secondary: 'rgb(168, 85, 247)',
      accent: 'rgb(196, 181, 253)',
      gradient: 'from-purple-600 to-purple-800'
    },
    blue: {
      name: 'Ocean',
      primary: 'rgb(59, 130, 246)',
      secondary: 'rgb(96, 165, 250)',
      accent: 'rgb(147, 197, 253)',
      gradient: 'from-blue-600 to-cyan-600'
    },
    green: {
      name: 'Nature',
      primary: 'rgb(34, 197, 94)',
      secondary: 'rgb(74, 222, 128)',
      accent: 'rgb(134, 239, 172)',
      gradient: 'from-green-600 to-emerald-600'
    },
    orange: {
      name: 'Sunset',
      primary: 'rgb(249, 115, 22)',
      secondary: 'rgb(251, 146, 60)',
      accent: 'rgb(253, 186, 116)',
      gradient: 'from-orange-600 to-red-600'
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme;
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
      applyTheme(savedTheme);
    }
  }, []);

  const applyTheme = (theme: Theme) => {
    const root = document.documentElement;
    const themeColors = themes[theme];
    
    root.style.setProperty('--theme-primary', themeColors.primary);
    root.style.setProperty('--theme-secondary', themeColors.secondary);
    root.style.setProperty('--theme-accent', themeColors.accent);
  };

  const handleThemeChange = (theme: Theme) => {
    setCurrentTheme(theme);
    applyTheme(theme);
    localStorage.setItem('portfolio-theme', theme);
    setIsOpen(false);
  };

  return (
    <div className="fixed top-20 right-6 z-40">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 bg-gray-900/80 backdrop-blur-sm border border-purple-500/30 rounded-full hover:border-purple-400/50 transition-all duration-300 hover:scale-110"
        title="Change theme"
      >
        <Palette size={20} className="text-purple-300" />
      </button>

      {isOpen && (
        <div className="absolute top-14 right-0 bg-gray-900/95 backdrop-blur-sm border border-purple-500/30 rounded-lg p-4 min-w-[200px] animate-fade-in">
          <h3 className="text-sm font-light text-gray-300 mb-3 tracking-wide">Choose Theme</h3>
          <div className="space-y-2">
            {Object.entries(themes).map(([key, theme]) => (
              <button
                key={key}
                onClick={() => handleThemeChange(key as Theme)}
                className={`w-full flex items-center space-x-3 p-2 rounded-lg transition-all duration-300 hover:bg-gray-800/50 ${
                  currentTheme === key ? 'bg-gray-800/70 border border-purple-500/30' : ''
                }`}
              >
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: theme.primary }}
                />
                <span className="text-sm text-gray-300">{theme.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
