// import { FaLeaf } from "react-icons/fa";

// function FoodCard({ item }) {
//   const startingPrice = item.variants[0].price;

//   return (
//     <div className="flex justify-between gap-4 border-b border-gray-200 py-5">
//       <div className="flex-1">
//         {item.veg && (
//           <FaLeaf className="mb-2 text-green-600 text-sm" />
//         )}

//         <h3 className="text-lg font-semibold">
//           {item.name}
//         </h3>

//         <p className="mt-1 text-lg font-bold text-amber-700">
//           ₹{startingPrice}
//         </p>

//         {item.description && (
//           <p className="mt-2 text-sm text-gray-500 line-clamp-2">
//             {item.description}
//           </p>
//         )}

//         {item.popular && (
//           <span className="mt-2 inline-block rounded-full bg-orange-100 px-2 py-1 text-xs font-medium text-orange-700">
//             Popular
//           </span>
//         )}

//         {item.recommended && (
//           <span className="ml-2 mt-2 inline-block rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
//             Recommended
//           </span>
//         )}
//       </div>

//       <div className="relative">
//         <img
//           src={item.image || "/images/placeholder.jpg"}
//           alt={item.name}
//           className="h-28 w-28 rounded-xl object-cover shadow"
//         />

//         <button
//           className="
//             absolute
//             -bottom-3
//             left-1/2
//             -translate-x-1/2
//             rounded-lg
//             bg-white
//             px-5
//             py-2
//             font-semibold
//             text-green-600
//             shadow-lg
//           "
//         >
//           ADD
//         </button>
//       </div>
//     </div>
//   );
// }

// export default FoodCard;

import { FaLeaf } from "react-icons/fa";
import { useCart } from "../context/CartContext";

function FoodCard({ item }) {
  const {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    getItemQuantity,
  } = useCart();

const quantity = getItemQuantity(item.id);

  const startingPrice = item.variants[0].price;

  // // Temporary - remove after testing
  // console.log(cartItems);

  return (
    <div className="flex justify-between gap-4 border-b border-gray-200 py-5">
      <div className="flex-1">
        {item.veg && (
          <FaLeaf className="mb-2 text-sm text-green-600" />
        )}

        <h3 className="text-lg font-semibold">
          {item.name}
        </h3>

        <p className="mt-1 text-lg font-bold text-amber-700">
          ₹{startingPrice}
        </p>

        {item.description && (
          <p className="mt-2 line-clamp-2 text-sm text-gray-500">
            {item.description}
          </p>
        )}

        {item.popular && (
          <span className="mt-2 inline-block rounded-full bg-orange-100 px-2 py-1 text-xs font-medium text-orange-700">
            Popular
          </span>
        )}

        {item.recommended && (
          <span className="ml-2 mt-2 inline-block rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
            Recommended
          </span>
        )}
      </div>

      <div className="relative">
        <img
          src={item.image || "/images/placeholder.jpg"}
          alt={item.name}
          className="h-28 w-28 rounded-xl object-cover shadow"
        />

        {quantity === 0 ? (
  <button
    onClick={() =>
      addToCart({
        id: item.id,
        name: item.name,
        price: startingPrice,
        image: item.image,
      })
    }
    className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-lg bg-white px-5 py-2 font-semibold text-green-600 shadow-lg transition hover:bg-green-50"
  >
    ADD
  </button>
) : (
  <div
    className="
      absolute
      -bottom-3
      left-1/2
      flex
      -translate-x-1/2
      items-center
      gap-4
      rounded-lg
      bg-white
      px-4
      py-2
      shadow-lg
    "
  >
    <button
      onClick={() => decreaseQuantity(item.id)}
      className="text-xl font-bold text-green-600"
    >
      −
    </button>

    <span className="font-semibold">
      {quantity}
    </span>

    <button
      onClick={() => increaseQuantity(item.id)}
      className="text-xl font-bold text-green-600"
    >
      +
    </button>
  </div>
)}
      </div>
    </div>
  );
}

export default FoodCard;