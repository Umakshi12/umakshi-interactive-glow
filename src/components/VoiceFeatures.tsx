
import React, { useState, useEffect } from 'react';
import { Mic, MicOff, Volume2, VolumeX, Play, Pause } from 'lucide-react';

const VoiceFeatures = () => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);
  const [transcript, setTranscript] = useState('');
  const [recognition, setRecognition] = useState<any>(null);

  // Initialize speech recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      
      recognitionInstance.continuous = true;
      recognitionInstance.interimResults = true;
      recognitionInstance.lang = 'en-US';

      recognitionInstance.onresult = (event: any) => {
        let finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          }
        }
        if (finalTranscript) {
          setTranscript(finalTranscript);
          handleVoiceCommand(finalTranscript.toLowerCase());
        }
      };

      recognitionInstance.onend = () => {
        setIsListening(false);
      };

      setRecognition(recognitionInstance);
    }
  }, []);

  const handleVoiceCommand = (command: string) => {
    console.log('Voice command received:', command);
    
    // Navigation commands
    if (command.includes('about')) {
      navigateToSection('about');
      speak('Navigating to About section');
    } else if (command.includes('projects')) {
      navigateToSection('projects');
      speak('Showing my projects');
    } else if (command.includes('skills') || command.includes('tech')) {
      navigateToSection('techstack');
      speak('Displaying my technical skills');
    } else if (command.includes('contact')) {
      navigateToSection('contact');
      speak('Opening contact information');
    } else if (command.includes('experience')) {
      navigateToSection('experience');
      speak('Showing my work experience');
    } else if (command.includes('blog')) {
      navigateToSection('blog');
      speak('Opening my blog posts');
    } else if (command.includes('home') || command.includes('top')) {
      navigateToSection('hero');
      speak('Going to the top of the page');
    }
    // Information commands
    else if (command.includes('introduce') || command.includes('who are you')) {
      speak('Hi! I am Umakshi, a passionate full-stack developer with expertise in React, Node.js, and AI technologies. I love creating innovative web solutions.');
    } else if (command.includes('read about')) {
      speak('I am a dedicated software developer with experience in modern web technologies. I enjoy building user-friendly applications and exploring new technologies like AI and machine learning.');
    } else {
      speak('I heard you say: ' + command + '. Try saying navigate to about, projects, skills, or contact for navigation.');
    }

    // Clear transcript after processing
    setTimeout(() => setTranscript(''), 3000);
  };

  const navigateToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const speak = (text: string) => {
    if (!isEnabled) return;
    
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 0.8;
      
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      
      window.speechSynthesis.speak(utterance);
    }
  };

  const toggleListening = () => {
    if (!recognition) return;

    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      recognition.start();
      setIsListening(true);
      setTranscript('');
    }
  };

  const toggleSpeech = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const toggleVoiceFeatures = () => {
    setIsEnabled(!isEnabled);
    if (isListening) {
      recognition?.stop();
      setIsListening(false);
    }
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  // Don't render if speech recognition is not supported
  if (!recognition) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
      {/* Transcript display */}
      {transcript && (
        <div className="bg-gray-900/95 backdrop-blur-sm border border-purple-500/30 rounded-lg p-3 max-w-xs animate-fade-in">
          <p className="text-sm text-gray-300">
            <span className="text-purple-400">You said:</span> "{transcript}"
          </p>
        </div>
      )}

      {/* Voice controls */}
      <div className="flex space-x-2">
        {/* Speech toggle */}
        {isSpeaking && (
          <button
            onClick={toggleSpeech}
            className="p-3 bg-red-600/80 backdrop-blur-sm border border-red-500/50 rounded-full hover:border-red-400/70 transition-all duration-300 hover:scale-110"
            title="Stop speaking"
          >
            <Pause size={20} className="text-white" />
          </button>
        )}

        {/* Microphone toggle */}
        <button
          onClick={toggleListening}
          disabled={!isEnabled}
          className={`p-3 backdrop-blur-sm border rounded-full transition-all duration-300 hover:scale-110 ${
            isListening
              ? 'bg-red-600/80 border-red-500/50 hover:border-red-400/70'
              : isEnabled
              ? 'bg-purple-600/80 border-purple-500/50 hover:border-purple-400/70'
              : 'bg-gray-600/80 border-gray-500/50'
          }`}
          title={isListening ? 'Stop listening' : 'Start voice commands'}
        >
          {isListening ? (
            <MicOff size={20} className="text-white" />
          ) : (
            <Mic size={20} className={isEnabled ? 'text-white' : 'text-gray-400'} />
          )}
        </button>

        {/* Enable/disable voice features */}
        <button
          onClick={toggleVoiceFeatures}
          className={`p-3 backdrop-blur-sm border rounded-full transition-all duration-300 hover:scale-110 ${
            isEnabled
              ? 'bg-green-600/80 border-green-500/50 hover:border-green-400/70'
              : 'bg-gray-600/80 border-gray-500/50 hover:border-gray-400/70'
          }`}
          title={isEnabled ? 'Disable voice features' : 'Enable voice features'}
        >
          {isEnabled ? (
            <Volume2 size={20} className="text-white" />
          ) : (
            <VolumeX size={20} className="text-gray-400" />
          )}
        </button>
      </div>

      {/* Voice commands help */}
      {isListening && (
        <div className="bg-gray-900/95 backdrop-blur-sm border border-purple-500/30 rounded-lg p-4 max-w-sm animate-fade-in">
          <h4 className="text-purple-400 font-medium mb-2">Voice Commands:</h4>
          <ul className="text-xs text-gray-300 space-y-1">
            <li>• "Navigate to about/projects/skills/contact"</li>
            <li>• "Go to experience/blog/home"</li>
            <li>• "Who are you?" or "Introduce yourself"</li>
            <li>• "Read about"</li>
          </ul>
          <div className="mt-3 flex items-center space-x-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-400">Listening...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default VoiceFeatures;
