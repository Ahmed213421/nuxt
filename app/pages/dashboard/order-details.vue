<template>
    <div class="container mx-auto mb-5">
        <div class="grid grid-cols-12">

            <div class="col-span-12">

                <div class="border-[#E4E7E9] border mt-4 rounded-[4px]">
                    <div class="p-4  flex justify-between border-b border-[#E4E7E9]">
                        <h1>ORDER DETAILS</h1>
                        <div class="flex items-center gap-[8px] text-[#C65C6A]">
                            <span class="font-[600] text-[14px]">LEAVE A RATING</span>
                            <SvgPlus />
                        </div>
                    </div>

                    <div class="p-4 border-b-[#E4E7E9]  border-b">
                        <div class="flex flex-col gap-[24px]">
                            <div class="bg-[#FFF4F5] md:h-[154px] px-6 py-6 md:py-0 border border-[#C65C6A]">
                                <div class="flex justify-between  md:h-[154px] flex-col md:flex-row">
                                    <div class="flex flex-col md:self-center  gap-[8px]">
                                        <h1 class="font-[400] text-[20px] text-[#191C1F]">#96459761</h1>
                                        <div class="md:text-[14px] font-[400] text-[#475156]">
                                            <span>4 Products</span><span> . </span><span>Order Placed in 17 Jan, 2021 at
                                                7:32
                                                PM</span>
                                        </div>
                                    </div>
                                    <div class="md:mt-[20px] lg:pr-[30px]">
                                        <h1 class="font-[600] text-[#9D2938] text-[28px]">$1199.00</h1>
                                        <div class="flex gap-[12px] mt-[20px]">
                                            <div
                                                class="border-[2px] text-[#9D2938] text-[14px] font-[600] rounded-[12px] px-[18px] py-[4px] border-[#C65C6A] flex justify-center items-center">
                                                Cancel Order
                                            </div>
                                            <SvgAlert />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="text-[#191C1F] font-[400] text-[14px]">
                                Order expected arrival <span class="text-black">23 Jan, 2021</span>
                            </div>

                            <div class="md:px-[80px]">
                                <ul class="stepper relative z-0 x">
                                    <li class="done">
                                        <div class="absolute top-[-18px] left-[14px] z-10">
                                            <SvgCheck />
                                        </div>
                                        <div class="item">
                                            <div class="flex mt-5 flex-col gap-12px justify-center items-center">
                                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.2"
                                                        d="M10 27H6C5.73478 27 5.48043 26.8946 5.29289 26.7071C5.10536 26.5196 5 26.2652 5 26V6C5 5.73478 5.10536 5.48043 5.29289 5.29289C5.48043 5.10536 5.73478 5 6 5H10V27Z"
                                                        fill="#2DB324" />
                                                    <path d="M14 14H22" stroke="#2DB324" stroke-width="2"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M14 18H22" stroke="#2DB324" stroke-width="2"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <path
                                                        d="M26 5H6C5.44772 5 5 5.44772 5 6V26C5 26.5523 5.44772 27 6 27H26C26.5523 27 27 26.5523 27 26V6C27 5.44772 26.5523 5 26 5Z"
                                                        stroke="#2DB324" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path d="M10 5V27" stroke="#2DB324" stroke-width="2"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>

                                                <span
                                                    class="text-nowrap md:text-[14px] text-[10px] font-[500] text-[#191C1F]">Order
                                                    Placed</span>


                                            </div>
                                        </div>
                                    </li>
                                    <li class="ready">
                                        <div class="item">
                                            <div class="flex mt-5 flex-col gap-12px justify-center items-center">
                                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.2"
                                                        d="M4.1375 9.3252C4.04693 9.48077 3.99946 9.65768 4 9.8377V22.1627C4.00096 22.3407 4.04884 22.5154 4.13882 22.669C4.2288 22.8226 4.35769 22.9498 4.5125 23.0377L15.5125 29.2252C15.6608 29.3099 15.8292 29.3531 16 29.3502L16.1125 16.0002L4.1375 9.3252Z"
                                                        fill="#C65C6A" />
                                                    <path
                                                        d="M28 22.1627V9.83766C27.999 9.65963 27.9512 9.485 27.8612 9.33137C27.7712 9.17775 27.6423 9.05057 27.4875 8.96266L16.4875 2.77516C16.3393 2.68958 16.1711 2.64453 16 2.64453C15.8289 2.64453 15.6607 2.68958 15.5125 2.77516L4.5125 8.96266C4.35769 9.05057 4.22879 9.17775 4.13882 9.33137C4.04884 9.485 4.00096 9.65963 4 9.83766V22.1627C4.00096 22.3407 4.04884 22.5153 4.13882 22.6689C4.22879 22.8226 4.35769 22.9497 4.5125 23.0377L15.5125 29.2252C15.6607 29.3107 15.8289 29.3558 16 29.3558C16.1711 29.3558 16.3393 29.3107 16.4875 29.2252L27.4875 23.0377C27.6423 22.9497 27.7712 22.8226 27.8612 22.6689C27.9512 22.5153 27.999 22.3407 28 22.1627V22.1627Z"
                                                        stroke="#C65C6A" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path d="M22.125 19.0625V12.5625L10 5.875" stroke="#C65C6A"
                                                        stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path d="M27.8617 9.3252L16.1117 16.0002L4.13672 9.3252"
                                                        stroke="#C65C6A" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path d="M16.1125 16L16 29.35" stroke="#C65C6A" stroke-width="2"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>

                                                <span
                                                    class="text-nowrap md:text-[14px] text-[10px] font-[500] text-[#191C1F]">
                                                    Packaging</span>


                                            </div>
                                        </div>
                                    </li>
                                    <li class="wip">
                                        <div class="item">
                                            Step3
                                        </div>
                                    </li>
                                    <li class="wip">
                                        <div class="item">
                                            Step4
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="p-4 border-b-[#E4E7E9]  border-b">
                        <h1 class="font-[500] text-[18x] text-[#191C1F]">Order Activity</h1>
                        <ul>
                            <li class="!flex gap-[16px]">
                                <div class="bg-[#EAF7E9] w-[48px] h-[48px] flex items-center justify-center">
                                    <SvgActivity1 />
                                </div>
                                <div class="flex flex-col gap-[8px] text-[14px] font-[400]">
                                    <h1 class=" text-[#191C1F]">Your order has been delivered.
                                        Thank you for shopping at Clicon!</h1>
                                    <span class="text-[#77878F]">23 Jan, 2021 at 7:32 PM</span>
                                </div>
                            </li>
                            <li class="!flex gap-[16px]">
                                <div class="bg-[#EAF7E9] w-[48px] h-[48px] flex items-center justify-center">
                                    <SvgActivity2 />
                                </div>
                                <div class="flex flex-col gap-[8px] text-[14px] font-[400]">
                                    <h1 class=" text-[#191C1F]">Our delivery man (John Wick) Has picked-up your order
                                        for delvery. !</h1>
                                    <span class="text-[#77878F]">23 Jan, 2021 at 7:32 PM</span>
                                </div>
                            </li>
                            <li class="!flex gap-[16px]">
                                <div class="bg-[#EAF7E9] w-[48px] h-[48px] flex items-center justify-center">
                                    <SvgActivity3 />
                                </div>
                                <div class="flex flex-col gap-[8px] text-[14px] font-[400]">
                                    <h1 class=" text-[#191C1F]">Your order has reached at last mile hub.</h1>
                                    <span class="text-[#77878F]">23 Jan, 2021 at 7:32 PM</span>
                                </div>
                            </li>
                            <li class="!flex gap-[16px]">
                                <div class="bg-[#EAF7E9] w-[48px] h-[48px] flex items-center justify-center">
                                    <SvgActivity4 />
                                </div>
                                <div class="flex flex-col gap-[8px] text-[14px] font-[400]">
                                    <h1 class=" text-[#191C1F]">Your order on the way to (last mile) hub.</h1>
                                    <span class="text-[#77878F]">23 Jan, 2021 at 7:32 PM</span>
                                </div>
                            </li>
                            <li class="!flex gap-[16px]">
                                <div class="bg-[#EAF7E9] w-[48px] h-[48px] flex items-center justify-center">
                                    <SvgActivity5 />
                                </div>
                                <div class="flex flex-col gap-[8px] text-[14px] font-[400]">
                                    <h1 class=" text-[#191C1F]">Your order is successfully verified.</h1>
                                    <span class="text-[#77878F]">23 Jan, 2021 at 7:32 PM</span>
                                </div>
                            </li>
                            <li class="!flex gap-[16px]">
                                <div class="bg-[#EAF7E9] w-[48px] h-[48px] flex items-center justify-center">
                                    <SvgActivity6 />
                                </div>
                                <div class="flex flex-col gap-[8px] text-[14px] font-[400]">
                                    <h1 class=" text-[#191C1F]">Your order has been confirmed.</h1>
                                    <span class="text-[#77878F]">23 Jan, 2021 at 7:32 PM</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="border-b-[#E4E7E9]  border-b">
                        <h1 class="p-4 font-[500] text-[18x] text-[#191C1F]">Product <span
                                class="tet-[16px] text-gray-500 font-[400]">(02)</span></h1>
                        <div class="w-full">
                            <el-table :data="tableData" style="width: 100%">
                                <el-table-column prop="products" label="PRODUCTS" width="450">
                                    <template #default="{ row }">
                                        <div class="flex gap-[16px] items-center">
                                            <img :src="row.img" class="w-[80x] h-[80px]" alt="">
                                            <div>
                                                <h1 class="font-[600] text-[12px] text-[#C65C6A]">{{ row.name }}</h1>
                                                <p class="font-[400] text-[#191C1F] xl:text-[14px]">{{ row.description
                                                    }}</p>
                                            </div>
                                        </div>
                                    </template>

                                </el-table-column>
                                <el-table-column prop="price" label="PRICE" width="150">
                                    <template #default="{ row }">
                                        <span class="font-[400] text-[#475156] xl:text-[14px]">
                                            {{ row.price }}
                                        </span>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="quantity" label="QUANTITY" width="150">
                                    <template #default="{ row }">
                                        <span class="font-[400] text-[#475156] xl:text-[14px]">
                                            {{ row.quantity }}
                                        </span>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="subTotal" label="SUB-TOTAL" width="150">
                                    <template #default="{ row }">
                                        <span class="font-[400] text-[#475156] xl:text-[14px]">
                                            {{ row.subTotal }}
                                        </span>
                                    </template>
                                </el-table-column>

                            </el-table>
                        </div>
                    </div>
                    <div class="p-4 border-b-[#E4E7E9]  border-b">
                        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                            <div :class="locale === 'ar' ? 'lg:border-l-[#E4E7E9] lg:border-l' : 'lg:border-r-[#E4E7E9] lg:border-r'"
                                class=" border-b-[#E4E7E9]   xl:border-b-0 border-b pb-4 xl:pb-0 ">
                                <h1>Billing Address</h1>
                                <div class="flex flex-col gap-[12px] mt-[24px]">
                                    <h6 class="font-[500] text-[14px] text-[#191C1F]">Kevin Gilbert</h6>
                                    <p class="font-[400] text-[14px] text-[#5F6C72]">
                                        East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C, Flat No. 5D,
                                        Dhaka - 1200, Bangladesh
                                    </p>
                                    <div>
                                        <span class="font-[400] text-[14px] text-[#191C1F]">Phone Number:</span> <span
                                            class="text-[14px] text-[#5F6C72] font-[400]"> +1-202-555-0118</span>
                                    </div>
                                    <div>
                                        <span class="font-[400] text-[14px] text-[#191C1F]">Email:</span> <span
                                            class="text-[14px] text-[#5F6C72] font-[400]">
                                            kevin.gilbert@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                            <div :class="locale === 'ar' ? 'xl:border-l-[#E4E7E9]  xl:border-l lg:pr-4':'xl:border-r-[#E4E7E9] lg:pl-4 xl:border-r'"
                                class=" border-b-[#E4E7E9] pb-4    xl:border-b-0 border-b mt-6 lg:mt-0  xl:pb-0">
                                <h1>Billing Address</h1>
                                <div class="flex flex-col gap-[12px] mt-[24px]">
                                    <h6 class="font-[500] text-[14px] text-[#191C1F]">Kevin Gilbert</h6>
                                    <p class="font-[400] text-[14px] text-[#5F6C72]">
                                        East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C, Flat No. 5D,
                                        Dhaka - 1200, Bangladesh
                                    </p>
                                    <div>
                                        <span class="font-[400] text-[14px] text-[#191C1F]">Phone Number:</span> <span
                                            class="text-[14px] text-[#5F6C72] font-[400]"> +1-202-555-0118</span>
                                    </div>
                                    <div>
                                        <span class="font-[400] text-[14px] text-[#191C1F]">Email:</span> <span
                                            class="text-[14px] text-[#5F6C72] font-[400]">
                                            kevin.gilbert@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                            <div :class="locale === 'ar' ? 'xl:pr-4' : 'xl:pl-4'" class=" mt-6 xl:mt-0">
                                <h1>Billing Address</h1>
                                <div class="flex flex-col gap-[12px] mt-[24px]">
                                    <h6 class="font-[500] text-[14px] text-[#191C1F]">Kevin Gilbert</h6>
                                    <p class="font-[400] text-[14px] text-[#5F6C72]">
                                        East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C, Flat No. 5D,
                                        Dhaka - 1200, Bangladesh
                                    </p>
                                    <div>
                                        <span class="font-[400] text-[14px] text-[#191C1F]">Phone Number:</span> <span
                                            class="text-[14px] text-[#5F6C72] font-[400]"> +1-202-555-0118</span>
                                    </div>
                                    <div>
                                        <span class="font-[400] text-[14px] text-[#191C1F]">Email:</span> <span
                                            class="text-[14px] text-[#5F6C72] font-[400]">
                                            kevin.gilbert@gmail.com</span>
                                    </div>
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
.stepper {
    width: 100%;
    display: flex;
}

li {
    display: inline-block;
    position: relative;
    margin-top: 32px;
}

li+li {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
}

html[dir="ltr"] li+li::before {
    display: block;
    position: absolute;
    left: -10%;
    top: -16px;
    content: "";
    width: 100%;
    height: 8px;
}

html[dir="rtl"] li+li::before {
    display: block;
    position: absolute;
    right: -10%;
    top: -16px;
    content: "";
    width: 100%;
    height: 8px;
}

html[dir="ltr"] .item {
    position: relative;
    margin-left: auto;
    margin-right: 0;
    padding-top: 8px;
    z-index: 1;
    width: 40px;

    text-align: center;
}
html[dir="rtl"] .item {
    position: relative;
    margin-right: auto;
    margin-left: 0;
    padding-top: 8px;
    z-index: 1;
    width: 40px;

    text-align: center;
}

 .item::before {
    width: 24px;
    height: 24px;
    position: absolute;
    content: "";
    top: -24px;
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 50%;
    box-sizing: border-box;
}

:deep(.el-table .cell) {
    padding-inline-start: 17px !important;
}

.ready::before {
    background-color: #C65C6A;
}

.ready>.item::before {
    border: solid 2px white;
    background-color: #C65C6A;
}

.wip::before {
    background-color: #F0A0A0;
}

.wip>.item::before {
    border: solid 2px #C65C6A;
    background-color: white;
}

.done::before {
    background-color: #C65C6A;
}

.done>.item::before {
    background-color: #C65C6A;
}


ul,
li {
    padding: 0;
    list-style: none;
}

:deep(.el-table th.el-table__cell),
:deep(.el-table__header-wrapper) {
    background: #E4E7E9 !important;
}

:deep(.el-table .cell) {
    color: #475156 !important;
    font-weight: 500 !important;
    font-size: 12px !important;
}
</style>

<script setup>
    const { locale } = useI18n()
const tableData = [
    {
        name: 'FOUNDATION',
        description: 'Fit Me Matte + Poreless Foundation – Liquid Foundation for Natural Coverage, Long-Lasting, Suitable for Oily Skin',
        price: '$899',
        quantity: 2,
        subTotal: '$899',
        img: '/cream.png'
    },
    {
        name: 'FOUNDATION',
        description: 'Fit Me Matte + Poreless Foundation – Liquid Foundation for Natural Coverage, Long-Lasting, Suitable for Oily Skin',
        price: '$899',
        quantity: 2,
        subTotal: '$899',
        img: '/cream.png'
    },
]
</script>