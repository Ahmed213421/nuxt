<template>
    
    <div class="container mx-auto mb-5">
        <div class="border border-[#E4E7E9]">
            <div class="grid grid-cols-12 gap-2">
                
                <div class="lg:col-span-3 md:col-span-6 col-span-12">
                    <div class="p-2 pb-7 border border-[#E4E7E9]" style="visibility:hidden">

                        <div class="border p-2 py-3 border-[#E4E7E9]">
                            <div class="w-full h-[200px] sm:h-[268px] p-[5px] flex justify-center">
                                <img src="/cream.png" class="h-full max-w-full object-contain" alt="">
                            </div>
                            <div class="p-3 sm:p-5">
                                <h6 class="text-[#4D4D4D] font-[400] text-[12px] sm:text-[14px]">Foundation</h6>
                                <span class="text-[14px] sm:text-[16px] font-[500] text-[#1A1A1A]">$14.99</span>
                                <div class="ratings">
                                    <div>
                                        <font-awesome-icon v-for="i in 5" :key="i"
                                        icon="fa-solid fa-star" class="text-xs sm:text-sm" :class="i <= 4 ? 'text-[#FF8A00]' : 'text-[#CCCCCC]'"/>
                                    </div>
                                </div>
                            </div>
                            <div class="flex gap-2 sm:gap-3 px-3 sm:px-6 mt-2">
                                <div class="flex-1 items-center gap-1 flex justify-center px-2 sm:px-4 py-2 bg-[#C65C6A] text-white rounded-[6px]">
                                    <span class="font-[700] text-[8px] sm:text-[10px] xl:text-[14px] text-nowrap">ADD TO CART</span>
                                    <SvgCart class="text-white w-3 h-3 sm:w-4 sm:h-4"/>
                                </div>
                                <div class="border border-[#F0A0A0] rounded-[6px] p-[8px] sm:p-[12px]">
                                    <SvgLike class="text-[#C65C6A] w-3 h-3 sm:w-4 sm:h-4"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ul class="feedback-compare">
                            <li class="text-[10px] sm:text-[12px] md:text-[14px]">Customer feedback:</li>
                            <li class="text-[10px] sm:text-[12px] md:text-[14px]">Customer feedback:</li>
                            <li class="text-[10px] sm:text-[12px] md:text-[14px]">Price:</li>
                            <li class="text-[10px] sm:text-[12px] md:text-[14px]">Sold by:</li>
                            <li class="text-[10px] sm:text-[12px] md:text-[14px]">Brand:</li>
                            <li class="text-[10px] sm:text-[12px] md:text-[14px]">Model:</li>
                            <li class="text-[10px] sm:text-[12px] md:text-[14px]">Stock status:</li>
                            <li class="text-[10px] sm:text-[12px] md:text-[14px]">Weight:</li>
                        </ul>
                    </div>
                </div>
                <div class="lg:col-span-3 md:col-span-6 col-span-12">
                    <div class="p-2 pb-7 border border-[#E4E7E9]">

                        <div class="border p-2 py-3 border-[#E4E7E9]">
                            <div class="w-full h-[200px] sm:h-[268px] p-[5px] flex justify-center">
                                <img src="/cream.png" class="h-full max-w-full object-contain" alt="">
                            </div>
                            <div class="p-3 sm:p-5">
                                <h6 class="text-[#4D4D4D] font-[400] text-[12px] sm:text-[14px]">Foundation</h6>
                                <span class="text-[14px] sm:text-[16px] font-[500] text-[#1A1A1A]">$14.99</span>
                                <div class="ratings">
                                    <div>
                                        <font-awesome-icon v-for="i in 5" :key="i"
                                        icon="fa-solid fa-star" class="text-xs sm:text-sm" :class="i <= 4 ? 'text-[#FF8A00]' : 'text-[#CCCCCC]'"/>
                                    </div>
                                </div>
                            </div>
                            <div class="flex gap-2 sm:gap-3 px-3 sm:px-6 mt-2">
                                <div class="flex-1 items-center gap-1 flex justify-center px-2 sm:px-4 py-2 bg-[#C65C6A] text-white rounded-[6px]">
                                    <span class="font-[700] text-[8px] sm:text-[10px] xl:text-[14px] text-nowrap">ADD TO CART</span>
                                    <SvgCart class="text-white w-3 h-3 sm:w-4 sm:h-4"/>
                                </div>
                                <div class="border border-[#F0A0A0] rounded-[6px] p-[8px] sm:p-[12px]">
                                    <SvgLike class="text-[#C65C6A] w-3 h-3 sm:w-4 sm:h-4"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ul class="feedback-compare">
                            <li>
                                <div class="ratings flex items-center ">
                                
                                    <font-awesome-icon v-for="i in 5" :key="i"
                                    icon="fa-solid fa-star" class="text-md" :class="i <= 5 ? 'text-[#FF8A00]' : 'text-[#CCCCCC]'"/>
                                    <span class="text-[#77878F] text-[8px] sm:text-[10px] md:text-[14px] font-[400] ml-[8px] sm:ml-[12px]">(51,746,385)</span>
                                
                            </div>
                            </li>
                            <li class="text-[#BC4D5C] font-[600] text-[10px] sm:text-[12px] !pb-0 md:text-[18px] !pt-0">$14.99</li>
                            <li class="text-[10px] sm:text-[12px] md:text-[14px]">Beauty House</li>
                            <li class="text-[10px] sm:text-[12px] md:text-[14px]">The Ordinary</li>
                            <li class="text-[10px] sm:text-[12px] md:text-[14px]">Hydrating Cleanser 236ml</li>
                            <li class="text-[10px] sm:text-[12px] md:text-[14px] text-[#2DB224] font-[600]">IN STOCK</li>
                            <li class="text-[10px] sm:text-[12px] md:text-[14px]">6.71 inches, 110.5 cm</li>
                            <li class="text-[10px] sm:text-[12px] md:text-[14px]">650 g (7.41 oz)</li>
                        </ul>
                    </div>
                </div>
                <div class="lg:col-span-3 md:col-span-6 col-span-12">
                    <div class="p-2 pb-7 border border-[#E4E7E9]">

                        <div class="border p-2 py-3 border-[#E4E7E9]">
                            <div class="w-full h-[200px] sm:h-[268px] p-[5px] flex justify-center">
                                <img src="/cream.png" class="h-full max-w-full object-contain" alt="">
                            </div>
                            <div class="p-3 sm:p-5">
                                <h6 class="text-[#4D4D4D] font-[400] text-[12px] sm:text-[14px]">Foundation</h6>
                                <span class="text-[14px] sm:text-[16px] font-[500] text-[#1A1A1A]">$14.99</span>
                                <div class="ratings">
                                    <div>
                                        <font-awesome-icon v-for="i in 5" :key="i"
                                        icon="fa-solid fa-star" class="text-xs sm:text-sm" :class="i <= 4 ? 'text-[#FF8A00]' : 'text-[#CCCCCC]'"/>
                                    </div>
                                </div>
                            </div>
                            <div class="flex gap-2 sm:gap-3 px-3 sm:px-6 mt-2">
                                <div class="flex-1 items-center gap-1 flex justify-center px-2 sm:px-4 py-2 bg-[#C65C6A] text-white rounded-[6px]">
                                    <span class="font-[700] text-[8px] sm:text-[10px] xl:text-[14px] text-nowrap">ADD TO CART</span>
                                    <SvgCart class="text-white w-3 h-3 sm:w-4 sm:h-4"/>
                                </div>
                                <div class="border border-[#F0A0A0] rounded-[6px] p-[8px] sm:p-[12px]">
                                    <SvgLike class="text-[#C65C6A] w-3 h-3 sm:w-4 sm:h-4"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ul class="feedback-compare">
                            <li>
                                <div class="ratings flex items-center ">
                                
                                    <font-awesome-icon v-for="i in 5" :key="i"
                                    icon="fa-solid fa-star" class="text-md" :class="i <= 5 ? 'text-[#FF8A00]' : 'text-[#CCCCCC]'"/>
                                    <span class="text-[#77878F] text-[8px] sm:text-[10px] md:text-[14px] font-[400] ml-[8px] sm:ml-[12px]">(51,746,385)</span>
                                
                            </div>
                            </li>
                            <li class="text-[#BC4D5C] font-[600] text-[10px] !pb-0 !pt-0 sm:text-[12px] md:text-[18px]">$14.99</li>
                            <li class="text-[10px] sm:text-[12px] md:text-[14px]">Beauty House</li>
                            <li class="text-[10px] sm:text-[12px] md:text-[14px]">The Ordinary</li>
                            <li class="text-[10px] sm:text-[12px] md:text-[14px]">Hydrating Cleanser 236ml</li>
                            <li class="text-[10px] sm:text-[12px] md:text-[14px] text-[#2DB224] font-[600]">IN STOCK</li>
                            <li class="text-[10px] sm:text-[12px] md:text-[14px]">6.71 inches, 110.5 cm</li>
                            <li class="text-[10px] sm:text-[12px] md:text-[14px]">650 g (7.41 oz)</li>
                        </ul>
                    </div>
                </div>
                <div class="lg:col-span-3 md:col-span-6 col-span-12">
                    <div class="p-2 pb-7 border border-[#E4E7E9]">

                        <div class="border p-2 py-3 border-[#E4E7E9]">
                            <div class="w-full h-[200px] sm:h-[268px] p-[5px] flex justify-center">
                                <img src="/cream.png" class="h-full max-w-full object-contain" alt="">
                            </div>
                            <div class="p-3 sm:p-5">
                                <h6 class="text-[#4D4D4D] font-[400] text-[12px] sm:text-[14px]">Foundation</h6>
                                <span class="text-[14px] sm:text-[16px] font-[500] text-[#1A1A1A]">$14.99</span>
                                <div class="ratings">
                                    <div>
                                        <font-awesome-icon v-for="i in 5" :key="i"
                                        icon="fa-solid fa-star" class="text-xs sm:text-sm" :class="i <= 4 ? 'text-[#FF8A00]' : 'text-[#CCCCCC]'"/>
                                    </div>
                                </div>
                            </div>
                            <div class="flex gap-2 sm:gap-3 px-3 sm:px-6 mt-2">
                                <div class="flex-1 items-center gap-1 flex justify-center px-2 sm:px-4 py-2 bg-[#C65C6A] text-white rounded-[6px]">
                                    <span class="font-[700] text-[8px] sm:text-[10px] xl:text-[14px] text-nowrap">ADD TO CART</span>
                                    <SvgCart class="text-white w-3 h-3 sm:w-4 sm:h-4"/>
                                </div>
                                <div class="border border-[#F0A0A0] rounded-[6px] p-[8px] sm:p-[12px]">
                                    <SvgLike class="text-[#C65C6A] w-3 h-3 sm:w-4 sm:h-4"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ul class="feedback-compare">
                            <li>
                                <div class="ratings flex items-center ">
                                
                                    <font-awesome-icon v-for="i in 5" :key="i"
                                    icon="fa-solid fa-star" class="text-md" :class="i <= 5 ? 'text-[#FF8A00]' : 'text-[#CCCCCC]'"/>
                                    <span class="text-[#77878F] text-[8px] sm:text-[10px] md:text-[14px] font-[400] ml-[8px] sm:ml-[12px]">(51,746,385)</span>
                                
                            </div>
                            </li>
                            <li class="text-[#BC4D5C] font-[600] text-[10px] !pb-0 !pt-0 sm:text-[12px] md:text-[18px]">$14.99</li>
                            <li class="text-[10px] sm:text-[12px] md:text-[14px]">Beauty House</li>
                            <li class="text-[10px] sm:text-[12px] md:text-[14px]">The Ordinary</li>
                            <li class="text-[10px] sm:text-[12px] md:text-[14px]">Hydrating Cleanser 236ml</li>
                            <li class="text-[10px] sm:text-[12px] md:text-[14px] text-[#2DB224] font-[600]">IN STOCK</li>
                            <li class="text-[10px] sm:text-[12px] md:text-[14px]">6.71 inches, 110.5 cm</li>
                            <li class="text-[10px] sm:text-[12px] md:text-[14px]">650 g (7.41 oz)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
li{
    padding:8px 12px;
    height:auto;
    min-height:36px;
    display:flex;
    align-items:center;
}

li:nth-child(odd){
    background-color:#F2F4F5;
}
</style>