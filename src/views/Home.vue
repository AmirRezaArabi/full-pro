<template>
  <div>
    <Filter />
    <div class="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-4 gap-3 p-8">
      <ProductItem v-for="item in paginatedItems" :key="item.id" :item="item" />
    </div>
    <Pagination :currentPage="currentPage" :totalPages="totalPages" @update:currentPage="currentPage = $event" />
  </div>
</template>

<script>
import ProductItem from '../components/ProductItem.vue';
import Pagination from '../components/Pagination.vue';
import Filter from '../components/Filter.vue';
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    ProductItem,
    Pagination,
    Filter
  },
  computed: {
    ...mapState(['data', 'meta', 'filterData']),
    itemsPerPage() {
      return 8;
    },
    totalPages() {
      return Math.ceil(this.data.length / this.itemsPerPage);
    },
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.data.slice(startIndex, endIndex);
    }
  },
  data() {
    return {
      currentPage: 1,
    };
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
  }
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
