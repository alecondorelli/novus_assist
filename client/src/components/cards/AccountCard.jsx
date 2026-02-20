export default function AccountCard({ data }) {
  return (
    <div className="card-shine rounded-xl px-4 py-3.5 space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[11px] text-white/40 uppercase tracking-wider font-medium">Account</p>
          <p className="text-[14px] font-semibold text-white/90 mt-0.5">{data.name}</p>
        </div>
        <span className="text-[11px] font-medium text-teal bg-teal/10 px-2.5 py-1 rounded-full border border-teal/20">
          {data.accountType}
        </span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div>
          <p className="text-[10px] text-white/35 uppercase tracking-wider">Balance</p>
          <p className="text-[15px] font-semibold text-white/90 mt-0.5">
            £{typeof data.balance === 'number' ? data.balance.toLocaleString('en-GB', { minimumFractionDigits: 2 }) : data.balance}
          </p>
        </div>
        <div>
          <p className="text-[10px] text-white/35 uppercase tracking-wider">Monthly Fee</p>
          <p className="text-[15px] font-semibold text-white/90 mt-0.5">
            £{typeof data.monthlyFee === 'number' ? data.monthlyFee.toFixed(2) : data.monthlyFee}
          </p>
        </div>
        <div>
          <p className="text-[10px] text-white/35 uppercase tracking-wider">Card</p>
          <p className="text-[15px] font-semibold text-white/90 mt-0.5">
            ****{data.cardLastFour}
          </p>
        </div>
      </div>
      {data.nextPaymentDue && (
        <p className="text-[11px] text-white/35">
          Next payment due: {data.nextPaymentDue}
        </p>
      )}
    </div>
  );
}
