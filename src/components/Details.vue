<template>
  <div>
    <div class="mt-10 flex flex-col">
      <div class="slider flex h-[100%]">
        <div
          class="flex mx-auto justify-center relative w-[500px] h-[300px] m-auto">
          <template v-for="(image, index) in images" :key="index">
            <transition name="fade">
              <img
                :src="image"
                class="aspect-[16/9] absolute"
                v-if="index === currentSliderIndex" />
            </transition>
          </template>
          <div
            class="absolute right-0 top-1/3 text-4xl m-2 cursor-pointer z-50"
            @click="nextSlide">
            >
          </div>
          <div
            class="absolute left-0 top-1/3 text-4xl m-2 cursor-pointer z-50"
            @click="prevSlide">
            <
          </div>
        </div>
      </div>
    </div>
    <div class="comments-section mt-4">
      <h2 class="text-center text-xl font-bold mb-4">comments</h2>

      <div class="flex justify-center">
        <input
          v-model="newCommentText"
          @keyup.enter="addComment"
          type="text"
          placeholder="نظر خود را وارد کنید"
          class="border p-2 mr-2 w-2/2" />
        <button @click="addComment" class="bg-blue-800 text-white p-2">
          ثبت نظر
        </button>
      </div>
      <div class="p-5">
        <div class="grid grid-cols-4 gap-3 mb-7">
          <div
            style="background-color: #d4e3e7"
            class="text-center font-bold justify-items-center bg-slate-300 rounded-md p-4"
            v-for="(comment, index) in comments"
            :key="index">
            {{ comment }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, computed } from "vue"
import { useStore } from "vuex"
const store = useStore()
const mamad = computed(() => store.state.data[props.id - 1])

const props = defineProps({
  id: Number,
})

const images = mamad.value.images

const currentSliderIndex = ref(0)
let intervalId

const isTimerPaused = ref(false)

const nextSlide = () => {
  currentSliderIndex.value = (currentSliderIndex.value + 1) % images.length
  isTimerPaused ? "" : startSlider()
}

const prevSlide = () => {
  currentSliderIndex.value =
    (currentSliderIndex.value - 1 + images.length) % images.length
  isTimerPaused ? "" : startSlider()
}

const commentsKey = `comments_${props.id}`
const comments = ref([])
const newCommentText = ref("")

const loadComments = () => {
  const savedComments = localStorage.getItem(commentsKey)
  if (savedComments) {
    comments.value = JSON.parse(savedComments)
  }
}

const saveComments = () => {
  localStorage.setItem(commentsKey, JSON.stringify(comments.value))
}

const addComment = () => {
  if (newCommentText.value.trim()) {
    comments.value.push(newCommentText.value.trim())
    newCommentText.value = ""
    saveComments()
  }
}

onMounted(loadComments)
watch(comments, saveComments, { deep: true })
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s, transform 1s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(0);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s, transform 1s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(0);
}
</style>
