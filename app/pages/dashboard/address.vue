<template>
    <div class="container mx-auto">
        <div class="grid grid-cols-12">
            <div class="md:col-span-6 col-span-12 lg:col-span-4">
                <div>
                    <h1 class="text-[32px]  font-[600]">Your Address</h1>
                    <div class="bg-[#C65C6A] !mt-4 text-white flex w-full justify-between px-[24px] !py-[20px]">
                        <span>Add Address</span>
                        <Plus class="w-5 h-5" />
                    </div>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-12 gap-4 !mt-12">
            <div class="md:col-span-6 col-span-12 lg:col-span-4">
                <div class="border border-[#C65C6A] bg-[#CDCDCD54] !h-[426px] flex flex-col justify-between px-4 rounded-[4px] !py-4">
                    <div class="flex flex-col gap-[12px]">
                        <h3 class="text-[32px] font-[600]">Sara Ali</h3>
                        <span class="text-[#191C1F] text-[24px] font-[600]">10 Nile Street</span>
                        <span class="text-[#191C1F] text-[24px] font-[600]">Cairo , Egypt</span>
                        <span class="text-[#191C1F] text-[24px] font-[600]">Phone Number: 01012345678</span>
                    </div>
                    <div class="flex gap-[10px] text-[#C65C6A] text-[24px] font-[500]">
                        <span>Edit</span>
                        <span class="text-black">|</span>
                        <span>Delete</span>
                    </div>
                </div>
            </div>
            <div class="md:col-span-6 col-span-12 lg:col-span-4">
                <div class="border border-[#C65C6A] bg-[#FFE9EB54] !h-[426px] flex flex-col justify-between px-4 rounded-[4px] !py-4">
                    <div class="flex flex-col gap-[12px]">
                        <h3 class="text-[32px] font-[600]">Omar Hassan</h3>
                        <span class="text-[#191C1F] text-[24px] font-[600]">5 Freedom Ave</span>
                        <span class="text-[#191C1F] text-[24px] font-[600]">Mansoura, Dakahlia , Egypt</span>
                        <span class="text-[#191C1F] text-[24px] font-[600]">Phone Number: 01122334455</span>
                    </div>
                    <div class="flex gap-[10px] text-[#C65C6A] text-[24px] font-[500]">
                        <span>Edit</span>
                        <span class="text-black">|</span>
                        <span>Delete</span>
                    </div>
                </div>
            </div>
            <div class="md:col-span-6 col-span-12 lg:col-span-4">
                <div
                    class="border border-[#C65C6A] bg-[#CDCDCD54] !h-[426px] flex flex-col justify-between px-4 rounded-[4px] !py-4">
                    <div class="flex flex-col gap-[12px]">
                        <h3 class="text-[32px] font-[600]">Mariam Mostafa</h3>
                        <span class="text-[#191C1F] text-[24px] font-[600]">33 Garden Road</span>
                        <span class="text-[#191C1F] text-[24px] font-[600]">Alex andria, Egypt</span>
                        <span class="text-[#191C1F] text-[24px] font-[600]">Phone Number:01234567890</span>
                    </div>
                    <div class="flex gap-[10px] text-[#C65C6A] text-[24px] font-[500]">
                        <span>Edit</span>
                        <span class="text-black">|</span>
                        <span>Delete</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script setup>

import { Plus } from '@element-plus/icons-vue'
</script>