<template>
  <div class="grid grid-cols-2 md:grid-cols-3 sm:grid-cols-3 gap-3 p-8">
    <div
      v-for="(item, index) in cartData"
      :key="index"
      class="grid text-center font-bold justify-items-center bg-blue-100 rounded-md p-4">
      <div>{{ item.name }}</div>
      <div class="mt-2 mb-2">{{ item.price }}</div>
      <div class="inline-block px-1 mb-1">
        <span
          class="cursor-pointer material-icons hover:text-red-600"
          @click="decreaseCount(index)"
          >remove</span
        >
        {{ item.count }}
        <span
          class="cursor-pointer material-icons hover:text-green-600"
          @click="increaseCount(index)"
          >add</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex"

export default {
  computed: {
    ...mapState(["cartData"]),
  },
  methods: {
    ...mapActions(["removeFromCart"]),
    ...mapMutations([
      "removeFromCartData",
      "incrementItemCount",
      "decrementItemCount",
    ]),
    decreaseCount(index) {
      const itemId = this.cartData[index].id
      if (this.cartData[index].count > 1) {
        this.$store.commit("decrementItemCount", { itemId: itemId })
      } else if (this.cartData[index].count === 1) {
        this.removeFromCart(itemId)
      }
    },
    increaseCount(index) {
      const itemId = this.cartData[index].id
      this.$store.commit("incrementItemCount", { itemId: itemId })
    },
  },
}
</script>
