import React from "react";

export default function NavBar({ goToCart, goToHome }) {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div
          className="text-2xl font-bold text-purple-700 cursor-pointer"
          onClick={goToHome}
        >
          BuyItAll
        </div>
        <div className="space-x-6 text-gray-700">
          <button onClick={goToHome} className="hover:text-purple-600">
            Explore
          </button>
        </div>
        <div className="space-x-4">
          <button
            onClick={goToCart}
            className="text-gray-600 hover:text-purple-600"
          >
            🛒
          </button>
        </div>
      </div>
    </nav>
  );
}
