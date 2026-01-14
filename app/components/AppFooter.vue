<template>
    <div class="footer bg-[#F9F9F9] px-6 py-12 md:p-20">
        <div class="container mx-auto md:px-[70px] xl:px-0 ">
            <div class="grid grid-cols-12  md:gap-[48px] gap-[20px]">
            <!-- <div class="grid grid-cols-1 grid-cols-3 gap-4"> -->
                 <div class="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-3">
                    <div class="flex flex-col gap-[16px]">
                        <SvgIconHeader />
                        <div class="flex flex-col gap-[8px]">
                            <h1 class="font-[500] text-[20px] text-[#000000]">{{$t('address')}}</h1>
                            <p class="font-[400] text-[16px] text-[#000000]">
                                {{ $t('storeOfficeAddress') }}
                            </p>
                        </div>
                        <div class="flex flex-col gap-[8px]">
                            <h1 class="font-[500] text-[20px] text-[#000000]">{{$t('officeHour')}}</h1>
                            <div class="font-[400] text-[16px] text-[#000000]">
                                <div>
                                    <span class="from">{{$t('monday')}}</span> <span>-</span> <span class="to">{{$t('sunday')}}</span>

                                </div>
                                <div>
                                    <span class="from">10.00</span> <span>-</span> <span class="to">18.00</span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 <div class="col-span-12 md:col-span-6 lg:col-span-5 xl:col-span-3" >
                    <div class="flex flex-col gap-[16px]">
                        <h1 :class="locale === 'ar' ? 'after:right-0' :' after:left-0'" class="font-[600] text-[24px] tracking-[0.02em] relative after:absolute after:content-[''] after:left-0 after:bottom-[-5px] after:bg-black after:w-[60px] after:h-[1px]">{{$t('getInTouch')}}</h1>
                        <div class="flex items-start xl:items-center flex-col xl:flex-row justify-between">
                            <div class="font-[500] text-[20px] tracking-[0.02em]">{{$t('phone')}}</div>
                            <div class="font-[500] text-[16px] tracking-[0.03em] text-[#000000]">022-20277564</div>
                        </div>
                        <div class="flex items-start xl:items-center flex-col xl:flex-row justify-between">
                            <div class="font-[500] text-[20px] tracking-[0.02em]">{{$t('serviceCenter')}}</div>
                            <div class="font-[500] text-[16px] tracking-[0.03em] text-[#000000]">0811-233-8899</div>
                        </div>
                        <div class="flex items-start xl:items-center flex-col xl:flex-row justify-between">
                            <div class="font-[500] text-[20px] tracking-[0.02em]">{{$t('customerService')}}</div>
                            <div class="font-[500] text-[16px] tracking-[0.03em] text-[#000000]">0811-235-9988</div>
                        </div>
                        <div class="flex gap-[24px]">
                            <SvgWhatsAapp />
                            <SvgFaceBook />
                            <SvgTwitter />
                        <SvgInstagram />
                        </div>
                    </div>
                </div>
                
                <div class="col-span-12 xl:col-span-3 md:col-span-6" >
                    <div class="flex flex-col gap-[16px]">
                        <h1 :class="locale === 'ar' ? 'after:right-0' :' after:left-0'" class="font-[600] text-[24px] tracking-[0.02em] relative after:absolute after:content-[''] after:left-0 after:bottom-[-5px] after:bg-black after:w-[60px] after:h-[1px]">{{$t('usefulLink')}}</h1>
                        <ul>
                            <li><a href="#" class="fontn-[400] text-[16px]">{{$t('warrantyComplaints')}}</a></li>
                            <li class="mt-1"><a href="#" class="fontn-[400] text-[16px]">{{$t('orderShipping')}}</a></li>
                            <li class="mt-1"><a href="#" class="fontn-[400] text-[16px]">{{$t('trackingOrder')}}</a></li>
                            <li class="mt-1"><a href="#" class="fontn-[400] text-[16px]">{{$t('aboutUs')}}</a></li>
                            <li class="mt-1"><a href="#" class="fontn-[400] text-[16px]">{{$t('repair')}}</a></li>
                            <li class="mt-1"><a href="#" class="fontn-[400] text-[16px]">{{$t('terms')}}</a></li>
                            <li><a href="#" class="fontn-[400] text-[16px]">{{$t('faq')}}</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-3" >
                    <div class="flex flex-col gap-[16px]">
                        <h1 :class="locale === 'ar' ? 'after:right-0' :' after:left-0'" class="font-[600] text-[24px] tracking-[0.02em] relative after:absolute after:content-[''] after:bottom-[-5px] after:bg-black after:w-[60px] after:h-[1px]">{{$t('campaign')}}</h1>
                        <ul>
                            <li class="mt-1"><a href="#" class="fontn-[400] text-[16px]">{{$t('mengenalArtiCukup')}}</a></li>
                            <li class="mt-1"><a href="#" class="fontn-[400] text-[16px]">{{$t('tellYourDifference')}}</a></li>
                            <li class="mt-1"><a href="#" class="fontn-[400] text-[16px]">{{$t('waykambas')}}</a></li>
                            <li class="mt-1"><a href="#" class="fontn-[400] text-[16px]">{{$t('rebrand')}}</a></li>
                            <li class="mt-1"><a href="#" class="fontn-[400] text-[16px]">{{$t('gallery')}}</a></li>
                            <li class="mt-1"><a href="#" class="fontn-[400] text-[16px]">{{$t('singo')}}</a></li>
                            <li class="mt-1"><a href="#" class="fontn-[400] text-[16px]">{{$t('rakai')}}  </a></li>
                            <li><a href="#" class="fontn-[400] text-[16px]">{{$t('faq')}}</a></li>
                        </ul>
                    </div>
                </div> 
            </div>
            <div>
                <div class="flex items-center xl:justify-around justify-between lg:flex-row flex-col gap-4 lg:gap-0 mt-5">
                    <h1 :class="locale === 'ar' ? 'after:right-0' :' after:left-0'" class="font-[600] text-[24px] tracking-[0.02em] relative after:absolute after:content-[''] after:left-0 after:bottom-[-5px] after:bg-black after:w-[60px] after:h-[1px]">{{$t('paymentMethods')}}</h1>
                    <div class="flex gap-[8px]">
                        <a href="#">
                            <SvgVisa />
                        </a>
                        <a href="#">
                            <SvgPayPal />
                        </a>
                        <a href="#">
                            <SvgMasterCard />
                        </a>
                        <a href="#">
                            <SvgVodafone />
                        </a>
                        <a href="#">
                            <SvgCash />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    
const { locale } = useI18n()
</script>