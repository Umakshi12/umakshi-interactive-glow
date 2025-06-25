
import React, { useState, useEffect } from 'react';
import { Palette } from 'lucide-react';

type Theme = 'purple' | 'blue' | 'green' | 'orange';

const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState<Theme>('purple');
  const [isOpen, setIsOpen] = useState(false);

  const themes = {
    purple: {
      name: 'Purple',
      primary: '147, 51, 234',
      secondary: '168, 85, 247',
      accent: '196, 181, 253',
      gradient: 'from-purple-600 to-purple-800'
    },
    blue: {
      name: 'Ocean',
      primary: '59, 130, 246',
      secondary: '96, 165, 250',
      accent: '147, 197, 253',
      gradient: 'from-blue-600 to-cyan-600'
    },
    green: {
      name: 'Nature',
      primary: '34, 197, 94',
      secondary: '74, 222, 128',
      accent: '134, 239, 172',
      gradient: 'from-green-600 to-emerald-600'
    },
    orange: {
      name: 'Sunset',
      primary: '249, 115, 22',
      secondary: '251, 146, 60',
      accent: '253, 186, 116',
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
    
    root.style.setProperty('--theme-primary', `rgb(${themeColors.primary})`);
    root.style.setProperty('--theme-secondary', `rgb(${themeColors.secondary})`);
    root.style.setProperty('--theme-accent', `rgb(${themeColors.accent})`);
    
    // Update body background gradient
    document.body.style.background = `linear-gradient(135deg, #0a0a0a 0%, rgba(${themeColors.primary}, 0.1) 50%, #0a0a0a 100%)`;
  };

  const handleThemeChange = (theme: Theme) => {
    setCurrentTheme(theme);
    applyTheme(theme);
    localStorage.setItem('portfolio-theme', theme);
    setIsOpen(false);
  };

  const currentThemeData = themes[currentTheme];

  return (
    <div className="fixed top-20 right-6 z-40">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 bg-gray-900/80 backdrop-blur-sm border theme-border rounded-full hover:scale-110 transition-all duration-300"
        style={{ borderColor: `rgb(${currentThemeData.primary})` }}
        title="Change theme"
      >
        <Palette size={20} style={{ color: `rgb(${currentThemeData.accent})` }} />
      </button>

      {isOpen && (
        <div className="absolute top-14 right-0 bg-gray-900/95 backdrop-blur-sm border theme-border rounded-lg p-4 min-w-[200px] animate-fade-in"
             style={{ borderColor: `rgb(${currentThemeData.primary})` }}>
          <h3 className="text-sm font-light text-gray-300 mb-3 tracking-wide">Choose Theme</h3>
          <div className="space-y-2">
            {Object.entries(themes).map(([key, theme]) => (
              <button
                key={key}
                onClick={() => handleThemeChange(key as Theme)}
                className={`w-full flex items-center space-x-3 p-2 rounded-lg transition-all duration-300 hover:bg-gray-800/50 ${
                  currentTheme === key ? 'bg-gray-800/70 border' : ''
                }`}
                style={currentTheme === key ? { borderColor: `rgb(${theme.primary})` } : {}}
              >
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: `rgb(${theme.primary})` }}
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
