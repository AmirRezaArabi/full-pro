<template>
  <div>
    <div class="grid grid-cols-3 gap-4">
      <div class="flex justify-start">
         
      </div>
      <div class="flex justify-center items-center text-xl">Shoes Shop</div>
      <div v-if="isLoggedIn" class="flex justify-center items-center text-xl">
        <router-link
          :to="{ name: 'cart' }"
          class="relative inline-flex items-center text-6xl text-gray-400 px-5 h-full transition-colors hover:bg-gray-100">
          <span class="material-icons">shopping_cart</span>
          <div v-if="totalItemCount !== 0">
            <span
              class="absolute flex justify-center items-center left-3 bottom-3 rounded-md text-xs bg-red-500 text-white h-5 w-5"
              >{{ totalItemCount }}</span
            >
          </div>
        </router-link>
        <router-link
          :to="{ name: 'home' }"
          class="inline-flex items-center px-5 h-full transition-colors hover:bg-gray-100">
          <div>{{ username }}</div>
        </router-link>
        <button
          class="inline-flex items-center px-5 h-full transition-colors hover:bg-gray-100"
          @click="logout">
          logout
        </button>
      </div>
      <div v-else class="flex justify-center items-center text-xl">
        <button
          @click="showModal = true"
          class="text-sm border mr-1 py-1 px-6 rounded-full"
          style="background-color: #d4e3e7">
          login
        </button>
        <div v-if="showModal" class="modal">
          <div class="modal-content">
            <span class="close" @click="closeModal">&times;</span>
            <h2>login</h2>
            <div class="flex justify-between my-3">
              <input
                type="text"
                class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                placeholder="username"
                v-model="username" />
              <input
                type="password"
                class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                placeholder="password"
                v-model="password" />
            </div>

            <button
              class="bg-gray-500 text-sm text-white border mr-1 py-1 px-6 rounded-full"
              @click="login(username, password)">
              login
            </button>
          </div>
        </div>
        <button
          class="bg-white-500 text-sm text-black border py-1 px-3 rounded-full">
          register
        </button>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-4 justify-between">
      <div></div>
      <div class="flex justify-between">
        <p>برند ها</p>
        <p>تخفیف</p>
        <p>ورزشی</p>
        <p>بچه گانه</p>
        <p>زنانه</p>
        <p>مردانه</p>
      </div>
      <div></div>
    </div>
    <div class="mt-3 px-20"><hr /></div>
    <div class="flex justify-center">
      <header
        class="bg-white mt-2 sticky top-0 h-16 flex justify-between items-stretch"
        style="width: 60%">
        <div
          class="grid text-center items-center px-5 h-full border-2 rounded transition-colors"
          style="background-color: #d4e3e7">
          <span class="material-icons"> lock </span>
          حریم خصوصی
        </div>
        <router-link
          :to="{ name: 'cooperation' }"
          class="grid text-center items-center px-5 h-full border-2 rounded transition-colors"
          style="background-color: #d4e3e7">
          <span class="material-icons"> person </span>
          تقاضای همکاری
        </router-link>
        <div
          class="grid text-center items-center px-5 h-full border-2 rounded transition-colors"
          style="background-color: #d4e3e7">
          <span class="material-icons"> arrow_back_ios </span>
          شرایط بازگرداندن
        </div>
        <router-link
          :to="{ name: 'Sizes' }"
          class="grid text-center items-center px-5 h-full border-2 rounded transition-colors"
          style="background-color: #d4e3e7">
          <span class="material-icons"> question_mark </span>
          راهنمای انتخاب سایز کفش
        </router-link>
        <div
          class="grid text-center items-center px-5 h-full border-2 rounded transition-colors"
          style="background-color: #d4e3e7">
          <span class="material-icons"> email </span>
          تماس با ما
        </div>
        <router-link
          :to="{ name: 'about' }"
          class="grid text-center items-center px-5 h-full border-2 rounded transition-colors"
          style="background-color: #d4e3e7"
          ><span class="material-icons"> textsms </span>
          درباره ما
        </router-link>
      </header>
    </div>
  </div>
</template>

<script>
import "@material/web/button/outlined-button.js"
import { mapState } from "vuex"

export default {
  computed: {
    ...mapState(["cartData"]),
    totalItemCount() {
      return this.cartData.reduce((total, item) => total + item.count, 0)
    },
  },
  data() {
    return {
      showModal: false,
      isLoggedIn: false,
      username: "",
    }
  },
  methods: {
    login(username, password) {
      this.isLoggedIn = true
      this.username = username
      localStorage.setItem("isLoggedIn", true)
      localStorage.setItem("username", username)
      this.closeModal()
    },
    logout() {
      this.isLoggedIn = false
      this.username = ""
      localStorage.removeItem("isLoggedIn")
      localStorage.removeItem("username")
    },
    closeModal() {
      this.showModal = false
    },
  },
  created() {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    const username = localStorage.getItem("username")
    if (isLoggedIn && username) {
      this.isLoggedIn = true
      this.username = username
    }
  },
}
</script>

<style>
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* وسط چین */
  padding: 20px;
  border: 1px solid #888;
  width: 36%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
