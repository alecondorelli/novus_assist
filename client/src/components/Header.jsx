export default function Header({ onClearChat, hasMessages }) {
  return (
    <header className="border-b border-white/5 px-5 py-3 flex items-center justify-between">
      <span className="text-[15px] font-semibold tracking-tight text-white">
        Novus
      </span>
      <div className="flex items-center gap-3">
        {hasMessages && (
          <button
            onClick={onClearChat}
            className="text-[11px] font-medium text-white/30 hover:text-white/60 transition-colors duration-200 cursor-pointer"
          >
            Clear
          </button>
        )}
      </div>
    </header>
  );
}
