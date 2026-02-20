const statusColors = {
  completed: 'text-emerald-400/80 bg-emerald-400/8',
  pending: 'text-amber-400/80 bg-amber-400/8',
  flagged: 'text-red-400/80 bg-red-400/8',
};

export default function TransactionCard({ data }) {
  const statusClass = statusColors[data.status] || statusColors.completed;

  return (
    <div className="data-card rounded-xl px-5 py-3.5 space-y-2">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[13px] font-medium text-white/90">{data.merchant}</p>
          {data.category && (
            <p className="text-[11px] text-white/35 mt-0.5">{data.category}</p>
          )}
        </div>
        <div className="text-right flex-shrink-0">
          <p className="text-[14px] font-semibold text-white/90">
            £{typeof data.amount === 'number' ? data.amount.toFixed(2) : data.amount}
          </p>
          {data.date && (
            <p className="text-[11px] text-white/30 mt-0.5">{data.date}</p>
          )}
        </div>
      </div>
      {data.status && (
        <span className={`inline-block text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full ${statusClass}`}>
          {data.status}
        </span>
      )}
    </div>
  );
}
