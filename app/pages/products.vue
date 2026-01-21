<template>
    <div>
         <ViewDialog v-model="dialogVisible"/>
        <div class="container mx-auto p-5 xl:p-0">
            <div class="flex lg:justify-between">
              <Loader />
                
                <div class="flex flex-wrap gap-4 items-center">
                    <el-select
                    v-model="categoryValue"
                    :placeholder="$t('select.category')"
                    size="large"
                    style="width: 180px"
                    >
                    <el-option
                        v-for="item in categories"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    />
                    </el-select>
                    <el-select
                    v-model="priceValue"
                    :placeholder="$t('select.price')"
                    size="large"
                    style="width: 180px"
                    >
                    <el-option
                        v-for="item in prices"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    />
                    </el-select>
                    <el-select
                    v-model="ratingValue"
                    :placeholder="$t('select.rating')"
                    size="large"
                    style="width: 180px"
                    >
                    <el-option
                        v-for="item in ratings"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    />
                    </el-select>
                </div>
                <div class="flex flex-wrap gap-4 items-center">
                    <el-select
                    v-model="sortingValue"
                    :placeholder="`${$t('select.sortBy')} ${sortingValue}`"
                    size="large"
                    style="width: 180px"
                    
                    >
                    <el-option
                    v-for="item in sortingValues"
                    :key="item.value"
                    :label="$t(item.label)"
                    :value="item.value"
                    />
                  </el-select>
                  <el-select
                  v-model="showValue"
                  :placeholder="`${$t('select.show')} ${showValue}`"
                    size="large"
                    style="width: 180px"
                    >
                    <el-option
                        v-for="item in showValues"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    />
                    </el-select>
                </div>
            
            </div>

        </div>
        <div class="border border-[#F0A0A0] mt-4" v-if="categoryValue || priceValue || ratingValue !== null">
          <div class="container mx-auto lg:px-[300px] px-[100px] py-[16px]">
            <div class="flex md:justify-between flex-col md:flex-row">
              <div class="flex gap-[24px] flex-col md:flex-row items-center">
                <p class="text-[#808080] font-[400] text-[14px] whitespace-nowrap">{{$t('activeFilters')}}:</p>
                <div class="flex gap-[8px] items-center" v-if="categoryValue !== null">
                  <p class="font-[500] text-[#1A1A1A] text-[14px]">{{categoryValue}} </p>
                  <p class="cursor-pointer" @click="categoryValue = null">

                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 2L6.00003 6M6.00003 6L10 2M6.00003 6L2 10M6.00003 6L10 10" stroke="#9A9CAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    
                  </p>
                </div>
                <div class="flex gap-[8px] items-center" v-if="priceValue !== null">
                  <p class="font-[500] text-[#1A1A1A] text-[14px]">{{priceValue}} </p>
                  <p class="cursor-pointer" @click="priceValue = null">

                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 2L6.00003 6M6.00003 6L10 2M6.00003 6L2 10M6.00003 6L10 10" stroke="#9A9CAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    
                  </p>
                </div>
                <div class="flex gap-[8px] items-center" v-if="ratingValue !== null">
                  <p class="font-[500] text-[#1A1A1A] text-[14px]">{{ratingValue}} </p>
                  <p class="cursor-pointer" @click="ratingValue = null">

                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 2L6.00003 6M6.00003 6L10 2M6.00003 6L2 10M6.00003 6L10 10" stroke="#9A9CAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    
                  </p>
                </div>
              </div>
              <div class="text-center mt-3 md:mt-0 font-[400] text-[14px] text-[#808080]">
                <span class="font-[500] text-[#1A1A1A]">2,547</span> {{$t('resultsFound')}}.
              </div>
            </div>
          </div>
        </div>

        <div class="container mx-auto mt-5 p-5 xl:p-0">
          <div class="grid grid-cols-12   gap-4">
            <div class="col-span-12 md:col-span-3 " v-for="(item,index) in paginatedItems" :key="index">
            <div class="px-[10px] rounded-[5px] border border-[0.92px] border-[#E6E6E6] saleProducts pb-[15px] gap-[16px] flex flex-col relative MostBuyed">
                        <div :class="index == 5 ? 'block' : 'hidden'" class="save bg-[#EA4B48] text-center py-[2.75px] top-[10px] text-[#FFFFFF] absolute left-[11px] px-[7.33px] rounded-[3.67px] w-[73px] font-[400] text-[12.83px]">
                            {{$t('save')}} <span class="discount-number font-[500]">50% </span>
                        </div>
                        <div :class="index == 2 ? 'block' : 'hidden'" class="out-of-stock bg-[#1A1A1A] text-center py-[2.75px] top-[10px] text-[#FFFFFF] absolute left-[11px] px-[7.33px] rounded-[3.67px]  font-[400] text-[14px]">
                            {{$t('outOfStock')}}
                        </div> 

                        <div class="flex flex-col absolute gap-[10px] top-[10px] right-[11px] iconsHover">
                          <div class="border border-[0.92px] w-[36.65px] h-[36.65px] rounded-[50%] flex justify-center items-center border-[#C65C6A]">
                              <SvgLike />
                          </div>
                          <el-button plain @click="dialogVisible = true" class="border border-[0.92px] !w-[36.65px] !h-[36.65px] !rounded-[50%] !flex !justify-center !items-center !border-[#C65C6A]">

                            
                              <SvgViewItem />
                          </el-button>
                          
                      </div>
                        <div>
                            <img src="/Productmage.png" alt="">
                        </div>
                        <div class="flex px-1 flex-col xl:flex-row">
                            <div class="flex flex-col  gap-[5.5px]">
                                <span class="title-buyed font-[400] text-[12.83px] break-all xl:w-[100px]">Foundation</span>
                                <div class="flex gap-[1.83px]">
                                    <span class="price font-[500] text-[#1A1A1A] text-[14.66px]">$14.99</span>
                                    <del class="discount font-[400] text-[#999999] text-[14.66px]">$20.99</del>

                                </div>
                                <div class="ratings">
                                <div v-for="review in reviews" :key="review.id">
                                    <font-awesome-icon v-for="i in 5" :key="i"
                                    icon="fa-solid fa-star" class="text-[10px]" :class="i <= review.rating ? 'text-[#FF8A00]' : 'text-[#CCCCCC]'"/>
                                </div>
                                </div>
                            </div>
                            <div class="flex flex-1 flex-col gap-[5.5px] mt-4">
                                <div class="flex justify-center md:gap-[7.33px] gap-[3px] text-[#C65C6A] rounded-[11px] items-center py-[2.75px] pl-[3.58px] px-[4.58px] border border-[#C65C6A] border-[1.83px]">
                                    <SvgCart />
                                    <a href="#" class=" font-[600] xl:text-[12.83px] lg:text-[12px] md:text-[11px] text-[10px]">{{$t('addToCart')}}</a>
                                </div>
                                <div class="flex md:gap-[7.33px] gap-[3px] text-[#618EB1]  justify-center rounded-[11px] items-center py-[2.75px] pl-[3.58px] px-[4.58px] border border-[#618EB1] border-[1.83px]">
                                    <SvgBuyNow />
                                    <a href="#" class=" font-[600] text-[10px]  xl:text-[12.83px] lg:text-[12px] md:text-[11px]">{{$t('buyNow')}}</a>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="example-pagination-block mx-auto mt-4">
                    <el-pagination
                    v-model:current-page="currentPage"
                    v-model:page-size="pageSize"
                    :total="items.length"
                    layout="prev, pager, next"
                    @current-change="onPageChange"
                    />
                  </div>
                </div>
    </div>
</template>

<style scoped>
  :deep(.btn-prev),
    :deep(.btn-next) {
    width: 36px;
    height: 36px;
    border-radius: 500px;
    background: #F2F2F2;
    display: flex;
    justify-content: center;
    align-items: center;
    }

:deep(.el-select__wrapper.el-tooltip__trigger.el-tooltip__trigger){
    border:1px solid #F0A0A0;
    border-radius: 4px;
}
</style>

<script lang="ts" setup>
import { onBeforeMount, computed, ref } from 'vue'


const dialogVisible = ref(false)


const categoryValue = ref(null)
const ratingValue = ref(null)
const priceValue = ref(null)
const showValue = ref(16)
const sortingValue = ref('')

const categories = [
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
const sortingValues = [
  {
    value: 'latest',
    label: 'select.latest',
  },
  {
    value: 'oldest',
    label: 'select.oldest',
  },
]
const showValues = [
  {
    value: '16',
    label: '16',
  },
  {
    value: '32',
    label: '32',
  },
]

// const { open, close } = useLoader()

// onBeforeMount(async () => {
//   open('Fetching data...')
//   try {
//   } finally {
//     close()
//   }
// })

const prices = [
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
const ratings = [
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

const items = ref([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]);
const currentPage = ref(1)
const pageSize = ref(15) 
const reviews = ref([{ id: 1, rating: 4 }])
const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  return items.value.slice(start, end)
})

const onPageChange = (page: number) => {
  currentPage.value = page
}


</script>