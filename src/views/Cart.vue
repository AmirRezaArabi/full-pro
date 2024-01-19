<template>
  <div class="grid grid-cols-2 md:grid-cols-5 sm:grid-cols-4 gap-3 p-8">
    <div v-for="(item, index) in data" :key="index" class="grid text-center font-bold justify-items-center bg-slate-300 rounded-md p-4">
      <div>{{ item.name }}</div>
      <div class="mt-2 mb-2">{{ item.display_price }}</div>
      <div class="inline-block px-1 mb-1">
        <span class="cursor-pointer material-icons" @click="decreaseCount(index)">remove</span>
        {{ item.count }}
        <span class="cursor-pointer material-icons" @click="increaseCount(index)">add</span>
      </div>
      <span class="cursor-pointer material-icons hover:text-red-600" @click="removeItem(index)">
        delete_outline
      </span>
    </div>
  </div>
  <notifications position="bottom right" />
</template>

<script>
import { notify } from "@kyvg/vue3-notification";
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      data: [],
    };
  },
  methods: {
    ...mapMutations(['updateCartItem']),
    removeItem(index) {
      this.data.splice(index, 1);
      this.updateLocalStorage();
      notify({
        text: "کالا با موفقیت از سبد خرید حذف شد",
      });
    },
    decreaseCount(index) {
      if (this.data[index].count > 0) {
        this.data[index].count--;
        this.updateCartItem(this.data[index]);
        localStorage.setItem('myItem', JSON.stringify(this.data));
      }
    },
    increaseCount(index) {
      this.data[index].count++;
      this.updateCartItem(this.data[index]);
      localStorage.setItem('myItem', JSON.stringify(this.data));
    },
    updateLocalStorage() {
      localStorage.setItem('myItem', JSON.stringify(this.data));
    },
  },
  mounted() {
    const storedArray = localStorage.getItem('myItem');
    if (storedArray) {
      const uniqueItems = Array.from(new Set(JSON.parse(storedArray).map(item => item.id)))
        .map(id => {
          const itemsWithSameId = JSON.parse(storedArray).filter(item => item.id === id);
          const totalCount = itemsWithSameId.reduce((total, item) => total + item.count, 0);
          return { ...itemsWithSameId[0], count: totalCount };
        }); 
      this.data = uniqueItems;
    }
  },
};
</script>

<style>
.vue-notification {
  text-align: end;
  margin: 0 5px 5px;
  padding: 10px;
  font-size: 12px;
  color: #ffffff;
  background: #68cd86;
  border-left: 5px solid #68cd86;
  border-right: 5px solid #42a85f;
}
</style>
