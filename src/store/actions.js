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
