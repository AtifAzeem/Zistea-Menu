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

  return (
    <div className="flex gap-4 border-b border-[#EEE8DC] py-4">
      {/* Left */}

      <div className="min-w-0 flex-1">
        {/* Veg */}

        {item.veg && (
          <FaLeaf className="mb-1 text-xs text-green-600" />
        )}

        {/* Name */}

        <h3 className="line-clamp-2 text-[17px] font-semibold leading-snug text-[#202020]">
          {item.name}
        </h3>

        {/* Price */}

        <p className="mt-1 text-[15px] font-semibold text-[#7A5B12]">
          ₹{startingPrice}
        </p>

        {/* Description */}

        {item.description && (
          <p className="mt-1 line-clamp-2 text-[13px] leading-5 text-gray-500">
            {item.description}
          </p>
        )}

        {/* Tags */}

        <div className="mt-2 flex flex-wrap gap-2">
          {item.popular && (
            <span className="rounded-full bg-orange-50 px-2 py-1 text-[11px] font-medium text-orange-700">
              Popular
            </span>
          )}

          {item.recommended && (
            <span className="rounded-full bg-green-50 px-2 py-1 text-[11px] font-medium text-green-700">
              Recommended
            </span>
          )}
        </div>
      </div>

      {/* Right */}

      <div className="relative w-[110px] shrink-0">
        <img
          src={item.image || "/images/placeholder.jpg"}
          alt={item.name}
          className="
            h-[110px]
            w-[110px]

            rounded-2xl

            object-cover

            border
            border-[#EFE7D9]

            shadow-sm
          "
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
            className="
              absolute
              bottom-0
              left-1/2

              h-9
              w-[82px]

              -translate-x-1/2
              translate-y-1/2

              rounded-xl

              border
              border-[#D4B46A]

              bg-white

              text-sm
              font-semibold
              text-[#B88A1A]

              shadow-md

              transition-all
              duration-200

              hover:bg-[#FFF8E8]
            "
          >
            ADD
          </button>
        ) : (
          <div
            className="
              absolute
              bottom-0
              left-1/2

              flex
              h-9
              w-[90px]

              -translate-x-1/2
              translate-y-1/2

              items-center
              justify-between

              rounded-xl

              border
              border-[#D4B46A]

              bg-white

              px-2

              shadow-md
            "
          >
            <button
              onClick={() => decreaseQuantity(item.id)}
              className="flex h-7 w-7 items-center justify-center text-lg font-bold text-[#B88A1A]"
            >
              −
            </button>

            <span className="text-sm font-semibold">
              {quantity}
            </span>

            <button
              onClick={() => increaseQuantity(item.id)}
              className="flex h-7 w-7 items-center justify-center text-lg font-bold text-[#B88A1A]"
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