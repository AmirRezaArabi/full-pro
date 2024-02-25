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
  <notifications position="bottom right" />
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { notify } from "@kyvg/vue3-notification";

export default {
  props: {
    item: Object
  },
  computed: {
    ...mapState(['filterData']),
    cartItem() {
      return this.$store.state.cartData.find(cartItem => cartItem.id === this.item.id);
    }
  },
  methods: {
    ...mapActions(['addToCart', 'removeFromCart']),
    add(item) {
      const newData = {
        id: item.id,
        name: item.attributes.name,
        display_price: item.attributes.display_price,
      };
      this.addToCart(newData);
      notify({
        text: "کالا با موفقیت به سبد خرید اضافه شد",
        type: "success"
      });
    },
    remove(item) {
      this.removeFromCart(item.id);
      notify({
          text: "کالا با موفقیت از سبد خرید حذف شد",
          type: "error"
        });
    },
    isInCart(item) {
      return !!this.cartItem;
    }
  }
};
</script>

