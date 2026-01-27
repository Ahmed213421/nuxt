<template>
    
    <div class="container mx-auto mb-5">
        <div class="grid grid-cols-12 gap-4">
            <div class="2xl:col-span-8 xl:col-span-9 col-span-12">
                <div class="shadow-[0px_4px_16.1px_0px_rgba(0,0,0,0.07)] p-3">
                    <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-12 ">
                            <div class="grid grid-cols-12 gap-4">
                                <div class="md:col-span-6 col-span-12">
                            <el-form
                                :label-position="labelPosition"
                                label-width="auto"
                                :model="formLabelAlign"
                                style="max-width: 600px"
                            >
                            <el-form-item label="Name" :label-position="itemLabelPosition">
                                <el-input v-model="formLabelAlign.name" class="!border-[#E4E7E9] border rounded-[6px] py-1"/>
                                </el-form-item>
                            </el-form>
                        </div>
                        <div class="md:col-span-6 col-span-12">
                            <el-form
                                :label-position="labelPosition"
                                label-width="auto"
                                :model="formLabelAlign"
                                style="max-width: 600px"
                            >
                            <el-form-item label="Company Name (optional)" :label-position="itemLabelPosition">
                                <el-input v-model="formLabelAlign.companyName" class="!border-[#E4E7E9] border rounded-[6px] py-1"/>
                                </el-form-item>
                            </el-form>
                        </div>
                        <div class="md:col-span-6 col-span-12">
                            <el-form
                                :label-position="labelPosition"
                                label-width="auto"
                                :model="formLabelAlign"
                                style="max-width: 600px"
                            >
                            <el-form-item label="Address" :label-position="itemLabelPosition">
                                <el-input v-model="formLabelAlign.address" class="!border-[#E4E7E9] border rounded-[6px] py-1"/>
                                </el-form-item>
                            </el-form>
                        </div>
                        <div class="md:col-span-6 col-span-12">
                            <el-form
                                :label-position="labelPosition"
                                label-width="auto"
                                :model="formLabelAlign"
                                style="max-width: 600px"
                            >
                            <el-form-item label="Mobile Phone" :label-position="itemLabelPosition">
                                <el-input v-model="formLabelAlign.companyName" class="!border-[#E4E7E9] border rounded-[6px] py-1"/>
                                </el-form-item>
                            </el-form>
                        </div>
                        
                        <div class="md:col-span-3 col-span-6">
                            <el-form
                            :label-position="labelPosition"
                            label-width="auto"
                            :model="formLabelAlign"
                            style="max-width: 600px"
                            > <el-form-item label="Country" :label-position="itemLabelPosition">
                                <el-select  size="large" v-model="formLabelAlign.country" placeholder="Select" style="width: 240px">
                                    <el-option
                                    v-for="item in countries"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                    />
                                </el-select>
                            </el-form-item>
                        </el-form>
                        </div>
                        <div class="md:col-span-3 col-span-6">
                            <el-form
                            :label-position="labelPosition"
                            label-width="auto"
                            :model="formLabelAlign"
                            style="max-width: 600px"
                            > <el-form-item label="Region/State" :label-position="itemLabelPosition">
                                <el-select  size="large" v-model="formLabelAlign.region" placeholder="Select" style="width: 240px">
                                    <el-option
                                    v-for="item in Regions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                    />
                                </el-select>
                            </el-form-item>
                        </el-form>
                        </div>
                        <div class="md:col-span-3 col-span-6">
                            <el-form
                            :label-position="labelPosition"
                            label-width="auto"
                            :model="formLabelAlign"
                            style="max-width: 600px"
                            > <el-form-item label="City" :label-position="itemLabelPosition">
                                <el-select size="large" v-model="formLabelAlign.city" placeholder="Select" style="width: 240px">
                                    <el-option
                                    v-for="item in cities"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                    />
                                </el-select>
                            </el-form-item>
                        </el-form>
                        </div>
                        <div class="md:col-span-3 col-span-6">
                            <el-form
                                :label-position="labelPosition"
                                label-width="auto"
                                :model="formLabelAlign"
                                style="max-width: 600px"
                            >
                            <el-form-item label="OTP Code" :label-position="itemLabelPosition">
                                <el-input v-model="formLabelAlign.otp" class="!border-[#E4E7E9] border rounded-[6px] py-1"/>
                                </el-form-item>
                            </el-form>
                        </div>

                        <div class="md:col-span-6 col-span-12">
                            <el-form
                                :label-position="labelPosition"
                                label-width="auto"
                                :model="formLabelAlign"
                                style="max-width: 600px"
                            >
                            <el-form-item label="Governote" :label-position="itemLabelPosition">
                                <el-input v-model="formLabelAlign.governote" class="!border-[#E4E7E9] border rounded-[6px] py-1"/>
                                </el-form-item>
                            </el-form>
                        </div>
                        <div class="md:col-span-6 col-span-12">
                            <el-form
                                :label-position="labelPosition"
                                label-width="auto"
                                :model="formLabelAlign"
                                style="max-width: 600px"
                            >
                            <el-form-item label="Email" :label-position="itemLabelPosition">
                                <el-input v-model="formLabelAlign.email" class="!border-[#E4E7E9] border rounded-[6px] py-1"/>
                                </el-form-item>
                            </el-form>
                        </div>
                        <div class="md:col-span-6 col-span-12">
                            <el-form
                                :label-position="labelPosition"
                                label-width="auto"
                                :model="formLabelAlign"
                                style="max-width: 600px"
                            >
                            <el-form-item label="Receipt Time" :label-position="itemLabelPosition">
                                <el-input v-model="formLabelAlign.receiptTime" class="!border-[#E4E7E9] border rounded-[6px] py-1"/>
                                </el-form-item>
                            </el-form>
                        </div>
                        <div class="md:col-span-6 col-span-12">
                            <el-form
                                :label-position="labelPosition"
                                label-width="auto"
                                :model="formLabelAlign"
                                style="max-width: 600px"
                            >
                            <el-form-item label="Location" :label-position="itemLabelPosition">
                                <el-input v-model="formLabelAlign.location" class="!border-[#E4E7E9] border rounded-[6px] py-1"/>
                                </el-form-item>
                            </el-form>
                        </div>

                        <div class="col-span-12">
                            <div class="border border-[#E4E7E9]] p-5">
                                <h1 class="pb-2">Payment Options</h1>
                                <div class="border border-[#E4E7E9]] flex flex-col  md:flex-row 2xl:gap-3 flex-wrap justify-center items-center p-5">
                                    <label for="myChoice1" class="border-payment">
                                        <div class="flex  flex-col items-center justify-center gap-[8px]">
                                            <span>Cash on Delivery</span>
                                            <SvgCashDelivery />
                                        </div>
                                        <br />
                                        <input type="radio" id="myChoice1" name="myChoice" value="1" />
                                    </label>
                                    <label for="myChoice2" class="border-payment">
                                        <div class="flex flex-col items-center justify-center gap-[8px]">
                                            <span>Instapay</span>
                                            <SvgInstaPay />
                                        </div>
                                        <br />
                                        <input type="radio" id="myChoice2" name="myChoice" value="1" />
                                    </label>
                                    <label for="myChoice3" class="border-payment">
                                        <div class="flex flex-col items-center justify-center gap-[8px]">
                                            <span>Vodafone Cash</span>
                                            <SvgVodafone />
                                        </div>
                                        <br />
                                        <input type="radio" id="myChoice3" name="myChoice" value="1" />
                                    </label>
                                    <label for="myChoice4" class="border-payment">
                                        <div class="flex flex-col items-center justify-center gap-[8px]">
                                            <span>Debit/Credit Card</span>
                                            <SvgVisa />
                                        </div>
                                        <br />
                                        <input type="radio" id="myChoice4" name="myChoice" value="1" />
                                    </label>
                                </div>
                            
                            
                            <div class="grid grid-cols-12 gap-4">
                                <div class=" col-span-12">
                            <el-form
                                :label-position="labelPosition"
                                label-width="auto"
                                :model="formLabelAlign"
                                style="max-width: 600px"
                            >
                            <el-form-item label="Name On Card" :label-position="itemLabelPosition">
                                <el-input v-model="formLabelAlign.nameOnCard" class="!border-[#E4E7E9] border rounded-[6px] py-1"/>
                                </el-form-item>
                            </el-form>
                        </div>
                                <div class="md:col-span-6 col-span-12">
                            <el-form
                                :label-position="labelPosition"
                                label-width="auto"
                                :model="formLabelAlign"
                                style="max-width: 600px"
                            >
                            <el-form-item label="Card Number" :label-position="itemLabelPosition">
                                <el-input v-model="formLabelAlign.cardNumber" class="!border-[#E4E7E9] border rounded-[6px] py-1"/>
                                </el-form-item>
                            </el-form>
                        </div>
                                <div class="md:col-span-6 col-span-12">
                            <el-form
                                :label-position="labelPosition"
                                label-width="auto"
                                :model="formLabelAlign"
                                style="max-width: 600px"
                            >
                            <el-form-item label="gift Card" :label-position="itemLabelPosition">
                                <el-input v-model="formLabelAlign.giftCard" class="!border-[#E4E7E9] border rounded-[6px] py-1"/>
                                </el-form-item>
                            </el-form>
                        </div>
                                <div class="md:col-span-6 col-span-12">
                            <el-form
                                :label-position="labelPosition"
                                label-width="auto"
                                :model="formLabelAlign"
                                style="max-width: 600px"
                            >
                            <el-form-item label="Expire Date" :label-position="itemLabelPosition">
                                <el-date-picker
                                    v-model="formLabelAlign.expireDate"
                                    type="month"
                                    placeholder="DD / YYY"
                                    size="large"
                                    format="MM/YYYY"
                                    value-format="MM/YYYY"
                                    suffix-icon="Calendar"
                                    class="w-full !border-[#E4E7E9] border rounded-[6px] py-1"
                                    />
                                </el-form-item>
                            </el-form>
                        </div>
                        <div class="md:col-span-3 col-span-6">
                            <el-form
                            :label-position="labelPosition"
                            label-width="auto"
                            :model="formLabelAlign"
                            style="max-width: 600px"
                            > <el-form-item label="Country" :label-position="itemLabelPosition">
                                <el-select  size="large" v-model="formLabelAlign.country" placeholder="Select" style="width: 240px">
                                    <el-option
                                    v-for="item in countries"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                    />
                                </el-select>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
                            
                        </div>
                            </div>

                        <div class="col-span-12">
                            <h1 class="font-[500] text-[18px] mb-3">Additional Information</h1>
                            <h6 class="font-[400] text-[14px] mb-3">Order Notes <span class="text-[#191C1F]">(optional)</span></h6>
                            <textarea placeholder="Notes about your order, e.g. special notes for delivery" class="w-full px-5 py-2 !border-[#E4E7E9] border rounded-[6px]"></textarea>
                        </div>
                            </div>
                        </div>
                            
                    </div>

                </div>
            </div>
            <div class="2xl:col-span-4 xl:col-span-3 col-span-12">
                <div class="shadow-[0px_4px_16.1px_0px_rgba(0,0,0,0.07)] px-[24px] flex flex-col gap-[20px] py-[20px]">
                    <h1 class="font-[500] text-[18px]">Order Summery</h1>
                    <div class="flex gap-[16px]">
                        <div class="w-[48px] h-[58px]">
                            <img src="/cream.png" class="h-full w-full" alt="">
                        </div>
                        <div>
                            <h1>Fit Me Matte + Poreless Foundation 30ml</h1>
                            <div class="font-[600] flex gap-1 text-[14px] text-[#5F6C72]">
                                <div class="count">
                                    1 x
                                </div>
                                <span class="text-[#2574B1] font-[600] text-[14px]">$18.99</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-[16px]">
                        <div class="w-[48px] h-[58px]">
                            <img src="/cream.png" class="h-full w-full" alt="">
                        </div>
                        <div>
                            <h1>Fit Me Matte + Poreless Foundation 30ml</h1>
                            <div class="font-[600] flex gap-1 text-[14px] text-[#5F6C72]">
                                <div class="count">
                                    1 x
                                </div>
                                <span class="text-[#2574B1] font-[600] text-[14px]">$18.99</span>
                            </div>
                        </div>
                    </div>
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
                        <hr class="mt-4"/>
                        <div class="flex text-[16px] justify-between">
                            <span class="text-[#191C1F] font-[400]">Total</span>
                            <span class="text-[#191C1F] font-[500]">$60.24 USD</span>
                        </div>
                        <div class="text-white justify-center items-center py-[12px] bg-[#C65C6A] flex gap-[12px] rounded-[6px]">
                            <span>Place order</span>
                            <SvgRightArrowWhite class="rightArw"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'


import type { FormItemProps, FormProps } from 'element-plus'

const labelPosition = ref<FormProps['labelPosition']>('top')
const itemLabelPosition = ref<FormItemProps['labelPosition']>('')
const formLabelAlign = reactive({
  name: '',
  companyName: '',
  mobilePhone: '',
  address:'',
  country:'',
  region:'',
  city:'',
  otp:'',
  email:'',
  governote:'',
  receiptTime:'',
  location:'',
  nameOnCard:'',
  giftCard:'',
  cardNumber:'',
  expireDate:''
})

const value = ref('')

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

<style scoped>
:deep(.el-form-item__label) {
  color: black;
  font-weight:400;
  font-size:14px;
}

label {
  padding: 0 1em;
  text-align: center;
}
</style>
