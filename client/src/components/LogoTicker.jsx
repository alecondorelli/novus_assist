const fintechs = [
  { name: 'Revolut', url: 'https://www.revolut.com' },
  { name: 'Trade Republic', url: 'https://www.traderepublic.com' },
  { name: 'Bitpanda', url: 'https://www.bitpanda.com' },
  { name: 'N26', url: 'https://n26.com' },
  { name: 'Monzo', url: 'https://monzo.com' },
  { name: 'Novus Wealth', url: 'https://testflight.apple.com/join/yBKBUMSD' },
  { name: 'Ramp', url: 'https://ramp.com' },
  { name: 'Wise', url: 'https://wise.com' },
];

function TickerItem({ name, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[18px] font-bold text-gray-300 hover:text-gray-900 hover:scale-105 transition-all duration-200 whitespace-nowrap px-8 inline-block"
    >
      {name}
    </a>
  );
}

export default function LogoTicker() {
  return (
    <div className="py-12 w-full">
      <p className="text-[14px] text-gray-400 text-center mb-8">
        Built for companies like
      </p>
      <div className="ticker-fade overflow-hidden">
        <div className="ticker-track flex items-center w-max">
          {fintechs.map((f) => (
            <TickerItem key={`a-${f.name}`} name={f.name} url={f.url} />
          ))}
          {fintechs.map((f) => (
            <TickerItem key={`b-${f.name}`} name={f.name} url={f.url} />
          ))}
        </div>
      </div>
    </div>
  );
}
