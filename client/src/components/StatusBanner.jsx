const statusConfig = {
  unverified: { color: 'bg-red-400', ring: 'ring-red-400/20' },
  verified: { color: 'bg-emerald-400', ring: 'ring-emerald-400/20' },
};

export default function StatusBanner({ statuses }) {
  const verificationStatus = statuses.find(
    (s) => s.type === 'unverified' || s.type === 'verified'
  ) || statuses[0];

  if (!verificationStatus) return null;

  const config = statusConfig[verificationStatus.type] || statusConfig.unverified;

  return (
    <div className="px-5 py-2 border-b border-white/5">
      <div className="max-w-3xl mx-auto flex items-center gap-2.5">
        <span className="text-[10px] font-medium text-white/30 uppercase tracking-widest mr-1">
          Status
        </span>
        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white/70 px-2.5 py-1 rounded-full bg-white/5 border border-white/8">
          <span className={`w-1.5 h-1.5 rounded-full ${config.color} status-dot-pulse ring-2 ${config.ring}`} />
          {verificationStatus.label}
        </span>
      </div>
    </div>
  );
}
