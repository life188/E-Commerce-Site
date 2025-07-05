import React from "react";

export default function ProductCard({ product, addToCart }) {
  const handleAdd = () => {
    addToCart(product);
    const tag = document.getElementById("cart-message");
    if (tag) {
      tag.textContent = `${product.name} added to cart!`;
      tag.classList.remove("hidden");
      setTimeout(() => tag.classList.add("hidden"), 3000);
    }
  };

  return (
    <div className="rounded p-4 shadow-md bg-white">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-contain rounded bg-white"
      />

      <h2 className="font-semibold">{product.name}</h2>
      <p className="text-gray-600">
        {product.brand} • {product.category}
      </p>

      <p className="text-lg font-bold">${product.price}</p>
      <button
        onClick={handleAdd}
        className="mt-2 px-4 py-1 bg-purple-500 text-white rounded"
      >
        Add
      </button>
      {product.freeShipping && (
        <span className="text-sm text-green-600 block mt-1">Free Shipping</span>
      )}
      <div
        id="cart-message"
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-800 px-4 py-2 rounded shadow hidden z-50 text-sm"
      ></div>
    </div>
  );
}
