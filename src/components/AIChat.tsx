
import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Mic, MicOff, Volume2, VolumeX } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  isVoiceInput?: boolean;
}

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Umakshi's AI assistant. I can help answer questions about her experience, skills, and projects. You can type your question or use voice input. What would you like to know?",
      isBot: true
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [recognition, setRecognition] = useState<any>(null);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize speech recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = false;
      recognitionInstance.lang = 'en-US';

      recognitionInstance.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputMessage(transcript);
        setIsListening(false);
        // Auto-send voice input
        handleSendMessage(null, transcript, true);
      };

      recognitionInstance.onend = () => {
        setIsListening(false);
      };

      recognitionInstance.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      setRecognition(recognitionInstance);
    }
  }, []);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // Enhanced responses for better conversation
    if (input.includes('experience') || input.includes('work')) {
      return "Umakshi has extensive experience in full-stack development, working with React, Node.js, TypeScript, and modern web technologies. She has built scalable applications and has expertise in both frontend and backend development.";
    } else if (input.includes('skills') || input.includes('tech') || input.includes('technology')) {
      return "Umakshi's technical skills include React, TypeScript, Node.js, Express, PostgreSQL, MongoDB, Python, AI/ML integration, Docker, AWS, and modern web development practices. She's also experienced with tools like Git, Jest, and various CI/CD pipelines.";
    } else if (input.includes('projects') || input.includes('project')) {
      return "Umakshi has worked on several impressive projects including an AI-powered e-commerce platform with recommendation engines, real-time chat applications with WebRTC, and various full-stack web applications. Each project demonstrates her ability to integrate modern technologies effectively.";
    } else if (input.includes('contact') || input.includes('reach') || input.includes('email')) {
      return "You can reach out to Umakshi through the contact section on this portfolio. She's always open to discussing new opportunities, collaborations, or answering any technical questions you might have.";
    } else if (input.includes('education') || input.includes('background')) {
      return "Umakshi has a strong educational background in computer science and continues to stay updated with the latest technologies through continuous learning and hands-on project development.";
    } else if (input.includes('ai') || input.includes('artificial intelligence') || input.includes('machine learning')) {
      return "Umakshi has significant experience with AI and machine learning technologies. She has integrated AI features into web applications, worked with various ML models, and is passionate about leveraging AI to create innovative solutions.";
    } else if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return "Hello! I'm here to help you learn more about Umakshi's professional background, skills, and projects. Feel free to ask me anything about her experience, technical expertise, or work samples.";
    } else {
      return `Thank you for asking "${userInput}". Umakshi is a passionate full-stack developer with expertise in React, Node.js, and AI integration. She loves creating innovative web solutions and is always eager to take on new challenges. Would you like to know more about her specific skills, projects, or experience?`;
    }
  };

  const speak = (text: string) => {
    if (!voiceEnabled || !('speechSynthesis' in window)) return;
    
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 0.8;
    
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    
    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const handleSendMessage = (e: React.FormEvent | null, voiceInput?: string, isVoice = false) => {
    if (e) e.preventDefault();
    
    const messageText = voiceInput || inputMessage;
    if (!messageText.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: messageText,
      isBot: false,
      isVoiceInput: isVoice
    };

    // Generate bot response
    const botResponseText = generateBotResponse(messageText);
    const botResponse: Message = {
      id: messages.length + 2,
      text: botResponseText,
      isBot: true
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setInputMessage('');

    // If input was voice, provide voice output as well
    if (isVoice && voiceEnabled) {
      setTimeout(() => {
        speak(botResponseText);
      }, 500);
    }
  };

  const toggleListening = () => {
    if (!recognition || !voiceEnabled) return;

    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      setInputMessage('');
      recognition.start();
      setIsListening(true);
    }
  };

  const toggleVoice = () => {
    setVoiceEnabled(!voiceEnabled);
    if (isSpeaking) {
      stopSpeaking();
    }
    if (isListening) {
      recognition?.stop();
      setIsListening(false);
    }
  };

  return (
    <>
      {/* Chat toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-purple-500/25"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 h-96 bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-lg border border-purple-500/30 rounded-lg shadow-2xl flex flex-col">
          {/* Chat header */}
          <div className="p-4 border-b border-purple-500/20">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white font-semibold">Chat with Umakshi's AI</h3>
                <p className="text-gray-400 text-sm">Type or speak your questions</p>
              </div>
              <div className="flex items-center space-x-2">
                {/* Voice toggle */}
                <button
                  onClick={toggleVoice}
                  className={`p-2 rounded-lg transition-colors ${
                    voiceEnabled 
                      ? 'bg-green-600/30 text-green-400 hover:bg-green-600/50' 
                      : 'bg-gray-600/30 text-gray-400 hover:bg-gray-600/50'
                  }`}
                  title={voiceEnabled ? 'Voice enabled' : 'Voice disabled'}
                >
                  {voiceEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
                </button>
                
                {/* Stop speaking button */}
                {isSpeaking && (
                  <button
                    onClick={stopSpeaking}
                    className="p-2 bg-red-600/30 text-red-400 rounded-lg hover:bg-red-600/50 transition-colors"
                    title="Stop speaking"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg text-sm ${
                    message.isBot
                      ? 'bg-gradient-to-r from-purple-600/30 to-cyan-600/30 border border-purple-500/30 text-white'
                      : message.isVoiceInput
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
                      : 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white'
                  }`}
                >
                  {message.text}
                  {message.isVoiceInput && (
                    <div className="mt-1 flex items-center text-xs opacity-75">
                      <Mic size={12} className="mr-1" />
                      Voice input
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-purple-500/20">
            {isListening && (
              <div className="mb-2 p-2 bg-red-600/20 border border-red-500/30 rounded-lg text-center">
                <div className="flex items-center justify-center space-x-2 text-red-400 text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span>Listening... Speak now</span>
                </div>
              </div>
            )}
            
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder={isListening ? "Listening..." : "Type your message..."}
                disabled={isListening}
                className="flex-1 px-3 py-2 bg-gray-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none text-sm disabled:opacity-50"
              />
              
              {/* Voice input button */}
              {recognition && voiceEnabled && (
                <button
                  type="button"
                  onClick={toggleListening}
                  className={`p-2 rounded-lg transition-colors ${
                    isListening
                      ? 'bg-red-600 hover:bg-red-500 text-white'
                      : 'bg-green-600/80 hover:bg-green-500 text-white'
                  }`}
                  title={isListening ? 'Stop listening' : 'Start voice input'}
                >
                  {isListening ? <MicOff size={16} /> : <Mic size={16} />}
                </button>
              )}
              
              {/* Send button */}
              <button
                type="submit"
                disabled={isListening || (!inputMessage.trim())}
                className="p-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={16} />
              </button>
            </div>
            
            {recognition && voiceEnabled && (
              <p className="text-xs text-gray-500 mt-2 text-center">
                Click the mic to speak, or type your message
              </p>
            )}
          </form>
        </div>
      )}
    </>
  );
};

export default AIChat;
