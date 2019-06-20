export const registerOrder = (
) => {
  return {
    userId: "user1",
    quantity : 3.5,
    price: 306,
    type: "SELL"}
};

export const cancelOrder = (id: string): boolean => {
  return true
};
