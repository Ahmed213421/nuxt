
<template>
    <div class="container mx-auto mb-5 shadow-[0_4px_16.1px_0_rgba(0,0,0,0.07)]">
        <div class="!py-[124px] flex justify-center items-center flex-col">

            <div class=" flex flex-col gap-[24px] items-center justify-center text-center">
                <SvgSuccessCheckout />
                <h5 class="font-[600] text-[24px]">Your order is successfully place</h5>
                <p class="font-[400] text-[14px] text-[#5F6C72]">Pellentesque sed lectus nec tortor tristique accumsan quis<br> dictum risus.
                    Donec volutpat mollis nulla non facilisis.</p>
                </div>
                <div class="mt-3 flex gap-[12px] flex-col md:flex-row">
                    <div class="flex gap-[8px] text-[#C65C6A] py-2 items-center rounded-[6px] px-[24px]  border-[2px] border-[#F0A0A0]">
                        <SvgDashboard12 />
                        <span>GO TO DASHBOARD</span>
                    </div>
                    <div class="flex gap-[8px] justify-center rounded-[6px] py-2 bg-[#C65C6A] text-white px-[24px]  border-[2px] border-[#F0A0A0]">
                        <span>VIEW ORDER</span>
                        <SvgRightArrowWhite class="rightArw" />
                    </div>
                </div>
            
        </div>
        
    </div>
</template>