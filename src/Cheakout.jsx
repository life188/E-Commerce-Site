import React from "react";

export default function Checkout({ proceed }) {
  return (
    <div>
      <h2 className="text-xl font-semibold">Checkout</h2>
      <input
        className="border p-2 rounded mt-4 w-full"
        placeholder="Shipping Address"
      />
      <input
        className="border p-2 rounded mt-2 w-full"
        placeholder="Card Info"
      />
      <button
        onClick={proceed}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Submit Order
      </button>
    </div>
  );
}
