import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Add a new item or increase quantity
  const addToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((cartItem) => cartItem.id === item.id);

      if (existing) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove completely
  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Empty cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Total quantity
  const totalItems = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }, [cartItems]);

  // Subtotal
  const subtotal = useMemo(() => {
    return cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  // // Delivery Charge
  // const deliveryCharge = 0;

  // // Grand Total
  // const grandTotal = useMemo(() => {
  //   return subtotal + deliveryCharge;
  // }, [subtotal]);
  const serviceCharge = 0;

  // Grand Total
  const grandTotal = useMemo(() => {
    return subtotal + serviceCharge;
  }, [subtotal]);

  // Get quantity of a specific item
  const getItemQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  const value = {
    cartItems,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    clearCart,
    totalItems,
    subtotal,
    serviceCharge,
    grandTotal,
    getItemQuantity,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}