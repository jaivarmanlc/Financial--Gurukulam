import { useState } from 'react';
import { Send, MessageCircle, X, ChevronDown } from 'lucide-react';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: 'Hello! I\'m Chanakya, your AI Advisor. I\'m here to help you learn about The Financial Gurukulam program and answer any questions you may have. What would you like to know?',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const commonQuestions = [
    'What is the tuition fee for Cohort 1 and what does it include?',
    'What is the program duration and schedule?',
    'Who can apply for the program?',
    'What happens after the program ends?',
  ];

  const aiResponses = {
    tuition: 'Cohort 1 tuition is ₹2,50,000 all-inclusive. This covers 3 months of luxury residential accommodation, gourmet dining, Wall Street software enterprise licenses, tailored executive attire, and direct C-suite mentorship.',
    duration: 'The program is a 3-month intensive residential accelerator designed to provide hands-on, real-world financial experience. The daily routine starts at 5 AM with structured learning and execution activities.',
    eligibility: 'We welcome ambitious individuals from various backgrounds - undergraduate students, graduates, working professionals, and entrepreneurs. The program is limited to 20 elite candidates per cohort.',
    career: 'After completing the program, you\'ll have direct access to our mentor network, job placement opportunities, and alumni community for ongoing mentorship and career development.',
  };

  const handleSendMessage = async (text) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: text,
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate AI response delay
    setTimeout(() => {
      let response = '';
      const lowerText = text.toLowerCase();

      if (lowerText.includes('tuition') || lowerText.includes('fee') || lowerText.includes('cost')) {
        response = aiResponses.tuition;
      } else if (lowerText.includes('duration') || lowerText.includes('schedule') || lowerText.includes('5 am')) {
        response = aiResponses.duration;
      } else if (lowerText.includes('eligibility') || lowerText.includes('apply') || lowerText.includes('who')) {
        response = aiResponses.eligibility;
      } else if (lowerText.includes('after') || lowerText.includes('placement') || lowerText.includes('job')) {
        response = aiResponses.career;
      } else {
        response = 'Great question! I\'m here to help. You can ask me about program details, curriculum, mentorship, career outcomes, and more. What else would you like to know about The Financial Gurukulam?';
      }

      const botMessage = {
        id: messages.length + 2,
        type: 'bot',
        text: response,
      };

      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 500);
  };

  const handleQuickQuestion = (question) => {
    handleSendMessage(question);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-yellow-500 hover:bg-yellow-600 text-gray-900 rounded-full p-4 shadow-lg transform transition hover:scale-110 active:scale-95"
      >
        <MessageCircle size={24} className="font-bold" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 w-full max-w-md">
      <div className="bg-[#0f1b2e] rounded-2xl shadow-2xl border border-yellow-500/20 flex flex-col h-[600px]">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 p-4 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center font-bold text-lg">
              🎯
            </div>
            <div>
              <h3 className="font-bold">Chanakya AI Concierge</h3>
              <p className="text-sm text-yellow-900">Online | Gurukulam Advisor</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-900 hover:text-gray-800"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map(message => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-4 py-3 rounded-lg ${
                  message.type === 'user'
                    ? 'bg-yellow-500 text-gray-900 rounded-br-none font-semibold'
                    : 'bg-slate-800 text-slate-100 rounded-bl-none border border-slate-700'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-slate-800 px-4 py-3 rounded-lg border border-slate-700 flex gap-2">
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Questions */}
        {messages.length === 1 && !isLoading && (
          <div className="px-4 py-3 border-t border-slate-700 max-h-48 overflow-y-auto">
            <p className="text-xs text-slate-400 mb-3 font-semibold">Popular Questions:</p>
            <div className="space-y-2">
              {commonQuestions.map((question, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuickQuestion(question)}
                  className="w-full text-left p-2 rounded bg-slate-900/50 hover:bg-slate-800 border border-slate-700 hover:border-yellow-500/50 text-xs text-slate-300 hover:text-yellow-400 transition"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="border-t border-slate-700 p-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage(inputValue);
                }
              }}
              placeholder="Ask Chanakya AI anything..."
              className="flex-1 px-3 py-2 rounded-lg bg-slate-900/50 border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-yellow-500 transition"
              disabled={isLoading}
            />
            <button
              onClick={() => handleSendMessage(inputValue)}
              disabled={isLoading || !inputValue.trim()}
              className="bg-yellow-500 hover:bg-yellow-600 disabled:bg-slate-700 disabled:cursor-not-allowed text-gray-900 p-2 rounded-lg transition"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
