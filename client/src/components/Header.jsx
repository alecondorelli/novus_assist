export default function Header({ onClearChat, hasMessages }) {
  return (
    <header className="glass border-b border-white/5 px-5 py-3 flex items-center justify-between">
      <span className="text-lg font-semibold tracking-tight text-white">
        Novus
      </span>
      <div className="flex items-center gap-3">
        {hasMessages && (
          <button
            onClick={onClearChat}
            className="text-[11px] font-medium text-white/40 hover:text-white/70 px-2.5 py-1 rounded-full border border-white/10 hover:border-white/20 bg-white/5 transition-all duration-200 cursor-pointer flex items-center gap-1.5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3">
              <path fillRule="evenodd" d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z" clipRule="evenodd" />
            </svg>
            Clear
          </button>
        )}
        <span className="text-[11px] font-medium text-teal/80 px-3 py-1 rounded-full border border-teal/20 bg-teal/5">
          AI Assistant Demo
        </span>
      </div>
    </header>
  );
}
