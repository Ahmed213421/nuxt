<template>
        <div class="container mx-auto py-5 px-6">

            <el-breadcrumb :separator-icon="ArrowRight">
                <el-breadcrumb-item :to="{ path: '/products' }">{{ $t('products') }}</el-breadcrumb-item>
                <el-breadcrumb-item>{{ $t('productDetails') }}</el-breadcrumb-item>
                <el-breadcrumb-item><span
                        :class="route.path === '/product-skin' ? 'text-[#C65C6A]' : ''">{{ $t('sensitiveSkin') }}</span></el-breadcrumb-item>
            </el-breadcrumb>
        </div>

    <div class="container mx-auto p-5">
        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12">

                <div class="border-[#E4E7E9] border mt-4 rounded-[4px]">
                    <div class="p-4 border-b border-[#E4E7E9]">
                        <h1>ACCOUNT SETTING</h1>
                    </div>
                    <div class="grid grid-cols-12">
                        <div class="col-span-3">
                            <div class="w-[176] h-[176] rounded-[100px]">
                                <img src="/avatar1.png" class="w-full h-full" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>

<script setup>
import {ref} from 'vue'
import { useRoute } from 'vue-router'
import { ArrowRight } from '@element-plus/icons-vue'
const route = useRoute()

</script>