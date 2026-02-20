const suggestions = [
  { text: "I don't recognise a charge", icon: "🔍" },
  { text: "I want to cancel my account", icon: "✕" },
  { text: "Is this transaction fraudulent?", icon: "🛡" },
  { text: "Help me choose a savings product", icon: "💰" },
  { text: "Ich möchte mein Konto kündigen", icon: "🌍" },
];

export default function SuggestionChips({ onSelect }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {suggestions.map((s) => (
        <button
          key={s.text}
          onClick={() => onSelect(s.text)}
          className="glass chip-glow text-left text-[12.5px] font-medium text-white/70 rounded-xl px-4 py-3 hover:text-white hover:border-teal/30 transition-all duration-200 cursor-pointer inline-flex items-center gap-2"
        >
          <span className="text-sm opacity-60">{s.icon}</span>
          {s.text}
        </button>
      ))}
    </div>
  );
}
