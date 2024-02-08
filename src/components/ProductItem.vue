<template>
  <div class="grid text-center font-bold justify-items-center bg-slate-300 rounded-md p-4">
    <div>{{ item.attributes.name }}</div>
    <div class="mt-2 mb-2">{{ item.attributes.display_price }}</div>
    <div v-if="isInCart(item)">
      <span class="cursor-pointer material-icons inline-block px-1 hover:text-red-600" @click="remove(item)">
        remove
      </span>
      <span v-if="cartItem">
        {{ cartItem.count }}
      </span>
      <span class="cursor-pointer material-icons inline-block px-1 hover:text-green-600" @click="add(item)">
        add
      </span>
    </div>
    <div v-else>
      <span class="cursor-pointer material-icons inline-block px-1 hover:text-green-600" @click="add(item)">
        add
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    cartItem: Object
  },
  methods: {
    add() {
      this.$emit('add', this.item);
    },
    remove() {
      this.$emit('remove', this.item);
    },
    isInCart(item) {
      return !!this.cartItem;
    }
  }
};
</script>

