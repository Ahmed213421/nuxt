<template>
     <ClientOnly>
    <div class="relative">

      <!-- External buttons -->
      <div class="flex justify-end gap-4 mb-4">
        <button ref="prevEl" class="nav-btn z-10 absolute xl:left-10 top-1/2 lg:left-4 left-2 rounded-[500px] p-2 w-6 h-6 md:w-12 md:h-12 flex justify-center items-center border-2 border-[#C65C6A]"><IconsLeftArrowSlider /></button>
        <button ref="nextEl" class="nav-btn z-10 absolute xl:right-10 lg:right-4 right-2 top-1/2  rounded-[500px] p-1 w-6 h-6 md:w-12 md:h-12 flex justify-center items-center border-2 border-[#C65C6A]"><IconsRightArrowSlider /></button>
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
          <div class="rounded-[5px] border border-[0.92px] border-[#E6E6E6]  pb-[15px] gap-[16px] flex flex-col relative MostBuyed" :class="index == 2 ? 'border !border-[#CF6F7A]' : ''">
            <div class="save bg-[#EA4B48] text-center py-[2.75px] top-[10px] text-[#FFFFFF] absolute left-[11px] px-[7.33px] rounded-[3.67px] w-[73px] font-[400] text-[12.83px]">
                save <span class="discount-number fofnt-[500]">50% </span>
            </div>

            <div class="flex flex-col absolute gap-[10px] top-[10px] right-[11px] iconsHover">
                <div class="border border-[0.92px] w-[36.65px] h-[36.65px] rounded-[50%] flex justify-center items-center border-[#C65C6A]">
                    <IconsLike />
                </div>
                <div class="border border-[0.92px] w-[36.65px] h-[36.65px] rounded-[50%] flex justify-center items-center border-[#C65C6A]">
                    <IconsViewItem />
                </div>
            </div>
            <div>
                <img src="/ImgSliderBuyed1.png" alt="">
            </div>
            <div class="flex px-1 flex-col xl:flex-row">
                <div class="flex flex-col  gap-[5.5px]">
                    <span class="title-buyed font-[400] text-[12.83px] break-all xl:w-[100px]">Vitamin C SdddesrumSdddesrum</span>
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
                        <IconsCart />
                        <a href="#" class=" font-[600] xl:text-[12.83px] lg:text-[12px] md:text-[11px] text-[10px]">Add To Cart</a>
                    </div>
                    <div class="flex md:gap-[7.33px] gap-[3px] text-[#618EB1]  justify-center rounded-[11px] items-center py-[2.75px] pl-[3.58px] px-[4.58px] border border-[#618EB1] border-[1.83px]">
                        <IconsBuyNow />
                        <a href="#" class=" font-[600] text-[10px]  xl:text-[12.83px] lg:text-[12px] md:text-[11px]">Buy Now</a>
                    </div>
                </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

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

const reviews = ref([{ id: 1, rating: 4 }])

</script>
<style scoped>



</style>
