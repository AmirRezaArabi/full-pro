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
    commit('removeFromCartData', itemId);
    updateLocalStorage(state);
}
export function addToCart({ commit, state }, newData) {
    commit('addToCartData', newData);
    updateLocalStorage(state);
}