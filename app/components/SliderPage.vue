<template>


    <swiper-container ref="containerRef" class=" xl:h-[893px] lg:h-[700px] md:h-[500px] h-[200px]">
      <swiper-slide
        v-for="(slide, idx) in slides"
        :key="idx"
        :style="{ backgroundImage: `url(/${slide.img})`, color: white}"
        class="slidebg h-full lg:bg-cover xl:bg-cover md:bg-cover bg-cover  bg-no-repeat flex items-center bg-bottom"
      >
      <div class="flex flex-col md:w-[596px] lg:ml-[200px] ml-[10px] md:ml-[50px] lg:gap-[28px] gap-[10px]">
        <span class="md:font-[600] xl:text-[48px] lg:text-[30px] md:text-[20px] text-[12px]">Hydrated & Healthy</span>
        <span class="md:font-[500] md:text-[36px] sm:text-[15px] text-[15px]">Discover the secret to lasting radiance</span>
        <div class="dd flex flex-col gap-[12px] border-l-2 border-[#CF6F7A] pl-[10px]">
          <span class="text-[15px] md:text-[20px] font-[500]">sale up to <span class="text-[10px] md:text-[20px] font-[600] bg-[#FF8A00] rounded-[5px] py-[2px] md:py-[4px] px-[6px] md:px-[12px]">30% OFF</span></span>
          <span class="text-[12px] md:text-[14px] font-[400]">Free shipping on all your orders</span>
        </div>
        <a href="#" class="flex items-center w-[100px] justify-between md:w-[191px] font-[600] text-[12px] md:text-[16px] text-[#C65C6A] bg-[#FFFFFF] md:gap-[12px] gap-[5px] rounded-[53px] py-[5px] md:py-[16px] px-[10px] md:px-[40px]">Shop now <SvgRightArrow/></a>
      </div>
      </swiper-slide>
    </swiper-container>
</template>

<script setup>
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import { Grid, Navigation,Pagination } from 'swiper/modules'
// const modules = [Grid, Navigation, Pagination]
    
    
    
    
    const containerRef = ref(null)
    const slides = ref([
      {img:'bgimg.jpg'},
      {img:'bgimg.jpg'},
    ])
    
</script>