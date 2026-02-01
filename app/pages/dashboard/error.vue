<template>
    <div class="container mx-auto p-5">
        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12">
                <div class="flex flex-col md:justify-center md:items-center gap-[12px]">
                    <div>
                        <img src="/error.png" alt="">
                    </div>
                    <h1 class="text-[36px] font-[600]">404,Page not found</h1>
                    <p class="text-[16px] text-[#475156]">Something went wrong. It’s look that your requested could not be found. It’s look like the link
                        is broken or the page is removed.</p>
                        <div class="flex flex-col md:flex-row gap-[16px]">
                            <div @click="previous" 
                            class="bg-[#CF6F7A] cursor-pointer font-[700] rounded-[6px] text-[14px] gap-[8px] mt-4 flex justify-center text-white py-4 px-[24px] md:w-fit">

                            <SvgRightArrowWhite class="rightArw rotate-180" />
                            <span>GO BACK</span>
                        </div>
                            <NuxtLink :to="localePath('/dashboard')"
                            class="text-[#C65C6A] font-[700] rounded-[6px] text-[14px] gap-[8px] mt-4 flex  border-[2px] border-[#F0A0A0] justify-center  py-4 px-[24px] md:w-fit">

                            <SvgDashboard12 />
                            <span>GO TO HOME</span>
                        </NuxtLink>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { useRouter } from 'vue-router'

const router = useRouter()


const localePath = useLocalePath()

const previous = () => {
    router.back()
    
}
</script>
