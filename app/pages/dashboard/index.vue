<template>
  <div class="container mx-auto">
    <div class="flex flex-col gap-[12px]">
      <h1 class="text-[20px] font-[600] text-[#191C1F]">Hello, Kevin</h1>
      <p class="text-[14px] font-[400] md:w-[423px]">From your account dashboard. you can easily check & view your <a
          href="#" class="text-[#3086C8]">Recent Orders</a> , manage your <a href="#" class="text-[#3086C8]">Shipping
          and Billing Addresses</a> and edit your <a href="#" class="text-[#3086C8]">Password</a> and <a href="#"
          class="text-[#3086C8]">Account Details.</a></p>
    </div>
    <div class="grid grid-cols-8 gap-4 mt-4">
      <div class="col-span-8 md:col-span-8 xl:col-span-5">
        <div class="grid grid-cols-6 items-center gap-4 min-h-[424px]">
          <div class="col-span-6 md:col-span-6 lg:col-span-3">
            <div class="rounded-[4px] h-[312px] border border-[#E4E7E9]">
              <div class="p-4 border-b border-[#E4E7E9]">
                Account Info
              </div>
              <div class="p-4 flex flex-col gap-[12px]">
                <div class="flex gap-[16px]">
                  <div class="w-[48px] h-[48px] flex items-center justify-center">
                    <img src="/avatar1.png" class="w-[48px] h-[48px] rounded-[50%]" alt="">
                  </div>
                  <div class="flex flex-col gap-[4px]">
                    <h1 class="font-[600] text-[16px] text-[#191C1F]">Kevin Gilbert</h1>
                    <span class="text-[14px] text-[#5F6C72] font-[400]">Dhaka - 1207, Bangladesh</span>
                  </div>
                </div>
                <div class="flex flex-col gap-[8px]">
                  <div>
                    <span class="font-[400] text-[14px] text-[#191C1F]">Email:</span> <span
                      class="text-[14px] text-[#5F6C72] font-[400]"> kevin.gilbert@gmail.com</span>
                  </div>
                  <div>
                    <span class="font-[400] text-[14px] text-[#191C1F]">Sec Email:</span> <span
                      class="text-[14px] text-[#5F6C72] font-[400]"> kevin12345@gmail.com</span>
                  </div>
                  <div>
                    <span class="font-[400] text-[14px] text-[#191C1F]">Phone:</span> <span
                      class="text-[14px] text-[#5F6C72] font-[400]"> +1-202-555-0118</span>
                  </div>
                </div>
                <div
                  class="border-[2px] text-[14px] font-[700] text-[#3086C8] w-fit rounded-[6px] border-[#D5EDFD] py-3 px-[24px]">
                  Edit Account
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-6 md:col-span-6 lg:col-span-3">
            <div class="rounded-[4px] h-[312px] border border-[#E4E7E9]">
              <div class="p-4 border-b border-[#E4E7E9]">
                Defult address
              </div>
              <div class="px-4 pb-4 pt-2 flex flex-col">
                <div>
                  <span class="font-[400] text-[14px] text-[#191C1F]">Email:</span> <span
                    class="text-[14px] text-[#5F6C72] font-[400]"> kevin.gilbert@gmail.com</span>
                </div>
                <div>
                  <span class="font-[400] text-[14px] text-[#191C1F]">Kevin Gilbert</span>
                </div>
                <div>
                  <span class="font-[400] text-[14px] text-[#5F6C72]">East Tejturi Bazar, Word No. 04, Road No. 13/x,
                    House no. 1320/C, Flat No. 5D, Dhaka - 1200, Bangladesh</span>
                </div>
                <div>
                  <span class="font-[400] text-[14px] text-[#191C1F]">Sec Email:</span> <span
                    class="text-[14px] text-[#5F6C72] font-[400]"> kevin12345@gmail.com</span>
                </div>
                <div>
                  <span class="font-[400] text-[14px] text-[#191C1F]">Phone:</span> <span
                    class="text-[14px] text-[#5F6C72] font-[400]"> +1-202-555-0118</span>
                </div>
                <div class="flex gap-[8px]">
                  <div
                    class="border-[2px] text-[14px] font-[700] text-[#3086C8] w-fit rounded-[6px] border-[#D5EDFD] py-3 px-[15px]">
                    Add Adress
                  </div>
                  <div
                    class="border-[2px] text-[14px] font-[700] text-[#3086C8] w-fit rounded-[6px] border-[#D5EDFD] py-3 px-[15px]">
                    Edit Adress
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="col-span-8 md:col-span-8 xl:col-span-3 ">
        <div class="flex gap-[24px] flex-col">
          <div class=" h-[88px] bg-[#EAF6FE] rounded-[4px] p-[16px]">
            <div class="flex gap-[12px]">
              <div class="p-[12px] bg-[#FFFFFF]">
                <SvgRocket />
              </div>
              <div class="flex flex-col gap-[4px]">
                <h1 class="font-[600] tetxt-[20px] text-[#191C1F]">20</h1>
                <span class="text-[#475156] text-[14px] font-[400]">Total Points</span>
              </div>
            </div>
          </div>
          <div class=" h-[88px] bg-[#FFDCDC] rounded-[4px] p-[16px]">
            <div class="flex gap-[12px]">
              <div class="p-[12px] bg-[#FFFFFF]">
                <SvgWallet />
              </div>
              <div class="flex flex-col gap-[4px]">
                <h1 class="font-[600] tetxt-[20px] text-[#191C1F]">$120</h1>
                <span class="text-[#475156] text-[14px] font-[400]">Wallet</span>
              </div>
            </div>
          </div>
          <div class=" h-[88px] bg-[#FFF3EB] rounded-[4px] p-[16px]">
            <div class="flex gap-[12px]">
              <div class="p-[12px] bg-[#FFFFFF]">
                <SvgPending />
              </div>
              <div class="flex flex-col gap-[4px]">
                <h1 class="font-[600] tetxt-[20px] text-[#191C1F]">05</h1>
                <span class="text-[#475156] text-[14px] font-[400]">Pending Orders</span>
              </div>
            </div>
          </div>
          <div class=" h-[88px] bg-[#EAF7E9] rounded-[4px] p-[16px]">
            <div class="flex gap-[12px]">
              <div class="p-[12px] bg-[#FFFFFF]">
                <SvgCompletedOrders />
              </div>
              <div class="flex flex-col gap-[4px]">
                <h1 class="font-[600] tetxt-[20px] text-[#191C1F]">149</h1>
                <span class="text-[#475156] text-[14px] font-[400]">Completed Orders</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-8">

      <div class="border-[#E4E7E9] border  rounded-[4px] mt-4">
        <div class="p-4 border-b flex justify-between border-[#E4E7E9]">
          <h1>PAYMENT OPTION</h1>
          <div class="flex items-center gap-[8px] text-[#C65C6A]">
            <span class="font-[600] text-[14px]">Add Card</span>
            <SvgRightArrow />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3">
          <div class="px-4 py-6 w-full">
            <Menu as="div" class="relative inline-block text-left w-full">

              <div class="w-full h-[196px]
           bg-[radial-gradient(circle_at_top,_#1B6392_0%,_#124261_100%)]
            text-white p-[20px] relative">
                <MenuButton :class="locale === 'ar' ? 'left-3' : 'right-3'"
                  class="absolute top-4  p-2 rounded-md hover:bg-white/10 focus:outline-none">
                  <EllipsisHorizontalIcon class="w-5 h-5 text-white fill-white" />
                </MenuButton>


                <!-- Your content -->
                <div class="flex flex-col gap-[20px]">
                  <div class="flex justify-between">
                    <span class="text-[16px] font-[600]">$95, 400.00 USD</span>
                  </div>

                  <div class="flex flex-col gap-[8px]">
                    <span class="text-[11px] font-[500]">Card number</span>
                    <div class="flex gap-[6px] items-center">
                      <span>**** **** **** 3814</span>
                      <SvgCopyText />
                    </div>
                  </div>

                  <div class="flex justify-between items-center">
                    <SvgVisaCard />
                    <span class="text-[14px] font-[500]">Kevin Gilbert</span>
                  </div>
                </div>

                <!-- Dropdown -->
                <MenuItems :class="locale === 'ar' ? 'left-3' : 'right-3'" class="absolute top-12 z-50 w-40 origin-top-right
             rounded-md bg-white shadow-lg ring-1 ring-black/5 text-black">
                  <MenuItem v-slot="{ active }">
                  <button :class="['block w-full px-4 py-2 text-left text-sm', active && 'bg-gray-100']">
                    View profile
                  </button>
                  </MenuItem>

                  <MenuItem v-slot="{ active }">
                  <button :class="['block w-full px-4 py-2 text-left text-sm', active && 'bg-gray-100']">
                    Edit
                  </button>
                  </MenuItem>

                  <MenuItem v-slot="{ active }">
                  <button :class="['block w-full px-4 py-2 text-left text-sm text-red-600', active && 'bg-gray-100']">
                    Logout
                  </button>
                  </MenuItem>
                </MenuItems>
              </div>
            </Menu>

          </div>
          <div class="px-4 py-6 w-full">
            <Menu as="div" class="relative inline-block text-left w-full">

              <div class="w-full h-[196px]
           bg-[radial-gradient(circle_at_top,_#248E1D_0%,_#2DB224_100%)]
            text-white p-[20px] relative">
                <MenuButton :class="locale === 'ar' ? 'left-3' : 'right-3'"
                  class="absolute top-4  p-2 rounded-md hover:bg-white/10 focus:outline-none">
                  <EllipsisHorizontalIcon class="w-5 h-5 text-white fill-white" />
                </MenuButton>


                <!-- Your content -->
                <div class="flex flex-col gap-[20px]">
                  <div class="flex justify-between">
                    <span class="text-[16px] font-[600]">$95, 400.00 USD</span>
                  </div>

                  <div class="flex flex-col gap-[8px]">
                    <span class="text-[11px] font-[500]">Card number</span>
                    <div class="flex gap-[6px] items-center">
                      <span>**** **** **** 3814</span>
                      <SvgCopyText />
                    </div>
                  </div>

                  <div class="flex justify-between items-center">
                    <SvgMasterCard2 />
                    <span class="text-[14px] font-[500]">Kevin Gilbert</span>
                  </div>
                </div>

                <!-- Dropdown -->
                <MenuItems :class="locale === 'ar' ? 'left-3' : 'right-3'" class="absolute top-12 z-50 w-40 origin-top-right
             rounded-md bg-white shadow-lg ring-1 ring-black/5 text-black">
                  <MenuItem v-slot="{ active }">
                  <button :class="['block w-full px-4 py-2 text-left text-sm', active && 'bg-gray-100']">
                    View profile
                  </button>
                  </MenuItem>

                  <MenuItem v-slot="{ active }">
                  <button :class="['block w-full px-4 py-2 text-left text-sm', active && 'bg-gray-100']">
                    Edit
                  </button>
                  </MenuItem>

                  <MenuItem v-slot="{ active }">
                  <button :class="['block w-full px-4 py-2 text-left text-sm text-red-600', active && 'bg-gray-100']">
                    Logout
                  </button>
                  </MenuItem>
                </MenuItems>
              </div>
            </Menu>

          </div>
        </div>
      </div>
      </div>
      <div class="col-span-8">

      <div class="border-[#E4E7E9] border mt-4 rounded-[4px]">
        <div class="p-4  flex justify-between border-b border-[#E4E7E9]">
          <h1>RECENT ORDER</h1>
          <div class="flex items-center gap-[8px] text-[#C65C6A]">
            <span class="font-[600] text-[14px]">View All</span>
            <SvgRightArrow />
          </div>
        </div>

        <div class="w-full">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="orderid" label="ORDER ID" width="100">
              <template #default="{ row }">
                <span class="font-[500] xl:text-[14px] text-[#191C1F]">
                  {{ row.orderid }}
                </span>
              </template>

            </el-table-column>
            <el-table-column prop="status" label="STATUS" width="150">
              <template #default="{ row }">
                <span class="font-[600] xl:text-[14px]" :class="row.status === 'completed'
                  ? 'status-completed text-[#2DB224]'
                  : 'text-[#C65C6A]'">
                  {{ row.status.toUpperCase() }}
                </span>
              </template>
            </el-table-column>
            <el-table-column prop="date" label="DATE" width="100" />
            <el-table-column prop="total" label="TOTAL" width="150" />
            <el-table-column prop="action" label="ACTION" width="150">
              <template #default="{ row }">
                <div class="font-[600] items-center xl:text-[14px] text-[#3086C8] flex gap-[8px]">
                  <span>{{ row.action }}</span>
                  <SvgRightArrowTable class="rightArw" />
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="date" label="" width="150" />

          </el-table>
        </div>


      </div>
      </div>
      <div class="col-span-8">

      <div class="border-[#E4E7E9] border mt-4 rounded-[4px]">
        <div class="p-4  flex justify-between border-b border-[#E4E7E9]">
          <h1>BROWSING HISTORY</h1>
          <div class="flex items-center gap-[8px] text-[#C65C6A]">
            <span class="font-[600] text-[14px]">View All</span>
            <SvgRightArrow />
          </div>
        </div>

        <div class="grid grid-cols-1">
          <div class="px-4 py-6 w-full relative">

            <div class="flex justify-end gap-4 mb-4">
              <button ref="prevEl"
                class="nav-btn z-10 absolute xl:left-[40%] bottom-[15px] lg:left-[38%]  left-2 rounded-[500px] xl:p-[8px] lg:p-[4px] w-[40px] h-[40px] md:w-12 md:h-12 flex justify-center items-center border-2 border-[#C65C6A]">
                <SvgLeftArrow />
              </button>
              <button ref="nextEl"
                class="nav-btn z-10 rotate-180 absolute xl:right-[40%] lg:right-[38%] right-2 bottom-[15px]  rounded-[500px] xl:p-[8px] w-[40px] lg:p-[4px] h-[40px] md:w-12 md:h-12 flex justify-center items-center border-2 border-[#C65C6A]">
                <SvgLeftArrow />
              </button>
            </div>

            <Swiper :modules="[Grid, Navigation, Pagination]" :breakpoints="{
              0: {
                slidesPerView: 2,
                grid: {
                  rows: 1,
                  fill: 'row',
                },
              },
              768: {
                slidesPerView: 3,
                grid: {
                  rows: 1,
                  fill: 'row',
                },
              },
              1024: {
                slidesPerView: 4,
                grid: {
                  rows: 1,
                  fill: 'row',
                },
              },
            }" :pagination="{
            clickable: true,
            dynamicBullets: true
          }" :space-between="5" :navigation="{
            prevEl: prevEl,
            nextEl: nextEl,
          }" @swiper="onSwiper" class="mySwiper relative !pb-16">
              <SwiperSlide v-for="(n, index) in 13" :key="n">
                <div
                  class="rounded-[5px] border border-[0.92px] border-[#E6E6E6]  pb-[15px] gap-[16px] flex flex-col  hover relative MostBuyed">
                  <div
                    class="save bg-[#EA4B48] text-center py-[2.75px] top-[10px] text-[#FFFFFF] absolute left-[11px] px-[7.33px] rounded-[3.67px] w-[73px] font-[400] text-[12.83px]">
                    save <span class="discount-number font-[500]">50% </span>
                  </div>

                  <div class="flex flex-col absolute gap-[10px] top-[10px] right-[11px] iconsHover">
                    <div
                      class="border border-[0.92px] w-[36.65px] h-[36.65px] rounded-[50%] flex justify-center items-center border-[#C65C6A]">
                      <SvgLike />
                    </div>
                    <el-button plain @click="dialogVisible = true"
                      class="border border-[0.92px] !w-[36.65px] !h-[36.65px] !rounded-[50%] !flex !justify-center !items-center !border-[#C65C6A]">


                      <SvgViewItem />
                    </el-button>

                  </div>
                  <div>
                    <img src="/ImgSliderBuyed1.png" class="w-full" alt="">
                  </div>
                  <div class="flex px-1 flex-col xl:flex-row">
                    <div class="flex flex-col  gap-[5.5px]">
                      <span class="title-buyed font-[400] text-[12.83px] break-all xl:w-[100px]">Vitamin C
                        SdddesrumSdddesrum</span>
                      <div class="flex gap-[1.83px]">
                        <span class="price font-[500] text-[#1A1A1A] text-[14.66px]">$14.99</span>
                        <del class="discount font-[400] text-[#999999] text-[14.66px]">$20.99</del>

                      </div>
                      <div class="ratings">
                        <div v-for="review in reviews" :key="review.id">
                          <font-awesome-icon v-for="i in 5" :key="i" icon="fa-solid fa-star" class="text-sm"
                            :class="i <= review.rating ? 'text-[#FF8A00]' : 'text-[#CCCCCC]'" />
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-1 flex-col gap-[5.5px]">
                      <div
                        class="flex justify-center md:gap-[7.33px] gap-[3px] text-[#C65C6A] rounded-[11px] items-center py-[2.75px] pl-[3.58px] px-[4.58px] border border-[#C65C6A] border-[1.83px]">
                        <SvgCart />
                        <a href="#" class=" font-[600] xl:text-[12.83px] lg:text-[12px] md:text-[11px] text-[10px]">{{
                          $t('addToCart') }}</a>
                      </div>
                      <div
                        class="flex md:gap-[7.33px] gap-[3px] text-[#618EB1]  justify-center rounded-[11px] items-center py-[2.75px] pl-[3.58px] px-[4.58px] border border-[#618EB1] border-[1.83px]">
                        <SvgBuyNow />
                        <a href="#" class=" font-[600] text-[10px]  xl:text-[12.83px] lg:text-[12px] md:text-[11px]">{{
                          $t('buyNow') }}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div class="custom-pagination flex justify-center"></div>
          </div>
        </div>


      </div>
    </div>
    </div>

    



  </div>
</template>

<script setup>

import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { EllipsisVerticalIcon } from '@heroicons/vue/24/solid'
import { EllipsisHorizontalIcon } from '@heroicons/vue/24/solid'
const { locale } = useI18n()

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Grid, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


const tableData = [
  {
    orderid: '#96459761',
    status: 'completed',
    date: '2016-05-02',
    action : 'View Details',
    total: '$1,500 (5 Products)',
  },
  {
    orderid: '#71667167',
    action : 'View Details',
    date: '2016-05-02',
    status: 'in progress',
    total: '$80 (11 Products)',
  },
  {
    orderid: '#95214362',
    action : 'View Details',
    status: 'cancelled',
    date: '2016-05-04',
    total: '$160 (3 Products)',
  },
  {
    orderid: '#71667167',
    action : 'View Details',
    status: 'completed',
    date: '2016-05-01',
    total: '$80 ( 1 Products)',
  },
  {
    orderid: '#51746385',
    action : 'View Details',
    status: 'in progress',
    date: '2016-05-08',
    total: '$2,300 (2 Products)',
  },
  {
    orderid: '#51746385',
    status: 'cancelled',
    action : 'View Details',
    date: '2016-05-06',
    total: '$70 (1 Products)',
  },
  {
    orderid: '#673971743',
    action : 'View Details',
    status: 'completed',
    date: '2016-05-07',
    total: '$220 (1 Products)',
  },
]

const prevEl = ref(null)
const nextEl = ref(null)

const onSwiper = (swiper) => {
  swiper.params.navigation.prevEl = prevEl.value
  swiper.params.navigation.nextEl = nextEl.value
  swiper.navigation.init()
  swiper.navigation.update()
}

</script>

<style scoped>
:deep(.el-table th.el-table__cell),:deep(.el-table__header-wrapper) {
  background: #E4E7E9 !important;
}

:deep(.el-table .cell) {
  color: #475156 !important;
  font-weight: 500 !important;
  font-size: 12px !important;
}

.mySwiper :deep(.swiper-pagination-bullet) {
  background: #E4E7E9;
  opacity: 1;
}

.mySwiper :deep(.swiper-pagination-bullet-active) {
  background: #C65C6A;
}

.mySwiper :deep(.swiper-pagination) {
  bottom: 15px;
}
</style>