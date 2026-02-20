import { useState, useRef, useEffect, useCallback } from 'react';
import Header from './components/Header';
import StatusBanner from './components/StatusBanner';
import ChatMessage from './components/ChatMessage';
import TypingIndicator from './components/TypingIndicator';
import SuggestionChips from './components/SuggestionChips';
import ChatInput from './components/ChatInput';
import HeroSection from './components/HeroSection';
import Toast from './components/Toast';
import RatingCard from './components/RatingCard';

const WELCOME_MESSAGE = {
  role: 'assistant',
  content:
    "Hi there! I'm the Novus AI assistant. I can help you with your account, transactions, disputes, and more. How can I help you today?",
  cards: [],
};

const STORAGE_KEY = 'novus-chat-state';
const API_URL = '/api/chat';

function loadSavedState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.messages?.length > 1) return parsed;
    }
  } catch {
    // ignore
  }
  return null;
}

function saveState(messages, statuses, rating) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ messages, statuses, rating }));
  } catch {
    // ignore
  }
}

export default function App() {
  const savedState = useRef(loadSavedState());
  const [messages, setMessages] = useState(
    savedState.current?.messages || [WELCOME_MESSAGE]
  );
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [statuses, setStatuses] = useState(
    savedState.current?.statuses || [{ type: 'unverified', label: 'Unverified' }]
  );
  const [showRating, setShowRating] = useState(false);
  const [rating, setRating] = useState(savedState.current?.rating || null);
  const [toast, setToast] = useState(
    savedState.current ? 'Welcome back! Your conversation has been restored.' : null
  );
  const messagesEndRef = useRef(null);
  const chatSectionRef = useRef(null);
  const hasUserSent = messages.some((m) => m.role === 'user');

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading, showRating]);

  useEffect(() => {
    if (messages.length > 1) {
      saveState(messages, statuses, rating);
    }
  }, [messages, statuses, rating]);

  const scrollToChat = useCallback(() => {
    chatSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  function clearChat() {
    setMessages([WELCOME_MESSAGE]);
    setStatuses([{ type: 'unverified', label: 'Unverified' }]);
    setShowRating(false);
    setRating(null);
    localStorage.removeItem(STORAGE_KEY);
    setToast('Conversation cleared.');
  }

  function handleRatingSubmit({ rating: stars, feedback }) {
    const ratingData = { stars, feedback, timestamp: new Date().toISOString() };
    setRating(ratingData);
    setShowRating(false);
  }

  async function sendMessage(text) {
    if (!text.trim() || isLoading) return;

    const userMessage = { role: 'user', content: text.trim(), cards: [] };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    try {
      const apiMessages = updatedMessages.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || `Server error (${res.status})`);
      }

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: data.response,
          cards: data.cards || [],
          confirmations: data.confirmations || [],
        },
      ]);

      if (data.showRating) {
        setShowRating(true);
      }

      if (data.actions?.length) {
        setStatuses((prev) => {
          const newStatuses = [...prev];
          for (const action of data.actions) {
            if (
              action.type === 'VERIFIED' &&
              !newStatuses.some((s) => s.type === 'verified')
            ) {
              const idx = newStatuses.findIndex((s) => s.type === 'unverified');
              if (idx !== -1) newStatuses.splice(idx, 1);
              newStatuses.unshift({ type: 'verified', label: 'Identity Verified' });
            }
          }
          return newStatuses;
        });
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: `I'm sorry, I encountered an issue: ${err.message}. Please try again.`,
          cards: [],
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    sendMessage(input);
  }

  return (
    <div className="h-screen overflow-y-auto scroll-smooth">
      {toast && <Toast message={toast} onDone={() => setToast(null)} />}

      <HeroSection onScrollToChat={scrollToChat} />

      <div ref={chatSectionRef} className="flex flex-col min-h-screen bg-mesh text-white">
        <Header onClearChat={clearChat} hasMessages={hasUserSent} />
        <StatusBanner statuses={statuses} />

        <main className="flex-1 overflow-y-auto chat-scroll">
          <div className="max-w-3xl mx-auto px-4 py-6 space-y-1">
            {messages.map((msg, i) => (
              <ChatMessage key={i} message={msg} />
            ))}
            {isLoading && <TypingIndicator />}
            {showRating && !rating && <RatingCard onSubmit={handleRatingSubmit} />}
            <div ref={messagesEndRef} />
          </div>
        </main>

        {!hasUserSent && (
          <div className="max-w-3xl mx-auto w-full px-4 pb-2">
            <SuggestionChips onSelect={sendMessage} />
          </div>
        )}

        <footer className="border-t border-white/5">
          <div className="max-w-3xl mx-auto px-4 py-3">
            <ChatInput
              value={input}
              onChange={setInput}
              onSubmit={handleSubmit}
              disabled={isLoading}
            />
            <p className="text-[11px] text-white/25 text-center mt-2">
              This is a demo. No real financial data is used.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
