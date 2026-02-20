export default function ActionConfirmationCard({ data }) {
  return (
    <div className="confirmation-card rounded-xl px-4 py-3.5 flex items-start gap-3">
      <div className="w-6 h-6 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center flex-shrink-0 mt-0.5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-emerald-400">
          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
        </svg>
      </div>
      <div>
        <p className="text-[13px] font-semibold text-white/90">{data.title}</p>
        <p className="text-[12px] text-white/50 mt-1 leading-relaxed">{data.detail}</p>
      </div>
    </div>
  );
}
