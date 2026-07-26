// export function createOrderPayload(tableNumber, cartItems) {
//   return {
//     v: 1,
//     t: tableNumber,
//     i: cartItems.map(({ id, quantity }) => [id, quantity]),
//   };
// }

export function createOrderPayload(tableNumber, cartItems) {
  const items = cartItems.map((item) => [
    item.id,
    item.variant.id,
    item.addons.map((addon) => addon.id),
    item.quantity,
  ]);

  return {
    v: 2,
    t: tableNumber,
    i: items,
  };
}