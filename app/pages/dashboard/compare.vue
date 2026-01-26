<template>
    
    <div class="container mx-auto mb-5">
        <div class="border border-[#E4E7E9]">
            <div class="grid grid-cols-12">
                
                <div class="2xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-6">
                    <div class="p-2 pb-7 border border-[#E4E7E9]" style="visibility:hidden">

                        <div class="border p-2 py-3 border-[#E4E7E9]">
                            <div class="xl:w-[293px] h-[268px] p-[5px] flex justify-center">
                                <img src="/cream.png" class="h-full max-w-full" alt="">
                            </div>
                            <div class="xl:p-5 px-2 py-2  pb-0">
                                <h6 class="text-[#4D4D4D] font-[400] text-[14px]">Foundation</h6>
                                <span class="text-[16px] font-[500] text-[#1A1A1A]">$14.99</span>
                                <div class="ratings">
                                    <div>
                                        <font-awesome-icon v-for="i in 5" :key="i"
                                        icon="fa-solid fa-star" class="text-xs" :class="i <= 4 ? 'text-[#FF8A00]' : 'text-[#CCCCCC]'"/>
                                    </div>
                                </div>
                            </div>
                            <div class="flex gap-3 xl:px-6  mt-2 xl:mt-0">
                                <div class="flex-1 items-center gap-1 flex justify-center px-[10px] xl:px-[24px] bg-[#C65C6A] text-white rounded-[6px]">
                                    <span class="font-[700] text-[10px] xl:text-[14px] text-nowrap">ADD TO CART</span>
                                    <SvgCart class="text-white"/>
                                </div>
                                <div class="border border-[#F0A0A0] rounded-[6px] p-[12px]">
                                    <SvgLike class="text-[#C65C6A]"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ul class="feedback-compare">
                            <li class=" text-[12px] md:text-[14px]">Customer feedback:</li>
                            <li class=" text-[12px] md:text-[14px]">Customer feedback:</li>
                            <li class="text-[12px] md:text-[14px]">Price:</li>
                            <li class="text-[12px] md:text-[14px]">Sold by:</li>
                            <li class="text-[12px] md:text-[14px]">Brand:</li>
                            <li class="md:text-[14px] text-[12px] ">Model:</li>
                            <li class="text-[12px] md:text-[14px]">Stock status:</li>
                            <li class="text-[12px] md:text-[14px]">Weight:</li>
                        </ul>
                    </div>
                </div>
                <div class="2xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-6">
                    <div class="p-2 pb-7 border border-[#E4E7E9]">

                        <div class="border p-2 py-3 border-[#E4E7E9]">
                            <div class="xl:w-[293px] h-[268px] p-[5px] flex justify-center">
                                <img src="/cream.png" class="h-full max-w-full" alt="">
                            </div>
                            <div class="xl:p-5 px-2 py-2  pb-0">
                                <h6 class="text-[#4D4D4D] font-[400] text-[14px]">Foundation</h6>
                                <span class="text-[16px] font-[500] text-[#1A1A1A]">$14.99</span>
                                <div class="ratings">
                                    <div>
                                        <font-awesome-icon v-for="i in 5" :key="i"
                                        icon="fa-solid fa-star" class="text-xs" :class="i <= 4 ? 'text-[#FF8A00]' : 'text-[#CCCCCC]'"/>
                                    </div>
                                </div>
                            </div>
                            <div class="flex gap-3 xl:px-6  mt-2 xl:mt-0">
                                <div class="flex-1 items-center gap-1 flex justify-center px-[10px] xl:px-[24px] bg-[#C65C6A] text-white rounded-[6px]">
                                    <span class="font-[700] text-[10px] xl:text-[14px] text-nowrap">ADD TO CART</span>
                                    <SvgCart class="text-white"/>
                                </div>
                                <div class="border border-[#F0A0A0] rounded-[6px] p-[12px]">
                                    <SvgLike class="text-[#C65C6A]"/>
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
                                    <span class="text-[#77878F] md:text-[14px] text-[10px] font-[400] ml-[12px]">(51,746,385)</span>
                                
                            </div>
                            </li>
                            <li class="text-[#BC4D5C] font-[600] text-[12px] md:text-[18px]">$14.99</li>
                            <li class="text-[12px] md:text-[14px]">Beauty House</li>
                            <li class="text-[12px] md:text-[14px]">The Ordinary</li>
                            <li class="text-[12px] md:text-[14px]">Hydrating Cleanser 236ml</li>
                            <li class="md:text-[14px] text-[12px] text-[#2DB224] font-[600]">IN STOCK</li>
                            <li class="text-[12px] md:text-[14px]">6.71 inches, 110.5 cm</li>
                            <li class="text-[12px] md:text-[14px]">650 g (7.41 oz)</li>
                        </ul>
                    </div>
                </div>
                <div class="2xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-6">
                    <div class="p-2 pb-7 border border-[#E4E7E9]">

                        <div class="border p-2 py-3 border-[#E4E7E9]">
                            <div class="xl:w-[293px] h-[268px] p-[5px] flex justify-center">
                                <img src="/cream.png" class="h-full max-w-full" alt="">
                            </div>
                            <div class="xl:p-5 px-2 py-2  pb-0">
                                <h6 class="text-[#4D4D4D] font-[400] text-[14px]">Foundation</h6>
                                <span class="text-[16px] font-[500] text-[#1A1A1A]">$14.99</span>
                                <div class="ratings">
                                    <div>
                                        <font-awesome-icon v-for="i in 5" :key="i"
                                        icon="fa-solid fa-star" class="text-xs" :class="i <= 4 ? 'text-[#FF8A00]' : 'text-[#CCCCCC]'"/>
                                    </div>
                                </div>
                            </div>
                            <div class="flex gap-3 xl:px-6  mt-2 xl:mt-0">
                                <div class="flex-1 items-center gap-1 flex justify-center px-[10px] xl:px-[24px] bg-[#C65C6A] text-white rounded-[6px]">
                                    <span class="font-[700] text-[10px] xl:text-[14px] text-nowrap">ADD TO CART</span>
                                    <SvgCart class="text-white"/>
                                </div>
                                <div class="border border-[#F0A0A0] rounded-[6px] p-[12px]">
                                    <SvgLike class="text-[#C65C6A]"/>
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
                                    <span class="text-[#77878F] md:text-[14px] text-[10px] font-[400] ml-[12px]">(51,746,385)</span>
                                
                            </div>
                            </li>
                            <li class="text-[#BC4D5C] font-[600] text-[12px] md:text-[18px]">$14.99</li>
                            <li class="text-[12px] md:text-[14px]">Beauty House</li>
                            <li class="text-[12px] md:text-[14px]">The Ordinary</li>
                            <li class="text-[12px] md:text-[14px]">Hydrating Cleanser 236ml</li>
                            <li class="md:text-[14px] text-[12px] text-[#2DB224] font-[600]">IN STOCK</li>
                            <li class="text-[12px] md:text-[14px]">6.71 inches, 110.5 cm</li>
                            <li class="text-[12px] md:text-[14px]">650 g (7.41 oz)</li>
                        </ul>
                    </div>
                </div>
                <div class="2xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-6">
                    <div class="p-2 pb-7 border border-[#E4E7E9]">

                        <div class="border p-2 py-3 border-[#E4E7E9]">
                            <div class="xl:w-[293px] h-[268px] p-[5px] flex justify-center">
                                <img src="/cream.png" class="h-full max-w-full" alt="">
                            </div>
                            <div class="xl:p-5 px-2 py-2  pb-0">
                                <h6 class="text-[#4D4D4D] font-[400] text-[14px]">Foundation</h6>
                                <span class="text-[16px] font-[500] text-[#1A1A1A]">$14.99</span>
                                <div class="ratings">
                                    <div>
                                        <font-awesome-icon v-for="i in 5" :key="i"
                                        icon="fa-solid fa-star" class="text-xs" :class="i <= 4 ? 'text-[#FF8A00]' : 'text-[#CCCCCC]'"/>
                                    </div>
                                </div>
                            </div>
                            <div class="flex gap-3 xl:px-6  mt-2 xl:mt-0">
                                <div class="flex-1 items-center gap-1 flex justify-center px-[10px] xl:px-[24px] bg-[#C65C6A] text-white rounded-[6px]">
                                    <span class="font-[700] text-[10px] xl:text-[14px] text-nowrap">ADD TO CART</span>
                                    <SvgCart class="text-white"/>
                                </div>
                                <div class="border border-[#F0A0A0] rounded-[6px] p-[12px]">
                                    <SvgLike class="text-[#C65C6A]"/>
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
                                    <span class="text-[#77878F] md:text-[14px] text-[10px] font-[400] ml-[12px]">(51,746,385)</span>
                                
                            </div>
                            </li>
                            <li class="text-[#BC4D5C] font-[600] text-[12px] md:text-[18px]">$14.99</li>
                            <li class="text-[12px] md:text-[14px]">Beauty House</li>
                            <li class="text-[12px] md:text-[14px]">The Ordinary</li>
                            <li class="text-[12px] md:text-[14px]">Hydrating Cleanser 236ml</li>
                            <li class="md:text-[14px] text-[12px] text-[#2DB224] font-[600]">IN STOCK</li>
                            <li class="text-[12px] md:text-[14px]">6.71 inches, 110.5 cm</li>
                            <li class="text-[12px] md:text-[14px]">650 g (7.41 oz)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
li{
    padding:12px 24px;
    height:44px;
}

li:nth-child(odd){
    background-color:#F2F4F5;
}
</style>