export function createOrderPayload(tableNumber, cartItems) {
  return {
    v: 1,
    t: tableNumber,
    i: cartItems.map(({ id, quantity }) => [id, quantity]),
  };
}