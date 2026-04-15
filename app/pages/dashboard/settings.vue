<template>

    <div class="container mx-auto p-5">
        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12">

                <div class="border-[#E4E7E9] border mt-4 rounded-[4px]">
                    <div class="p-4 border-b border-[#E4E7E9]">
                        <h1>ACCOUNT SETTING</h1>
                    </div>
                    <div class="grid grid-cols-12">
                        <div class="md:col-span-2 col-span-12">
                            <div class="p-4 w-[176] h-[176] rounded-[100px]">
                                <img src="/avatardashboard.png" class="w-[176] h-[176]" alt="">
                            </div>
                        </div>
                        <div class="col-span-10">
                            <div class="grid grid-cols-12 gap-4 p-4">

                                <div class="md:col-span-6 col-span-12">
                                    <el-form :label-position="labelPosition" label-width="auto" :model="formLabelAlign"
                                        style="max-width: 600px">
                                        <el-form-item label="Name" :label-position="itemLabelPosition">
                                            <el-input v-model="formLabelAlign.name"
                                                class="!border-[#E4E7E9] border rounded-[6px] py-1" />
                                        </el-form-item>
                                    </el-form>
                                </div>
                                <div class="md:col-span-6 col-span-12">
                                    <el-form :label-position="labelPosition" label-width="auto" :model="formLabelAlign"
                                        style="max-width: 600px">
                                        <el-form-item label="User Name" :label-position="itemLabelPosition">
                                            <el-input v-model="formLabelAlign.userName"
                                                class="!border-[#E4E7E9] border rounded-[6px] py-1" />
                                        </el-form-item>
                                    </el-form>
                                </div>
                                <div class="md:col-span-6 col-span-12">
                                    <el-form :label-position="labelPosition" label-width="auto" :model="formLabelAlign"
                                        style="max-width: 600px">
                                        <el-form-item label="Full Name" :label-position="itemLabelPosition">
                                            <el-input v-model="formLabelAlign.fullName"
                                                class="!border-[#E4E7E9] border rounded-[6px] py-1" />
                                        </el-form-item>
                                    </el-form>
                                </div>
                                <div class="md:col-span-6 col-span-12">
                                    <el-form :label-position="labelPosition" label-width="auto" :model="formLabelAlign"
                                        style="max-width: 600px">
                                        <el-form-item label="Email" :label-position="itemLabelPosition">
                                            <el-input v-model="formLabelAlign.email"
                                                class="!border-[#E4E7E9] border rounded-[6px] py-1" />
                                        </el-form-item>
                                    </el-form>
                                </div>
                                <div class="md:col-span-6 col-span-12">
                                    <el-form :label-position="labelPosition" label-width="auto" :model="formLabelAlign"
                                        style="max-width: 600px">
                                        <el-form-item label="Phone Number" :label-position="itemLabelPosition">
                                            <el-input v-model="formLabelAlign.phone"
                                                class="!border-[#E4E7E9] border rounded-[6px] py-1" />
                                        </el-form-item>
                                    </el-form>
                                </div>
                                <div class="md:col-span-6 col-span-12">
                                    <el-form :label-position="labelPosition" label-width="auto" :model="formLabelAlign"
                                        style="max-width: 600px">
                                        <el-form-item label="Additional Number" :label-position="itemLabelPosition">
                                            <el-input v-model="formLabelAlign.additionalNumber"
                                                class="!border-[#E4E7E9] border rounded-[6px] py-1" />
                                        </el-form-item>
                                    </el-form>
                                </div>
                                <div class="md:col-span-6 col-span-12">
                                    <el-form :label-position="labelPosition" label-width="auto" :model="formLabelAlign"
                                        style="max-width: 600px"> <el-form-item label="Country"
                                            :label-position="itemLabelPosition">
                                            <el-select size="large" v-model="formLabelAlign.country"
                                                placeholder="Select" style="width: 540px">
                                                <el-option v-for="item in countries" :key="item.value"
                                                    :label="item.label" :value="item.value" />
                                            </el-select>
                                        </el-form-item>
                                    </el-form>
                                </div>
                                <div class="md:col-span-3 col-span-12">
                                    <el-form :label-position="labelPosition" label-width="auto" :model="formLabelAlign"
                                        style="max-width: 600px"> <el-form-item label="States"
                                            :label-position="itemLabelPosition">
                                            <el-select size="large" v-model="formLabelAlign.states"
                                                placeholder="Select" style="width: 540px">
                                                <el-option v-for="item in states" :key="item.value"
                                                    :label="item.label" :value="item.value" />
                                            </el-select>
                                        </el-form-item>
                                    </el-form>
                                </div>
                                <div class="md:col-span-3 col-span-12">
                                    <el-form :label-position="labelPosition" label-width="auto" :model="formLabelAlign"
                                        style="max-width: 600px"> <el-form-item label="ZIP Code"
                                            :label-position="itemLabelPosition">
                                            <el-select size="large" v-model="formLabelAlign.zipCode"
                                                placeholder="Select" style="width: 540px">
                                                <el-option v-for="item in countries" :key="item.value"
                                                    :label="item.label" :value="item.value" />
                                            </el-select>
                                        </el-form-item>
                                    </el-form>
                                </div>
                                <div class="xl:col-span-3 lg:col-span-6 col-span-12">
                                    <div class="bg-[#CF6F7A] flex justify-center text-white py-4 px-[24px]">
                                        SAVE CHANGES
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                    <div class="grid grid-cols-12 gap-4">
                        <div class="md:col-span-6 col-span-12">
                            <div class="border-[#E4E7E9] border mt-4 rounded-[4px]">
                                <div class="p-4 border-b border-[#E4E7E9]">
                                    <h1>Default address</h1>
                                </div>
                            
                            <div class="p-4">
                                    <div>

                                        <el-form :label-position="labelPosition" label-width="auto" :model="defultAddress"
                                        style="max-width: 700px">
                                        <el-form-item label="Name On Card" :label-position="itemLabelPosition">
                                            <el-input v-model="defultAddress.fullName"
                                            class="!border-[#E4E7E9] border rounded-[6px] py-1" />
                                        </el-form-item>
                                    </el-form>
                                    </div>
                                    <div>

                                        <el-form :label-position="labelPosition" label-width="auto" :model="defultAddress"
                                        style="max-width: 700px">
                                        <el-form-item label="Phone Number" :label-position="itemLabelPosition">
                                            <el-input v-model="defultAddress.phone"
                                            class="!border-[#E4E7E9] border rounded-[6px] py-1" />
                                        </el-form-item>
                                    </el-form>
                                    </div>
                                    <div>

                                        <el-form :label-position="labelPosition" label-width="auto" :model="defultAddress"
                                        style="max-width: 700px">
                                        <el-form-item label="Address" :label-position="itemLabelPosition">
                                            <el-input v-model="defultAddress.address"

                                            class="!border-[#E4E7E9] border rounded-[6px] py-1" />
                                        </el-form-item>
                                    </el-form>
                                    </div>
                                    <div>

                                        <el-form :label-position="labelPosition" label-width="auto" :model="defultAddress"
                                        style="max-width: 700px">
                                        <el-form-item label="Company Name (optional)" :label-position="itemLabelPosition">
                                            <el-input v-model="defultAddress.companyName"

                                            class="!border-[#E4E7E9] border rounded-[6px] py-1" />
                                        </el-form-item>
                                    </el-form>
                                    </div>
                                    <div class="grid grid-cols-12 gap-4">
                                        <div class="md:col-span-12 col-span-6">
                                            <div>

                                                <el-form :label-position="labelPosition" label-width="auto"
                                                    :model="defultAddress" style="max-width: 600px"> <el-form-item
                                                        label="Country" :label-position="itemLabelPosition">
                                                        <el-select size="large" v-model="defultAddress.country"
                                                            placeholder="Select" style="width: 1000px">
                                                            <el-option v-for="item in countries" :key="item.value"
                                                                :label="item.label" :value="item.value" />
                                                        </el-select>
                                                    </el-form-item>
                                                </el-form>
                                            </div>
                                        </div>
                                        <div class="md:col-span-12 col-span-6">
                                            <div>

                                                <el-form :label-position="labelPosition" label-width="auto"
                                                    :model="defultAddress" style="max-width: 600px"> <el-form-item
                                                        label="Region/state" :label-position="itemLabelPosition">
                                                        <el-select size="large" v-model="defultAddress.state"
                                                            placeholder="Select" style="width: 1000px">
                                                            <el-option v-for="item in countries" :key="item.value"
                                                                :label="item.label" :value="item.value" />
                                                        </el-select>
                                                    </el-form-item>
                                                </el-form>
                                            </div>
                                        </div>
                                        <div class="md:col-span-6 col-span-6">
                                            <div>

                                                <el-form :label-position="labelPosition" label-width="auto"
                                                    :model="defultAddress" style="max-width: 600px"> <el-form-item
                                                        label="CITY" :label-position="itemLabelPosition">
                                                        <el-select size="large" v-model="defultAddress.city"
                                                            placeholder="Select" style="width: 1000px">
                                                            <el-option v-for="item in countries" :key="item.value"
                                                                :label="item.label" :value="item.value" />
                                                        </el-select>
                                                    </el-form-item>
                                                </el-form>
                                            </div>
                                        </div>
                                        <div class="md:col-span-6 col-span-6">
                                            <div>

                                                <el-form :label-position="labelPosition" label-width="auto"
                                                    :model="defultAddress" style="max-width: 600px"> <el-form-item
                                                        label="ZIP CODE" :label-position="itemLabelPosition">
                                                        <el-select size="large" v-model="defultAddress.zipCode"
                                                            placeholder="Select" style="width: 1000px">
                                                            <el-option v-for="item in countries" :key="item.value"
                                                                :label="item.label" :value="item.value" />
                                                        </el-select>
                                                    </el-form-item>
                                                </el-form>
                                            </div>
                                        </div>
                                    </div>
                                    <div>

                                        <el-form :label-position="labelPosition" label-width="auto"
                                            :model="defultAddress" style="max-width: 700px">
                                            <el-form-item label="Email"
                                                :label-position="itemLabelPosition">
                                                <el-input v-model="defultAddress.email"
                                        class=" !border-[#E4E7E9] border rounded-[6px] py-1" />
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                    <div class="grid grid-cols-12">

                                        <div class="xl:col-span-3 lg:col-span-6 col-span-12">
                                        <div class="bg-[#CF6F7A] flex justify-center text-white py-4 px-[24px]">
                                            SAVE CHANGES
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="md:col-span-6 col-span-12">
                            <div class="border-[#E4E7E9] border mt-4 rounded-[4px]">
                                <div class="p-4 border-b border-[#E4E7E9]">
                                    <h1>Shipping Address</h1>
                                </div>
                            
                            <div class="p-4">
                                    <div>

                                        <el-form :label-position="labelPosition" label-width="auto" :model="defultAddress"
                                        style="max-width: 700px">
                                        <el-form-item label="Name On Card" :label-position="itemLabelPosition">
                                            <el-input v-model="defultAddress.fullName"
                                            class="!border-[#E4E7E9] border rounded-[6px] py-1" />
                                        </el-form-item>
                                    </el-form>
                                    </div>
                                    <div>

                                        <el-form :label-position="labelPosition" label-width="auto" :model="defultAddress"
                                        style="max-width: 700px">
                                        <el-form-item label="Phone Number" :label-position="itemLabelPosition">
                                            <el-input v-model="defultAddress.phone"
                                            class="!border-[#E4E7E9] border rounded-[6px] py-1" />
                                        </el-form-item>
                                    </el-form>
                                    </div>
                                    <div>

                                        <el-form :label-position="labelPosition" label-width="auto" :model="defultAddress"
                                        style="max-width: 700px">
                                        <el-form-item label="Address" :label-position="itemLabelPosition">
                                            <el-input v-model="defultAddress.address"
"
                                            class="!border-[#E4E7E9] border rounded-[6px] py-1" />
                                        </el-form-item>
                                    </el-form>
                                    </div>
                                    <div>

                                        <el-form :label-position="labelPosition" label-width="auto" :model="defultAddress"
                                        style="max-width: 700px">
                                        <el-form-item label="Company Name (optional)" :label-position="itemLabelPosition">
                                            <el-input v-model="defultAddress.companyName"
"
                                            class="!border-[#E4E7E9] border rounded-[6px] py-1" />
                                        </el-form-item>
                                    </el-form>
                                    </div>
                                    <div class="grid grid-cols-12 gap-4">
                                        <div class="md:col-span-12 col-span-6">
                                            <div>

                                                <el-form :label-position="labelPosition" label-width="auto"
                                                    :model="shippingAddress" style="max-width: 600px"> <el-form-item
                                                        label="Country" :label-position="itemLabelPosition">
                                                        <el-select size="large" v-model="shippingAddress.country"
                                                            placeholder="Select" style="width: 1000px">
                                                            <el-option v-for="item in countries" :key="item.value"
                                                                :label="item.label" :value="item.value" />
                                                        </el-select>
                                                    </el-form-item>
                                                </el-form>
                                            </div>
                                        </div>
                                        <div class="md:col-span-12 col-span-6">
                                            <div>

                                                <el-form :label-position="labelPosition" label-width="auto"
                                                    :model="shippingAddress" style="max-width: 600px"> <el-form-item
                                                        label="Region/state" :label-position="itemLabelPosition">
                                                        <el-select size="large" v-model="shippingAddress.state"
                                                            placeholder="Select" style="width: 1000px">
                                                            <el-option v-for="item in countries" :key="item.value"
                                                                :label="item.label" :value="item.value" />
                                                        </el-select>
                                                    </el-form-item>
                                                </el-form>
                                            </div>
                                        </div>
                                        <div class="md:col-span-6 col-span-6">
                                            <div>

                                                <el-form :label-position="labelPosition" label-width="auto"
                                                    :model="shippingAddress" style="max-width: 600px"> <el-form-item
                                                        label="CITY" :label-position="itemLabelPosition">
                                                        <el-select size="large" v-model="shippingAddress.city"
                                                            placeholder="Select" style="width: 1000px">
                                                            <el-option v-for="item in countries" :key="item.value"
                                                                :label="item.label" :value="item.value" />
                                                        </el-select>
                                                    </el-form-item>
                                                </el-form>
                                            </div>
                                        </div>
                                        <div class="md:col-span-6 col-span-6">
                                            <div>

                                                <el-form :label-position="labelPosition" label-width="auto"
                                                    :model="shippingAddress" style="max-width: 600px"> <el-form-item
                                                        label="ZIP CODE" :label-position="itemLabelPosition">
                                                        <el-select size="large" v-model="shippingAddress.zipCode"
                                                            placeholder="Select" style="width: 1000px">
                                                            <el-option v-for="item in countries" :key="item.value"
                                                                :label="item.label" :value="item.value" />
                                                        </el-select>
                                                    </el-form-item>
                                                </el-form>
                                            </div>
                                        </div>
                                    </div>
                                    <div>

                                        <el-form :label-position="labelPosition" label-width="auto"
                                            :model="shippingAddress" style="max-width: 700px">
                                            <el-form-item label="Email"
                                                :label-position="itemLabelPosition">
                                                <el-input v-model="shippingAddress.email"
                                        class=" !border-[#E4E7E9] border rounded-[6px] py-1" />
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                    <div class="grid grid-cols-12">

                                    <div class="xl:col-span-3 lg:col-span-6 col-span-12">
                                        <div class="bg-[#CF6F7A] flex justify-center text-white py-4 px-[24px]">
                                            SAVE CHANGES
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        
                    </div>
                </div>

                <div class="border-[#E4E7E9] border mt-4 rounded-[4px]">
                    <div class="p-4 border-b border-[#E4E7E9]">
                        <h1>CHANGE PASSWORD</h1>
                    </div>
                            
                    <div class="p-4">
                        <div class="relative">
                            <h1 class="text-[#191C1F] font-[400] text-[14px]">Current Password</h1>
                            <input type="password" v-model="currentPassword" ref="currentPasswordInput" 
                                class="login-input mt-[6.5px] w-full">
                            <SvgViewSettingsPassword class="absolute top-10 end-3 cursor-pointer" @click="view"/>
                            
                        </div>
                        <div class="relative mt-4">
                            <h1 class="text-[#191C1F] font-[400] text-[14px]">New Password</h1>
                            <input type="password" v-model="newPassword" ref="newPasswordInput" placeholder="8+ characters"
                                class="login-input mt-[6.5px] w-full">
                            <SvgViewSettingsPassword class="absolute top-10 end-3 cursor-pointer" @click="viewNewPassord"/>
                            
                        </div>
                        <div class="relative mt-4">
                            <h1 class="text-[#191C1F] font-[400] text-[14px]">Confirm Password</h1>
                            <input type="password" v-model="confirmPassword" ref="confirmPasswordInput"
                                class="login-input mt-[6.5px] w-full">
                            <SvgViewSettingsPassword class="absolute top-10 end-3 cursor-pointer" @click="viewConfirmPassord"/>
                            
                        </div>
                        <div class="grid grid-cols-12">

                            <div class="xl:col-span-3 lg:col-span-6 col-span-12">
                                <div class="bg-[#CF6F7A] mt-4 flex justify-center text-white py-4 px-[24px]">
                                    SAVE CHANGES
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.login-input {
    border: 1.5px solid #E4E7E9;
    box-shadow: none;
}

.login-input {
    padding-top: 10.57px;
    padding-bottom: 10.57px;
    padding-inline-start: 15px;
}
</style>

<script lang="ts" setup>
import { reactive, ref } from 'vue'


import type { FormItemProps, FormProps } from 'element-plus'


const currentPassword = ref('')            
const currentPasswordInput = ref(null)     
const view = () => {
    var x = currentPasswordInput.value;
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}       
const newPasswordInput = ref(null)     
const viewNewPassord = () => {
    var x = newPasswordInput.value;
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}           
const confirmPasswordInput = ref(null)     
const viewConfirmPassord = () => {
    var x = confirmPasswordInput.value;
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}


const labelPosition = ref < FormProps['labelPosition'] > ('top')
const itemLabelPosition = ref < FormItemProps['labelPosition'] > ('')
const formLabelAlign = reactive({
    fullName: '',
    email: '',
    phone: '',
    additionalNumber: '',
    country: '',
    states: '',
    zipCode: '',
})

const defultAddress = reactive({
    name: '',
    address: '',
    fullName: '',
    email: '',
    phone: '',
    country: '',
    companyName: '',
    state: '',
    city: '',
    zipCode: '',
})
const shippingAddress = reactive({
    name: '',
    address: '',
    fullName: '',
    email: '',
    phone: '',
    country: '',
    companyName: '',
    state: '',
    city: '',
    zipCode: '',
})


const password = ref(null)

const newPassword = ref(null)

const confirmPassword = ref(null)

import { useRoute } from 'vue-router'
import { ArrowRight } from '@element-plus/icons-vue'
const route = useRoute()
const countries = [
    {
        value: 'Option1',
        label: 'Option1',
    },
    {
        value: 'Option2',
        label: 'Option2',
    },
    {
        value: 'Option3',
        label: 'Option3',
    },
    {
        value: 'Option4',
        label: 'Option4',
    },
    {
        value: 'Option5',
        label: 'Option5',
    },
]
const cities = [
    {
        value: 'Option1',
        label: 'Option1',
    },
    {
        value: 'Option2',
        label: 'Option2',
    },
    {
        value: 'Option3',
        label: 'Option3',
    },
    {
        value: 'Option4',
        label: 'Option4',
    },
    {
        value: 'Option5',
        label: 'Option5',
    },
]
const Regions = [
    {
        value: 'Option1',
        label: 'Option1',
    },
    {
        value: 'Option2',
        label: 'Option2',
    },
    {
        value: 'Option3',
        label: 'Option3',
    },
    {
        value: 'Option4',
        label: 'Option4',
    },
    {
        value: 'Option5',
        label: 'Option5',
    },
]
</script>