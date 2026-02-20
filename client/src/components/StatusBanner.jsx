export default function StatusBanner({ statuses }) {
  const isVerified = statuses.some((s) => s.type === 'verified');

  return (
    <div className="px-5 py-1.5 border-b border-white/5">
      <div className="max-w-[800px] mx-auto flex items-center gap-2">
        <span className={`w-1.5 h-1.5 rounded-full ${isVerified ? 'bg-emerald-500' : 'bg-red-400/70'}`} />
        <span className={`text-[11px] ${isVerified ? 'text-emerald-500/70' : 'text-red-400/50'}`}>
          {isVerified ? 'Verified' : 'Unverified'}
        </span>
      </div>
    </div>
  );
}
