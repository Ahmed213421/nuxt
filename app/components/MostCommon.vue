<template>
     <ClientOnly>
       <div class="relative">
         <ViewDialog v-model="dialogVisible"/>
         <div class="container mx-auto">

      <!-- External buttons -->
      <div class="flex justify-end gap-4 mb-4">
        <button ref="prevEl" class="nav-btn z-10 absolute xl:left-[20px] top-1/2 lg:left-4 left-2 rounded-[500px] p-2 w-6 h-6 md:w-12 md:h-12 flex justify-center items-center border-2 border-[#C65C6A]"><SvgLeftArrowSlider /></button>
        <button ref="nextEl" class="nav-btn z-10 absolute xl:right-[20px] lg:right-4 right-2 top-1/2  rounded-[500px] p-1 w-6 h-6 md:w-12 md:h-12 flex justify-center items-center border-2 border-[#C65C6A]"><SvgRightArrowSlider /></button>
      </div>

      <Swiper
        :modules="[Grid, Navigation]"
        :breakpoints="{
            0: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row',
                },
            },
            768: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row',
                },
            },
            1024: {
                slidesPerView: 5,
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
        <SwiperSlide v-for="(n,index) in 13" :key="n">
          <div class="rounded-[5px] border border-[0.92px]  hover border-[#E6E6E6]  pb-[15px] gap-[16px] flex flex-col relative MostBuyed">
            <div class="save bg-[#EA4B48] text-center py-[2.75px] top-[10px] text-[#FFFFFF] absolute left-[11px] px-[7.33px] rounded-[3.67px] w-[73px] font-[400] text-[12.83px]">
                save <span class="discount-number font-[500]">50% </span>
            </div>

            <div class="flex flex-col absolute gap-[10px] top-[10px] right-[11px] iconsHover">
                <div class="border border-[0.92px] w-[36.65px] h-[36.65px] rounded-[50%] flex justify-center items-center border-[#C65C6A]">
                    <SvgLike />
                </div>
                <el-button plain @click="dialogVisible = true" class="border border-[0.92px] !bg-white !w-[36.65px] !h-[36.65px] !rounded-[50%] !flex !justify-center !items-center !border-[#C65C6A]">

                  
                    <SvgViewItem />
                </el-button>
                
            </div>
            <NuxtLink :to="`/${locale}/product-details`">
                            <img src="/ImgSliderBuyed1.png" class="w-full" alt="">
                        </NuxtLink>
            <div class="flex px-1 flex-col xl:flex-row">
                <div class="flex flex-col  gap-[5.5px]">
                    <NuxtLink :to="`/${locale}/product-details`" class="title-buyed font-[400] text-[12.83px] break-all xl:w-[100px]">Vitamin C SdddesrumSdddesrum</NuxtLink>
                    <div class="flex gap-[1.83px]">
                        <span class="price font-[500] text-[#1A1A1A] text-[14.66px]">$14.99</span>
                        <del class="discount font-[400] text-[#999999] text-[14.66px]">$20.99</del>

                    </div>
                    <div class="ratings">
                      <div v-for="review in reviews" :key="review.id">
                        <font-awesome-icon v-for="i in 5" :key="i"
                         icon="fa-solid fa-star" class="text-sm" :class="i <= review.rating ? 'text-[#FF8A00]' : 'text-[#CCCCCC]'"/>
                      </div>
                    </div>
                </div>
                <div class="flex flex-1 flex-col gap-[5.5px]">
                    <div class="flex justify-center md:gap-[7.33px] gap-[3px] text-[#C65C6A] rounded-[11px] items-center py-[2.75px] pl-[3.58px] px-[4.58px] border border-[#C65C6A] border-[1.83px]">
                        <SvgCart />
                        <a href="#" class=" font-[600] xl:text-[12.83px] lg:text-[12px] md:text-[11px] text-[10px]">{{$t('addToCart')}}</a>
                    </div>
                    <div class="flex md:gap-[7.33px] gap-[3px] text-[#618EB1]  justify-center rounded-[11px] items-center py-[2.75px] pl-[3.58px] px-[4.58px] border border-[#618EB1] border-[1.83px]">
                        <SvgBuyNow />
                        <a href="#" class=" font-[600] text-[10px]  xl:text-[12.83px] lg:text-[12px] md:text-[11px]">{{$t('buyNow')}}</a>
                    </div>
                </div>
            </div>
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

const { locale } = useI18n()


const dialogVisible = ref(false)

const onSwiper = (swiper) => {
  swiper.params.navigation.prevEl = prevEl.value
  swiper.params.navigation.nextEl = nextEl.value
  swiper.navigation.init()
  swiper.navigation.update()
}

const reviews = ref([{ id: 1, rating: 4 }])

</script>
<style scoped>



</style>
