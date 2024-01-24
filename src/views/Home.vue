<template>
  <div class="grid grid-cols-2 md:grid-cols-5 sm:grid-cols-4 gap-3 p-8">
    <div v-for="item in items" :key="item.id"
      class="grid text-center font-bold justify-items-center bg-slate-300 rounded-md p-4">
      <div>{{ item.attributes.name }}</div>
      <div class="mt-2 mb-2">{{ item.attributes.display_price }}</div>
      <div>
        <span class="cursor-pointer material-icons inline-block px-1 hover:text-green-600" @click="remove(item)">
          remove
        </span>
        <div class="inline-block px-1">{{ item.count }}</div>
        <span class="cursor-pointer material-icons inline-block px-1 hover:text-green-600" @click="add(item)">
          add
        </span>
      </div>
    </div>
  </div>
  <notifications classes="vue-notification" position="bottom right" />
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { notify } from "@kyvg/vue3-notification";

export default {
  computed: {
    ...mapState(['data']),
    items() {
      return this.data.map(item => ({
        ...item
      }));
    },
  },
  methods: {
    ...mapActions(['fetchData', 'addToCart']),
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
      this.$store.dispatch('removeFromCart', item.id);
      notify({
        text: "کالا با موفقیت از سبد خرید حذف شد",
        type: "error"
      });
    },
    loadData() {
      this.fetchData()
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
