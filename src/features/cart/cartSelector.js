export const selectProductQuantity = (state, productId) => {
  const product = state.cart.products.find(
    (product) => product.id === productId
  );
  return product ? product.quantity : 0;
};
