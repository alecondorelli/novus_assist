import { useState, useEffect } from 'react';

export default function Toast({ message, onDone }) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setExiting(true), 2500);
    const removeTimer = setTimeout(() => onDone(), 3000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [onDone]);

  return (
    <div className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 ${exiting ? 'toast-exit' : 'toast-enter'}`}>
      <div className="bg-[#1C2432] border border-white/8 rounded-xl px-5 py-2.5 text-[13px] text-white/70">
        {message}
      </div>
    </div>
  );
}
