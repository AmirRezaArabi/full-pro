<template>
  <div class="grid grid-cols-2 md:grid-cols-5 sm:grid-cols-4 gap-3 p-8">
    <product-item
      v-for="item in items"
      :key="item.id"
      :item="item"
      :cartItem="getCartItem(item)"
      @add="add"
      @remove="remove"
    />
  </div>
  <notifications position="bottom right" />
</template>

<script>
import ProductItem from '../components/ProductItem.vue';
import { notify } from "@kyvg/vue3-notification";
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    ProductItem,
    Notification
  },
  computed: {
    ...mapState(['data', 'cartData']),
    items() {
      return this.data.map(item => ({ ...item }));
    }
  },
  methods: {
    ...mapActions(['fetchData', 'addToCart', 'removeFromCart']),
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
    loadData() {
      this.fetchData();
    },
    getCartItem(item) {
      return this.cartData.find(cartItem => cartItem.id === item.id);
    },
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.loadData();
    });
  },
};
</script>

<style>

.vue-notification.success {
  text-align: end;
  margin: 0 5px 5px;
  padding: 10px;
  font-size: 12px;
  color: #ffffff;
  background: #68cd86;
  border-left: 5px solid #68cd86;
  border-right: 5px solid #42a85f;
}

.vue-notification.error {
  text-align: end;
  margin: 0 5px 5px;
  padding: 10px;
  font-size: 12px;
  color: #ffffff;
  background: #ff6961;
  border-left: 5px solid #ff6961;
  border-right: 5px solid #ff0000;
}

</style>
