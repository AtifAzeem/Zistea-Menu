import { FaLeaf } from "react-icons/fa";

function FoodCard({ item }) {
  const startingPrice = item.variants[0].price;

  return (
    <div className="flex justify-between gap-4 border-b border-gray-200 py-5">
      <div className="flex-1">
        {item.veg && (
          <FaLeaf className="mb-2 text-green-600 text-sm" />
        )}

        <h3 className="text-lg font-semibold">
          {item.name}
        </h3>

        <p className="mt-1 text-lg font-bold text-amber-700">
          ₹{startingPrice}
        </p>

        {item.description && (
          <p className="mt-2 text-sm text-gray-500 line-clamp-2">
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

        <button
          className="
            absolute
            -bottom-3
            left-1/2
            -translate-x-1/2
            rounded-lg
            bg-white
            px-5
            py-2
            font-semibold
            text-green-600
            shadow-lg
          "
        >
          ADD
        </button>
      </div>
    </div>
  );
}

export default FoodCard;