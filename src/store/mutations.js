
export function setData(state, data) {
  state.data = data;
}

export function addToCartData(state, newData) {
    state.cartData.push(newData);
}

export function removeFromCartData(state, index) {
  state.cartData.splice(index, 1);
}

export function incrementItemCount(state, {index}) {
  state.cartData[index].count++;
}

export function decrementItemCount(state, {index}) {
  state.cartData[index].count--;
}

export function updateLocalStorage(state) {
  localStorage.setItem('myItem', JSON.stringify(state.cartData));
}
