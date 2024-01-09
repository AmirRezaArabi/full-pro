<template>
  <div class="grid grid-cols-2 md:grid-cols-5 sm:grid-cols-4 gap-3 p-8">
     <div v-for="item in items" :key="item.id"
      class="grid text-center font-bold justify-items-center bg-slate-300 rounded-md p-4">
        <div>{{ item.attributes.name }}</div>
        <div class="mt-2 mb-2">{{ item.attributes.display_price }}</div>
        <span class="cursor-pointer material-icons hover:text-green-600" @click="add(item)">
          add
        </span>
     </div>
  </div>
</template>

<script>
import axios from 'axios'
import store from '../store'

export default {
  data() {
    return {
      items: undefined,
    };
  },
  methods: {
    add(item) {
      const newData = {
        id: item.id,
        name: item.attributes.name,
        display_price: item.attributes.display_price
      }
      this.$store.commit('addToMyData', newData);

      const previousData = JSON.parse(localStorage.getItem('myItem')) || [];

      const combinedData = [...previousData, newData];
      localStorage.setItem('myItem', JSON.stringify(combinedData))
      alert("کالا با موفقیت به سبد خرید اضافه شد.")
    },
  },
  mounted() {
    axios.get('https://demo.spreecommerce.org/api/v2/storefront/products')
      .then(resp => {
        this.items = resp.data.data;
      });
  }
};
</script>

<style>

</style>
