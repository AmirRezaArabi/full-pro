<template>
  <div
    class="grid text-center font-bold justify-items-center bg-blue-100 rounded-md p-4">
    <div>{{ item.name }}</div>
    <router-link
      :to="{
        name: 'details',
        params: { id: item.id },
      }">
      details
    </router-link>
    <div class="mt-2 mb-2">{{ item.price }}</div>
    <div v-if="isInCart(item)">
      <span
        class="cursor-pointer material-icons inline-block px-1 hover:text-red-600"
        @click="remove(item)">
        remove
      </span>
      <span v-if="cartItem">
        {{ cartItem.count }}
      </span>
      <span
        class="cursor-pointer material-icons inline-block px-1 hover:text-green-600"
        @click="add(item)">
        add
      </span>
    </div>
    <div v-else>
      <span
        class="cursor-pointer material-icons inline-block px-1 hover:text-green-600"
        @click="add(item)">
        add
      </span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex"

export default {
  props: {
    item: Object,
  },
  computed: {
    cartItem() {
      return this.$store.state.cartData.find(
        (cartItem) => cartItem.id === this.item.id
      )
    },
  },
  methods: {
    ...mapActions(["addToCart", "removeFromCart"]),
    add(item) {
      const newData = {
        id: item.id,
        name: item.name,
        price: item.price,
      }
      this.addToCart(newData)
    },
    remove(item) {
      this.removeFromCart(item.id)
    },
    isInCart(item) {
      return !!this.cartItem
    },
  },
}
</script>
