<template>
  <div class="overflow-hidden bg-primary w-full h-screen">
    <img src="/img/textures.png" alt="" class="fixed top-0 left-0 w-full h-full mix-blend-color-dodge z-40">
    <Navbar />
    <router-view class="relative z-10" />
    <div class="blur-[100px] bg-red-500 fixed -top-24 -right-24 w-64 h-64 rounded-full"></div>
    <div class="blur-[100px] bg-red-500 fixed top-96 -left-24 w-64 h-64 rounded-full"></div>
  </div>
</template>
<script setup>
import Navbar from "./components/Navbar.vue";
</script>