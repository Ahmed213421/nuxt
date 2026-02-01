<template>
  <el-dialog
    v-model="visible"
    :width="!isMobile ? '1000' : '400'"
  >
  <div class="py-[10px]">

      <div class="grid grid-cols-12">
          <div class="col-span-12 md:col-span-6">
              <div class="flex lg:justify-around md:flex-row">
                
     <ClientOnly>
       <div class="relative py-5">
         <div class="container mx-auto">

      <!-- External buttons -->
      <div class="flex justify-end gap-4 mb-4">
        <button ref="prevEl" class="nav-btn z-10 absolute  lg:top-[-4%] top-0  md:w-12 right-6 md:left-4 md:h-12 flex justify-center items-center "><SvgArrowUp /></button>
        <button ref="nextEl" class="nav-btn z-10 absolute  lg:bottom-[-4%] bottom-0 left-8 md:left-5 md:right-4 md:w-12 md:h-12 flex justify-center items-center "><SvgArrowBottom /></button>
      </div>

      
      <Swiper
    direction="vertical"
    :slides-per-view="1"
    :mousewheel="true"
        :modules="[Grid, Navigation]"
        :breakpoints="{
            0: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row',
                },
            },
            768: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row',
                },
            },
            1024: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
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
        class="mySwiper relative h-[400px]"
      >
        <SwiperSlide v-for="(src,index) in images" :key="n">
          <div @click="setImage(src)" class="cursor-pointer w-[80px] hover:border-[#CF6F7A] flex gallery-thumbnails justify-center items-center h-[80px] border border-[#C4C4C4]">
            <img :src="src"  class="w-[w-47px] h-[70px]" alt="">
          </div>
        </SwiperSlide>
      </Swiper> 
      

    </div>
    </div>
  </ClientOnly>

  <div class="w-[289px]  gallery-preview h-[423px]">
    <img :src="selectedImage"  class="h-[380px]" alt="" srcset="">
  </div>
              </div>
            </div>
            <div class="col-span-12 md:col-span-6">
                <div class="flex flex-col gap-[12px]">
                    <div class="flex gap-[8px] items-center">
                        <h1 class="font-[600] text-[36px] text-[#1A1A1A]">Foundation</h1>
                        <span class="text-[14px] text-[#2C742F] font-[400] py-[4px] px-[8px] border rounded-[4px] bg-[#20B52633]">in stock</span>
                      </div>
                      <div class="flex gap-[12px]">

                          <div class="ratings flex gap-[4px]">
                              <div v-for="review in reviews" :key="review.id">
                                  <font-awesome-icon v-for="i in 5" :key="i"
                                  icon="fa-solid fa-star" class="text-sm" :class="i <= review.rating ? 'text-[#FF8A00]' : 'text-[#CCCCCC]'"/>
                                </div>
                                <span class="text-[14px] text-[#666666] font-[400]">4 Review</span>
                        </div>
                        <span class="text-[14px] text-[#666666]">.</span>
                        <div class="tetxt-[#666666] text-[14px] font-[400]"><span class="font-[500] text-[14px] text-[#333333] mr-1 ">SKU:</span>2,521,44</div>
                    </div>

                    <div class="flex items-center gap-[10px]">
                        <div class="flex items-center gap-[4px]">
                            <del cite="text-[20px] font-[400] text-[#B3B3B3]">$48.00</del>
                            <span class="text-[#2C742F] font-[500] text-[24px]">$17.28</span>
                        </div>
                        <span class="bg-[#EA4B481A] py-[3px] px-[10px] rounded-[30px] text-[#EA4B48] font-[500] text-[14px]">64% Off</span>
                    </div>

                    <div class="flex flex-col gap-[16px]">

                      <div class="flex justify-between">
                        <div class="flex gap-[8px] items-center">
                          <h1 class="font-[400] text-[14px] text-[#1A1A1A]">Brand:</h1>
                          <div class="h-[56px] w-[53px] flex items-center justify-center">
                            <img src="/brand1.png" class="w-[36px] h-[36px] rounded-[50%]" alt="">
                          </div>
                        </div>
                        <div class="flex gap-[10px] items-center">
                          <h1 class="font-[400] text-[14px] text-[#1A1A1A]">Share Item:</h1>
                          <div class="flex items-center gap-[5px] icons">
                            <div class="share-icon cursor-pointer">
                              <font-awesome-icon
                              :icon="['fab', 'facebook-f']"
                              class="hover:scale-110 transition"
                              />
                              </div>
                              <div class="share-icon cursor-pointer">
                                <font-awesome-icon
                                :icon="['fab', 'twitter']"
                                class="hover:scale-110 transition"
                                />
                              </div>
                              <div class="share-icon cursor-pointer">
                                <font-awesome-icon
                                :icon="['fab', 'pinterest']"
                                class="hover:scale-110 transition"
                                />
                              </div>
                              <div class="share-icon cursor-pointer">
                                <font-awesome-icon
                                :icon="['fab', 'instagram']"
                                class="hover:scale-110 transition"
                                />
                              </div>
                              
                            </div>
                          </div>
                        </div>

                        <p>Foundation with lightweight texture and natural coverage, suitable for all skin types. Long-lasting formula that evens skin tone and gives a flawless look.</p>
                    </div>

                    <div class="flex gap-[12px] py-[18px] flex-col md:flex-row">
                      <div class="rounded-[170px] flex p-[8px] w-[124px] h-[50px] items-center justify-between border border-[#E6E6E6]">
                        <div @click="decrement" class="w-[34px] cursor-pointer rounded-[170px] h-[34px] flex justify-center bg-[#F2F2F2]">
                          _
                        </div>
                        <span>{{ count }}</span>
                        <div @click="count++" class="w-[34px] cursor-pointer rounded-[170px] text-[20px] h-[34px]  flex justify-center bg-[#F2F2F2]">
                          +
                        </div>
                      </div>

                      <div class="flex justify-center md:gap-[7.33px] gap-[3px] text-white items-center rounded-[43px] px-[20px] xl:px-[15px] py-[16px] border bg-[#C65C6A]">
                        <a href="#" class=" font-[600] xl:text-[12.83px] lg:text-[12px] md:text-[11px] text-[10px]">{{$t('addToCart')}}</a>
                        <SvgCart class="fill-white"/>
                        </div>
                      <div class="flex justify-center md:gap-[7.33px] gap-[3px] text-white items-center rounded-[43px] px-[20px] xl:px-[15px] py-[16px] border bg-[#618EB1]">
                        <a href="#" class=" font-[600] xl:text-[12.83px] lg:text-[12px] md:text-[11px] text-[10px]">{{$t('buyNow')}}</a>
                        <BuyNow class="fill-white stroke-white"/>
                        </div>
                        <div class="w-[52px] rounded-[50%] h-[52px] flex justify-center cursor-pointer items-center bg-[#C65C6A1A]"> 
                          <svg-like class="stroke-[#C65C6A]"/>
                        </div>
                    </div>

                    <div>
                      <div>
                        <span class="font-[500] text-[14px] text-[#1A1A1A]">Category: </span> <span class="text-[14px] font-[400] text-[#808080]">Face Makeup</span>
                      </div>
                      <div class="mt-2">
                        <span class="font-[500] text-[14px] text-[#1A1A1A]">Tag: </span> <span class="text-[14px] font-[400] text-[#808080]"><span>Foundation</span></span>
                      </div>
                    </div>
                  </div>
              </div>
        </div>
    </div>

    <!-- <template #footer>
      <div class="dialog-footer">
        <el-button @click="close">Cancel</el-button>
        <el-button type="primary" @click="close">
          Confirm
        </el-button>
      </div>
    </template> -->
  </el-dialog>
</template>

<script setup>
  import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Grid, Navigation } from 'swiper/modules'

const prevEl = ref(null)
const nextEl = ref(null)

import BuyNow from './svg/BuyNow.vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
})


const selectedImage = ref('/cream.png')
const setImage = (src) => { selectedImage.value = src }

const decrement = () => {
  count.value--

  if(count.value < 0){
    alert('can not be less than zero')
    count.value = 0
  }
}


const count = ref(0);

const emit = defineEmits(['update:modelValue'])

const visible = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})

const onSwiper = (swiper) => {
  swiper.params.navigation.prevEl = prevEl.value
  swiper.params.navigation.nextEl = nextEl.value
  swiper.navigation.init()
  swiper.navigation.update()
}

const close = () => {
  emit('update:modelValue', false)
}

const images = ref(['/cream.png','/bgSale.jpg','/cream.png','/bgSale.jpg','/cream.png','/bgSale.jpg',])



const isMobile = ref(false)
const minWidth = 768
const checkDevice = () => {
  isMobile.value =
    window.innerWidth < minWidth || screen.width < minWidth
}

onMounted(() => {
  checkDevice()
  window.addEventListener('resize', checkDevice)
})

const reviews = ref([{ id: 1, rating: 4 }])
</script>

<style scoped>
.share-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.share-icon:hover {
  background: #C65C6A;
  color: white;
}

</style>
