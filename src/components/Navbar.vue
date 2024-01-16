<template>
    <div class="text-[8px] md:text-sm fixed z-50 top-0 left-0 h-12 text-white w-full flex flex-row p-4 justify-center items-center gap-4 md:gap-12">
        <router-link to="/" :class="{'text-white': $route.name == 'home', 'text-white/75': $route.name != 'home'}">Home</router-link>
        <p class="text-white/75 rotate-[-35deg]" to="">\</p>
        <router-link to="/about" :class="{'text-white': $route.name == 'about', 'text-white/75': $route.name != 'about'}">About</router-link>
        <p class="text-white/75 rotate-[-35deg]" to="">\</p>
        <img src="/img/header.png" alt="header" class="text-white/75 w-24">
        <p class="text-white/75 rotate-[35deg]" to="">/</p>
        <router-link to="/characters" :class="{'text-white': $route.name == 'characters', 'text-white/75': $route.name != 'characters'}">Characters</router-link>
        <p class="text-white/75 rotate-[35deg]" to="">/</p>
        <router-link to="/cube" :class="{'text-white': $route.name == 'cube', 'text-white/75': $route.name != 'cube'}">Cube</router-link>
    </div>x`
</template>
<script setup>

</script>