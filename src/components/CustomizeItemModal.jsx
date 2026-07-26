import { useMemo, useState } from "react";
import { useCart } from "../context/CartContext";

function CustomizeItemModal({ item, onClose }) {
  const [selectedVariant, setSelectedVariant] =
    useState(item.baseVariant);

  const [selectedAddons, setSelectedAddons] = useState([]);
  const { addToCart } = useCart();
  const toggleAddon = (addon) => {
    setSelectedAddons((prev) => {
      const exists = prev.some((a) => a.id === addon.id);

      if (exists) {
        return prev.filter((a) => a.id !== addon.id);
      }

      return [...prev, addon];
    });
  };

  const totalPrice = useMemo(() => {
    const base =
        selectedVariant?.price ??
        item.baseVariant?.price ??
        0;

    const addonTotal = selectedAddons.reduce(
        (sum, addon) => sum + addon.price,
        0
    );

        return base + addonTotal;
    }, [
        selectedVariant,
        selectedAddons,
        item.baseVariant,
    ]);

  return (
    <div
      className="fixed inset-0 z-75 flex items-end bg-black/40"
      onClick={onClose}
    >
      <div
        className="w-full rounded-t-3xl bg-white p-5 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            {item.name}
          </h2>

          <button
            onClick={onClose}
            className="text-2xl text-gray-500"
          >
            ×
          </button>
        </div>

        {/* Variants */}
        {item.hasVariants && (
          <div className="mb-6">
            <h3 className="mb-3 font-semibold">
              Choose Size
            </h3>

            <div className="space-y-3">
              {item.variants.map((variant) => (
                <label
                  key={variant.id}
                  className="flex cursor-pointer items-center justify-between rounded-xl border border-gray-200 p-3"
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="variant"
                      checked={
                        selectedVariant?.id === variant.id
                      }
                      onChange={() =>
                        setSelectedVariant(variant)
                      }
                    />

                    <span>{variant.name}</span>
                  </div>

                  <span>₹{variant.price}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Add-ons */}
        {item.hasAddons && (
          <div className="mb-6">
            <h3 className="mb-3 font-semibold">
              Extras
            </h3>

            <div className="space-y-3">
              {item.addons.map((addon) => (
                <label
                  key={addon.id}
                  className="flex cursor-pointer items-center justify-between rounded-xl border border-gray-200 p-3"
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={selectedAddons.some(
                        (a) => a.id === addon.id
                      )}
                      onChange={() =>
                        toggleAddon(addon)
                      }
                    />

                    <span>{addon.name}</span>
                  </div>

                  <span>+₹{addon.price}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <button
            onClick={() => {
                if (!selectedVariant) return;
                addToCart({
                    id: item.id,
                    name: item.name,
                    image: item.image,
                    variant: { ...selectedVariant },
                    addons: [...selectedAddons],
                    available: item.available,
                });

                onClose();
            }}
            className="
                mt-2
                w-full
                rounded-xl
                bg-green-600
                py-3
                font-semibold
                text-white
            "
            >
            Add to Cart • ₹{totalPrice}
        </button>
      </div>
    </div>
  );
}

export default CustomizeItemModal;