import TransactionCard from './cards/TransactionCard';
import AccountCard from './cards/AccountCard';
import ProductCard from './cards/ProductCard';
import ActionConfirmationCard from './cards/ActionConfirmationCard';

function renderCard(card, index) {
  switch (card.type) {
    case 'transaction':
      return <TransactionCard key={index} data={card.data} />;
    case 'account':
      return <AccountCard key={index} data={card.data} />;
    case 'product':
      return <ProductCard key={index} data={card.data} />;
    default:
      return null;
  }
}

export default function ChatMessage({ message }) {
  const isUser = message.role === 'user';
  const cards = message.cards || [];
  const confirmations = message.confirmations || [];

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 message-enter`}>
      {!isUser && (
        <div className="w-7 h-7 rounded-full bg-teal/15 border border-teal/20 flex items-center justify-center flex-shrink-0 mr-2.5 mt-1">
          <svg viewBox="0 0 32 32" fill="none" className="w-3.5 h-3.5">
            <path
              d="M4 16C4 9.37 9.37 4 16 4C22.63 4 28 9.37 28 16C28 22.63 22.63 28 16 28"
              stroke="#00C9A7"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="16" cy="16" r="3.5" fill="#00C9A7" />
          </svg>
        </div>
      )}
      <div className="max-w-[80%] space-y-2">
        <div
          className={`rounded-2xl px-4 py-3 text-[13.5px] leading-relaxed whitespace-pre-wrap ${
            isUser
              ? 'bg-gradient-to-br from-cyan-600 to-teal-600 text-white rounded-br-md shadow-lg shadow-cyan-900/20'
              : 'glass-strong text-slate-200 rounded-bl-md'
          }`}
        >
          {message.content}
        </div>
        {confirmations.length > 0 && (
          <div className="space-y-2 pl-0.5">
            {confirmations.map((conf, i) => (
              <ActionConfirmationCard key={`conf-${i}`} data={conf} />
            ))}
          </div>
        )}
        {cards.length > 0 && (
          <div className="space-y-2 pl-0.5">
            {cards.map((card, i) => renderCard(card, i))}
          </div>
        )}
      </div>
    </div>
  );
}
