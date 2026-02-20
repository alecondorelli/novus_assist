export default function ProductCard({ data }) {
  const features = data.features || [];

  return (
    <div className="card-shine rounded-xl px-4 py-3.5 space-y-3">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[14px] font-semibold text-white/90">{data.name}</p>
          <p className="text-[11px] text-white/40">{data.type}</p>
        </div>
        {data.rate && (
          <span className="text-[12px] font-semibold text-teal bg-teal/10 px-2.5 py-1 rounded-lg border border-teal/20 whitespace-nowrap">
            {data.rate}
          </span>
        )}
      </div>
      {features.length > 0 && (
        <ul className="space-y-1">
          {features.slice(0, 4).map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-[12px] text-white/60">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      )}
      {data.monthlyFee !== undefined && (
        <p className="text-[11px] text-white/35">
          {data.monthlyFee === 0 ? 'No monthly fee' : `£${data.monthlyFee.toFixed(2)}/month`}
        </p>
      )}
      {data.bestFor && (
        <p className="text-[11px] text-white/50 italic">
          Best for: {data.bestFor}
        </p>
      )}
    </div>
  );
}
