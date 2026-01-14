<template>
  <ClientOnly>
    <SliderPage />
  </ClientOnly>

  <!-- Go back one slide -->
  <!-- <button @click="swiper.prev()">
    Prev
  </button> -->
  <!-- Go forward one slide -->
  <!-- <button @click="swiper.next()">
    Next
  </button> -->

  <Feature />

  <div class="models mt-[50px] p-5 xl:p-0">
    <div class="container mx-auto">
      <div class="flex justify-between mx-auto">
        <div class="latest font-[500] lg:text-[24px] "><span :class="locale === 'ar' ?'xl:after:right-0 after:right-0' : 'xl:after:left-0 after:left-0'" class="after:content-[''] relative after:absolute  after:bottom-[-6px] after:w-[110.94px] after:h-[2.75px] after:bg-[#C65C6A]  xl:ml-0">{{$t('latest')}}</span></div>
        <a href="#" class="view-all text-[#C65C6A] flex items-center gap-[11px]">{{$t('viewAll')}} <SvgRightArrow /></a>
      </div>
    </div>

    
  </div>
  <Latest class="mt-4 md:px-[70px] px-[50px] xl:p-0"/>

  <div class="models mt-[50px] p-5 xl:p-0">
    <div class="container mx-auto">
      <div class="flex justify-between mx-auto">
                <div class="latest font-[500] lg:text-[24px] "><span :class="locale === 'ar' ?'xl:after:right-0 after:right-0' : 'xl:after:left-0 after:left-0'" class="after:content-[''] relative after:absolute after:bottom-[-6px] after:w-[160.94px] after:h-[2.75px] after:bg-[#C65C6A] xl:ml-0">{{$t('mostBuyed')}}</span></div>

        <a href="#" class="view-all text-[#C65C6A] flex items-center gap-[11px]">{{$t('viewAll')}} <SvgRightArrow /></a>
      </div>
    </div>

  </div>
    
  <MostBuyed class="mt-4 md:px-[70px] px-[50px] xl:p-0"/>
    
    
  <div class="models mt-[50px] p-5 xl:p-0">
    <div class="container mx-auto">
      <div class="flex justify-between mx-auto">
                <div class="latest font-[500] lg:text-[24px] "><span :class="locale === 'ar' ?'xl:after:right-0 after:right-0' : 'xl:after:left-0 after:left-0'" class="after:content-[''] relative after:absolute xl after:bottom-[-6px] after:w-[200.94px] after:h-[2.75px] after:bg-[#C65C6A] xl:ml-0">{{$t('mostCommon')}}</span></div>

        <a href="#" class="view-all text-[#C65C6A] flex items-center gap-[11px]">{{$t('viewAll')}} <SvgRightArrow /></a>
      </div>
    </div>


    
    
  </div>
  <MostCommon class="mt-4 md:px-[70px] px-[50px] xl:p-0"/>
  
  <Deals class="my-10"/>
  
  <ProductDetails />

  <!-- <BgBanner /> -->

  <TestMonials />

</template>

<style scoped>
.demonstration {
  color: var(--el-text-color-secondary);
}


</style>

<script setup>
  
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'

import { Grid, Navigation,Pagination } from 'swiper/modules'
const modules = [Grid, Navigation, Pagination]
const { locale } = useI18n()




const containerRef = ref(null)
const slides = ref([  
  {img:'bgimg.jpg'},
  {img:'bgimg.jpg'},
])

// const swiper = useSwiper(containerRef)





</script>

