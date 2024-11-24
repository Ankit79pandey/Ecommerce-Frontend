import React from 'react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className='p-6'>
      <h1 className="text-xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center border-b py-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  className="w-16 p-1 border rounded"
                  onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                />
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <p className="font-bold">Total: ${calculateTotal()}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
