<template>
    <div class="container mx-auto">
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

:deep(.el-table .cell) {
  color: #475156 !important;
  font-weight: 500 !important;
  font-size: 12px !important;
}
</style>

<script setup>
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
</script>