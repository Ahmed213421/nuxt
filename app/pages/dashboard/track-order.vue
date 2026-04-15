<template>
    <div class="container mx-auto p-5">
        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12">
                <div class="shadow-[0px_4px_16.1px_0px_rgba(0,0,0,0.07)] flex flex-col gap-[12px] bg-[#FFFAFA] !py-[48px] lg:px-[300px]">
                    <h2 class="text-[32px] font-[600]">Track Order</h2>
                    <p class="font-[400] text-[16px] text-[#5F6C72]">To track your order please enter your order ID in
                        the input field below and press the “Track Order” button. this was given to you on your receipt
                        and in the confirmation email you should have received.</p>
                    <div class="grid grid-cols-12 gap-[24px]">
                        <div class="col-span-12 md:col-span-6">
                            <el-form :label-position="labelPosition" label-width="auto" :model="formLabelAlign"
                                style="max-width: 600px">
                                <el-form-item label="Order Id" :label-position="itemLabelPosition">
                                    <el-input v-model="formLabelAlign.orderId" placeholder="ID..."
                                        class="!border-[#E4E7E9] border rounded-[6px] py-1 !bg-white" />
                                </el-form-item>
                            </el-form>
                            <div class="flex gap-[6px] items-center">
                               <InformationCircleIcon class="w-6 h-6 text-gray-500" />
                               <div class="text-[#5F6C72]">Order ID that we sended to your in your email address.</div>
                            </div>
                        </div>
                        <div class="col-span-12 md:col-span-6">
                            <el-form :label-position="labelPosition" label-width="auto" :model="formLabelAlign"
                                style="max-width: 600px">
                                <el-form-item label="Billing Email" :label-position="itemLabelPosition">
                                    <el-input v-model="formLabelAlign.billingEmail" placeholder="Email address"
                                        class="!border-[#E4E7E9] border rounded-[6px] py-1 !bg-white" />
                                </el-form-item>
                            </el-form>
                        </div>
                    </div>
                    <div
                    class="text-white w-fit font-[700] justify-center items-center px-[32px] !py-[12px] bg-[#C65C6A] flex gap-[12px] rounded-[6px]">
                    <span>Track Order</span>
                    <SvgRightArrowWhite class="rightArw" />
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { InformationCircleIcon } from '@heroicons/vue/24/outline'


import type { FormItemProps, FormProps } from 'element-plus'

const labelPosition = ref<FormProps['labelPosition']>('top')
const itemLabelPosition = ref<FormItemProps['labelPosition']>('')
const formLabelAlign = reactive({
    orderId: '',
    billingEmail:''
})

</script>

<style scoped>
:deep(.el-form-item__label) {
    color: black;
    font-weight: 400;
    font-size: 14px;
}

label {
    padding: 0 1em;
    text-align: center;
}
</style>