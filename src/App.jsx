import React, { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Checkout from "./Cheakout";
import FeedbackForm from "./FeedbackForm";
import ProgressBar from "./ProgressBar";
import NavBar from "./NavBar";

export default function App() {
  const [cart, setCart] = useState([]);
  const [step, setStep] = useState(0);
  const [message, setMessage] = useState("");
  const [filters, setFilters] = useState({
    category: "",
    brand: "",
    query: "",
    price: 1000,
  });

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const goToCart = () => setStep(1);
  const goToHome = () => setStep(0);
  const goBack = () => setStep((prev) => Math.max(0, prev - 1));
  const proceedToCheckout = () => setStep(2);
  const finishFeedback = () => {
    setCart([]);
    setStep(0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar goToCart={goToCart} goToHome={goToHome} />
      <div className="max-w-7xl mx-auto p-4">
        {step > 0 && <ProgressBar step={step} goBack={goBack} />}
        {message && (
          <div className="my-2 p-2 bg-green-100 text-green-800 rounded">
            {message}
          </div>
        )}
        {step === 0 && (
          <ProductList
            addToCart={addToCart}
            filters={filters}
            setFilters={setFilters}
          />
        )}
        {step === 1 && (
          <Cart
            cart={cart}
            proceed={proceedToCheckout}
            removeFromCart={removeFromCart}
          />
        )}
        {step === 2 && <Checkout proceed={() => setStep(3)} />}
        {step === 3 && <FeedbackForm onFinish={finishFeedback} />}
      </div>
    </div>
  );
}
