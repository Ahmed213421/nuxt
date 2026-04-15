<template>
    <div class="container mx-auto mb-5">
        <div class="grid grid-cols-12 md:gap-10">

            <div class="lg:col-span-6 col-span-12">
                <div>
                    <h1 class="mb-8 md:text-[32px] font-[600] block">Frequently Asked Questions </h1>

                    <div class="flex flex-col gap-4 ">
                        <div class="demo-collapse">
                            <el-collapse v-model="activeNames" >
                                <el-collapse-item name="1">
                                    <template #icon="{ isActive }">
                                        <el-icon class="icon-ele">
                                            <component :is="isActive ? Minus : Plus" />
                                        </el-icon>
                                    </template>
                                    <template #title>
                                        <span class="md:text-[18px]">Fusce molestie condimentum facilisis. </span>
                                    </template>
                                    <div class="p-4">
                                        Consistent with real life: in line with the process and logic of real
                                        life, and comply with languages and habits that the users are used to;
                                    </div>
                                </el-collapse-item>
                                <el-collapse-item name="2">
                                    <template #icon="{ isActive }">
                                        <el-icon class="icon-ele">
                                            <component :is="isActive ? Minus : Plus" />
                                        </el-icon>
                                    </template>
                                    <template #title>
                                        <span class="md:text-[18px]">Fusce
                                            molestie condimentum facilisis.</span>
                                    </template>
                                    <div class="p-4">
                                        Nulla malesuada iaculis nisi, vitae sagittis lacus laoreet in. Morbi aliquet
                                        pulvinar orci non vulputate. Donec aliquet ullamcorper gravida. Interdum et
                                        malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui, non
                                        iaculis magna mattis id. Ut consectetur massa at viverra euismod. Interdum et
                                        malesuada fames ac ante ipsum primis in faucibus. Praesent eget sem purus.
                                    </div>
                                </el-collapse-item>
                                <el-collapse-item name="3">
                                    <template #icon="{ isActive }">
                                        <el-icon class="icon-ele">
                                            <component :is="isActive ? Minus : Plus" />
                                        </el-icon>
                                    </template>
                                    <template #title>
                                        <span class="md:text-[18px]">Fusce
                                            molestie condimentum facilisis.</span>
                                    </template>
                                    <div class="p-4">
                                        Nulla malesuada iaculis nisi, vitae sagittis lacus laoreet in. Morbi aliquet
                                        pulvinar orci non vulputate. Donec aliquet ullamcorper gravida. Interdum et
                                        malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui, non
                                        iaculis magna mattis id. Ut consectetur massa at viverra euismod. Interdum et
                                        malesuada fames ac ante ipsum primis in faucibus. Praesent eget sem purus.
                                    </div>
                                </el-collapse-item>
                                <el-collapse-item name="4">
                                    <template #icon="{ isActive }">
                                        <el-icon class="icon-ele">
                                            <component :is="isActive ? Minus : Plus" />
                                        </el-icon>
                                    </template>
                                    <template #title>
                                        <span class="md:text-[18px]">Fusce
                                            molestie condimentum facilisis.</span>
                                    </template>
                                    <div class="p-4">
                                        Nulla malesuada iaculis nisi, vitae sagittis lacus laoreet in. Morbi aliquet
                                        pulvinar orci non vulputate. Donec aliquet ullamcorper gravida. Interdum et
                                        malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui, non
                                        iaculis magna mattis id. Ut consectetur massa at viverra euismod. Interdum et
                                        malesuada fames ac ante ipsum primis in faucibus. Praesent eget sem purus.
                                    </div>
                                </el-collapse-item>
                            </el-collapse>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lg:col-span-6 col-span-12 xl:place-self-center">
                <div class="bg-[#FFE9EB] py-4 px-[32px] xl:w-[424px]">
                    <div class="flex flex-col gap-[12px]">
                        <h6 class="font-[500] text-[18px] text-[#191C1F]">Don’t find your answer, Ask for support.</h6>
                        <p class="text-[14px] text-[#475156] font-[400]">Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui, non
                            iaculis primis in faucibu raesent eget sem purus.</p>
                        <input type="email" placeholder="Email address" class=" px-3 py-2 w-full border border-[#F7E99E]">
                        <input type="text" placeholder="Subject" class=" px-3 py-2 w-full border border-[#F7E99E]">
                        <textarea class="w-full px-3 py-2" placeholder="Message (optional)"></textarea>
                       <div class="bg-[#CF6F7A] font-[700] text-[14px] gap-[8px] mt-4 flex justify-center text-white py-4 px-[24px] w-fit">
                            
                            <span>SEND MESSAGE</span>
                            <SvgRightArrowWhite class="rightArw" />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
        
</template>

<script setup lang="ts">
import { ref } from 'vue'

import type { CollapseModelValue } from 'element-plus'
import { Plus, Minus } from '@element-plus/icons-vue'

const activeNames = ref(['1'])
</script>

<style scoped>
:deep(.el-collapse-item__header.is-active){
    background-color:#C65C6A !important;
    padding:5px 24px;
    color:white;
}

:deep(.el-collapse-item__header){
    padding:5px 24px;
}
</style>