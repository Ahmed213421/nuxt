<template>
    <div>
        <div class="text-center">
            <span class=" text-[#1A1A1A] px-2 text-[32px] font-[500] border-b-[3px] border-b-[#C65C6A]">Product Deails</span>
        </div>

        <div class="container mx-auto  mt-[30px] xl:mt-[70px] p-3 xl:p-0">
            <div class="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-4 flex align-center">
                
                <div v-for="(review,index) in reviews" :key="review.id" :class="index === 0 ? 'col-span-2 border border-[1px] border-[#CF6F7A] row-span-2'  : ''">
                    
                
                <div v-if="index == 0" class="relative py-5" style="box-sizing: border-box !important;">
                    <div class="flex flex-col absolute gap-[10px] top-[10px] right-[11px] iconsHover    ">
                        <div class="border border-[0.92px] w-[36.65px] h-[36.65px] rounded-[50%] flex justify-center items-center bg-[#F2F2F2]">
                            <IconsLike />
                        </div>
                        <div class="border border-[0.92px] w-[36.65px] h-[36.65px] rounded-[50%] flex justify-center items-center bg-[#F2F2F2]">
                            <IconsViewItem />
                        </div>
                    </div>

                    <div class="save bg-[#EA4B48] py-[2.75px] text-center top-[10px] text-[#FFFFFF] absolute left-[11px] px-[7.33px] rounded-[3.67px] w-[73px] font-[400] text-[12.83px]">
                        sale <span class="discount-number fofnt-[500]">50% </span>
                    </div>
                    <div class="best-sale bg-[#2388FF] py-[2.75px] text-center top-[10px] text-[#FFFFFF] absolute left-[91px] px-[7.33px] rounded-[3.67px] w-[73px] font-[400] text-[12.83px]">
                        Best Sale 
                    </div>
                    <div class="flex flex-col items-center">
                        <img src="/product1.png" alt="">
                        <a href="#" class="flex items-center justify-center gap-[10px] text-white w-[80%] text-center bg-[#00B207] py-[14px] px-[32px] rounded-[43px]">Add To Cart <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.81706 6.48324H2.31706L0.650391 15.6499H15.6504L13.9837 6.48324H11.4837M4.81706 6.48324V3.98324C4.81706 2.14229 6.30944 0.649902 8.15039 0.649902C9.99134 0.649902 11.4837 2.14229 11.4837 3.98324V6.48324M4.81706 6.48324H11.4837M4.81706 6.48324V8.98324M11.4837 6.48324V8.98324" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </a>
                    </div>

                    <div class="gap-[8px] flex flex-col text-center mt-5">
                        <span class="font-[400] text-[18px] text-[#CF6F7A]">Vitamin C Serum</span>
                        <div class="flex gap-[4px] text-[24px] justify-center">
                            <span class="font-[500]">$12.00</span>
                            <del class="font-[400]">$24.00</del>
                        </div>
                        <div class="ratings">
                        <font-awesome-icon v-for="i in 5" :key="i"
                         icon="fa-solid fa-star" class="text-sm" :class="i <= review.rating ? 'text-[#FF8A00]' : 'text-[#CCCCCC]'"/>
                       <span class="tetxt-[12px] text-[#808080] font-[400]"> (524 Feedback)</span>
                        </div>
                        <div>
                            <span class="text-[#999999] text-[14px] font-[400]">Hurry up! Offer ends In:</span>
                            <ClientOnly>
                            <vue-countdown :time="2 * 24 * 60 * 60 * 1000" v-slot="{ days, hours, minutes, seconds }">
                                <div class="flex justify-center gap-[8px]">
                                    <div class="flex flex-col gap-[4px] text-center">
                                        <div class="font-[500] text-[18px]">{{ days }}</div>
                                        <div class="font-[500] text-[10px]">DAYS</div>
                                    </div>
                                    <div class="font-[500] text-[18px]">
                                        :
                                    </div>
                                    <div class="flex flex-col gap-[4px] text-center">
                                        <div class="font-[500] text-[18px]">{{ hours }}</div>
                                        <div class="font-[500] text-[10px]">HOURS</div>
                                    </div>
                                    <div class="font-[500] text-[18px]">
                                        :
                                    </div>
                                    <div class="flex flex-col gap-[4px] text-center">
                                        <div class="font-[500] text-[18px]">{{ minutes }}</div>
                                        <div class="font-[500] text-[10px]">MINUTES</div>
                                    </div>
                                    <div class="font-[500] text-[18px]">
                                        :
                                    </div>
                                    <div class="flex flex-col gap-[4px] text-center">
                                        <div class="font-[500] text-[18px]">{{ seconds }}</div>
                                        <div class="font-[500] text-[10px]">SECONDS</div>
                                    </div>
                                </div>
                        </vue-countdown>
                    </ClientOnly>
                        </div>
                    </div>
                </div>

                <div v-if="index !==0" class="rounded-[5px] border border-[0.92px] border-[#E6E6E6]  pb-[15px] gap-[16px] flex flex-col relative MostBuyed" :class="index == 2 ? 'border !border-[#CF6F7A]' : ''">
                    <!-- <div class="save bg-[#EA4B48] py-[2.75px] top-[10px] text-[#FFFFFF] absolute left-[11px] px-[7.33px] rounded-[3.67px] w-[73px] font-[400] text-[12.83px]">
                        save <span class="discount-number fofnt-[500]">50% </span>
                    </div> -->

                    <div class="flex flex-col absolute gap-[10px] top-[10px] right-[11px] iconsHover">
                        <div class="border border-[0.92px] w-[36.65px] h-[36.65px] rounded-[50%] flex justify-center items-center border-[#C65C6A]">
                            <IconsLike />
                        </div>
                        <div class="border border-[0.92px] w-[36.65px] h-[36.65px] rounded-[50%] flex justify-center items-center border-[#C65C6A]">
                            <IconsViewItem />
                        </div>
                    </div>
                    <div>
                        <img src="/ImgSliderBuyed1.png"  class="w-full" alt="">
                    </div>
                    <div class="flex px-1 flex-col xl:flex-row">
                        <div class="flex flex-col  gap-[5.5px]">
                            <span class="title-buyed font-[400] text-[12.83px] break-all xl:w-[100px]">Vitamin C SdddesrumSdddesrum</span>
                            <div class="flex gap-[1.83px]">
                                <span class="price font-[500] text-[#1A1A1A] text-[14.66px]">$14.99</span>
                                <del class="discount font-[400] text-[#999999] text-[14.66px]">$20.99</del>

                            </div>
                            <div class="ratings">
                                <font-awesome-icon v-for="i in 5" :key="i"
                                icon="fa-solid fa-star" class="text-sm" :class="i <= review.rating ? 'text-[#FF8A00]' : 'text-[#CCCCCC]'"/>
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
                </div>
                
            </div>    
        </div>
        
    </div>
</template>

<script setup>
    
// const reviews = ref([{ id: 1, rating: 5 }])
const reviews = ref([{ id: 1, rating: 5 }, { id: 2, rating: 4 }, { id: 2, rating: 4 }, { id: 2, rating: 4 }, { id: 2, rating: 4 }, { id: 2, rating: 4 }])

import VueCountdown from '@chenfengyuan/vue-countdown'

</script>