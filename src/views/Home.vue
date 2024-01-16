<template>
    <div class="flex flex-col md:flex-row justify-center items-center w-full md:h-screen p-8 md:p-24 pt-0 max-md:pb-8 pb-0">
        <div class="w-full flex max-md:items-center flex-col justify-start items-start gap-8 h-full">
            <h1 class="text-7xl max-md:text-center font-black text-white leading-[85px]">JUJUTSU KAISEN 2ND SEASON</h1>
            <div class="flex flex-col md:flex-row justify-center items-center gap-8 w-full md:w-3/4">
                <hr class="border border-t-white w-full">
                <div class="flex flex-row justify-center items-center w-full">
                    <img src="/img/User 1.png" alt="">
                    <img src="/img/User 2.png" alt="" class="md:-translate-x-[1rem]">
                    <img src="/img/User 3.png" alt="" class="md:-translate-x-[2rem]">
                    <img src="/img/User 4.png" alt="" class="md:-translate-x-[3rem]">
                    <div class="bg-orange flex justify-center items-center p-3 text-xl text-white rounded-full md:-translate-x-[4rem]"><i class="bx bx-plus"></i></div>
                </div>
            </div>
            <button class="relative z-50 flex border hover:bg-orange transition-colors duration-150 border-orange px-4 py-1 text-sm justify-center items-center text-white">Watch Jujutsu Kaisen <i class='bx bx-up-arrow-alt rotate-45 text-3xl'></i></button>
        </div>
        <div class="relative w-full max-md:h-screen md:p-12 md:pb-0 max-md:order-first flex justify-center items-center">
            <div class="border z-0 border-white p-4 pb-0 md:h-full h-3/4 w-80 md:w-96 absolute inset-8 bg-gradient-to-r from-white/5 to-transparent top-24 md:top-1/2 left-1/2 -translate-x-1/2 translate-0 md:-translate-y-1/3">
                <img class="w-full h-full" src="/img/Rectangle 1.png">
                <img src="/img/star.png" alt="" class="absolute -top-12 -left-[51px]">
                <i class="bx bx-search absolute top-8 right-8 text-xl border-2 border-orange px-2 py-1 text-white rounded-full"></i>
            </div>
            <img v-show="i == 0" src="/img/gojo.png" alt="" class="z-10 w-full max-md:scale-[1.375]">
            <img v-show="i == 1" src="/img/geto.png" alt="" class="z-10 w-full max-md:scale-[1.425]">
            <img v-show="i == 2" src="/img/shoko.png" alt="" class="z-10 w-full max-md:scale-[1.275]">
            <img v-show="i == 3" src="/img/riko.png" alt="" class="z-10 w-full max-md:scale-[1.425]">
            <img v-show="i == 4" src="/img/toji.png" alt="" class="z-10 w-full max-md:scale-[1.45]">
            <Transition name="pop-up">
                <div v-show="i == 0" class="absolute z-10 w-full top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 flex flex-col justify-center items-center gap-3 text-xl text-white">
                    <p>五条悟</p>
                    <p class="font-black text-3xl">GOJO SATORU</p>
                    <button class="bg-[#FF8718]/75 max-md:text-xl border-l border-white text-white px-3">
                        <span class="font-bold">VA:</span> Nakamura Yuuichi
                    </button>
                </div>
            </Transition>
            <Transition name="pop-up">
                <div v-show="i == 1" class="absolute z-10 w-full top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 flex flex-col justify-center items-center gap-3 text-xl text-white">
                    <p>夏油傑</p>
                    <p class="font-black text-3xl">GETOU SUGURU</p>
                    <button class="bg-[#FF8718]/75 max-md:text-xl border-l border-white text-white px-3">
                        <span class="font-bold">VA:</span> Sakurai Takahiro
                    </button>
                </div>
            </Transition>
            <Transition name="pop-up">
                <div v-show="i == 2" class="absolute z-10 w-full top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 flex flex-col justify-center items-center gap-3 text-xl text-white">
                    <p>家入硝子</p>
                    <p class="font-black text-3xl">SHOKO IEIRI</p>
                    <button class="bg-[#FF8718]/75 max-md:text-xl border-l border-white text-white px-3">
                        <span class="font-bold">VA:</span> Endou Aya
                    </button>
                </div>
            </Transition>
            <Transition name="pop-up">
                <div v-show="i == 3" class="absolute z-10 w-full top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 flex flex-col justify-center items-center gap-3 text-xl text-white">
                    <p>天内理子</p>
                    <p class="font-black text-3xl">RIKO AMANAI</p>
                    <button class="bg-[#FF8718]/75 max-md:text-xl border-l border-white text-white px-3">
                        <span class="font-bold">VA:</span> Nagase Anna
                    </button>
                </div>
            </Transition>
            <Transition name="pop-up">
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
        </div>
        <div class="w-[120%] z-10 max-md:hidden fixed -bottom-12 -left-40 h-36 flex flex-col flex-nowrap rotate-6">
            <div class="w-full marquee h-full bg-[#FF8718] text-black font-bold flex flex-row justify-center items-center text-3xl gap-12">
                <p>LATEST SEASON</p>
                <img src="/img/stridgestar.png" alt="">
                <p>BEST ACTION ANIME</p>
                <img src="/img/stridgestar.png" alt="">
                <p>JUJUTSU KAISEN 2ND SEASON</p>
                <img src="/img/stridgestar.png" alt="">
            </div>
            <div class="w-full -marquee h-full text-black font-bold flex flex-row justify-center items-center text-3xl gap-12">
                <p>TOP RATED ANIME</p>
                <img src="/img/stridgestar.png" alt="">
                <p>RECOMMENDATION</p>
                <img src="/img/stridgestar.png" alt="">
                <p>JUJUTSU KAISEN 2ND SEASON</p>
            </div>
        </div>
    </div>
    <img src="/img/textures.png" alt="" class="fixed top-0 left-0 w-full h-full mix-blend-color-dodge z-20">
</template>
<script setup>
import { ref } from "vue";
const i = ref(0);
</script>
<style scoped>
.pop-up-enter-active,
.pop-up-leave-active {
  transition: opacity 0.5s linear;
}

.pop-up-enter-from,
.pop-up-leave-to {
  opacity: 0;
}
</style>