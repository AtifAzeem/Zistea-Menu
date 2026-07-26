// Generates a unique id for every cart line
export function generateCartId() {
  return crypto.randomUUID();
}

// Calculates the final price of ONE customized item
export function calculateUnitPrice(variant, addons = []) {
  const variantPrice = variant?.price ?? 0;

  const addonsPrice = addons.reduce(
    (sum, addon) => sum + addon.price,
    0
  );

  return variantPrice + addonsPrice;
}

// Checks if two cart items are exactly the same configuration
export function isSameConfiguration(cartItem, newItem) {
  if (cartItem.id !== newItem.id) return false;

  if (cartItem.variant?.id !== newItem.variant?.id) return false;

  const cartAddonIds = (cartItem.addons ?? [])
    .map((addon) => addon.id)
    .sort();

  const newAddonIds = (newItem.addons ?? [])
    .map((addon) => addon.id)
    .sort();

  if (cartAddonIds.length !== newAddonIds.length) {
    return false;
  }

  return cartAddonIds.every(
    (id, index) => id === newAddonIds[index]
  );
}