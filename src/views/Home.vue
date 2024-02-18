<template>
  <div class="grid grid-cols-2 md:grid-cols-5 sm:grid-cols-4 gap-3 p-8">
    <ProductItem
      v-for="item in items"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script>
import ProductItem from '../components/ProductItem.vue';
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    ProductItem
   },
  computed: {
    ...mapState(['data']),
    items() {
      return this.data.map(item => ({ ...item }));
    }
  },
  methods: {
    ...mapActions(['fetchData']),
    loadData() {
      this.fetchData();
    }
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
