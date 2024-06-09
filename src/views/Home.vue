<template>
  <div style="min-height: 27vh">
    <div class="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-3 p-8">
      <Product v-for="item in data" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import Product from "../components/Product.vue"
import { mapActions, mapState } from "vuex"

export default {
  components: {
    Product,
  },
  computed: {
    ...mapState(["data", "currentPage"]),
  },
  methods: {
    ...mapActions(["fetchData"]),
    loadData() {
      this.fetchData()
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.loadData()
    })
  },
}
</script>
