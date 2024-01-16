<template>
    <div class="grid grid-cols-2 md:grid-cols-5 sm:grid-cols-4 gap-3 p-8">
     <div v-for="(item,index) in data" :key="index"
      class="grid text-center font-bold justify-items-center bg-slate-300 rounded-md p-4">
        <div>{{ item.name }}</div>
        <div class="mt-2 mb-2">{{ item.display_price }}</div>
        <span class="cursor-pointer material-icons hover:text-red-600" @click="removeItem(index)">
          delete_outline
        </span>
     </div>
    </div>
    <notifications position="bottom right"/>
</template>

<script>
import { notify } from "@kyvg/vue3-notification";

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
      notify({
        text: "کالا با موفقیت از سبد خرید حذف شد",
      });
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
.vue-notification {
  text-align: end;
  margin: 0 5px 5px;
  padding: 10px;
  font-size: 12px;
  color: #ffffff;
  background: #68cd86;
  border-left: 5px solid #68cd86;
  border-right: 5px solid #42a85f;
}

</style>