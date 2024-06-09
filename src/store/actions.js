import axios from 'axios';

// const apiInstance = axios.create({
//   baseURL: 'https://shopback.miarze.com/api/v2/storefront',
// });

// export function fetchData({ commit,state }) {
//   apiInstance.get('/products')
//     .then(response => {
//       commit('setData', response.data.data);
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }
export function removeFromCart({ commit, state }, itemId) {
  
  const index = state.cartData.findIndex(item => item.id === itemId);
  if (state.cartData[index].count > 1) {
    commit('decrementItemCount', { itemId: itemId });  
  } else if (state.cartData[index].count === 1) {
    commit('removeFromCart', { itemId: itemId });  
  }
}

export function addToCart({ commit, state }, newData) {
  const existingItem = state.cartData.find(item => item.id === newData.id);

  if (existingItem) {
    commit('incrementItemCount', { itemId: newData.id });
  } else {
    commit('addToCartData', { ...newData, count: 1 });
  }
}
