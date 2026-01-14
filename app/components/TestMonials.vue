<template>
    <ClientOnly>
       <div class="bg-[#F2F2F2]">
         <div class="container mx-auto px-5 xl:px-0">
    <div class="relative testmonials pt-[100px] pb-[50px] mt-[10%] ">
    <div class="absolute top-[10%] xl:left-0 ">
      <h1 class="mx-auto text-[20px] md:text-[32px] font-[600]">{{$t('clientTestimonials')}}</h1>
    </div>

      <!-- External buttons -->
      <div class="flex justify-end gap-4 mb-4">
        <button ref="prevEl" class="nav-btn w-[45px] bg-white h-[45px] 2xl:right-[4%] absolute xl:right-[5%] md:right-[8%] lg:right-[6%] right-[19%]  top-[10%]  rounded-[500px] p-2 w-6 h-6 md:w-12 md:h-12 flex justify-center items-center"><SvgLeftArrow /></button>
        <button ref="nextEl" class="nav-btn w-[45px] h-[45px] absolute xl:right-[0%] top-[10%]  rounded-[500px] p-1 w-6 h-6 md:w-12 md:h-12 flex justify-center items-center border-2 border-[#C65C6A] bg-[#C65C6A]">
          <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.75 6.7749H0.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.7002 0.75L15.7502 6.774L9.7002 12.799" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </button>
      </div>

      <Swiper
        :modules="[Grid, Navigation]"
        :breakpoints="{
            0: {
                slidesPerView: 1,
                // grid: {
                //     rows: 1,
                //     fill: 'row',
                // },
            },
            768: {
                slidesPerView: 3,
                // grid: {
                //     rows: 2,
                //     fill: 'row',
                // },
            },
        }"        
        :space-between="10"
        :navigation="{
          prevEl: prevEl,
          nextEl: nextEl,
        }"
        @swiper="onSwiper"
        class="mySwiperTestMonials relative"
      >
        <SwiperSlide v-for="n in 13" :key="n">
          <div class="rounded-[8px] border border-[1px] bg-[#FFFFFF]  p-[24px] gap-[16px] flex flex-col ">
            <SvgQuote />
            <div class="text font-[400] text-[14px] text-[#4D4D4D]">Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget</div>
            <div class="flex justify-between align-baseline  pt-[8px] xl:items-center flex-col xl:flex-row">
                <div class="flex gap-[12px] items-center">
                    <div class="avatar w-[56px] h-[56px] rounded">
                        <img src="/avatar1.png" alt="">
                    </div>
                    <div>
                        <span class="font-[500] text-[16px] block">Robert Fox</span>
                        <span class="font-[400] text-[14px] block text-[#999999]">Customer</span>
                    </div>
                </div>
                <div class="ratings gap-[1px] flex mt-4 xl:mt-0">
                      <!-- <div v-for="review in reviews" :key="review.id"> -->
                        <font-awesome-icon v-for="i in 5" :key="i"
                         icon="fa-solid fa-star" class="text-sm text-[#FF8A00]"/>
                         <!-- icon="fa-solid fa-star" class="text-sm" :class="i <= review.rating ? 'text-[#FF8A00]' : 'text-[#CCCCCC]'"/> -->
                      </div>
                    <!-- </div> -->
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

    </div>
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





</style>