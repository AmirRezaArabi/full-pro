<template>
  <header class="bg-white shadow h-16 flex justify-between items-stretch">
    <router-link :to="{name: 'home'}" class="inline-flex items-center px-5 h-full transition-colors hover:bg-blue-100">
      Home
    </router-link>
    <router-link :to="{name: 'cart'}" class="inline-flex items-center text-6xl text-blue-300 px-5 h-full transition-colors hover:bg-blue-100">
    <span class="material-icons">shopping_cart</span>     
    </router-link>
  </header>
</template>

<script>
import '@material/web/button/outlined-button.js';

export default {

}
</script>

<style>

</style>