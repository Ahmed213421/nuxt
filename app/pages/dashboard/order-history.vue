<template>
    <div class="container mx-auto">
        <div class="grid grid-cols-12">
  
            <div class="col-span-12">
    
                <div class="border-[#E4E7E9] border mt-4 rounded-[4px]">
                    <div class="p-4 border-b border-[#E4E7E9]">
                        <h1>ORDER DETAILS</h1>
                    </div>
                    <div class="w-full">
                        <el-table :data="paginatedItems" style="width: 100%">
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
                            <el-table-column prop="reshopping" label="RESHOPPING" width="150">
                                <template #default="{ row }">
                                    <span class="font-[500] inline-block !py-[5px] px-[10px] rounded-[12px] border border-[#B34150] bg-[#FFEFF1] text-[#B34150] xl:text-[12px]">
                                        {{ row.reshopping }}
                                    </span>
                                </template>
                            </el-table-column>

                        </el-table>
                    </div>
                    <div class="flex justify-center">

                        <div class="example-pagination-block  pb-5 mx-auto mt-4">
                            <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :total="tableData.length"
                            layout="prev, pager, next" @current-change="onPageChange" />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<style scoped>
:deep(.el-table th.el-table__cell),:deep(.el-table__header-wrapper) {
  background: #E4E7E9 !important;
}

:deep(.btn-prev),
    :deep(.btn-next) {
    width: 50px;
    height: 50px;
    border-radius: 100px;
    border:1px solid #C65C6A;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right:8px;
}

:deep(.el-table .cell) {
    padding-inline-start: 17px !important;
}


:deep(.el-table .cell) {
  color: #475156 !important;
  font-weight: 500 !important;
  font-size: 12px !important;
}

.example-pagination-block+.example-pagination-block {
    margin-top: 10px;
}

.example-pagination-block .example-demonstration {
    margin-bottom: 16px;
}

:deep(.el-pager .number) {
    border: 1px solid #E4E7E9 !important;
    border-radius:100px;
    width:50px;
    height:50px;
    margin-right:8px;
}

</style>

<script setup>


import { ref, computed } from 'vue'



const currentPage = ref(1)
const pageSize = ref(12) 

    const paginatedItems = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value
    const end = start + pageSize.value
    return tableData.value.slice(start, end)
})
    const tableData = ref([
        {
            name: 'FOUNDATION',
            description: 'Fit Me Matte + Poreless Foundation – Liquid Foundation for Natural Coverage, Long-Lasting, Suitable for Oily Skin',
            price: '$899',
            quantity: 2,
            subTotal: '$899',
            img: '/cream.png',
            reshopping:'reshopping',
        }, {
            name: 'FOUNDATION',
            description: 'Fit Me Matte + Poreless Foundation – Liquid Foundation for Natural Coverage, Long-Lasting, Suitable for Oily Skin',
            price: '$899',
            quantity: 2,
            subTotal: '$899',
            img: '/cream.png',
            reshopping:'reshopping',
        }, {
            name: 'FOUNDATION',
            description: 'Fit Me Matte + Poreless Foundation – Liquid Foundation for Natural Coverage, Long-Lasting, Suitable for Oily Skin',
            price: '$899',
            quantity: 2,
            subTotal: '$899',
            img: '/cream.png',
            reshopping:'reshopping',
        }, {
            name: 'FOUNDATION',
            description: 'Fit Me Matte + Poreless Foundation – Liquid Foundation for Natural Coverage, Long-Lasting, Suitable for Oily Skin',
            price: '$899',
            quantity: 2,
            subTotal: '$899',
            img: '/cream.png',
            reshopping:'reshopping',
        }, {
            name: 'FOUNDATION',
            description: 'Fit Me Matte + Poreless Foundation – Liquid Foundation for Natural Coverage, Long-Lasting, Suitable for Oily Skin',
            price: '$899',
            quantity: 2,
            subTotal: '$899',
            img: '/cream.png',
            reshopping:'reshopping',
        }, {
            name: 'FOUNDATION',
            description: 'Fit Me Matte + Poreless Foundation – Liquid Foundation for Natural Coverage, Long-Lasting, Suitable for Oily Skin',
            price: '$899',
            quantity: 2,
            subTotal: '$899',
            img: '/cream.png',
            reshopping:'reshopping',
        }, {
            name: 'FOUNDATION',
            description: 'Fit Me Matte + Poreless Foundation – Liquid Foundation for Natural Coverage, Long-Lasting, Suitable for Oily Skin',
            price: '$899',
            quantity: 2,
            subTotal: '$899',
            img: '/cream.png',
            reshopping:'reshopping',
        }, {
            name: 'FOUNDATION',
            description: 'Fit Me Matte + Poreless Foundation – Liquid Foundation for Natural Coverage, Long-Lasting, Suitable for Oily Skin',
            price: '$899',
            quantity: 2,
            subTotal: '$899',
            img: '/cream.png',
            reshopping:'reshopping',
        }, {
            name: 'FOUNDATION',
            description: 'Fit Me Matte + Poreless Foundation – Liquid Foundation for Natural Coverage, Long-Lasting, Suitable for Oily Skin',
            price: '$899',
            quantity: 2,
            subTotal: '$899',
            img: '/cream.png',
            reshopping:'reshopping',
        }, {
            name: 'FOUNDATION',
            description: 'Fit Me Matte + Poreless Foundation – Liquid Foundation for Natural Coverage, Long-Lasting, Suitable for Oily Skin',
            price: '$899',
            quantity: 2,
            subTotal: '$899',
            img: '/cream.png',
            reshopping:'reshopping',
        }, {
            name: 'FOUNDATION',
            description: 'Fit Me Matte + Poreless Foundation – Liquid Foundation for Natural Coverage, Long-Lasting, Suitable for Oily Skin',
            price: '$899',
            quantity: 2,
            subTotal: '$899',
            img: '/cream.png',
            reshopping:'reshopping',
        }, {
            name: 'FOUNDATION',
            description: 'Fit Me Matte + Poreless Foundation – Liquid Foundation for Natural Coverage, Long-Lasting, Suitable for Oily Skin',
            price: '$899',
            quantity: 2,
            subTotal: '$899',
            img: '/cream.png',
            reshopping:'reshopping',
        }, {
            name: 'FOUNDATION',
            description: 'Fit Me Matte + Poreless Foundation – Liquid Foundation for Natural Coverage, Long-Lasting, Suitable for Oily Skin',
            price: '$899',
            quantity: 2,
            subTotal: '$899',
            img: '/cream.png',
            reshopping:'reshopping',
        }, {
            name: 'FOUNDATION',
            description: 'Fit Me Matte + Poreless Foundation – Liquid Foundation for Natural Coverage, Long-Lasting, Suitable for Oily Skin',
            price: '$899',
            quantity: 2,
            subTotal: '$899',
            img: '/cream.png',
            reshopping:'reshopping',
        }, {
            name: 'FOUNDATION',
            description: 'Fit Me Matte + Poreless Foundation – Liquid Foundation for Natural Coverage, Long-Lasting, Suitable for Oily Skin',
            price: '$899',
            quantity: 2,
            subTotal: '$899',
            img: '/cream.png',
            reshopping:'reshopping',
        }, {
            name: 'FOUNDATION',
            description: 'Fit Me Matte + Poreless Foundation – Liquid Foundation for Natural Coverage, Long-Lasting, Suitable for Oily Skin',
            price: '$899',
            quantity: 2,
            subTotal: '$899',
            img: '/cream.png',
            reshopping:'reshopping',
        }, {
            name: 'FOUNDATION',
            description: 'Fit Me Matte + Poreless Foundation – Liquid Foundation for Natural Coverage, Long-Lasting, Suitable for Oily Skin',
            price: '$899',
            quantity: 2,
            subTotal: '$899',
            img: '/cream.png',
            reshopping:'reshopping',
        },
    ])
</script>