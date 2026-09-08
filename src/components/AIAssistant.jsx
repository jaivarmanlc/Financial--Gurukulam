import { useState, useRef, useEffect } from 'react';
import { 
  Send, 
  X, 
  Bot, 
  User, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  PhoneCall, 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2, 
  ShieldCheck, 
  Rocket, 
  Clock, 
  Award,
  BookOpen
} from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: '🔥 All FAQs' },
  { id: 'fee', label: '💰 Fee & Seats' },
  { id: 'schedule', label: '⚡ 5 AM Schedule' },
  { id: 'curriculum', label: '🤖 AI & LBO Labs' },
  { id: 'placement', label: '🏆 Placements' },
  { id: 'location', label: '📍 Location' }
];

const SUGGESTIONS = [
  { text: 'What is the ₹90,000 tuition fee and what does it include?', cat: 'fee' },
  { text: 'What is the 5:00 AM Daily Discipline Protocol?', cat: 'schedule' },
  { text: 'How does 100% Placement Support & Referral work?', cat: 'placement' },
  { text: 'Where is the residential campus located?', cat: 'location' },
  { text: 'What AI tools and Wall Street LBO models will I build?', cat: 'curriculum' },
  { text: 'Who can apply? Is CA or Commerce degree mandatory?', cat: 'fee' },
];

// Granular Knowledge Base for Chanakya AI 2.0
const KNOWLEDGE_BASE = [
  {
    keywords: ['fee', 'tuition', 'cost', 'price', '90,000', '90k', 'payment', 'installment'],
    title: 'Program Fee & Inclusions',
    response: `The total program fee for Commerce Gurukulam is **₹90,000 (All-Inclusive)**.

✨ **What your investment covers:**
• 3-Month Luxury Residential Accommodation & Gourmet Dining
• Enterprise Licenses for Wall Street & Dalal Street Valuation Software
• Custom AI Prompt Engineering & Forensic Audit Lab Access
• 1-on-1 Mentorship with practicing CFOs & Investment Directors
• 100% Placement Referral Pipeline Access

Seats are strictly capped at **40 candidates per cohort** to ensure a 1:5 mentor-to-student ratio.`,
    actions: ['apply', 'whatsapp']
  },
  {
    keywords: ['location', 'chennai', 'where', 'place', 'bengaluru', 'city', 'address', 'campus'],
    title: 'Campus Location & Immersion',
    response: `The residential accelerator campus is located in **Chennai**, with hybrid options for remote immersion.

📍 **Location:** Chennai Executive Immersion Hub
🏢 **Setup:** State-of-the-art deal room terminal labs, CFO war rooms, and residential suites.`,
    actions: ['apply', 'whatsapp']
  },
  {
    keywords: ['5 am', '5am', 'schedule', 'routine', 'daily', 'timing', 'time', 'hours'],
    title: '5:00 AM Daily Execution Protocol',
    response: `The program operates on an intense **5:00 AM Elite Discipline Protocol**:

• **05:00 AM** — Mindset Conditioning & Morning Market Briefing
• **09:00 AM** — Live Wall Street & Dalal Street LBO Modeling
• **02:00 PM** — AI SEC Extraction & Forensic Audit Lab
• **06:00 PM** — CFO Mentor War Room & Boardroom Pitch Defenses

This daily rigor conditions you to think, model, and present like a top 1% deal-maker before the markets open.`,
    actions: ['apply']
  },
  {
    keywords: ['placement', 'job', 'salary', 'hiring', 'interview', 'referral', 'career', 'lpa', 'recruit'],
    title: '100% Placement Referral Pipeline',
    response: `We provide **100% Dedicated Placement Referral Support**.

🏆 **Career Outcomes & Hiring Partners:**
• Direct referral access to boutique Investment Banks, PE firms, VC funds, and Corporate Finance teams.
• Graduate with a verified portfolio of **7 institutional deal decks**.
• Undergo 1-on-1 boardroom pitch defenses reviewed by active CFO mentors.`,
    actions: ['apply', 'whatsapp']
  },
  {
    keywords: ['lbo', 'dcf', 'model', 'ai', 'curriculum', 'learn', 'syllabus', 'subjects', 'audit'],
    title: 'Live Deal Labs & AI Integration',
    response: `Zero textbooks. You build institutional-grade deal models from Day 1:

🤖 **Core Labs You Master:**
1. **Wall Street LBO Terminal Sandbox** (Debt sizing & MOIC waterfalls)
2. **Real-Time AI Voice Pitch Simulator** (Boardroom question defenses)
3. **VC Cap Table & Term Sheet Builder** (Dilution & Liquidation math)
4. **AI Financial Audit Lab** (Forensic review & SEC filing extraction)
5. **Advanced DCF & Intrinsic Valuation** (WACC & Comps analysis)`,
    actions: ['apply']
  },
  {
    keywords: ['eligibility', 'qualify', 'who', 'background', 'undergrad', 'graduate', 'ca', 'cfa', 'cs', 'student'],
    title: 'Candidate Eligibility & Cohort Selection',
    response: `Commerce Gurukulam accepts ambitious candidates from:

🎓 **Eligible Backgrounds:**
• Commerce & Finance Undergraduate Students
• Recent Commerce & MBA Graduates
• Early-career Working Professionals & Analysts
• CA, CFA, CS, and CMA Aspirants

Selection is based on career ambition, commitment to the 5:00 AM discipline, and 1-on-1 executive screening interview performance.`,
    actions: ['apply']
  },
  {
    keywords: ['contact', 'phone', 'whatsapp', 'email', 'number', 'reach', 'call', 'support'],
    title: 'Admissions Desk Contact',
    response: `You can reach our Executive Admissions Board directly:

📞 **WhatsApp / Phone:** +91 84288 81144
📧 **Email:** commercegurukulam1@gmail.com
📍 **Immersion Hub:** Chennai / Remote Learning

Our admissions team is online to assist with cohort slot reservations and screening interviews.`,
    actions: ['whatsapp', 'apply']
  }
];

export default function AIAssistant({ onApplyClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: `Hello! I am **Chanakya AI**, your Executive Admissions Concierge at **Commerce Gurukulam**.

I can answer any questions about our 3-Month Executive Accelerator, ₹90,000 tuition, 5:00 AM discipline, live LBO labs, or 100% placement pipeline in Chennai.

How can I assist your career today?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      actions: ['apply', 'whatsapp']
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  // Voice Text-to-Speech handler
  const speakMessage = (text) => {
    if (!('speechSynthesis' in window)) return;
    
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const cleanText = text.replace(/[*#_`•]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const handleSendMessage = (userText) => {
    if (!userText.trim()) return;

    const userMsg = {
      id: Date.now(),
      type: 'user',
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    setTimeout(() => {
      const lower = userText.toLowerCase();
      let matchedEntry = KNOWLEDGE_BASE.find(item => 
        item.keywords.some(kw => lower.includes(kw))
      );

      let responseText = '';
      let actions = ['apply', 'whatsapp'];

      if (matchedEntry) {
        responseText = matchedEntry.response;
        actions = matchedEntry.actions || actions;
      } else {
        responseText = `Great question regarding **Commerce Gurukulam**!

Our 3-Month Executive Residential Accelerator in **Chennai** is designed strictly for 40 candidates. 

You will build live Wall Street LBO models, master AI SEC filing extractions, and participate in 5:00 AM CFO mentor war rooms with **100% Placement Support**.

Would you like to schedule a 1-on-1 screening call or connect on WhatsApp?`;
      }

      const botMsg = {
        id: Date.now() + 1,
        type: 'bot',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actions: actions
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsLoading(false);
    }, 400);
  };

  const filteredSuggestions = SUGGESTIONS.filter(
    s => activeTab === 'all' || s.cat === activeTab
  );

  return (
    <>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-gradient-to-r from-yellow-400 via-amber-400 to-emerald-400 text-slate-950 px-4 py-3 rounded-full shadow-[0_0_35px_rgba(234,179,8,0.4)] transition transform hover:scale-105 group cursor-pointer"
        >
          <div className="relative flex items-center justify-center w-8 h-8 bg-slate-950 rounded-full text-yellow-400">
            <Sparkles size={18} className="animate-pulse" />
          </div>
          <div className="text-left pr-1">
            <span className="block text-xs font-black uppercase tracking-wider leading-none">Chanakya AI</span>
            <span className="text-[10px] text-slate-900 font-bold">Ask Admissions AI</span>
          </div>
        </button>
      )}

      {/* Chat Window Modal */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-[calc(100%-2rem)] sm:w-[400px] md:w-[440px] shadow-[0_0_60px_rgba(0,0,0,0.8)] rounded-2xl overflow-hidden border border-yellow-500/30 bg-[#07111e] backdrop-blur-xl flex flex-col h-[560px] md:h-[620px]">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-950 via-[#0b172a] to-slate-950 p-4 border-b border-yellow-500/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-emerald-400 p-0.5 shadow-[0_0_15px_rgba(234,179,8,0.3)]">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-yellow-400">
                  <Bot size={22} />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-slate-950 animate-pulse" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-100 flex items-center gap-1.5">
                  Chanakya AI 2.0 <span className="text-[9px] bg-yellow-500/20 text-yellow-300 border border-yellow-400/30 px-1.5 py-0.2 rounded-md uppercase font-semibold">Pro Concierge</span>
                </h3>
                <p className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" /> Executive Admissions Advisor
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => speakMessage(messages[messages.length - 1]?.text || '')}
                className={`p-2 rounded-lg transition cursor-pointer ${isSpeaking ? 'bg-yellow-400/20 text-yellow-300 animate-bounce' : 'text-slate-400 hover:text-white'}`}
                title="Listen to AI voice"
              >
                {isSpeaking ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-400 hover:text-white transition cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex gap-1.5 p-2 bg-slate-950/90 border-b border-white/5 overflow-x-auto no-scrollbar scrollbar-none">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider whitespace-nowrap transition cursor-pointer ${
                  activeTab === cat.id
                    ? 'bg-gradient-to-r from-yellow-400 to-emerald-400 text-slate-950 shadow-sm'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs md:text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.type === 'bot' && (
                  <div className="w-7 h-7 rounded-lg bg-yellow-500/10 border border-yellow-400/30 text-yellow-300 flex items-center justify-center shrink-0 mt-1">
                    <Bot size={14} />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 leading-relaxed ${
                    msg.type === 'user'
                      ? 'bg-gradient-to-r from-yellow-400 to-amber-400 text-slate-950 rounded-br-xs font-semibold shadow-md'
                      : 'bg-slate-900/90 border border-slate-800 text-slate-200 rounded-bl-xs shadow-md'
                  }`}
                >
                  {/* Rich Text Format formatting */}
                  <div className="space-y-1.5 whitespace-pre-wrap">
                    {msg.text.split('\n').map((line, idx) => {
                      if (line.startsWith('• ') || line.startsWith('* ')) {
                        return (
                          <div key={idx} className="flex items-start gap-1.5 pl-1">
                            <span className="text-emerald-400 font-bold">•</span>
                            <span>{line.substring(2)}</span>
                          </div>
                        );
                      }
                      return <p key={idx}>{line}</p>;
                    })}
                  </div>

                  {/* Interactive Action Buttons inside Bot Message */}
                  {msg.type === 'bot' && msg.actions && (
                    <div className="mt-3 pt-2.5 border-t border-slate-800 flex flex-wrap gap-2">
                      {msg.actions.includes('apply') && (
                        <button
                          onClick={() => {
                            setIsOpen(false);
                            if (onApplyClick) onApplyClick();
                          }}
                          className="px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-emerald-400 text-slate-950 font-bold text-[11px] rounded-lg transition cursor-pointer flex items-center gap-1 hover:scale-105"
                        >
                          <Rocket size={12} /> Apply for Screening
                        </button>
                      )}
                      {msg.actions.includes('whatsapp') && (
                        <a
                          href="https://wa.me/918428881144?text=Hi%20Chanakya%20AI%20Advisor!%20I%20have%20questions%20about%20Commerce%20Gurukulam."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 hover:bg-emerald-500/30 font-bold text-[11px] rounded-lg transition cursor-pointer flex items-center gap-1"
                        >
                          <MessageSquare size={12} /> WhatsApp Desk (+91 84288 81144)
                        </a>
                      )}
                    </div>
                  )}

                  <span className={`block text-[9px] mt-1.5 ${msg.type === 'user' ? 'text-slate-800 text-right' : 'text-slate-500'}`}>
                    {msg.timestamp}
                  </span>
                </div>

                {msg.type === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-yellow-400 text-slate-950 flex items-center justify-center shrink-0 mt-1 font-bold text-xs">
                    <User size={14} />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center gap-2 text-slate-400 text-xs">
                <div className="w-7 h-7 rounded-lg bg-yellow-500/10 border border-yellow-400/30 text-yellow-300 flex items-center justify-center shrink-0">
                  <Bot size={14} />
                </div>
                <div className="bg-slate-900 border border-slate-800 px-3 py-2 rounded-xl flex gap-1.5 items-center">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                  <span className="text-[10px] text-slate-400 ml-1">Chanakya is analyzing...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions Chips */}
          {filteredSuggestions.length > 0 && (
            <div className="px-3 py-2 bg-slate-950/80 border-t border-slate-800/80">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1">
                <Sparkles size={10} className="text-yellow-400" /> Suggested Queries:
              </p>
              <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-1">
                {filteredSuggestions.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(item.text)}
                    className="text-left px-2.5 py-1 rounded-md bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-yellow-400/40 text-[11px] text-slate-300 whitespace-nowrap transition shrink-0 cursor-pointer"
                  >
                    {item.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Box */}
          <div className="p-3 bg-slate-950 border-t border-slate-800">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask Chanakya about fees, 5 AM discipline, Chennai campus..."
                className="flex-1 bg-slate-900/90 border border-slate-700/80 focus:border-yellow-400 text-slate-100 rounded-xl px-3.5 py-2.5 text-xs md:text-sm placeholder-slate-500 focus:outline-none transition"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="bg-gradient-to-r from-yellow-400 to-emerald-400 hover:scale-105 disabled:opacity-40 disabled:hover:scale-100 text-slate-950 p-2.5 rounded-xl font-bold transition cursor-pointer shrink-0"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
