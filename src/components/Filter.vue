<template>
    <div class="bg-white max-w-80 rounded p-4">
        <span class="material-icons cursor-pointer text-blue-300 active:text-blue-600"
            @click="toggleDropdown">filter_alt</span>
        <div v-show="isDropdownOpen" class="relative">
            <div class="absolute inset-0 bg-gray-800 bg-opacity-25" @click="closeDropdown"></div>
            <div class="absolute z-10 mt-2 w-full bg-gray-100 shadow-lg rounded border border-gray-300">
                <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <h2 class="font-semibold px-4 py-2 text-gray-700">Color</h2>
                    <div class="flex flex-wrap">
                        <div v-for="optionValue in meta[0].option_values" :key="optionValue.id"
                            :style="{ backgroundColor: optionValue.presentation }" class="color-box h-3 w-3 m-2">
                            {{ console.log(optionValue) }}
                        </div>
                    </div>
                    <h2 class="font-semibold px-4 py-2 text-gray-700">Length</h2>
                    <label class="block px-4 py-2 text-sm text-gray-700">
                        <input type="checkbox" value="mini" v-model="selectedLength">
                        <span class="ml-2">Mini</span>
                    </label>
                    <label class="block px-4 py-2 text-sm text-gray-700">
                        <input type="checkbox" value="midi" v-model="selectedLength">
                        <span class="ml-2">Midi</span>
                    </label>
                    <h2 class="font-semibold px-4 py-2 text-gray-700">Size</h2>
                    <label class="block px-4 py-2 text-sm text-gray-700">
                        <input type="checkbox" value="xs" v-model="selectedSizes">
                        <span class="ml-2">XS</span>
                    </label>
                    <label class="block px-4 py-2 text-sm text-gray-700">
                        <input type="checkbox" value="s" v-model="selectedSizes">
                        <span class="ml-2">S</span>
                    </label>
                    <label class="block px-4 py-2 text-sm text-gray-700">
                        <input type="checkbox" value="m" v-model="selectedSizes">
                        <span class="ml-2">M</span>
                    </label>
                    <label class="block px-4 py-2 text-sm text-gray-700">
                        <input type="checkbox" value="l" v-model="selectedSizes">
                        <span class="ml-2">L</span>
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import '@material/web/button/outlined-button.js';
import { mapState, mapActions } from 'vuex';

export default {
    computed: {
        ...mapState(['meta']),
    },
    data() {
        return {
            isDropdownOpen: false,
            selectedColors: [],
            selectedSizes: [],
            selectedLength: []
        };
    },
    methods: {
        ...mapActions(['fetchData']),
        loadData() {
            this.fetchData();
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.loadData();
            });
        },
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        closeDropdown() {
            this.isDropdownOpen = false;
        },
        handleBodyClick(event) {
            if (!this.$el.contains(event.target)) {
                this.isDropdownOpen = false;
            }
        }
    },
    mounted() {
        document.body.addEventListener('click', this.handleBodyClick);
    },
    beforeDestroy() {
        document.body.removeEventListener('click', this.handleBodyClick);
    }
};
</script>
  
<style scoped></style>
  