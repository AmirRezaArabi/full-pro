<template>
  <div class="grid grid-cols-2 md:grid-cols-5 sm:grid-cols-4 gap-3 p-8">
    <div v-for="(item, index) in cartData" :key="index" class="grid text-center font-bold justify-items-center bg-slate-300 rounded-md p-4">
      <div>{{ item.name }}</div>
      <div class="mt-2 mb-2">{{ item.display_price }}</div>
      <div class="inline-block px-1 mb-1">
        <span class="cursor-pointer material-icons hover:text-red-600" @click="decreaseCount(index)">remove</span>
        {{ item.count }}
        <span class="cursor-pointer material-icons hover:text-green-600" @click="increaseCount(index)">add</span>
      </div>
    </div>
  </div>
  <notifications position="bottom right" />
</template>

<script>
import { notify } from "@kyvg/vue3-notification";
import { mapMutations, mapState } from 'vuex';


export default {
  computed: {
    ...mapState(["cartData"])
  },
  methods: {
    ...mapMutations(["removeFromCartData", "incrementItemCount", "decrementItemCount"]),
    decreaseCount(index) {
      if (this.cartData[index].count > 1) {
        this.$store.commit('decrementItemCount', {index});
        notify({
          text: "کالا با موفقیت از سبد خرید حذف شد",
          type: "error"
        });
      }
      else if (this.cartData[index].count == 1) {
        this.$store.commit('removeFromCartData', {index});
      }
    },
    increaseCount(index) {
      this.$store.commit('incrementItemCount', {index});
      notify({
        text: "کالا با موفقیت به سبد خرید اضافه شد",
        type: "success"
      });
    }
  },
};
</script>
