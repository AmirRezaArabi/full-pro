<template>
  <div class="bg-white max-w-80 rounded p-4">
    <span class="material-icons cursor-pointer text-blue-300 active:text-blue-600"
      @click="toggleDropdown">filter_alt</span>
    <div v-show="isDropdownOpen" class="relative">
      <div class="absolute z-10 mt-2 w-full bg-gray-200 shadow-lg rounded border border-gray-300">
        <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <h2 class="font-semibold px-4 py-1 text-gray-700">Color</h2>
          <div class="flex flex-wrap">
            <div v-for="color in meta[0].option_values" :key="color.id">
              <label class="block pl-1 text-sm text-gray-700 flex items-center">
                <input type="checkbox" :value="color.id" v-model="selectedColors" class="leading-normal">
                <div :style="{ backgroundColor: color.presentation }" class="color-box mr-6 h-3 w-3 m-1 inline-block"></div>
              </label>
            </div>
          </div>
          <h2 class="font-semibold px-4 py-2 text-gray-700">Length</h2>
          <div v-for="length in meta[2].option_values" :key="length.id">
            <label class="block px-4 py-2 text-sm text-gray-700">
              <input type="checkbox" :value="length.id" v-model="selectedLength">
              <span class="ml-2">{{ length.presentation }}</span>
            </label>
          </div>

          <h2 class="font-semibold px-4 py-2 text-gray-700">Size</h2>
          <div v-for="size in meta[1].option_values" :key="size.id">
            <label class="block px-4 py-2 text-sm text-gray-700">
              <input type="checkbox" :value="size.id" v-model="selectedSizes" :id="size.id">
              <span class="ml-2">{{ size.presentation }}</span>
            </label>
          </div>

          <button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 m-3 rounded" @click="applyFilter">
            Apply
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import qs from 'qs';

export default {
  computed: {
    ...mapState(['meta', 'filterData']),
  },
  data() {
    return {
      isDropdownOpen: false,
      selectedColors: [],
      selectedSizes: [],
      selectedLength: [],
    };
  },
  methods: {
    ...mapActions(['fetchData']),
    ...mapMutations(['setFilterData']),
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    closeDropdown() {
      this.isDropdownOpen = false;
    },
    handleBodyClick(event) {
      if (!this.$el.contains(event.target)) {
        this.closeDropdown();
      }
    },
    applyFilter() {
      const filters = {
        color: this.selectedColors,
        size: this.selectedSizes,
        length: this.selectedLength
      };
      const queryString = qs.stringify(filters)
      this.setFilterData(queryString)
      this.fetchData(this.filterData)
      this.closeDropdown();
    }
  },
  mounted() {
    document.body.addEventListener('click', this.handleBodyClick);
  },
  beforeDestroy() {
    document.body.removeEventListener('click', this.handleBodyClick);
  },
  created() {
    this.fetchData();
  },
};
</script>
  
  
  
  