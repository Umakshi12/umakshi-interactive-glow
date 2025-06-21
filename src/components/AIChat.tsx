
import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Umakshi's AI assistant. I can help answer questions about her experience, skills, and projects. What would you like to know?",
      isBot: true
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false
    };

    // Simple bot response (replace with your trained AI model)
    const botResponse = {
      id: messages.length + 2,
      text: "Thanks for your question! This AI is ready to be connected to your trained model. For now, I can tell you that Umakshi is passionate about full-stack development and AI integration.",
      isBot: true
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setInputMessage('');
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
            <h3 className="text-white font-semibold">Chat with Umakshi's AI</h3>
            <p className="text-gray-400 text-sm">Ask about skills, experience, or projects</p>
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
                      : 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-purple-500/20">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 bg-gray-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none text-sm"
              />
              <button
                type="submit"
                className="p-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white rounded-lg transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AIChat;
