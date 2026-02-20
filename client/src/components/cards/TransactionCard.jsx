const statusColors = {
  completed: 'text-emerald-400 bg-emerald-400/10',
  pending: 'text-amber-400 bg-amber-400/10',
  flagged: 'text-red-400 bg-red-400/10',
};

const categoryIcons = {
  'Groceries': '🛒',
  'Transport': '🚇',
  'Shopping': '🛍',
  'Entertainment': '🎬',
  'Dining': '🍽',
  'Technology': '💻',
  'Travel': '✈️',
  'Health & Fitness': '💪',
  'Bills': '📄',
  'Transfer': '💸',
  'Unknown': '❓',
};

export default function TransactionCard({ data }) {
  const statusClass = statusColors[data.status] || statusColors.completed;
  const icon = categoryIcons[data.category] || '💳';

  return (
    <div className="card-shine rounded-xl px-4 py-3 space-y-2">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="text-base">{icon}</span>
          <div>
            <p className="text-[13px] font-medium text-white/90">{data.merchant}</p>
            {data.category && (
              <p className="text-[11px] text-white/40">{data.category}</p>
            )}
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          <p className="text-[14px] font-semibold text-white/90">
            £{typeof data.amount === 'number' ? data.amount.toFixed(2) : data.amount}
          </p>
          {data.date && (
            <p className="text-[11px] text-white/35">{data.date}</p>
          )}
        </div>
      </div>
      {data.status && (
        <div className="flex items-center justify-between">
          <span className={`text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full ${statusClass}`}>
            {data.status}
          </span>
        </div>
      )}
    </div>
  );
}
