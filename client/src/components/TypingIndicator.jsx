export default function TypingIndicator() {
  return (
    <div className="flex justify-start message-enter">
      <div className="bg-[#1C2432] rounded-xl px-5 py-4">
        <div className="flex items-center gap-1.5">
          <span className="typing-dot w-1.5 h-1.5 rounded-full bg-white/30" />
          <span className="typing-dot w-1.5 h-1.5 rounded-full bg-white/30" />
          <span className="typing-dot w-1.5 h-1.5 rounded-full bg-white/30" />
        </div>
      </div>
    </div>
  );
}
