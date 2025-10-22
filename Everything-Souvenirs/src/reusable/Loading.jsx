import React from "react";

const Loading = () => {
  return (
    <div className="bg-background-dark font-display min-h-screen flex items-center justify-center">
      <style>
        {`
          .pulsate {
            animation: pulsate 2s ease-in-out infinite;
          }
          @keyframes pulsate {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
          }
        `}
      </style>

      <div className="relative flex flex-col items-center justify-center w-full h-full overflow-hidden">
        <div className="flex flex-col items-center gap-8 px-4 py-5">
          <div className="relative w-24 h-24">
            <svg
              className="absolute inset-0 w-full h-full animate-spin"
              fill="none"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="url(#spinner-gradient)"
                strokeLinecap="round"
                strokeWidth="4"
              ></circle>
              <defs>
                <linearGradient
                  id="spinner-gradient"
                  x1="0%"
                  x2="100%"
                  y1="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#FFD700" />
                  <stop offset="100%" stopColor="#C8A2C8" />
                </linearGradient>
              </defs>
            </svg>

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="material-symbols-outlined text-gold text-5xl pulsate">
                auto_awesome
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-white/80 text-lg font-medium">
              Loading your brand inspiration...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
