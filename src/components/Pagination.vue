<template>
  <div class="flex justify-center mt-28 mb-4">
    <button @click="previousPage" :disabled="currentPage === 1"
      class="flex justify-center items-center mx-1 p-4 rounded-md text-xs bg-red-500 text-white h-5 hover:bg-red-600">Previous</button>
    <template v-for="pageNumber in getPageNumbers">
      <button @click="goToPage(pageNumber)" :class="{ 'font-bold bg-red-700': pageNumber === currentPage }"
        class="flex justify-center items-center mx-1 p-4 rounded-md text-xs bg-red-500 text-white h-5 w-5 hover:bg-red-700">{{
          pageNumber }}</button>
    </template>
    <button @click="nextPage" :disabled="currentPage === totalPages"
      class="flex justify-center items-center mx-1 p-4 rounded-md text-xs bg-red-500 text-white h-5 hover:bg-red-600">Next</button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: Number,
    totalPages: Number
  },
  computed: {
    getPageNumbers() {
      const pageNumbers = [];
      for (let i = 1; i <= this.totalPages; i++) {
        pageNumbers.push(i);
      }
      return pageNumbers;
    }
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.$emit('update:currentPage', this.currentPage + 1);
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.$emit('update:currentPage', this.currentPage - 1);
      }
    },
    goToPage(pageNumber) {
      this.$emit('update:currentPage', pageNumber);
    }
  }
};
</script>
