import axios from 'axios';

export function fetchData({ commit }) {
    axios.get('https://demo.spreecommerce.org/api/v2/storefront/products')
      .then(response => {
        commit('setData', response.data.data);
      })
      .catch(error => {
        console.error(error);
      });
  }
  export function removeFromCart({ commit, state }, itemId) {
    commit('removeFromCartData', itemId);
    localStorage.setItem('myItem', JSON.stringify(state.cartData));
  }
  export function addToCart({ commit, state }, newData) {
    commit('addToCartData', newData);
    localStorage.setItem('myItem', JSON.stringify(state.cartData));
  }