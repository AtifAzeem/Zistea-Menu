import { FaLeaf } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import CustomizeItemModal from "./CustomizeItemModal";

function FoodCard({ item }) {
  const [showCustomizeModal, setShowCustomizeModal] = useState(false);
  const { cartItems, addToCart, increaseQuantity, decreaseQuantity, getItemQuantity } = useCart();

  const quantity = getItemQuantity(item.id);
  const startingPrice = item.baseVariant?.price ?? 0;
  const isAvailable = item.available;
  const isCustomizable = item.hasVariants || item.hasAddons;

  return (
     <>
    <div className="flex gap-4 border-b border-[#EEE8DC] py-4">
      {/* Left */}

      <div className="min-w-0 flex-1">
        {item.veg && (
          <FaLeaf
            className={`mb-1 text-xs ${
              isAvailable ? "text-green-600" : "text-gray-400"
            }`}
          />
        )}

        <h3
          className={`line-clamp-2 text-[17px] font-semibold leading-snug ${
            isAvailable ? "text-[#202020]" : "text-gray-500"
          }`}
        >
          {item.name}
        </h3>

        <p className="mt-1 text-[15px] font-semibold text-[#7A5B12]">
          ₹{startingPrice}
        </p>

        {item.description && (
          <p className="mt-1 line-clamp-2 text-[13px] leading-5 text-gray-500">
            {item.description}
          </p>
        )}

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
          className={`h-[110px] w-[110px] rounded-2xl object-cover border border-[#EFE7D9] shadow-sm transition-all duration-300 ${
            !isAvailable ? "grayscale opacity-70" : ""
          }`}
        />

        {!isAvailable ? (
          <div
            className="
              absolute
              bottom-0
              left-1/2

              flex
              h-9
              w-[82px]

              -translate-x-1/2
              translate-y-1/2

              items-center
              justify-center

              rounded-xl

              border
              border-gray-300

              bg-gray-100

              text-[12px]
              font-semibold

              text-gray-500

              cursor-not-allowed

              shadow-sm
            "
          >
            Out of stock
          </div>
        ) : quantity === 0 ? (
          <button
            onClick={() => {
              if (isCustomizable) {
                setShowCustomizeModal(true);
                return;
              }

              addToCart({
                id: item.id,
                name: item.name,
                image: item.image,

                variant: item.baseVariant,
                addons: [],

                available: item.available,
              });
            }}
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
              onClick={() => {
                const cartItem = cartItems.find(
                  (cart) => cart.id === item.id
                );

                if (cartItem) {
                  decreaseQuantity(cartItem.cartId);
                }
              }}
              className="flex h-7 w-7 items-center justify-center text-lg font-bold text-[#B88A1A]"
            >
              -
            </button>

            <span className="text-sm font-semibold">
              {quantity}
            </span>

            <button
              onClick={() => {
                if (isCustomizable) {
                    setShowCustomizeModal(true);
                    return;
                }

                const cartItem = cartItems.find(
                    (cart) => cart.id === item.id
                );

                if (cartItem) {
                    increaseQuantity(cartItem.cartId);
                }
            }}
              className="flex h-7 w-7 items-center justify-center text-lg font-bold text-[#B88A1A]"
            >
              +
            </button>
          </div>


        )}
      </div>
    </div>
    {showCustomizeModal && (
      <CustomizeItemModal
        item={item}
        onClose={() => setShowCustomizeModal(false)}
      />
    )}
    </>
  );
}

export default FoodCard;
