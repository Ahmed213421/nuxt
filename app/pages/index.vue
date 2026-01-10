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

  <div class="models mt-[50px]">
    <div class="container mx-auto">
      <div class="flex justify-between w-[95%] mx-auto">
        <div class="latest font-[500] text-[24px] relative after:content-[''] after:absolute  after:xl:left-0 after:left-[45%] after:bottom-[-6px] after:w-[110.94px] after:h-[2.75px] after:bg-[#C65C6A]"><span class=" ml-[50px] xl:ml-0">Latest</span></div>
        <a href="#" class="view-all text-[#C65C6A] flex items-center gap-[11px]">View All <IconsRightArrow /></a>
      </div>
    </div>

    <Latest class="mt-4"/>

  </div>

  <div class="models mt-[50px]">
    <div class="container mx-auto">
      <div class="flex justify-between w-[95%] mx-auto">
        <div class="latest font-[500] text-[24px]  relative after:content-[''] after:absolute after:xl:left-0 after:left-[29%] after:bottom-[-6px] after:w-[180.94px] after:h-[2.75px] after:bg-[#C65C6A]"><span class=" ml-[50px] xl:ml-0">Most Buyed</span></div>
        <a href="#" class="view-all text-[#C65C6A] flex items-center gap-[11px]">View All <IconsRightArrow /></a>
      </div>
    </div>

    <MostBuyed class="mt-4"/>

    
    
  </div>
  <div class="models mt-[50px]">
    <div class="container mx-auto">
      <div class="flex justify-between w-[95%] mx-auto">
        <div class="latest font-[500] text-[24px]  relative after:content-[''] after:absolute  after:xl:left-0 after:left-[25%] after:bottom-[-6px] after:w-[180.94px] after:h-[2.75px] after:bg-[#C65C6A]"><span class=" ml-[50px] xl:ml-0">Most Common</span></div>
        <a href="#" class="view-all text-[#C65C6A] flex items-center gap-[11px]">View All <IconsRightArrow /></a>
      </div>
    </div>


    <MostCommon class="mt-4"/>
    
    
  </div>
  
  <Deals />
  
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
import { Grid, Navigation,Pagination } from 'swiper/modules'
const modules = [Grid, Navigation,Pagination]



const containerRef = ref(null)
const slides = ref([
  {img:'bgimg.jpg'},
  {img:'bgimg.jpg'},
])

// const swiper = useSwiper(containerRef)





</script>

