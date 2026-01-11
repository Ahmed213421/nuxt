<template>
     <ClientOnly>
       <div class="relative">
         <div class="container mx-auto">

      <!-- External buttons -->
      <div class="flex justify-end gap-4 mb-4">
        <button ref="prevEl" class="nav-btn z-10 absolute xl:left-[20px] top-1/2 lg:left-4 left-2 rounded-[500px] p-2 w-6 h-6 md:w-12 md:h-12 flex justify-center items-center border-2 border-[#C65C6A]"><IconsLeftArrowSlider /></button>
        <button ref="nextEl" class="nav-btn z-10 absolute xl:right-[20px] lg:right-4 right-2 top-1/2  rounded-[500px] p-1 w-6 h-6 md:w-12 md:h-12 flex justify-center items-center border-2 border-[#C65C6A]"><IconsRightArrowSlider /></button>
      </div>
           <Swiper
             :modules="[Grid, Navigation]"
             :breakpoints="{
                 0: {
                     slidesPerView: 3,
                     grid: {
                         rows: 1,
                         fill: 'row',
                     },
                 },
                 1024: {
                     slidesPerView: 6,
                     grid: {
                         rows: 2,
                         fill: 'row',
                     },
                 },
             }"        
             :space-between="5"
             :navigation="{
               prevEl: prevEl,
               nextEl: nextEl,
             }"
             @swiper="onSwiper"
             class="mySwiper relative"
           >
             <SwiperSlide v-for="n in 13" :key="n">
               <div class="rounded-[5px] border border-[1px] border-[#E6E6E6] pt-[16px] pb-[24px] gap-[16px] flex flex-col">
                 <div>
                     <img src="/cleansers.jpg" alt="">
                 </div>
                 <span class="font-[500] lg:text-[18px] text-[10px]  text-center">Cleansers</span>
               </div>
             </SwiperSlide>
           </Swiper>
       
         </div>
      </div>
        
  </ClientOnly>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Grid, Navigation } from 'swiper/modules'

const prevEl = ref(null)
const nextEl = ref(null)

const onSwiper = (swiper) => {
  swiper.params.navigation.prevEl = prevEl.value
  swiper.params.navigation.nextEl = nextEl.value
  swiper.navigation.init()
  swiper.navigation.update()
}
</script>
<style scoped>


.mySwiper {
  width: 100%;
  margin:auto;
}


</style>
