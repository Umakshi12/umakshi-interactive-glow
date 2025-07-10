import React, { useState, useEffect, useRef } from "react";
import { X, Send, Mic, MicOff, Volume2, VolumeX, MessageCircle } from "lucide-react";
import logoImg from '../assets/logo.png';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  isVoiceInput?: boolean;
}

// Utility: Fuzzy match function (Levenshtein distance based)
function getSimilarity(a: string, b: string) {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if (a === b) return 1;
  if (a.length === 0 || b.length === 0) return 0;
  let matrix = Array(a.length + 1).fill(null).map(() => Array(b.length + 1).fill(null));
  for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
  for (let j = 0; j <= b.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + indicator
      );
    }
  }
  const distance = matrix[a.length][b.length];
  return 1 - distance / Math.max(a.length, b.length);
}


// Portfolio data for strict Q&A
const portfolioData = [
  {
    keywords: [
      'experience', 'work', 'professional experience', 'what is your experience', 'tell me about your experience', 'describe your work experience', 'work history'
    ],
    answer: "Umakshi has extensive experience in full-stack development, working with React, Node.js, TypeScript, and modern web technologies. She has built scalable applications and has expertise in both frontend and backend development."
  },
  {
    keywords: [
      'skills', 'technical skills', 'main skills', 'technologies', 'what are your skills', 'tell me about your skills', 'describe your skills', 'core skills', 'key skills'
    ],
    answer: "My core technical skills include Python, Pandas, Scikit-Learn, Flask, Docker, CI/CD pipelines, MySQL, and prompt engineering for LLMs."
  },
  {
    keywords: [
      'projects', 'project', 'major projects', 'what are your projects', 'describe your projects', 'tell me about your projects', 'notable projects', 'key projects', 'ayurvedic herbs', 'herbs classifier', 'chatbot'
    ],
    answer: "My major projects include enhancing mICRa, developing an Ayurvedic herbs classifier using computer vision, and building a personalized conversational AI chatbot."
  },
  {
    keywords: [
      'contact', 'how can I contact you', 'how to contact', 'reach out', 'get in touch', 'contact information'
    ],
    answer: "You can reach out to Umakshi through the contact section on this portfolio. She's always open to discussing new opportunities, collaborations, or answering any technical questions you might have."
  },
  {
    keywords: [
      'education', 'educational background', 'degree', 'university', 'cgpa', 'what is your education', 'tell me about your education', 'describe your education', 'background'
    ],
    answer: "Umakshi has a strong educational background in Electronics and Communication Engineering and continues to stay updated with the latest technologies through continuous learning and hands-on project development. She holds a B.Tech in Electronics and Communication Engineering from UIET, Kurukshetra University, graduating with a CGPA of 8.54."
  },
  {
    keywords: [
      'ai', 'artificial intelligence', 'machine learning', 'ai experience', 'ml experience', 'what is your ai experience', 'describe your ai experience', 'tell me about your ai experience'
    ],
    answer: "Umakshi has significant experience with AI and machine learning technologies. She has integrated AI features into web applications, worked with various ML models, and is passionate about leveraging AI to create innovative solutions."
  },
  {
    keywords: [
      'hello', 'hi', 'hey', 'greetings', 'say hello', 'introduce yourself', 'who are you'
    ],
    answer: "Hello! I'm here to help you learn more about Umakshi's professional background, skills, and projects. You can also use voice commands like 'navigate to about' or 'show projects' to navigate the portfolio. Feel free to ask me anything!"
  },
  {
    keywords: [
      'previous role', 'previous position', 'what did you do', 'ai scientist', 'iassist', 'current role', 'current position', 'what is your current role', 'describe your current role', 'tell me about your current role'
    ],
    answer: "I worked as an AI Scientist at iAssist Innovations Labs, where I focused on developing advanced AI solutions for the insurance industry. My work included enhancing products like mICRa, automating processes, and improving system scalability."
  },
  {
    keywords: [
      'micra', 'icici lombard', 'product enhancement', 'microservices', 'monolithic', 'what is micra', 'describe micra', 'tell me about micra'
    ],
    answer: "mICRa is a collaborative product with ICICI Lombard. I led its enhancement by automating monitoring, integrating new features, and converting its architecture from monolithic to microservices for better scalability and maintainability."
  },
  {
    keywords: [
      'backend framework', 'fastapi', 'flask', 'django', 'backend experience', 'what backend frameworks do you know', 'describe your backend experience', 'tell me about your backend experience'
    ],
    answer: "I have professional experience with Flask and Django for backend development, including building RESTful APIs and microservices. While I haven't used FastAPI in production, I am eager to learn it."
  },
  {
    keywords: [
      'llm', 'prompt engineering', 'prompt', 'hallucinations', 'few-shot', 'chain of thought', 'llm experience', 'what is your prompt engineering experience', 'describe your prompt engineering', 'tell me about your prompt engineering'
    ],
    answer: "I specialize in prompt engineering for LLMs, using techniques like few-shot prompting and chain-of-thought reasoning to improve reliability and reduce hallucinations."
  },
  {
    keywords: [
      'rag', 'retrieval augmented generation', 'faiss', 'openai embeddings', 'hybrid search', 'rag system', 'what is your rag experience', 'describe your rag system', 'tell me about your rag system'
    ],
    answer: "I have designed a Retrieval Augmented Generation (RAG) system using FAISS and OpenAI embeddings, employing hybrid search and manual evaluation to ensure relevant, accurate answers."
  },
  {
    keywords: [
      'strengths', 'major strengths', 'what are your strengths', 'describe your strengths', 'tell me about your strengths'
    ],
    answer: "My strengths include adaptability, curiosity, working well under pressure, prompt engineering, and leveraging AI and Python for innovative solutions."
  },
  {
    keywords: [
      'multi-modal', 'multi modal', 'ocr', 'image captioning', 'text and images', 'multi-modal experience', 'describe your multi-modal work', 'tell me about your multi-modal projects'
    ],
    answer: "I have explored multi-modal projects combining text and images, such as OCR and image captioning, and am eager to gain more hands-on experience in this area."
  },
  {
    keywords: [
      'internship', 'intern', 'exposys', 'csir', 'oohr', 'shadovein', 'internship experience', 'describe your internships', 'tell me about your internships'
    ],
    answer: "I have interned as a Data Scientist at Exposys Data Labs, ML/AI Intern at CSIR-CSIO Chandigarh, Android Developer at OOHR Innovations, and Subject Matter Expert (Mathematics) at Shadovein."
  },
  {
    keywords: [
      'content writer', 'e-cell', 'event management', 'excelsior', 'kavach', 'hackathon', 'content writer experience', 'describe your event management', 'tell me about your event management'
    ],
    answer: "I served as Content Writer Lead at E-CELL, UIET, organizing major events like EXCELSIOR, KAVACH, and hackathons, gaining valuable experience in team coordination and event management."
  },
  {
    keywords: [
      'where are you from', 'hometown', 'born', 'brought up', 'karnal', 'kurukshetra', 'where do you live', 'where are you based', 'where were you born'
    ],
    answer: "I was born in Karnal and currently reside in Kurukshetra, Haryana."
  },
  {
    keywords: [
      'languages', 'programming languages', 'python', 'c', 'c++', 'what programming languages do you know', 'describe your programming languages', 'tell me about your programming languages'
    ],
    answer: "I am proficient in Python and have experience with C and C++."
  },
  {
    keywords: [
      'tools', 'developer tools', 'git', 'github', 'postman', 'vs code', 'what tools do you use', 'describe your developer tools', 'tell me about your developer tools'
    ],
    answer: "I regularly use developer tools such as Git, GitHub, Postman, and Visual Studio Code."
  },
  {
    keywords: [
      'database', 'mysql', 'what databases do you use', 'describe your database experience', 'tell me about your database experience'
    ],
    answer: "I have experience working with MySQL for database management."
  },
  {
    keywords: [
      'deep learning', 'cnn', 'keras', 'tensorflow', 'tflite', 'deep learning experience', 'describe your deep learning', 'tell me about your deep learning'
    ],
    answer: "In deep learning, I have worked with Convolutional Neural Networks (CNNs), TensorFlow, Keras, and deployed models using TensorFlow Lite (TFLite)."
  },
  {
    keywords: [
      'api', 'flask api', 'fastapi', 'django api', 'postman', 'api experience', 'describe your api work', 'tell me about your api work'
    ],
    answer: "I have built and tested APIs using Flask and Django, and used Postman for API testing."
  },
  {
    keywords: [
      'deployment', 'scaling', 'ci/cd', 'jenkins', 'netlify', 'automation', 'deployment experience', 'describe your deployment', 'tell me about your deployment'
    ],
    answer: "I have experience with CI/CD deployment using Jenkins and GitHub, and have deployed websites using Netlify. I also automate model training and deployment for scalability."
  },
  {
    keywords: [
      'genai', 'llm', 'large language model', 'api', 'genai experience', 'describe your genai work', 'tell me about your genai work'
    ],
    answer: "I have worked with LLM model APIs for GenAI applications."
  }
];

const fallbackAnswer = "Sorry, I can only answer questions about Umakshi's portfolio, experience, skills, and projects.";

// const PLAYAI_SCRIPT_URL = "https://unpkg.com/@play-ai/agent-web-sdk@ht";
// const PLAYAI_AGENT_ID = "jIT8aLRd4EDtNtzEr6ACT";

// declare global {
//   interface Window {
//     PlayAI?: any;
//   }
// }

// Voice command handler for navigation and special commands
const handleVoiceCommand = (input: string) => {
  const command = input.toLowerCase();
  console.log('Processing voice command:', command);

  const navigateToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (command.includes('navigate to') || command.includes('go to') || command.includes('show')) {
    if (command.includes('about')) {
      navigateToSection('about');
      return 'Navigating to About section';
    } else if (command.includes('projects')) {
      navigateToSection('projects');
      return 'Showing my projects';
    } else if (command.includes('skills') || command.includes('tech')) {
      navigateToSection('techstack');
      return 'Displaying my technical skills';
    } else if (command.includes('contact')) {
      navigateToSection('contact');
      return 'Opening contact information';
    } else if (command.includes('experience')) {
      navigateToSection('experience');
      return 'Showing my work experience';
    } else if (command.includes('blog')) {
      navigateToSection('blog');
      return 'Opening my blog posts';
    } else if (command.includes('home') || command.includes('top')) {
      navigateToSection('hero');
      return 'Going to the top of the page';
    }
  }

  if (command.includes('about') && !command.includes('tell me about')) {
    navigateToSection('about');
    return 'Navigating to About section';
  } else if (command.includes('projects') && !command.includes('tell me about')) {
    navigateToSection('projects');
    return 'Showing my projects';
  }

  if (command.includes('introduce') || command.includes('who are you')) {
    return 'Hi! I am Umakshi, a passionate full-stack developer with expertise in React, Node.js, and AI technologies. I love creating innovative web solutions and exploring new technologies.';
  } else if (command.includes('read about')) {
    return 'I am a dedicated software developer with experience in modern web technologies. I enjoy building user-friendly applications and exploring new technologies like AI and machine learning.';
  }

  return null;
};

const AIChat = () => {
  // --- Browser support checks ---
  const isSpeechRecognitionSupported = typeof window !== "undefined" &&
    ("webkitSpeechRecognition" in window || "SpeechRecognition" in window);

  const isSpeechSynthesisSupported = typeof window !== "undefined" &&
    "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Umakshi's AI assistant. I can help answer questions about her experience, skills, and projects. You can type your question or use voice input for both questions and navigation commands. What would you like to know?",
      isBot: true
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [recognition, setRecognition] = useState<any>(null);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [indianFemaleVoice, setIndianFemaleVoice] = useState<SpeechSynthesisVoice | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // --- Improved: Only create recognition instance once and cleanup ---
  useEffect(() => {
    if (!isSpeechRecognitionSupported) return;
    const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    const recognitionInstance = new SpeechRecognition();
    recognitionInstance.continuous = false;
    recognitionInstance.interimResults = false;
    recognitionInstance.lang = 'en-US';
    recognitionInstance.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInputMessage(transcript);
      setIsListening(false);
      handleSendMessage(null, transcript, true);
    };
    recognitionInstance.onend = () => setIsListening(false);
    recognitionInstance.onerror = () => setIsListening(false);
    setRecognition(recognitionInstance);
    // Cleanup
    return () => recognitionInstance.abort();
  }, [isSpeechRecognitionSupported]);

  // --- Improved: Wait for voices to be loaded before using speech synthesis ---
  useEffect(() => {
    if (!isSpeechSynthesisSupported) return;
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      // Try to find an Indian English female voice, fallback to any female, then any voice
      const preferred = voices.find(v =>
        ((v.lang && v.lang.toLowerCase().includes('en-in')) || (v.name && v.name.toLowerCase().includes('india')))
        && v.name.toLowerCase().includes('female')
      ) || voices.find(v =>
        (v.lang && v.lang.toLowerCase().includes('en-in'))
      ) || voices.find(v =>
        v.name.toLowerCase().includes('female')
      );
      setIndianFemaleVoice(preferred || voices[0] || null);
    };
    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();
  }, [isSpeechSynthesisSupported]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Update generateBotResponse to use handleVoiceCommand for voice input
  const generateBotResponse = (userInput: string, isVoice = false): string => {
    if (isVoice) {
      const voiceResult = handleVoiceCommand(userInput);
      if (voiceResult) return voiceResult;
    }
    const input = userInput.toLowerCase();
    let bestScore = 0;
    let bestAnswer = null;
    for (const entry of portfolioData) {
      for (const keyword of entry.keywords) {
        const score = getSimilarity(input, keyword);
        if (score > bestScore) {
          bestScore = score;
          bestAnswer = entry.answer;
        }
      }
    }
    if (bestScore > 0.3) {
      return bestAnswer!;
    }
    return fallbackAnswer;
  };

  const speak = (text: string) => {
    if (!voiceEnabled || !isSpeechSynthesisSupported) return;
    window.speechSynthesis.cancel();
    const utterance = new window.SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    utterance.pitch = 1.1;
    utterance.volume = 0.95;
    if (indianFemaleVoice) utterance.voice = indianFemaleVoice;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    if (isSpeechSynthesisSupported) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  // Update handleSendMessage to pass isVoice to generateBotResponse
  const handleSendMessage = (e: React.FormEvent | null, voiceInput?: string, isVoice = false) => {
    if (e) e.preventDefault();
    const messageText = voiceInput || inputMessage;
    if (!messageText.trim()) return;
    const userMessage: Message = {
      id: messages.length + 1,
      text: messageText,
      isBot: false,
      isVoiceInput: isVoice
    };
    const botResponseText = generateBotResponse(messageText, isVoice);
    const botResponse: Message = {
      id: messages.length + 2,
      text: botResponseText,
      isBot: true
    };
    setMessages(prev => [...prev, userMessage, botResponse]);
    setInputMessage('');
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
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-purple-500/25 overflow-hidden"
        style={{ width: '80px', height: '80px' }}
        aria-label="Open chat"
      >
        {isOpen ? (
          <X size={24} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" />
        ) : (
          <MessageCircle size={32} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" />
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 h-96 bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-lg border border-purple-500/30 rounded-lg shadow-2xl flex flex-col">
          {/* Chat header */}
          <div className="p-4 border-b border-purple-500/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img src={logoImg} alt="Logo" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Umakshi AI Assistant</h3>
                  <p className="text-gray-400 text-sm">Chat & navigate with voice</p>
                </div>
              </div>
              <button
                onClick={toggleVoice}
                className={`p-2 rounded-lg transition-colors ${voiceEnabled ? 'bg-green-600/30 text-green-400 hover:bg-green-600/50' : 'bg-gray-600/30 text-gray-400 hover:bg-gray-600/50'}`}
                title={voiceEnabled ? 'Voice enabled' : 'Voice disabled'}
              >
                {voiceEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
              </button>
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

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
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
          <form onSubmit={handleSendMessage} className="p-4 border-t border-purple-500/20 bg-gray-900/80">
            {isListening && (
              <div className="mb-2 p-2 bg-red-600/20 border border-red-500/30 rounded-lg">
                <div className="flex items-center justify-center space-x-2 text-red-400 text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span>Listening... Speak now</span>
                </div>
                <div className="mt-2 text-xs text-gray-400 text-center">
                  Try: "Navigate to projects" or "Tell me about skills"
                </div>
              </div>
            )}
            {/* --- Show browser support warnings --- */}
            {!isSpeechRecognitionSupported && (
              <div className="text-red-500 text-xs text-center mb-2">
                Voice input is not supported in this browser. Please use Chrome for best results.
              </div>
            )}
            {!isSpeechSynthesisSupported && (
              <div className="text-red-500 text-xs text-center mb-2">
                Voice output is not supported in this browser.
              </div>
            )}
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder={isListening ? "Listening..." : "Type or speak your message..."}
                disabled={isListening}
                className="flex-1 px-3 py-2 bg-gray-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none text-sm disabled:opacity-50"
              />
              {recognition && voiceEnabled && (
                <button
                  type="button"
                  onClick={toggleListening}
                  className={`p-2 rounded-lg transition-colors ${isListening ? 'bg-red-600 hover:bg-red-500 text-white' : 'bg-green-600/80 hover:bg-green-500 text-white'}`}
                  title={isListening ? 'Stop listening' : 'Start voice input'}
                >
                  {isListening ? <MicOff size={16} /> : <Mic size={16} />}
                </button>
              )}
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
                Voice commands: "Navigate to [section]" or ask questions
              </p>
            )}
          </form>
        </div>
      )}
    </>
  );
};

export default AIChat;
