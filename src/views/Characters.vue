<template>
    <div class="relative flex justify-center items-center h-screen">
        <div class="border z-0 border-white p-4 pb-0 md:h-full h-3/4 w-80 md:w-96 absolute inset-8 bg-gradient-to-r from-white/5 to-transparent top-24 md:top-1/2 left-1/2 -translate-x-1/2 translate-0 md:-translate-y-1/3">
            <img class="w-full h-full" src="/img/Rectangle 1.png">
            <img src="/img/star.png" alt="" class="absolute -top-12 -left-[51px]">
            <i class="bx bx-search absolute top-8 right-8 text-xl border-2 border-orange px-2 py-1 text-white rounded-full"></i>
        </div>
        <img v-show="i == 0" src="/img/gojo.png" alt="" class="z-10 translate-y-12 w-[32rem]">
        <img v-show="i == 1" src="/img/geto.png" alt="" class="z-10 translate-y-12 w-[32rem]">
        <img v-show="i == 2" src="/img/shoko.png" alt="" class="z-10 translate-y-12 w-[32rem]">
        <img v-show="i == 3" src="/img/riko.png" alt="" class="z-10 translate-y-12 w-[32rem]">
        <img v-show="i == 4" src="/img/toji.png" alt="" class="z-10 translate-y-12 w-[32rem]">
        <Transition name="fade-up">
            <div v-show="i == 0" class="absolute z-10 w-full top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 flex flex-col justify-center items-center gap-3 text-xl text-white">
                <p>五条悟</p>
                <p class="font-black text-3xl">GOJO SATORU</p>
                <button class="bg-[#FF8718]/75 max-md:text-xl border-l border-white text-white px-3">
                    <span class="font-bold">VA:</span> Nakamura Yuuichi
                </button>
            </div>
        </Transition>
        <Transition name="fade-up">
            <div v-show="i == 1" class="absolute z-10 w-full top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 flex flex-col justify-center items-center gap-3 text-xl text-white">
                <p>夏油傑</p>
                <p class="font-black text-3xl">GETOU SUGURU</p>
                <button class="bg-[#FF8718]/75 max-md:text-xl border-l border-white text-white px-3">
                    <span class="font-bold">VA:</span> Sakurai Takahiro
                </button>
            </div>
        </Transition>
        <Transition name="fade-up">
            <div v-show="i == 2" class="absolute z-10 w-full top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 flex flex-col justify-center items-center gap-3 text-xl text-white">
                <p>家入硝子</p>
                <p class="font-black text-3xl">SHOKO IEIRI</p>
                <button class="bg-[#FF8718]/75 max-md:text-xl border-l border-white text-white px-3">
                    <span class="font-bold">VA:</span> Endou Aya
                </button>
            </div>
        </Transition>
        <Transition name="fade-up">
            <div v-show="i == 3" class="absolute z-10 w-full top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 flex flex-col justify-center items-center gap-3 text-xl text-white">
                <p>天内理子</p>
                <p class="font-black text-3xl">RIKO AMANAI</p>
                <button class="bg-[#FF8718]/75 max-md:text-xl border-l border-white text-white px-3">
                    <span class="font-bold">VA:</span> Nagase Anna
                </button>
            </div>
        </Transition>
        <Transition name="fade-up">
            <div v-show="i == 4" class="absolute z-10 w-full top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 flex flex-col justify-center items-center gap-3 text-xl text-white">
                <p>伏黒甚爾</p>
                <p class="font-black text-3xl">TOJI FUSHIGURO</p>
                <button class="bg-[#FF8718]/75 max-md:text-xl border-l border-white text-white px-3">
                    <span class="font-bold">VA:</span> Koyasu Takehito
                </button>
            </div>
        </Transition>
        <div class="z-[99] text-white absolute w-80 flex justify-between items-center top-1/2 left-1/2 -translate-x-1/2 translate-y-48">
            <button @click="i <= 0 ? i = 4 : i--"><i class="bx bx-arrow-back text-3xl"></i></button>
            <button @click="i >= 4 ? i = 0 : i++"><i class="bx bx-arrow-back text-3xl bx-rotate-180"></i></button>
        </div>
        <img src="/img/left.png" alt="" class="fixed -z-10 w-48 bottom-0 left-0">
        <img src="/img/right.png" alt="" class="fixed -z-10 w-48 bottom-0 right-0">
        <img src="/img/textures.png" alt="" class="fixed top-0 left-0 w-full h-full mix-blend-color-dodge z-20">
    </div>
</template>
<script setup>
import { ref } from "vue";
const i = ref(0);
</script>
<style scoped>
.fade-up-enter-active,
.fade-up-leave-active {
  transition: opacity 0.5s linear;
}

.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
}
</style>