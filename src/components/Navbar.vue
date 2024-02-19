<template>
  <header class="bg-white sticky top-0 w-full shadow h-16 flex justify-between items-stretch">
    <router-link :to="{name: 'home'}" class="inline-flex items-center px-5 h-full transition-colors hover:bg-blue-100">
      Home
    </router-link>
    <router-link :to="{name: 'cart'}" class="relative inline-flex items-center text-6xl text-blue-300 px-5 h-full transition-colors hover:bg-blue-100">
      <span class="material-icons">shopping_cart</span>
      <div v-if="totalItemCount!==0">
        <span class="absolute flex justify-center items-center left-3 bottom-3 rounded-md text-xs bg-red-500 text-white h-5 w-5">{{ totalItemCount }}</span>
      </div>
    </router-link>
  </header>
</template>

<script>
import '@material/web/button/outlined-button.js';
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(["cartData"]),
    totalItemCount() {
      return this.cartData.reduce((total, item) => total + item.count, 0);
    }
  }
}
</script>
