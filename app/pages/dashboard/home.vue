<template>
  <div class="container max-auto">
    <div class="flex flex-col gap-[12px]">
      <h1 class="text-[20px] font-[600] text-[#191C1F]">Hello, Kevin</h1>
      <p class="text-[14px] font-[400] w-[423px]">From your account dashboard. you can easily check & view your <a href="#" class="text-[#3086C8]">Recent Orders</a>  , manage your <a href="#" class="text-[#3086C8]">Shipping and Billing Addresses</a> and edit your <a href="#" class="text-[#3086C8]">Password</a> and <a href="#" class="text-[#3086C8]">Account Details.</a></p>
    </div>
    <div class="grid grid-cols-8 gap-4">
      <div class="col-span-8 md:col-span-5">
        <div class="grid grid-cols-6 items-center gap-4 min-h-[424px]">
          <div class="col-span-6 md:col-span-3">
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
                    <span class="font-[400] text-[14px] text-[#191C1F]">Email:</span> <span class="text-[14px] text-[#5F6C72] font-[400]"> kevin.gilbert@gmail.com</span>
                  </div>
                  <div>
                    <span class="font-[400] text-[14px] text-[#191C1F]">Sec Email:</span> <span class="text-[14px] text-[#5F6C72] font-[400]">  kevin12345@gmail.com</span>
                  </div>
                  <div>
                    <span class="font-[400] text-[14px] text-[#191C1F]">Phone:</span> <span class="text-[14px] text-[#5F6C72] font-[400]">  +1-202-555-0118</span>
                  </div>
                </div>
                <div class="border-[2px] text-[14px] font-[700] text-[#3086C8] w-fit rounded-[6px] border-[#D5EDFD] py-3 px-[24px]">
                  Edit Account
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-6 md:col-span-3">
            <div class="rounded-[4px] h-[312px] border border-[#E4E7E9]">
              <div class="p-4 border-b border-[#E4E7E9]">
                Defult address
              </div>
              <div class="p-4 flex flex-col">
                  <div>
                    <span class="font-[400] text-[14px] text-[#191C1F]">Email:</span> <span class="text-[14px] text-[#5F6C72] font-[400]"> kevin.gilbert@gmail.com</span>
                  </div>
                  <div>
                    <span class="font-[400] text-[14px] text-[#191C1F]">Kevin Gilbert</span>
                  </div>
                  <div>
                    <span class="font-[400] text-[14px] text-[#5F6C72]">East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C, Flat No. 5D, Dhaka - 1200, Bangladesh</span>
                  </div>
                  <div>
                    <span class="font-[400] text-[14px] text-[#191C1F]">Sec Email:</span> <span class="text-[14px] text-[#5F6C72] font-[400]">  kevin12345@gmail.com</span>
                  </div>
                  <div>
                    <span class="font-[400] text-[14px] text-[#191C1F]">Phone:</span> <span class="text-[14px] text-[#5F6C72] font-[400]">  +1-202-555-0118</span>
                  </div>
                  <div class="flex gap-[8px]">
                    <div class="border-[2px] text-[14px] font-[700] text-[#3086C8] w-fit rounded-[6px] border-[#D5EDFD] py-3 px-[24px]">
                       Add Adress
                    </div>
                    <div class="border-[2px] text-[14px] font-[700] text-[#3086C8] w-fit rounded-[6px] border-[#D5EDFD] py-3 px-[24px]">
                       Edit Adress
                    </div>
                  </div>
                </div>
              
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-8 md:col-span-3">
        <div class="flex gap-[24px] flex-col">
          <div class="w-[312px] h-[88px] bg-[#EAF6FE] rounded-[4px] p-[16px]">
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
          <div class="w-[312px] h-[88px] bg-[#FFDCDC] rounded-[4px] p-[16px]">
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
          <div class="w-[312px] h-[88px] bg-[#FFF3EB] rounded-[4px] p-[16px]">
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
          <div class="w-[312px] h-[88px] bg-[#EAF7E9] rounded-[4px] p-[16px]">
            <div class="flex gap-[12px]">
              <div class="p-[12px] bg-[#FFFFFF]">
                <SvgCompletedOrders/>
              </div>
              <div class="flex flex-col gap-[4px]">
                <h1 class="font-[600] tetxt-[20px] text-[#191C1F]">149</h1>
                <span class="text-[#475156] text-[14px] font-[400]">Completed Orders</span>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </div>
  </div>
</template>
