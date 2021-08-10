export const total = (cart, cached) => {
  let { subTotal } = cart.reduce(
    (total, item) => {
      const cartTotal = item.price * cached[item.id];
      total.subTotal += cartTotal;
      return total;
    },
    {
      subTotal: 0,
    }
  );

  return subTotal?.toFixed(2)
};
