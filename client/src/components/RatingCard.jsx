import { useState } from 'react';

export default function RatingCard({ onSubmit }) {
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    if (rating === 0) return;
    setSubmitted(true);
    onSubmit({ rating, feedback: feedback.trim() || null });
  }

  if (submitted) {
    return (
      <div className="flex justify-start message-enter">
        <div className="bg-[#1C2432] rounded-xl px-5 py-5 max-w-[85%]">
          <div className="flex items-center gap-3">
            <div className="rating-check w-7 h-7 rounded-full bg-emerald-500/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-emerald-400/80">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-[13.5px] font-medium text-white/85">Thanks for your feedback!</p>
              <p className="text-[12px] text-white/40 mt-0.5">Your rating: {rating}/5</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start message-enter">
      <div className="bg-[#1C2432] rounded-xl px-5 py-5 max-w-[85%] space-y-4">
        <p className="text-[14px] font-medium text-white/85">How was your experience today?</p>

        <div className="flex items-center gap-1.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoveredStar(star)}
              onMouseLeave={() => setHoveredStar(0)}
              className="cursor-pointer transition-transform duration-150 hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={star <= (hoveredStar || rating) ? '#ffffff' : 'rgba(255,255,255,0.1)'}
                className="w-7 h-7 transition-colors duration-150"
              >
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
              </svg>
            </button>
          ))}
        </div>

        <div>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Any additional feedback?"
            rows={2}
            className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-2.5 text-[13px] text-white/70 placeholder-white/20 focus:outline-none focus:border-white/15 resize-none"
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={rating === 0}
          className="bg-white/10 hover:bg-white/15 text-white/80 font-medium rounded-xl px-5 py-2 text-[13px] transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
