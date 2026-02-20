const suggestions = [
  "I don't recognise a charge",
  "I want to cancel my account",
  "Is this transaction fraudulent?",
  "Help me choose a savings product",
];

export default function SuggestionChips({ onSelect }) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {suggestions.map((s) => (
        <button
          key={s}
          onClick={() => onSelect(s)}
          className="glass chip-glow text-left text-[12.5px] font-medium text-white/70 rounded-xl px-4 py-3 hover:text-white hover:border-teal/30 transition-all duration-200 cursor-pointer"
        >
          {s}
        </button>
      ))}
    </div>
  );
}
