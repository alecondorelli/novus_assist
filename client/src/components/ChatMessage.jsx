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
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} message-enter`}>
      <div className="max-w-[85%] space-y-2.5">
        <div
          className={`rounded-xl px-5 py-4 text-[14px] leading-relaxed whitespace-pre-wrap ${
            isUser
              ? 'bg-[#1E3A5F] text-white'
              : 'bg-[#1C2432] text-gray-200'
          }`}
        >
          {message.content}
        </div>
        {confirmations.length > 0 && (
          <div className="space-y-2">
            {confirmations.map((conf, i) => (
              <ActionConfirmationCard key={`conf-${i}`} data={conf} />
            ))}
          </div>
        )}
        {cards.length > 0 && (
          <div className="space-y-2">
            {cards.map((card, i) => renderCard(card, i))}
          </div>
        )}
      </div>
    </div>
  );
}
