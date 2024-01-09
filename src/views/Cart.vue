<template>
    <div class="grid grid-cols-2 md:grid-cols-5 sm:grid-cols-4 gap-3 p-8">
     <div v-for="(item,index) in data" :key="index"
      class="grid text-center font-bold justify-items-center bg-slate-300 rounded-md p-4">
        <div>{{ data[index].name }}</div>
        <div class="mt-2 mb-2">{{ data[index].display_price }}</div>
        <span class="cursor-pointer material-icons hover:text-red-600" @click="removeItem(index)">
          delete_outline
        </span>
     </div>
    </div>

</template>

<script>

export default {
  data() {
    return {
      data: []
    }
  },
  methods: {
    removeItem(index) {
      this.data.splice(index, 1)
      localStorage.setItem('myItem', JSON.stringify(this.data))
      alert("کالا با موفقیت از سبد خرید حذف شد.")
    }
  },
  mounted() {
    const storedArray = localStorage.getItem('myItem');
    if (storedArray) {
      this.data = JSON.parse(storedArray);
    }
  }
}
</script>

<style>

</style>