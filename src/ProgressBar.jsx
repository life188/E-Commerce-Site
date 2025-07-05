import React from "react";

export default function ProgressBar({ step, goBack }) {
  // If your parent does step=1,2,3 use this:
  const current = step - 1;

  // If your parent does step=0,1,2 instead, just comment the line above
  // and uncomment the one below:
  // const current = step;

  const steps = ["Cart", "Shipping Info and Payment", "FeedBack"];

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-bold">Checkout</h2>
        {current > 0 && (
          <button
            onClick={goBack}
            className="text-sm text-blue-600 hover:underline"
          >
            ← Back
          </button>
        )}
      </div>

      <div className="flex justify-between items-start">
        {steps.map((label, i) => {
          const isPast = current > i;
          const isCurrent = current === i;
          const bgClass = isCurrent
            ? "bg-blue-500"
            : isPast
            ? "bg-green-500"
            : "bg-gray-300";

          return (
            <div key={i} className="flex flex-col items-center flex-1 relative">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${bgClass}`}
              >
                {isPast ? "✓" : i + 1}
              </div>

              <span className="mt-2 text-sm text-gray-700">{label}</span>

              {i < steps.length - 1 && (
                <div
                  className={`absolute top-4 left-1/2 w-full transform translate-x-4 h-1 ${
                    current > i ? "bg-green-500" : "bg-gray-300"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
