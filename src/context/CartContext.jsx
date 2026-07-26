import { useEffect, createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const EMPTY_CART = {
    createdAt: null,
    updatedAt: null,
    table: null,
    items: [],
  };
  const CART_EXPIRY_MS = 30 * 60 * 1000;

  const deleteStoredCart = () => {
      localStorage.removeItem("zisteaCart");
  };

  const loadCart = () => {
      const savedCart = localStorage.getItem("zisteaCart");

      if (!savedCart) {
          return { ...EMPTY_CART };
      }
      
      try {
          const parsed = JSON.parse(savedCart);
          const isExpired =
              parsed.updatedAt &&
              Date.now() - parsed.updatedAt > CART_EXPIRY_MS;
          if (isExpired) {
              deleteStoredCart();
              return { ...EMPTY_CART };
          }
          return {
              createdAt: parsed.createdAt ?? null,
              updatedAt: parsed.updatedAt ?? null,
              table: parsed.table ?? null,
              items: Array.isArray(parsed.items)
                  ? parsed.items
                  : [],
          };
      } catch (error) {
          console.error("Failed to load cart:", error);
          deleteStoredCart();
          return { ...EMPTY_CART };
      }
  };
  const saveCart = (cartItems) => {
      const existingCart = localStorage.getItem("zisteaCart");

      let createdAt = Date.now();
      let table = null;

      if (existingCart) {
          try {
              const parsed = JSON.parse(existingCart);

              createdAt = parsed.createdAt ?? createdAt;
              table = parsed.table ?? null;
          } catch {
              // Ignore corrupted data and create a fresh cart
          }
      }

      const cartData = {
          createdAt,
          updatedAt: Date.now(),
          table,
          items: cartItems,
      };

      localStorage.setItem(
          "zisteaCart",
          JSON.stringify(cartData)
      );
  };

  const [cartItems, setCartItems] = useState([]);
  const [pendingCart, setPendingCart] = useState(loadCart);

  const hasPendingCart = pendingCart.items.length > 0;

  // console.log(initialCart);
  const [restoreDecisionMade, setRestoreDecisionMade] = useState(
    !hasPendingCart
  );
  useEffect(() => {
    if (!restoreDecisionMade) return;

    saveCart(cartItems);
  }, [cartItems, restoreDecisionMade]);

  const restoreCart = () => {
    setCartItems(pendingCart.items);
    setPendingCart({ ...EMPTY_CART });
    setRestoreDecisionMade(true);
  };

  const discardStoredCart = () => {
    deleteStoredCart();
    setPendingCart({ ...EMPTY_CART });
    setRestoreDecisionMade(true);
  };

  const addToCart = (item) => {
    if (!item.available) return;

    setCartItems((prev) => {
      const existing = prev.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existing) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
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

    pendingCart,
    hasPendingCart,
    restoreCart,
    discardStoredCart,
    deleteStoredCart,
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