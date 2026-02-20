export default function TypingIndicator() {
  return (
    <div className="flex justify-start mb-4 message-enter">
      <div className="w-7 h-7 rounded-full bg-teal/15 border border-teal/20 flex items-center justify-center flex-shrink-0 mr-2.5 mt-1">
        <svg viewBox="0 0 32 32" fill="none" className="w-3.5 h-3.5">
          <path
            d="M4 16C4 9.37 9.37 4 16 4C22.63 4 28 9.37 28 16C28 22.63 22.63 28 16 28"
            stroke="#00C9A7"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="16" cy="16" r="3.5" fill="#00C9A7" />
        </svg>
      </div>
      <div className="glass-strong rounded-2xl rounded-bl-md px-5 py-4">
        <div className="flex items-center gap-1.5">
          <span className="typing-dot w-2 h-2 rounded-full bg-teal/60" />
          <span className="typing-dot w-2 h-2 rounded-full bg-teal/60" />
          <span className="typing-dot w-2 h-2 rounded-full bg-teal/60" />
        </div>
      </div>
    </div>
  );
}
