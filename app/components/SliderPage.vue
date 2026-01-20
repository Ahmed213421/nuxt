<template>


    <swiper-container ref="containerRef" class=" xl:h-[893px] lg:h-[700px] md:h-[500px] h-[200px]">
      <swiper-slide
        v-for="(slide, idx) in slides"
        :key="idx"
        :style="{ backgroundImage: `url(/${slide.img})`, color: white}"
        class="slidebg h-full lg:bg-cover xl:bg-cover md:bg-cover bg-cover  bg-no-repeat flex items-center bg-bottom"
      >
      <div :class="locale === 'ar' ? ' lg:mr-[650px]  xl:mr-[950px]  md:mr-[450px] mr-[250px] 2xl:mr-[1250px]' : 'lg:ml-[200]  md:ml-[50px] ml-[10px]'" class="flex flex-col md:w-[596px] lg:gap-[28px] gap-[10px]">
        <span class="md:font-[600] xl:text-[48px] lg:text-[30px] md:text-[20px] text-[12px]">{{$t('hero.title')}}</span>
        <span class="md:font-[500] md:text-[36px] sm:text-[15px] text-[15px]">{{$t('hero.subtitle')}}</span>
        <div class="dd flex flex-col gap-[12px]  border-[#CF6F7A]" :class="locale === 'ar' ? ' border-r-2 pr-[10px]' : 'border-l-2 pl-[10px]'">
          <span class="text-[15px] md:text-[20px] font-[500]">{{ $t('hero.saleUpTo') }} <span class="text-[10px] md:text-[20px] font-[600] bg-[#FF8A00] rounded-[5px] py-[2px] md:py-[4px] px-[6px] md:px-[12px]"> {{ $t('hero.discount') }}</span></span>
          <span class="text-[12px] md:text-[14px] font-[400]">{{ $t('hero.freeShipping') }}</span>
        </div>
        <a href="#" class="flex items-center w-[100px] justify-between md:w-[191px] font-[600] text-[12px] md:text-[16px] text-[#C65C6A] bg-[#FFFFFF] md:gap-[12px] gap-[5px] rounded-[53px] py-[5px] md:py-[16px] px-[10px] md:px-[40px]">{{ $t('hero.cta') }} <SvgRightArrow class="rightArw"/></a>
      </div>
      </swiper-slide>
    </swiper-container>
</template>

<script setup>
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import { Grid, Navigation,Pagination } from 'swiper/modules'
const { locale } = useI18n()
// const modules = [Grid, Navigation, Pagination]
    
    
    
    
    const containerRef = ref(null)
    const slides = ref([
      {img:'bgimg.jpg'},
      {img:'bgimg.jpg'},
    ])
    
</script>