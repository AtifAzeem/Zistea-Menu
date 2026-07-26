import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
function CartItemsCard() {
  const { cartItems } = useCart();

  if (cartItems.length === 0) return null;

  return (
    <div className="mb-5 overflow-hidden rounded-2xl bg-white shadow-sm">
      {cartItems.map((item, index) => (
        <div
          key={item.cartId}
          className={
            index !== cartItems.length - 1
              ? "border-b border-gray-200"
              : ""
          }
        >
          <CartItem item={item} />
        </div>
      ))}
    </div>
  );
}

export default CartItemsCard;