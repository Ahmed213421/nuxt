<template>
    <div class="container mx-auto mb-5 p-5 xl:p-0">
        <div class="grid grid-cols-12 md:gap-10">
            <div class="col-span-12 lg:col-span-6 xl:place-self-center content-center">
                <div class=" xl:w-[536px] w-full gap-[24px] flex flex-col ">
                    <div class="bg-[#FFE7D6] w-fit py-[8px] px-[16px] text-black">
                        HELP CENTER
                    </div>
                    <h1 class="font-[600] lg:text-[32] ">How We Can Help You!</h1>
                    <div class="relative w-full max-w-sm">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z"
                                    stroke="#C65C6A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M16.4434 16.4438L20.9996 21.0001" stroke="#C65C6A" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>

                        <input type="text"
                            class="w-full border border-[1px] border-[#E4E7E9] pl-10 p-[12px] rounded-[6px] leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="Enter your question or keyword">

                        <div
                            class="bg-[#C65C6A] absolute end-2 md:top-1 top-2 text-[14px] font-[400] text-white w-fit rounded-[6px] md:py-[8px] py-[4px] md:px-[24px] px-[10px] text-black">
                            SEARCH
                        </div>


                    </div>
                </div>
            </div>
            <div class="col-span-6">
                <div class="customer-support-image hidden lg:block">

                    
                </div>
            </div>
        </div>

        <div class="text-[32px] font-[600] text-center mt-12">What can we assist you with today?</div>
        <div class="grid grid-cols-12 mt-6 gap-[24px]">
            <div class="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
                <div class="w-full p-[24px] border border-[2px] border-[#C65C6A] flex gap-[16px] items-center">
                    <SvgAssist1 />
                    <span class="font-[500] text-[16px]">Track Order</span>
                </div>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
                <div class="w-full p-[24px] border border-[2px] border-[#C65C6A] flex gap-[16px] items-center">
                    <SvgAssist2 />
                    <span class="font-[500] text-[16px]">Reset Password</span>
                </div>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
                <div class="w-full p-[24px] border border-[2px] border-[#C65C6A] flex gap-[16px] items-center">
                    <SvgAssist3 />
                    <span class="font-[500] text-[16px]">Payment Option</span>
                </div>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
                <div class="w-full p-[24px] border border-[2px] border-[#C65C6A] flex gap-[16px] items-center">
                    <SvgAssist4 />
                    <span class="font-[500] text-[16px]">User & Account</span>
                </div>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
                <div class="w-full p-[24px] border border-[2px] border-[#C65C6A] flex gap-[16px] items-center">
                    <SvgAssist5 />
                    <span class="font-[500] text-[16px]">Wishlist & Compare</span>
                </div>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
                <div class="w-full p-[24px] border border-[2px] border-[#C65C6A] flex gap-[16px] items-center">
                    <SvgAssist6 />
                    <span class="font-[500] text-[16px]">Shipping & Billing</span>
                </div>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
                <div class="w-full p-[24px] border border-[2px] border-[#C65C6A] flex gap-[16px] items-center">
                    <SvgAssist3 />
                    <span class="font-[500] text-[16px]">Shoping Cart & Wallet</span>
                </div>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
                <div class="w-full p-[24px] border border-[2px] border-[#C65C6A] flex gap-[16px] items-center">
                    <SvgAssist7 />
                    <span class="font-[500] text-[16px]">Sell on Clicon</span>
                </div>
            </div>
        </div>

        <div class="text-[24px] font-[600] text-center mt-12">Popular Topics</div>

        <div class="grid grid-cols-12 mt-6">
            <div class="col-span-12  xl:col-span-4 lg:col-span-6">
                <ol class="list-disc list-inside flex flex-col gap-[16px]">
                    <li class="md:text-[16px] text-[14px] font-[400] hover:text-[#B23E4E]">How do I return my item?</li>
                    <li class="md:text-[16px] text-[14px] font-[400] hover:text-[#B23E4E]">What is Clicons Returns Policy?</li>
                    <li class="md:text-[16px] text-[14px] font-[400] hover:text-[#B23E4E]">How long is the refund process?</li>

                </ol>
            </div>
            <div class="col-span-12  xl:col-span-4 lg:col-span-6 mt-6 xl:mt-0">
                <ol class="list-disc list-inside flex flex-col gap-[16px]">
                    <li class="md:text-[16px] text-[14px] font-[400] hover:text-[#B23E4E]">What are the 'Delivery Timelines'?</li>
                    <li class="md:text-[16px] text-[14px] font-[400] hover:text-[#B23E4E]">What is 'Discover Your Daraz Campaign 2022'?</li>
                    <li class="md:text-[16px] text-[14px] font-[400] hover:text-[#B23E4E] ">What is the Voucher & Gift Offer in this Campaign?</li>

                </ol>
            </div>
            <div class="col-span-12  xl:col-span-4 lg:col-span-6 mt-6 xl:mt-0">
                <ol class="list-disc list-inside flex flex-col gap-[16px]">
                    <li class="md:text-[16px] text-[14px] font-[400] hover:text-[#B23E4E]">How to cancel Clicon Order.</li>
                    <li class="md:text-[16px] text-[14px] font-[400] hover:text-[#B23E4E]">Ask the Digital and Device Community</li>
                    <li class="md:text-[16px] text-[14px] font-[400] hover:text-[#B23E4E]">How to change my shop name?</li>

                </ol>
            </div>
        </div>
</div>

        
    

    
</template>