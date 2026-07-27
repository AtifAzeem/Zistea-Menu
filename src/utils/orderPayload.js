// export function createOrderPayload(tableNumber, cartItems) {
//   return {
//     v: 1,
//     t: tableNumber,
//     i: cartItems.map(({ id, quantity }) => [id, quantity]),
//   };
// }

// export function createOrderPayload(tableNumber, cartItems) {
//   const items = cartItems.map((item) => [
//     item.id,
//     item.variant.id,
//     item.addons.map((addon) => addon.id),
//     item.quantity,
//   ]);

//   return {
//     v: 2,
//     t: tableNumber,
//     i: items,
//   };
// }

const VARIANT_QR = {
  standard: "st",
  small: "sm",
  medium: "md",
  large: "lg",
};

const ADDON_QR = {
  cheese: "c",
  butter: "b",
  honey: "h",
  mayo: "m",
  ice_cream: "ic",
  chocolate_sauce: "cs",
  whipped_cream: "wc",
};

export function createOrderPayload(tableNumber, cartItems) {
  const items = cartItems.map((item) => [
    item.id,
    VARIANT_QR[item.variant.id] ?? item.variant.id,
    item.addons.map(
      (addon) => ADDON_QR[addon.id] ?? addon.id
    ),
    item.quantity,
  ]);

  return {
    v: 2,
    t: tableNumber,
    i: items,
  };
}