const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
      </svg>
    ),
    title: 'Secure Verification',
    description: 'Identity verification with fuzzy name matching and PIN authentication before sharing any account data.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
      </svg>
    ),
    title: 'Multilingual Support',
    description: 'Responds fluently in the customer\'s language — English, German, French, Spanish, and more.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
      </svg>
    ),
    title: 'Empathetic Conversations',
    description: 'Detects customer sentiment in real time and adapts tone — from reassurance to celebration.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
      </svg>
    ),
    title: 'Actions, Not Just Answers',
    description: 'Blocks cards, initiates disputes, recommends products, and processes requests — with confirmation.',
  },
];

export default function HeroSection({ onScrollToChat }) {
  return (
    <section className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <div className="inline-flex items-center gap-2 text-sm font-medium text-teal-dark bg-teal/10 px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
          AI-Powered Customer Support
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-5">
          Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-cyan-500">Novus</span> Assistant
        </h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
          An AI agent that handles complex banking interactions — from transaction disputes to account retention — with empathy, safety, and precision.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto w-full mb-14">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:shadow-lg hover:shadow-teal/5 hover:border-teal/20 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal/15 to-cyan-500/15 flex items-center justify-center text-teal mb-3">
              {f.icon}
            </div>
            <h3 className="text-[15px] font-semibold text-gray-900 mb-1.5">{f.title}</h3>
            <p className="text-[13px] text-gray-500 leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>

      <button
        onClick={onScrollToChat}
        className="bg-gradient-to-r from-teal to-cyan-500 text-white font-semibold text-sm px-8 py-3.5 rounded-xl shadow-lg shadow-teal/20 hover:shadow-teal/30 hover:scale-[1.02] transition-all duration-200 cursor-pointer flex items-center gap-2"
      >
        Try the Demo
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
          <path fillRule="evenodd" d="M10 3a.75.75 0 0 1 .75.75v10.638l3.96-4.158a.75.75 0 1 1 1.08 1.04l-5.25 5.5a.75.75 0 0 1-1.08 0l-5.25-5.5a.75.75 0 1 1 1.08-1.04l3.96 4.158V3.75A.75.75 0 0 1 10 3Z" clipRule="evenodd" />
        </svg>
      </button>
    </section>
  );
}
