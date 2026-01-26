<template>
    
    <div class="container mx-auto mb-5">
        <div class="grid grid-cols-12">

            <div class="col-span-12">
        <div class="border border-[#E4E7E9] overflow-auto">
            
                    <div class="border-b-[#E4E7E9]  border-b">
                        <h1 class="p-4 font-[500] text-[18x] text-[#191C1F]">WishList </h1>
                        <div class="w-full">
                            <el-table :data="tableData" style="width: 100%;overflow:auto">
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
                                <el-table-column prop="status" label="STATUS" width="150">
                                <template #default="{ row }">
                                    <span class="font-[600] xl:text-[14px]" :class="row.status === 'in stock'
                                    ? 'status-completed text-[#2DB224]'
                                    : 'text-[#C65C6A]'">
                                    {{ row.status.toUpperCase() }}
                                    </span>
                                </template>
                                </el-table-column>
                                <el-table-column label="ACTIONS" width="250">
                                    <template #default="{ row }">
                                        <div class="flex items-center gap-4">
                                            <div class="flex-1 items-center gap-2  px-[24px] py-[12px] flex justify-center  bg-[#C65C6A] text-white rounded-[6px]">
                                                <span class="font-[700] text-[10px] xl:text-[14px] text-nowrap">ADD TO CART</span>
                                                <SvgCart class="text-white"/>
                                            </div>
                                            <SvgDisable />
                                        </div>
                                    </template>
                                </el-table-column>

                            </el-table>
                        </div>
                    </div>
        </div>
    </div>
        </div>
    </div>
</template>

<script setup>
        const { locale } = useI18n()
const tableData = [
    {
        name: 'FOUNDATION',
        description: 'Fit Me Matte + Poreless Foundation – Liquid Foundation for Natural Coverage, Long-Lasting, Suitable for Oily Skin',
        price: '$899',
        quantity: 2,
        subTotal: '$899',
        img: '/cream.png',
        beforePrice: '$1000',
        status: 'in stock'
    },
    {
        name: 'FOUNDATION',
        description: 'Fit Me Matte + Poreless Foundation – Liquid Foundation for Natural Coverage, Long-Lasting, Suitable for Oily Skin',
        price: '$899',
        quantity: 2,
        subTotal: '$899',
        img: '/cream.png',
        status: 'out-of-stock'
    },
]
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
</style>
