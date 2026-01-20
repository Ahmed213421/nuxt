<template>
    <div class="container mx-auto p-5 xl:p-0">
             <ViewDialog v-model="dialogVisible"/> 
        
  <div class="py-[40px]">

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
        <SwiperSlide v-for="(n,index) in images" :key="n">
          <div class="w-[80px] flex justify-center items-center h-[80px] border border-[#C4C4C4]">
            <img :src="n" @click="setImage(n)" class="w-[w-47px] h-[70px]" alt="">
          </div>
        </SwiperSlide>
      </Swiper>

    </div>
    </div>
  </ClientOnly>

  <div class="w-[289px] h-[423px] py-[50px]">
    <img :src="src"  class="h-[380px]" alt="" srcset="">
  </div>
              </div>
            </div>
            <div class="col-span-12 md:col-span-6 py-[50px]">
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

                    <div class="flex gap-[12px] py-[18px] flex-col lg:flex-row">
                      <div class="rounded-[170px] flex p-[8px] w-[124px] h-[50px] items-center justify-between border border-[#E6E6E6]">
                        <div @click="count--" class="w-[34px] cursor-pointer rounded-[170px] h-[34px] flex justify-center bg-[#F2F2F2]">
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
    </div>

<div class="container mx-auto p-5 xl:pt-0 xl:px-0">
    <div class="flex justify-between mx-auto my-6">
        <div class="latest font-[600] lg:text-[28px] "><span>{{$t('relatedProduct')}}</span></div>
        <a href="#" class="view-all text-[#C65C6A] flex items-center gap-[11px]">{{$t('viewAll')}} <SvgRightArrow class="rightArw"/></a>
      </div>
        <div class="grid grid-cols-12 gap-4 my-6">
                    <div v-for="(item,index) in 4" :key="index" class="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-3 px-[10px] rounded-[5px] border border-[0.92px]  border-[#E6E6E6] saleProducts pb-[15px] gap-[16px] flex flex-col relative MostBuyed">
                        <div :class="index == 5 ? 'block' : 'hidden'" class="save bg-[#EA4B48] text-center py-[2.75px] top-[10px] text-[#FFFFFF] absolute left-[11px] px-[7.33px] rounded-[3.67px] w-[73px] font-[400] text-[12.83px]">
                            {{$t('save')}} <span class="discount-number font-[500]">50% </span>
                        </div>
                        <div :class="index == 2 ? 'block' : 'hidden'" class="out-of-stock bg-[#1A1A1A] text-center py-[2.75px] top-[10px] text-[#FFFFFF] absolute left-[11px] px-[7.33px] rounded-[3.67px]  font-[400] text-[14px]">
                            {{$t('outOfStock')}}
                        </div> 

                        <div class="flex flex-col absolute gap-[10px] top-[10px] right-[11px] iconsHover">
                            <div class="border border-[0.92px] w-[36.65px] h-[36.65px] rounded-[50%] flex justify-center items-center border-[#C65C6A]">
                                <SvgLike />
                            </div>
                            <el-button plain @click="dialogVisible = true" class="border border-[0.92px] !w-[36.65px] !h-[36.65px] !rounded-[50%] !flex !justify-center !items-center !border-[#C65C6A]">

                            
                                <SvgViewItem />
                            </el-button>
                            
                        </div>
                        <div>
                            <img src="/Productmage.png" alt="">
                        </div>
                        <div class="flex px-1 flex-row">
                            <div class="flex flex-col  gap-[5.5px]">
                                <span class="title-buyed font-[400] text-[12.83px] break-all xl:w-[100px]">Foundation</span>
                                <div class="flex gap-[1.83px]">
                                    <span class="price font-[500] text-[#1A1A1A] text-[14.66px]">$14.99</span>
                                    <del class="discount font-[400] text-[#999999] text-[14.66px]">$20.99</del>

                                </div>
                                <div class="ratings">
                                <div v-for="review in reviews" :key="review.id">
                                    <font-awesome-icon v-for="i in 5" :key="i"
                                    icon="fa-solid fa-star" class="text-[10px]" :class="i <= review.rating ? 'text-[#FF8A00]' : 'text-[#CCCCCC]'"/>
                                </div>
                                </div>
                            </div>
                            <div class="flex flex-1 flex-col gap-[12.48px] mt-4 items-end">
                                <div class="flex justify-center md:gap-[7.33px] gap-[3px] text-[#C65C6A]  rounded-[11px] w-[70%] items-center py-[4.75px] pl-[3.58px] px-[7.58px] border border-[#C65C6A] border-[1.83px]">
                                    <SvgCart />
                                    <a href="#" class=" font-[600] xl:text-[12.83px] lg:text-[12px] md:text-[11px] text-[10px]">{{$t('addToCart')}}</a>
                                </div>
                                <div class="flex md:gap-[7.33px] gap-[3px] text-[#618EB1]  justify-center w-[50%] w-[70%] rounded-[11px] items-center py-[4.75px] pl-[3.58px] px-[7.58px] border border-[#618EB1] border-[1.83px]">
                                    <SvgBuyNow />
                                    <a href="#" class=" font-[600] text-[10px]  xl:text-[12.83px] lg:text-[12px] md:text-[11px]">{{$t('buyNow')}}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

      
      <div class="flex justify-between xl:w-[85%]  mx-auto pt-10 ">
        <div class="latest font-[600] lg:text-[28px] "><span>{{$t('productReviews')}}</span></div>
      </div>

      <div class="flex flex-col md:flex-row items-center xl:w-[85%] mx-auto mb-10 mt-5 justify-between p-5  border-dashed border-[#B8B8B8] rounded-[8px] border-[0.8px]">
        <div class="flex gap-[16px] flex-col md:flex-row md:self-baseline items-center  justify-center mb-5 md:mb-0">
          <Knob v-model="value" :min="0" :max="10" valueColor="#FFA439" rangeColor="#E6E6E6" :strokeWidth="5"/>
        
        <div class="flex flex-col gap-[8px] ">
          <div class="ratings flex gap-[4px]">
                              <div v-for="review in reviews" :key="review.id">
                                  <font-awesome-icon v-for="i in 5" :key="i"
                                  icon="fa-solid fa-star" class="text-sm" :class="i <= review.rating ? 'text-[#FF8A00]' : 'text-[#CCCCCC]'"/>
                                </div>
                              </div>
                              <span class="text-[16px] text-[#525252] font-[400]">from 1,25k reviews</span>
        </div>
      </div>
        <div class="demo-progress w-full max-w-[60%] flex flex-col gap-[12px]">
          <div class="flex gap-[15px]">
            <div class="flex items-center gap-[4px]">
              <span class="font-[500] text-[16px]">5.0</span>
               <font-awesome-icon icon="fa-solid fa-star" class="text-sm text-[#FF8A00]" />
            </div>
            <el-progress :percentage="80" :format="countRating" color="#292929"  />

          </div>
          <div class="flex gap-[15px]">
            <div class="flex items-center gap-[4px]">
              <span class="font-[500] text-[16px]">4.0</span>
               <font-awesome-icon icon="fa-solid fa-star" class="text-sm text-[#FF8A00]" />
            </div>
            <el-progress :percentage="60" :format="countRating" color="#292929"  />

          </div>
          <div class="flex gap-[15px]">
            <div class="flex items-center gap-[4px]">
              <span class="font-[500] text-[16px]">3.0</span>
               <font-awesome-icon icon="fa-solid fa-star" class="text-sm text-[#FF8A00]" />
            </div>
            <el-progress :percentage="40" :format="countRating" color="#292929"  />

          </div>
          <div class="flex gap-[15px]">
            <div class="flex items-center gap-[4px]">
              <span class="font-[500] text-[16px]">2.0</span>
               <font-awesome-icon icon="fa-solid fa-star" class="text-sm text-[#FF8A00]" />
            </div>
            <el-progress :percentage="17" :format="countRating" color="#292929"  />

          </div>
          <div class="flex gap-[15px]">
            <div class="flex items-center gap-[4px]">
              <span class="font-[500] text-[16px]">1.0</span>
               <font-awesome-icon icon="fa-solid fa-star" class="text-sm text-[#FF8A00]" />
            </div>
            <el-progress :percentage="5" :format="countRating" color="#292929"  />

          </div>
</div>

      </div>
   
      
  <div class="grid grid-cols-12 gap-[10px] md:gap-10  mx-10 xl:w-[85%] mx-auto ">
            <div class="col-span-12 md:col-span-5 lg:col-span-4 xl:col-span-3 border-dashed border-[#B8B8B8] rounded-[8px] border-[0.8px]">
                <el-collapse v-model="activeNames" >
                    <el-collapse-item :name="!isMobile ? '5' : ''">
                        <template #title>
                            <span class="font-[600] text-[20px] p-5">{{$t('Reviews Filter')}}</span>
                        </template>
                <div class="demo-collapse p-5">
                    <div class="">
                           <span class="font-[600] text-[16px]">{{$t('Rating')}}</span>
                    </div>
                        <div class="flex gap-[5px] items-center">
                            <el-checkbox v-model="fiveStar" size="large" />
                            <div class="flex items-center gap-[4px]">
                              <font-awesome-icon icon="fa-solid fa-star" class="text-sm text-[#FF8A00]" />
                              <span class="font-[500] text-[16px]">5</span>
                            </div>
                        </div>
                        <div class="flex gap-[5px] items-center">
                            <el-checkbox v-model="fourStar" size="large" />
                            <div class="flex items-center gap-[4px]">
                              <font-awesome-icon icon="fa-solid fa-star" class="text-sm text-[#FF8A00]" />
                              <span class="font-[500] text-[16px]">4</span>
                            </div>
                        </div>
                        <div class="flex gap-[5px] items-center">
                            <el-checkbox v-model="threeStar" size="large" />
                            <div class="flex items-center gap-[4px]">
                              <font-awesome-icon icon="fa-solid fa-star" class="text-sm text-[#FF8A00]" />
                              <span class="font-[500] text-[16px]">3</span>
                            </div>
                        </div>
                        <div class="flex gap-[5px] items-center">
                            <el-checkbox v-model="twoStar" size="large" />
                            <div class="flex items-center gap-[4px]">
                              <font-awesome-icon icon="fa-solid fa-star" class="text-sm text-[#FF8A00]" />
                              <span class="font-[500] text-[16px]">2</span>
                            </div>
                        </div>
                        <div class="flex gap-[5px] items-center">
                            <el-checkbox v-model="oneStar" size="large" />
                            <div class="flex items-center gap-[4px]">
                              <font-awesome-icon icon="fa-solid fa-star" class="text-sm text-[#FF8A00]" />
                              <span class="font-[500] text-[16px]">1</span>
                            </div>
                        </div>
                </div>
                <div class="demo-collapse p-5">
                    <div class="">
                           <span class="font-[600] text-[16px]">{{$t('Rating')}}</span>
                    </div>
                        <div class="flex gap-[5px] items-center">
                            <el-checkbox v-model="fiveStar" size="large" />
                            <div class="flex items-center gap-[4px]">
                              <font-awesome-icon icon="fa-solid fa-star" class="text-sm text-[#FF8A00]" />
                              <span class="font-[500] text-[16px]">5</span>
                            </div>
                        </div>
                        <div class="flex gap-[5px] items-center">
                            <el-checkbox v-model="fourStar" size="large" />
                            <div class="flex items-center gap-[4px]">
                              <font-awesome-icon icon="fa-solid fa-star" class="text-sm text-[#FF8A00]" />
                              <span class="font-[500] text-[16px]">4</span>
                            </div>
                        </div>
                        <div class="flex gap-[5px] items-center">
                            <el-checkbox v-model="threeStar" size="large" />
                            <div class="flex items-center gap-[4px]">
                              <font-awesome-icon icon="fa-solid fa-star" class="text-sm text-[#FF8A00]" />
                              <span class="font-[500] text-[16px]">3</span>
                            </div>
                        </div>
                        <div class="flex gap-[5px] items-center">
                            <el-checkbox v-model="twoStar" size="large" />
                            <div class="flex items-center gap-[4px]">
                              <font-awesome-icon icon="fa-solid fa-star" class="text-sm text-[#FF8A00]" />
                              <span class="font-[500] text-[16px]">2</span>
                            </div>
                        </div>
                        <div class="flex gap-[5px] items-center">
                            <el-checkbox v-model="oneStar" size="large" />
                            <div class="flex items-center gap-[4px]">
                              <font-awesome-icon icon="fa-solid fa-star" class="text-sm text-[#FF8A00]" />
                              <span class="font-[500] text-[16px]">1</span>
                            </div>
                        </div>
                </div>
                </el-collapse-item>
                </el-collapse>
            </div>
            <div class="col-span-12 md:col-span-7 lg:col-span-8">
              <div class="mx-auto mb-5">
                <div class="latest font-[600] lg:text-[28px] "><span>{{$t('Review Lists')}}</span></div>
              </div>
              <el-tabs v-model="activeName" class="demo-tabs">
                <el-tab-pane label="All Reviews" name="All">
                  
                  <div class="flex flex-col gap-[32px] ratingAudience">
                    
                      <div v-for="(i,index) in paginatedItems" :key="index" class=" pb-[40px] ">
                        <div v-for="review in reviews" :key="review.id">
                            <font-awesome-icon v-for="i in 5" :key="i"
                            icon="fa-solid fa-star" class="text-sm" :class="i <= review.rating ? 'text-[#FF8A00]' : 'text-[#CCCCCC]'"/>
                          </div>
                          <div class="mt-3">
                            <h1 class="font-[600] text-[18px]">This is amazing product I have.</h1>
                            <p class="text-[16px] font-[400] text-[#818B9C]">July 2, 2020 03:29 PM</p>
                          </div>
                          <div class="mt-6 flex gap-[12px] items-center">
                            <div class="w-[32px] h-[32px]">
                              <img src="/avatar5.png" class="w-[32px] h-[32px]" alt="">
                            </div>
                            <h1 class="font-[500] text-[16px] text-[#0B0F0E]">Darrell Steward</h1>
                          </div>
                              
                      </div>
                    </div>
                    <div class="example-pagination-block mx-auto mt-4">
                      <el-pagination
                      v-model:current-page="currentPage"
                      v-model:page-size="pageSize"
                      :total="items.length"
                      layout="prev, pager, next"
                      @current-change="onPageChange"
                  />
                  </div>  
                </el-tab-pane>
                <el-tab-pane label="With Description" name="description"></el-tab-pane>
              </el-tabs>
            </div>
        </div>
</div>




</template>

<script setup lang="ts">
import { ref,onMounted,computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Grid, Navigation, Mousewheel } from 'swiper/modules'
import Knob from 'primevue/knob';

import type { CollapseModelValue } from 'element-plus'
import type { TabsPaneContext } from 'element-plus'
const activeName = ref('All')

const count = ref(0)

const prevEl = ref(null)
const nextEl = ref(null)

const items = ref([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]);

const reviews = ref([{ id: 1, rating: 4 }])

const currentPage = ref(1)
const pageSize = ref(4) 

// Items to show on current page
const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  return items.value.slice(start, end)
})


const activeNames = ref(['1','2','3','4','5','6'])


const dialogVisible = ref(false)

const src = ref('/cream.png')

const images = ref(['/cream.png','/cream2.png', '/cream.png', '/cream2.png', '/cream.png', '/cream2.png'])

const setImage = (img) => {
  src.value = img
}


const value = ref(5.4)

const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`)

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

const countRatingNumber = 1034

const countRating = () => `${countRatingNumber}`
const oneStar = ref(false)
const twoStar = ref(false)
const threeStar = ref(false)
const fourStar = ref(false)
const fiveStar = ref(false)
</script>

<style scoped>

  .demo-progress .el-progress--circle {
  margin-right: 15px;
}

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

.demo-progress .el-progress {
  width: 100%;
}

:deep(.el-tabs__header) {
  border-bottom: none;
}

/* remove nav bottom line */
:deep(.el-tabs__nav-wrap::after) {
  display: none;
}

/* base tab style */
:deep(.el-tabs__item) {
  border: none;
  color: inherit;
  text-align:center;

}

/* hover */
:deep(.el-tabs--top > .el-tabs__header .el-tabs__item:nth-child(2)) {
  padding-left:20px !important;
  margin-right:10px;
}

:deep(.el-tabs--top > .el-tabs__header .el-tabs__item:last-child){
  padding-right:20px !important;
  
}
:deep(.el-tabs__item:hover) {
  color: inherit;
}

/* active / clicked */
:deep(.el-tabs__item.is-active) {
  color: inherit;
  border: none;
  background: #EBEBEB;
  border-radius:8px;
  padding: 10px 20px;
  border: 1px solid #333333;
  
}

/* active bar (underline indicator) */
:deep(.el-tabs__active-bar) {
  display: none;
}

.example-pagination-block + .example-pagination-block {
  margin-top: 10px;
}
.example-pagination-block .example-demonstration {
  margin-bottom: 16px;
}

:deep(.btn-prev),
    :deep(.btn-next) {
    width: 36px;
    height: 36px;
    border-radius: 500px;
    background: #F2F2F2;
    display: flex;
    justify-content: center;
    align-items: center;
    }
</style>