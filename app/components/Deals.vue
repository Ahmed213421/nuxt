<template>
    <div>
        <div class="text-center">
            <span class=" text-[#1A1A1A] px-2 text-[32px] font-[500] border-b-[3px] border-b-[#C65C6A]">Deals</span>
        </div>

        <div class="container mx-auto mt-[30px] xl:mt-[70px]">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div class="lg:h-[536px] h-[300px]">
                    <div :style="{ backgroundImage: `url(/banner-1.jpg)`}" class="h-full bg-cover bg-center">
                        <div class="font-[500] text-[14px] text-[#101603] tracking-[0.03em] text-center pt-[30px]">
                            BEST DEALS
                        </div>

                        

                        <div class="font-[600] md:text-[40px] text-[#101603] text-center my-5">
                            Sale of the Month
                        </div>

                        <ClientOnly>
                            <vue-countdown :time="2 * 24 * 60 * 60 * 1000" v-slot="{ days, hours, minutes, seconds }">
                                <div class="flex justify-center gap-[8px]">
                                    <div class="flex flex-col gap-[4px] text-center">
                                        <div class="font-[400] text-[24px]">{{ days }}</div>
                                        <div class="font-[400] text-[12px]">DAYS</div>
                                    </div>
                                    <div class="font-[400] text-[24px]">
                                        :
                                    </div>
                                    <div class="flex flex-col gap-[4px] text-center">
                                        <div class="font-[400] text-[24px]">{{ hours }}</div>
                                        <div class="font-[400] text-[12px]">HOURS</div>
                                    </div>
                                    <div class="font-[400] text-[24px]">
                                        :
                                    </div>
                                    <div class="flex flex-col gap-[4px] text-center">
                                        <div class="font-[400] text-[24px]">{{ minutes }}</div>
                                        <div class="font-[400] text-[12px]">MINUTES</div>
                                    </div>
                                    <div class="font-[400] text-[24px]">
                                        :
                                    </div>
                                    <div class="flex flex-col gap-[4px] text-center">
                                        <div class="font-[400] text-[24px]">{{ seconds }}</div>
                                        <div class="font-[400] text-[12px]">SECONDS</div>
                                    </div>
                                </div>
                        </vue-countdown>
                    </ClientOnly>

                    <div class="flex justify-center">
                        <a href="#" class="inline-flex mt-5 items-center gap-2 bg-white border border-[#C65C6A] py-[14px] px-[32px] rounded-[43px] transition-colors hover:bg-pink-50">
                        <span class="text-[14px] font-[600] text-[#C65C6A]">
                            Shop Now
                        </span>
                        <SvgRightArrow class="w-5 h-5" />
                    </a>
                    </div>

                    
                    </div>
                </div>
                <div class="lg:h-[536px] h-[300px]">
                    <div :style="{ backgroundImage: `url(/banner-2.png)`}" class="h-full bg-cover bg-center">
                        <div class="font-[500] text-[14px] text-[#101603] tracking-[0.03em] text-center pt-[30px]">
                            85% NATURAL INGREDIENTS
                        </div>

                        

                        <div class="font-[600] md:text-[40px] text-[#101603] text-center my-5">
                            For All Skin Types
                        </div>

                        <div class="fofnt-[400] tetxt-[18px] text-[#101603] text-center">
                            Started At <span class="text-[#FF8A00] font-[600] text-[20px]">$29.99</span>
                        </div>

                    <div class="flex justify-center">
                        <a href="#" class="inline-flex mt-5 items-center gap-2 bg-white border border-[#C65C6A] py-[14px] px-[32px] rounded-[43px] transition-colors hover:bg-pink-50">
                        <span class="text-[14px] font-[600] text-[#C65C6A]">
                            Shop Now
                        </span>
                        <SvgRightArrow class="w-5 h-5" />
                    </a>
                    </div>

                    
                    </div>
                </div>
                <div class="lg:h-[536px] h-[300px]">
                    <div :style="{ backgroundImage: `url(/banner-3.png)`}" class="h-full  bg-cover bg-center">
                        <div class="font-[500] text-[14px] text-[#101603] tracking-[0.03em] text-center pt-[30px]">
                            SUMMER SALE
                        </div>

                        

                        <div class="font-[600] md:text-[40px] text-[#101603] text-center my-5">
                            100% Pure Skincare
                        </div>

                        <div class="fofnt-[400] tetxt-[18px] text-[#101603] text-center">
                            Up to <span class="text-[#FF8A00] ml-2 py-[8px] px-[12px] rounded-[5px] font-[600] text-[18] bg-[#1A1A1A]">64% OFF</span>
                        </div>


                    <div class="flex justify-center">
                        <a href="#" class="inline-flex mt-5 items-center gap-2 bg-white border border-[#C65C6A] py-[14px] px-[32px] rounded-[43px] transition-colors hover:bg-pink-50">
                        <span class="text-[14px] font-[600] text-[#C65C6A]">
                            Shop Now
                        </span>
                        <SvgRightArrow class="w-5 h-5" />
                    </a>
                    </div>

                    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import VueCountdown from '@chenfengyuan/vue-countdown'

</script>