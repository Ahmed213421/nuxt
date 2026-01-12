<template>
    <div class="container mx-auto p-5">
        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12 md:col-span-5 lg:col-span-4 xl:col-span-3">
                <el-collapse v-model="activeNames">
                    <el-collapse-item :name="!isMobile ? '5' : ''">
                        <template #title>
                            <span class="font-[500] text-[20px]">Filter</span>
                        </template>
                <div class="demo-collapse">
                    <el-collapse v-model="activeNames">
                    <el-collapse-item name="1">
                        <template #title>
                            <span class="font-[500] text-[20px]">All Categories</span>
                        </template>
                        <div class="flex gap-[5px] items-center">
                            <el-checkbox v-model="checked1" label="Option 2" size="large" />
                            <span class="text-[#808080] font-[400] text-[14px]">(134)</span>
                        </div>
                        <div class="flex gap-[5px] items-center">
                            <el-checkbox v-model="checked2" label="Option 2" size="large" />
                            <span class="text-[#808080] font-[400] text-[14px]">(134)</span>
                        </div >
                        <div class="flex gap-[5px] items-center">
                            <el-checkbox v-model="checked3" label="Option 2" size="large" />
                            <span class="text-[#808080] font-[400] text-[14px]">(134)</span>
                        </div >
                        <div class="flex gap-[5px] items-center">
                            <el-checkbox v-model="checked4" label="Option 2" size="large" />
                            <span class="text-[#808080] font-[400] text-[14px]">(134)</span>
                        </div >
                        <div class="flex gap-[5px] items-center">
                            <el-checkbox v-model="checked5" label="Option 2" size="large" />
                            <span class="text-[#808080] font-[400] text-[14px]">(134)</span>
                        </div >
                        <div class="flex gap-[5px] items-center">
                            <el-checkbox v-model="checked6" label="Option 2" size="large" />
                            <span class="text-[#808080] font-[400] text-[14px]">(134)</span>
                        </div >
                        <div class="flex gap-[5px] items-center">
                            <el-checkbox v-model="checked7" label="Option 2" size="large" />
                            <span class="text-[#808080] font-[400] text-[14px]">(134)</span>
                        </div>
                        </el-collapse-item>
                    </el-collapse>
                    <el-collapse v-model="activeNames">
                    <el-collapse-item name="2">
                        <template #title>
                            <span class="font-[500] text-[20px]">Price</span>
                        </template>
                        <div class="slider-demo-block pt-5">
                                <el-slider v-model="value" range  show-stops :max="10" />
                            </div>
                            <div class="pb-5">
                                <span class="font-[400] text-[14px] text-[#1A1A1A]">Price:</span>  <span>{{ value[0] }} - {{ value[1] }}</span>
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                    <el-collapse v-model="activeNames">
                    <el-collapse-item name="3">
                        <template #title>
                            <span class="font-[500] text-[20px]">Rating</span>
                        </template>
                        <div class="flex gap-[8px] items-center">
                            <el-checkbox v-model="fiveStars"  size="large" />
                            <div class="gap-[2px] flex items-center">
                                <font-awesome-icon v-for="i in 5" :key="i"
                                icon="fa-solid fa-star" class="text-[10px]" :class="i <= 5 ? 'text-[#FF8A00]' : 'text-[#CCCCCC]'"/>
                                <span>5.0</span>
                            </div>
                        </div>
                        <div class="flex gap-[8px] items-center">
                            <el-checkbox v-model="fourStars"  size="large" />
                            <div class="gap-[2px] flex items-center">
                                <font-awesome-icon v-for="i in 5" :key="i"
                                icon="fa-solid fa-star" class="text-[10px]" :class="i <= 4 ? 'text-[#FF8A00]' : 'text-[#CCCCCC]'"/>
                                <span>4.0 & up</span>
                            </div>
                        </div>
                        <div class="flex gap-[8px] items-center">
                            <el-checkbox v-model="threeStars"  size="large" />
                            <div class="gap-[2px] flex items-center">
                                <font-awesome-icon v-for="i in 5" :key="i"
                                icon="fa-solid fa-star" class="text-[10px]" :class="i <= 3 ? 'text-[#FF8A00]' : 'text-[#CCCCCC]'"/>
                                <span>3.0 & up</span>
                            </div>
                        </div>
                        <div class="flex gap-[8px] items-center">
                            <el-checkbox v-model="twoStars"  size="large" />
                            <div class="gap-[2px] flex items-center">
                                <font-awesome-icon v-for="i in 5" :key="i"
                                icon="fa-solid fa-star" class="text-[10px]" :class="i <= 2 ? 'text-[#FF8A00]' : 'text-[#CCCCCC]'"/>
                                <span>2.0 & up</span>
                            </div>
                        </div>
                        <div class="flex gap-[8px] items-center">
                            <el-checkbox v-model="oneStar"  size="large" />
                            <div class="gap-[2px] flex items-center">
                                <font-awesome-icon v-for="i in 5" :key="i"
                                icon="fa-solid fa-star" class="text-[10px]" :class="i <= 1 ? 'text-[#FF8A00]' : 'text-[#CCCCCC]'"/>
                                <span>1.0 & up</span>
                            </div>
                        </div>
                        </el-collapse-item>
                    </el-collapse>
                    <el-collapse v-model="activeNames">
                    <el-collapse-item name="4">
                        <template #title>
                            <span class="font-[500] text-[20px]">Popular Tag</span>
                        </template>
                        <div class="flex flex-wrap gap-[8px] items-center mt-3">
                            <a href="#" class="text-sm bg-[#F2F2F2] text-[14px] font-[400] text-[#1A1A1A] rounded-full py-[6px] px-[16px]">
                            ترطيب
                            </a>
                            <a href="#" class="text-sm bg-[#C65C6A] text-[#F2F2F2] text-[14px] font-[400] rounded-full py-[6px] px-[16px]">
                                تجميل
                            </a>
                            <a href="#" class="text-sm bg-[#F2F2F2] text-[14px] font-[400] text-[#1A1A1A] rounded-full py-[6px] px-[16px]">
                            للبشره الحساسه
                            </a>
                            <a href="#" class="text-sm bg-[#F2F2F2] text-[14px] font-[400] text-[#1A1A1A] rounded-full py-[6px] px-[16px]">
                                طبيعي
                            </a>
                            <a href="#" class="text-sm bg-[#F2F2F2] text-[14px] font-[400] text-[#1A1A1A] rounded-full py-[6px] px-[16px]">
                                توحيد لون البشرة
                            </a>
                            <a href="#" class="text-sm bg-[#F2F2F2] text-[14px] font-[400] text-[#1A1A1A] rounded-full py-[6px] px-[16px]">
                                تفتيح
                            </a>
                            <a href="#" class="text-sm bg-[#F2F2F2] text-[14px] font-[400] text-[#1A1A1A] rounded-full py-[6px] px-[16px]">
                                إصلاح البشرة التالفة
                            </a>
                            <a href="#" class="text-sm bg-[#F2F2F2] text-[14px] font-[400] text-[#1A1A1A] rounded-full py-[6px] px-[16px]">
                                شد البشرة
                            </a>
                            <a href="#" class="text-sm bg-[#F2F2F2] text-[14px] font-[400] text-[#1A1A1A] rounded-full py-[6px] px-[16px]">
                                بشرة صحية
                            </a>
                            <a href="#" class="text-sm bg-[#F2F2F2] text-[14px] font-[400] text-[#1A1A1A] rounded-full py-[6px] px-[16px]">
                                طويل الثبات
                            </a>
                            <a href="#" class="text-sm bg-[#F2F2F2] text-[14px] font-[400] text-[#1A1A1A] rounded-full py-[6px] px-[16px]">
                                كونسيلر
                            </a>
                            <a href="#" class="text-sm bg-[#F2F2F2] text-[14px] font-[400] text-[#1A1A1A] rounded-full py-[6px] px-[16px]">
                                تغطية خفيفة
                            </a>
                        </div>
                        </el-collapse-item>
                    </el-collapse>
                       
                        <div class="w-full h-[295px] md:pt-4 !bg-cover flex items-center justify-center md:block" style="background: url('/productShopNow.jpg');">
                            <div class="text-center">
                                <div>
                                    <span class="font-[600] text-[32px] text-orange-500">79%</span>
                                    <span class="font-[400] text-[24px] text-[#1A1A1A]">Discount</span>
                                </div>
                                <div class="font-[400] text-[16px] text-[#4D4D4D]">on your first order</div>
                                <div class="flex items-center justify-center gap-[12px]">
                                    <span class="font-[600] text-[#000000] text-[16px]">Shop Now</span>
                                    <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.75 6.7749H0.75" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9.7002 0.75L15.7502 6.774L9.7002 12.799" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>

                                </div>
                            </div>
                        </div>

                        <div class="flex flex-col gap-[12px] pt-[20px]">
                            <h1 class="font-[500] text-[20px] text-[#1A1A1A]">Sale Products</h1>
                            <div class="flex flex-col gap-[16px]">
                                <div class="flex border border-[#E6E6E6] rounded-[6px]">
                                    <div class="p-5 w-[112px]">
                                        <img src="/cream.png" class="w-[98px] h-[98px]" alt="">
                                    </div>
                                    <div class="flex flex-col gap-[4px]  justify-center">
                                        <span class="text-[#4D4D4D] font-[400] text-[14px]">Foundation</span>
                                        <div class=" text-[16px]">
                                            <span class="text-[#1A1A1A] font-[#1A1A1A]">$32.00</span>
                                            <del class="font-[400] text-[#999999] ml-1">$20.99</del>
                                        </div>
                                        <div class="gap-[2px] flex items-center">
                                            <font-awesome-icon v-for="i in 5" :key="i"
                                            icon="fa-solid fa-star" class="text-[8px]" :class="i <= 4 ? 'text-[#FF8A00]' : 'text-[#CCCCCC]'"/>
                                            
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="flex border border-[#C65C6A] rounded-[6px]">
                                    <div class="p-5 w-[112px]">
                                        <img src="/stick.png" class="w-[98px] h-[98px]" alt="">
                                    </div>
                                    <div class="flex flex-col gap-[4px]  justify-center">
                                        <span class="text-[#4D4D4D] font-[400] text-[14px]">Foundation</span>
                                        <div class=" text-[16px]">
                                            <span class="text-[#1A1A1A] font-[#1A1A1A]">$24.00</span>
                                            <del class="font-[400] text-[#999999] ml-1">$20.99</del>
                                        </div>
                                        <div class="gap-[2px] flex items-center">
                                            <font-awesome-icon v-for="i in 5" :key="i"
                                            icon="fa-solid fa-star" class="text-[8px]" :class="i <= 4 ? 'text-[#FF8A00]' : 'text-[#CCCCCC]'"/>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="flex border border-[#E6E6E6] rounded-[6px]">
                                    <div class="p-5 w-[112px]">
                                        <img src="/cream2.png" class="w-[98px] h-[98px]" alt="">
                                    </div>
                                    <div class="flex flex-col gap-[4px]  justify-center">
                                        <span class="text-[#4D4D4D] font-[400] text-[14px]">Foundation</span>
                                        <div class=" text-[16px]">
                                            <span class="text-[#1A1A1A] font-[#1A1A1A]">$32.00</span>
                                            <del class="font-[400] text-[#999999] ml-1">$20.99</del>
                                        </div>
                                        <div class="gap-[2px] flex items-center">
                                            <font-awesome-icon v-for="i in 5" :key="i"
                                            icon="fa-solid fa-star" class="text-[8px]" :class="i <= 4 ? 'text-[#FF8A00]' : 'text-[#CCCCCC]'"/>
                                            
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                </div>
                </el-collapse-item>
                </el-collapse>
            </div>
            <div class="col-span-12 md:col-span-7 lg:col-span-8">
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div v-for="(item,index) in paginatedItems" :key="index" class="px-[10px] rounded-[5px] border border-[0.92px] border-[#E6E6E6]  pb-[15px] gap-[16px] flex flex-col relative MostBuyed" :class="index == 2 ? 'border !border-[#CF6F7A]' : ''">
                        <div :class="index == 5 ? 'block' : 'hidden'" class="save bg-[#EA4B48] text-center py-[2.75px] top-[10px] text-[#FFFFFF] absolute left-[11px] px-[7.33px] rounded-[3.67px] w-[73px] font-[400] text-[12.83px]">
                            save <span class="discount-number font-[500]">50% </span>
                        </div>
                        <div :class="index == 2 ? 'block' : 'hidden'" class="out-of-stock bg-[#1A1A1A] text-center py-[2.75px] top-[10px] text-[#FFFFFF] absolute left-[11px] px-[7.33px] rounded-[3.67px]  font-[400] text-[14px]">
                            Out Of Stock 
                        </div> 

                        <div class="flex flex-col absolute gap-[10px] top-[10px] right-[11px] iconsHover">
                            <div class="border border-[0.92px] w-[36.65px] h-[36.65px] rounded-[50%] flex justify-center items-center border-[#C65C6A]">
                                <IconsLike />
                            </div>
                            <div class="border border-[0.92px] w-[36.65px] h-[36.65px] rounded-[50%] flex justify-center items-center border-[#C65C6A]">
                                <IconsViewItem />
                            </div>
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
                                    <IconsCart />
                                    <a href="#" class=" font-[600] xl:text-[12.83px] lg:text-[12px] md:text-[11px] text-[10px]">Add To Cart</a>
                                </div>
                                <div class="flex md:gap-[7.33px] gap-[3px] text-[#618EB1]  justify-center rounded-[11px] items-center py-[2.75px] pl-[3.58px] px-[4.58px] border border-[#618EB1] border-[1.83px]">
                                    <IconsBuyNow />
                                    <a href="#" class=" font-[600] text-[10px]  xl:text-[12.83px] lg:text-[12px] md:text-[11px]">Buy Now</a>
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
    </div>
</template>
<script setup lang="ts">

import { ref,computed,onMounted } from 'vue'

import type { CollapseModelValue } from 'element-plus'
const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(false)
const checked4 = ref(false)
const checked5 = ref(false)
const checked6 = ref(false)
const checked7 = ref(false)
const fiveStars = ref(false)
const fourStars = ref(false)
const threeStars = ref(false)
const twoStars = ref(false)
const oneStar = ref(false)

const items = ref([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]);

const reviews = ref([{ id: 1, rating: 4 }])

const currentPage = ref(1)
const pageSize = ref(15) 

// Items to show on current page
const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  return items.value.slice(start, end)
})

const onPageChange = (page: number) => {
  currentPage.value = page
}

const value = ref([4, 8])


const activeNames = ref(['1','2','3','4','5','6'])
// const handleChange = (val:CollapseModelValue) => {
//   console.log(val)
// }

const isMobile = ref(false)
const minWidth = 768

const checkDevice = () => {
  isMobile.value =
    window.innerWidth < minWidth || screen.width < minWidth
}

onMounted(() => {
  checkDevice()
  window.addEventListener('resize', checkDevice)
})


</script>
<style scoped>
.example-pagination-block + .example-pagination-block {
  margin-top: 10px;
}
.example-pagination-block .example-demonstration {
  margin-bottom: 16px;
}

.slider-demo-block {
  max-width: 350px;
  display: flex;
  align-items: center;
}
.slider-demo-block .el-slider {
  margin-top: 0;
  margin-left: 12px;
}

:deep(.el-icon) {
    display: flex !important;
}

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

:deep(.el-slider__bar) {
  background-color: #C65C6A; 
}

:deep(.el-slider__runway) {
  background-color: #dcdfe6; 
}

:deep(.el-slider__button) {
    border-color: #C65C6A;
}
:deep(.is-active.number) {
    color:#FFFFFF;
    background: #C65C6A;
    width: 36px;
    height: 36px;
    border-radius: 130px;
}

:deep(.el-checkbox__input.is-checked .el-checkbox__inner){
    background-color: #C65C6A !important;
    border-color: #C65C6A !important;
}

</style>