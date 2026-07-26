import { useEffect, createContext, useContext, useMemo, useState } from "react";
import { isSameConfiguration, calculateUnitPrice, generateCartId } from "../utils/cartUtils";
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

      const existing = prev.find((cartItem) =>
        isSameConfiguration(cartItem, item)
      );

      if (existing) {
        return prev.map((cartItem) =>
          cartItem.cartId === existing.cartId
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        );
      }

      const newCartItem = {
        cartId: generateCartId(),

        id: item.id,

        name: item.name,
        image: item.image,

        variant: item.variant,

        addons: item.addons ?? [],

        available: item.available,

        unitPrice: calculateUnitPrice(
          item.variant,
          item.addons
        ),

        quantity: 1,
      };

      return [...prev, newCartItem];
    });
  };

  // Increase quantity
  const increaseQuantity = (cartId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.cartId === cartId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (cartId) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.cartId === cartId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove completely
  const removeItem = (cartId) => {
    setCartItems((prev) =>
      prev.filter((item) => item.cartId !== cartId)
    );
  };
  // Empty cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Total quantity
  const totalItems = useMemo(() => {
    return cartItems.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
  }, [cartItems]);

  // Subtotal
  const subtotal = useMemo(() => {
    return cartItems.reduce(
      (sum, item) => sum + item.unitPrice * item.quantity,
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
    return cartItems.reduce((total, item) => {
      if (item.id === id) {
        return total + item.quantity;
      }
      return total;
    }, 0);
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