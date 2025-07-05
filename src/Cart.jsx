export default function Cart({ cart, proceed, removeFromCart }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="mb-4">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between border-b py-2">
                <span>
                  {item.name} - ${item.price}
                </span>
                <button
                  className="text-red-600 hover:underline"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="text-right">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={proceed}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
