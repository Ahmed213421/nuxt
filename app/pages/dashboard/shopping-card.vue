<template>
<div class="container mx-auto p-5">
    <div class="grid grid-cols-12 gap-4">
        <div class="xl:col-span-8 col-span-12">
            <div class="shadow-[0px_4px_16.1px_0px_rgba(0,0,0,0.07)] border border-[#E4E7E9]">
                   <div class="border-b-[#E4E7E9]  border-b">
                        <h1 class="p-4 font-[500] text-[18x] text-[#191C1F]">Shopping Card </h1>
                        <div class="w-full">
                            <el-table :data="tableData" style="width: 100%;overflow:auto">
                                <el-table-column prop="products" label="PRODUCTS" width="450">
                                    <template #default="{ row }">
                                        <div class="flex gap-[16px] items-center">
                                            <SvgRemoveShoppingCard class=" remove-btn-shopping-card" />
                                            <img :src="row.img" class="!w-[63px] !h-[77px]" alt="">
                                            <div>
                                                <h1 class="font-[600] text-[12px] text-[#C65C6A]">{{ row.name }}</h1>
                                                <p class="font-[400] text-[#191C1F] xl:text-[14px]">{{ row.description
                                                }}</p>
                                            </div>
                                        </div>
                                    </template>

                                </el-table-column>
                                <el-table-column prop="price" label="PRICE" width="100">
                                    <template #default="{ row }">
                                        <del class="font-[400] text-[#929FA5] mr-2 xl:text-[14px]">
                                            {{ row.beforePrice }}
                                        </del>
                                        <span class="font-[400] text-[#475156] xl:text-[14px]">
                                            {{ row.price }}
                                        </span>

                                    </template>
                                </el-table-column>
                                <el-table-column prop="qauntity" label="QUANTITY" width="160">
                                    <template #default="{ row }">
                                        <div class="w-[148px] py-[12px] px-[20px] border-[#E4E7E9] border flex items-center justify-between">
                                            <button>
                                                <MinusIcon @click="decrement(row)" class="w-5 h-5 " :class="row.quantity === 0 ? 'text-[#929FA5]  cursor-not-allowed' : 'text-black cursor-pointer'" />
                                            </button>
                                            
                                            <span>{{ row.quantity }}</span>

                                            <button>
                                                <PlusIcon @click="increment(row)" class="w-5 h-5 cursor-pointer"/>
                                            </button>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="subTotal" label="SUB-TOTAL" width="160">
                                    <template #default="{ row }">
                                        <div>
                                            {{row.subTotal }}
                                        </div>
                                    </template>
                                </el-table-column>
                                
                                

                            </el-table>
                        </div>

                        <div class="flex p-4 justify-between flex-col md:flex-row">
                            <NuxtLink :to="localePath('/dashboard')"
                                class="text-[#618EB1] font-[700] rounded-[6px] text-[14px] gap-[8px] mt-4 flex  border-[2px] border-[#618EB1] justify-center  py-3 px-[24px] md:w-fit">
                               <svg width="20" height="20" class="rightArw" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.875 10H3.125" stroke="#618EB1" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M8.75 4.375L3.125 10L8.75 15.625" stroke="#618EB1" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span>RETURN TO SHOP</span>
                            </NuxtLink>
                            <div
                                class="text-[#618EB1] font-[700] rounded-[6px] text-[14px] gap-[8px] mt-4 flex  border-[2px] border-[#618EB1] justify-center  py-3 px-[24px] md:w-fit">
                               
                                <span>UPDATE CART</span>
                            </div>
                        </div>
                    </div>
  
            </div>
        </div>

        <div class="xl:col-span-4 col-span-12">
            <div class="grid grid-cols-12">
                <div class="md:col-span-6 xl:col-span-12 col-span-12">

                    <div class="shadow-[0px_4px_16.1px_0px_rgba(0,0,0,0.07)] px-[24px] flex flex-col gap-[20px] py-[20px]">
                        <h1 class="font-[500] text-[18px]">Card Totals</h1>
                        
                        <div class="flex flex-col gap-2">
                            <div class="flex text-[14px] justify-between">
                                <span class="text-[#5F6C72] font-[400]">Sub-total</span>
                                <span class="text-[#191C1F] font-[500]">$56.49</span>
                            </div>
                            <div class="flex text-[14px] justify-between">
                                <span class="text-[#5F6C72] font-[400]">Shipping</span>
                                <span class="text-[#191C1F] font-[500]">Free</span>
                            </div>
                            <div class="flex text-[14px] justify-between">
                                <span class="text-[#5F6C72] font-[400]">Discount</span>
                                <span class="text-[#191C1F] font-[500]">$5.00</span>
                            </div>
                            <div class="flex text-[14px] justify-between">
                                <span class="text-[#5F6C72] font-[400]">Tax</span>
                                <span class="text-[#191C1F] font-[500]">$8.75</span>
                            </div>
                            <hr class="mt-4" />
                            <div class="flex text-[16px] justify-between">
                                <span class="text-[#191C1F] font-[400]">Total</span>
                                <span class="text-[#191C1F] font-[500]">$60.24 USD</span>
                            </div>
                            <div
                            class="text-white justify-center items-center py-[12px] bg-[#C65C6A] flex gap-[12px] rounded-[6px]">
                            <span>Proceed to Checkout</span>
                            <SvgRightArrowWhite class="rightArw" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="md:col-span-6 xl:col-span-12 col-span-12">
                
                <div class="shadow-[0px_4px_16.1px_0px_rgba(0,0,0,0.07)] ">
                    <div class="!py-[20px]  border-b border-b-[#E4E7E9] px-[24px]">
                        <h1 class="font-[500] text-[18px]  ">Coupon Code</h1>
                    </div>
                    <div class="px-[24px] !py-[20px] flex flex-col gap-[16px]">
                        <input type="text" placeholder="Email address" class="p-4 border-[#E4E7E9] border w-full rounded-[2px]">
                        <div class="bg-[#618EB1] rounded-[2px] px-[24px] font-[700] text-[14px] !py-2 w-fit text-white">
                            Apply Coupon
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

import { ref } from 'vue'

const tableData = ref([
    {
        name: 'FOUNDATION',
        description: 'Fit Me Matte + Poreless Foundation – Liquid Foundation for Natural Coverage, Long-Lasting, Suitable for Oily Skin',
        price: '$899',
        quantity: 2,
        subTotal: '$899',
        img: '/cream.png',
        beforePrice:'$1000',
    },
    {
        name: 'FOUNDATION',
        description: 'Fit Me Matte + Poreless Foundation – Liquid Foundation for Natural Coverage, Long-Lasting, Suitable for Oily Skin',
        price: '$899',
        beforePrice:'$1000',
        quantity: 1,
        subTotal: '$899',
        img: '/cream2.png',
    },
])

import {
    PlusIcon,
    MinusIcon,
} from '@heroicons/vue/24/solid'

const decrement = (row) => {
    row.quantity--

    if (row.quantity < 0) {
        alert('can not be less than zero')
        row.quantity = 0
    }
}

const increment = (row) => {
    row.quantity++
}

const localePath = useLocalePath()
</script>

<style scoped>
:deep(.el-table th.el-table__cell),
:deep(.el-table__header-wrapper) {
    background: #E4E7E9 !important;
}

:deep(.el-table .cell) {
    color: #475156 !important;
    font-weight: 500 !important;
    font-size: 12px !important;
}

:deep(.el-table .el-table__body-wrapper tr:nth-child(odd) .remove-btn-shopping-card) {
    stroke: #929FA5;
    width: 54px;
}

:deep(.el-table .el-table__body-wrapper tr:nth-child(even) .remove-btn-shopping-card) {
    stroke: #EE5858;
    width: 54px;
}
</style>
