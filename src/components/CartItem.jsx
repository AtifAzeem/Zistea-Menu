// import { useCart } from "../context/CartContext";

// function CartItem({ item }) {
//   const {
//     increaseQuantity,
//     decreaseQuantity,
//   } = useCart();

//   return (
//     <div className="border-b border-gray-200 py-5">
//       <div className="flex items-center justify-between">
//         <h3 className="text-lg font-semibold">
//           {item.name}
//         </h3>

//         <div className="flex items-center gap-3 rounded-lg border px-3 py-1">
//           <button
//             onClick={() => decreaseQuantity(item.id)}
//             className="text-lg font-bold text-green-600"
//           >
//             −
//           </button>

//           <span className="w-5 text-center font-semibold">
//             {item.quantity}
//           </span>

//           <button
//             onClick={() => increaseQuantity(item.id)}
//             className="text-lg font-bold text-green-600"
//           >
//             +
//           </button>
//         </div>
//       </div>

//       <p className="mt-3 text-lg font-bold text-amber-700">
//         ₹{item.price * item.quantity}
//       </p>
//     </div>
//   );
// }

// export default CartItem;

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

          <p className="mt-3 text-xl font-bold text-amber-700">
            ₹{item.price * item.quantity}
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-lg border border-gray-300 px-3 py-1">
          <button
            onClick={() => decreaseQuantity(item.id)}
            className="text-lg font-bold text-green-600"
          >
            −
          </button>

          <span className="w-5 text-center font-semibold">
            {item.quantity}
          </span>

          <button
            onClick={() => increaseQuantity(item.id)}
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