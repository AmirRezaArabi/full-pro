
export function setData(state, data) {
  state.data = data;
}

export function addToCartData(state, newData) {
  state.cartData.push(newData);
  updateLocalStorage(state)
}

export function removeFromCartData(state, index) {
  state.cartData.splice(index, 1);
  updateLocalStorage(state)
}

export function incrementItemCount(state, {index}) {
  state.cartData[index].count++;
  updateLocalStorage(state)
}

export function decrementItemCount(state, {index}) {
  state.cartData[index].count--;
  updateLocalStorage(state)
}

export function updateLocalStorage(state) {
  localStorage.setItem('myItem', JSON.stringify(state.cartData));
}
