import axios from 'axios';
import { updateLocalStorage } from './mutations';

const apiInstance = axios.create({
  baseURL: 'https://demo.spreecommerce.org/api/v2/storefront',
});

export function fetchData({ commit }) {
  apiInstance.get('/products')
    .then(response => {
      commit('setData', response.data.data);
    })
    .catch(error => {
      console.error(error);
    });
}
export function removeFromCart({ commit, state }, itemId) {
    const index = state.cartData.findIndex((item) => item.id === itemId);

    if (index !== -1) {
      const item = state.cartData[index];
      if (item.count > 0) {
        commit('decrementItemCount', {index: index})

        if (item.count === 0) {
          commit('removeFromCartData', index)
        }
      }
    }
    updateLocalStorage(state);
}
export function addToCart({ commit, state }, newData) {
  const existingItemIndex = state.cartData.findIndex((item) => item.id === newData.id);

  if (existingItemIndex !== -1) {
    commit('incrementItemCount', {index: existingItemIndex})
  } else {
    commit('addToCartData', { ...newData, count: 1})
  }
    updateLocalStorage(state);
}