<template>
  <div class="grid grid-cols-1 md:grid-cols-5 gap-3 p-8">
     <div v-for="item in items" :key="item.id"
      class="grid text-center font-bold justify-items-center bg-slate-300 rounded-md p-4">
        <div>{{ item.attributes.name }}</div>
        <div class="mt-2 mb-2">{{ item.attributes.price }} $</div>
        <span class="cursor-pointer material-icons hover:text-green-600" @click="addToMyData(item)">
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
    addToMyData(item) {
      const newData = item.attributes.name;
      const newPrice =item.attributes.price;
      this.$store.commit('addToMyData', newData);
      this.$store.commit('addToMyPrice', newPrice);
    }
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
