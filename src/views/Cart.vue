<template>
    <div class="grid grid-cols-1 md:grid-cols-5 gap-3 p-8">
     <div v-for="(selectedItem,index) in myData" :key="index"
      class="grid text-center font-bold justify-items-center bg-slate-300 rounded-md p-4">
        <div>{{ selectedItem }}</div>
        <div class="mt-2 mb-2">{{ getPriceBySelectedItem(index) }} $</div>
        <span class="cursor-pointer material-icons hover:text-red-600" @click="removeItem(index)">
          delete_outline
        </span>
     </div>
    </div>

</template>

<script>

export default {
  computed: {
    myData() {
      return this.$store.state.myData;
    },
    myPrice() {
      return this.$store.state.myPrice;
    }
  },
  methods: {
    getPriceBySelectedItem(index) {
      return this.myPrice[index];
    },
    removeItem(index) {
      this.myData.splice(index , 1)
    }
  }
}
</script>

<style>

</style>