
export function setData(state, data) {
  state.data = data;
}
export function addToCartData(state, newData) {
  const existingItem = state.cartData.find((item) => item.id === newData.id);

  if (existingItem) {
    existingItem.count++;
  } else {
    state.cartData.push({ ...newData, count: 1 });
  }
}
export function removeFromCartData(state, itemId) {
  const index = state.cartData.findIndex((item) => item.id === itemId);

  if (index !== -1) {
    const item = state.cartData[index];
    if (item.count > 0) {
      item.count--;

      if (item.count === 0) {
        state.cartData.splice(index, 1);
      }
    }
  }
}
export function updateCartItem(state, payload) {

  state.cartUpdate = vue.observable({});
}
