export function setData(state, data) {
  state.data = data;
}
export function setMeta(state, meta) {
  state.meta = meta;
}

export function addToCartData(state, newData) {
  state.cartData.push(newData);
  updateLocalStorage(state)
}

export function removeFromCart(state, {itemId}) {
  const index = state.cartData.findIndex(item => item.id === itemId);
  state.cartData.splice(index, 1);
  updateLocalStorage(state)
}

export function incrementItemCount(state, {itemId}) {
  const index = state.cartData.findIndex(item => item.id === itemId);
  state.cartData[index].count++;
  updateLocalStorage(state);
}

export function decrementItemCount(state, {itemId}) {
  const index = state.cartData.findIndex(item => item.id === itemId);
  state.cartData[index].count--;
  updateLocalStorage(state);
}


export function updateLocalStorage(state) {
  localStorage.setItem('myItem', JSON.stringify(state.cartData));
}



