import { useCart } from "../context/CartContext";

function CartItem({ item }) {
  const { increaseQuantity, decreaseQuantity } = useCart();

  return (
    // <div className="border-b border-gray-200 py-6">
    <div className="py-5">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">
            {item.name}
          </h3>
          <p className="mt-1 text-sm text-gray-500">
              {item.variant.name}
          </p>
          {item.addons.length > 0 && (
            <p className="text-xs text-gray-400">
                + {item.addons.map(a => a.name).join(", ")}
            </p>
          )}
          <p className="mt-3 text-xl font-bold text-amber-700">
            ₹{item.unitPrice * item.quantity}
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-lg border border-gray-300 px-3 py-1">
          <button
            onClick={() => decreaseQuantity(item.cartId)}
            className="text-lg font-bold text-green-600"
          >
            −
          </button>

          <span className="w-5 text-center font-semibold">
            {item.quantity}
          </span>

          <button
            onClick={() => increaseQuantity(item.cartId)}
            className="text-lg font-bold text-green-600"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;