<template>
  <div class="md:overflow-hidden overflow-x-hidden bg-primary w-full md:h-screen">
    <Navbar />
    <router-view class="relative z-10" />
    <div class="blur-[100px] bg-red-500 fixed -top-24 -right-24 w-64 h-64 rounded-full"></div>
    <div class="blur-[100px] bg-red-500 fixed top-96 -left-24 w-64 h-64 rounded-full"></div>
  </div>
</template>
<script setup>
import Navbar from "./components/Navbar.vue";
</script>