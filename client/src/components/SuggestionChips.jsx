const suggestions = [
  "I don't recognise a charge",
  "I want to cancel my account",
  "Is this transaction fraudulent?",
  "Help me choose a savings product",
  "Ich möchte mein Konto kündigen",
];

export default function SuggestionChips({ onSelect }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {suggestions.map((s) => (
        <button
          key={s}
          onClick={() => onSelect(s)}
          className="text-[13px] text-white/50 rounded-lg px-4 py-2.5 border border-white/10 hover:border-white/25 hover:text-white/70 transition-all duration-200 cursor-pointer"
        >
          {s}
        </button>
      ))}
    </div>
  );
}
