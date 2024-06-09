<template>
  <Nav />
  <div style="min-height: 26vh">
    <router-view />
  </div>
</template>

<script setup>
import Nav from "./components/Nav.vue"
import { useRoute } from "vue-router"

const route = useRoute()
</script>
