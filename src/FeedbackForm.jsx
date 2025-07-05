import React, { useState, useEffect } from "react";

export default function FeedbackForm({ onFinish }) {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted) {
      setTimeout(() => {
        if (onFinish) onFinish();
      }, 1500);
    }
  }, [submitted, onFinish]);

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">
        How was your shopping experience?
      </h2>
      {submitted ? (
        <p className="text-green-600 font-medium">
          Thank you for your feedback!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => setRating(num)}
                className={`w-10 h-10 flex items-center justify-center rounded-full border ${
                  rating >= num
                    ? "bg-yellow-400 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {num}
              </button>
            ))}
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-purple-600 text-white rounded"
          >
            Submit Rating
          </button>
        </form>
      )}
    </div>
  );
}
