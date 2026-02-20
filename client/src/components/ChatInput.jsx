export default function ChatInput({ value, onChange, onSubmit, disabled }) {
  return (
    <form onSubmit={onSubmit} className="flex items-center gap-2">
      <div className="flex-1 glass-strong rounded-xl">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Type your message..."
          disabled={disabled}
          className="w-full bg-transparent px-4 py-3 text-[13.5px] text-white placeholder-white/25 focus:outline-none disabled:opacity-40"
          autoFocus
        />
      </div>
      <button
        type="submit"
        disabled={disabled || !value.trim()}
        className="bg-teal hover:bg-teal-light text-navy font-semibold rounded-xl px-4 py-3 text-sm transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0 cursor-pointer shadow-lg shadow-teal/10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M3.105 2.288a.75.75 0 0 0-.826.95l1.414 4.926A1.5 1.5 0 0 0 5.135 9.25h6.115a.75.75 0 0 1 0 1.5H5.135a1.5 1.5 0 0 0-1.442 1.086l-1.414 4.926a.75.75 0 0 0 .826.95 28.897 28.897 0 0 0 15.293-7.154.75.75 0 0 0 0-1.114A28.897 28.897 0 0 0 3.105 2.288Z" />
        </svg>
      </button>
    </form>
  );
}
