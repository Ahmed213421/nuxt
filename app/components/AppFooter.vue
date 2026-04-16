<template>
    <div class="footer bg-[#F9F9F9] px-6 py-12 md:p-20">
        <div class="container mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">

                <div class="flex flex-col gap-4 md:items-center md:text-center xl:items-start xl:text-left">
                    <SvgIconHeader />

                    <div>
                        <h1 class="font-semibold text-lg mb-2">Address</h1>
                        <p class="text-sm">
                            Store & Office Jl. Setrasari Kulon III, No. 10-12, Sukarasa,
                            Sukasari, Bandung, West Java, Indonesia 40152
                        </p>
                    </div>

                    <div>
                        <h1 class="font-semibold text-lg mb-2">Office Hour</h1>
                        <p class="text-sm">Monday - Sunday</p>
                        <p class="text-sm">10.00 - 18.00</p>
                    </div>
                </div>

                <div class="flex flex-col gap-4 md:items-center md:text-center xl:items-start xl:text-left">
                    <h1 :class="locale === 'ar'
                        ? 'after:right-0 after:left-auto md:after:left-1/2 md:after:right-auto md:after:-translate-x-1/2 xl:after:right-0 xl:after:left-auto xl:after:translate-x-0'
                        : 'after:left-0 md:after:left-1/2 md:after:-translate-x-1/2 xl:after:left-0 xl:after:translate-x-0'
                        "
                        class="font-semibold text-xl relative after:content-[''] after:absolute after:bottom-[-5px] after:h-[1px] after:w-[60px] after:bg-black">
                        {{ $t('getInTouch') }}
                    </h1>

                    <div>
                        <p class="font-medium">Phone</p>
                        <p class="text-sm">022-20277564</p>
                    </div>

                    <div>
                        <p class="font-medium">Service Center</p>
                        <p class="text-sm">0811-233-8899</p>
                    </div>

                    <div>
                        <p class="font-medium">Customer Service</p>
                        <p class="text-sm">0811-235-9988</p>
                    </div>

                    <div class="flex gap-4 mt-2">
                        <SvgWhatsAapp />
                        <SvgFaceBook />
                        <SvgTwitter />
                        <SvgInstagram />
                    </div>
                </div>

                <div class="flex flex-col gap-4 md:items-center md:text-center xl:items-start xl:text-left">
                    <h1 :class="locale === 'ar'
                        ? 'after:right-0 after:left-auto md:after:left-1/2 md:after:right-auto md:after:-translate-x-1/2 xl:after:right-0 xl:after:left-auto xl:after:translate-x-0'
                        : 'after:left-0 md:after:left-1/2 md:after:-translate-x-1/2 xl:after:left-0 xl:after:translate-x-0'
                        "
                        class="font-semibold text-xl relative after:content-[''] after:absolute after:bottom-[-5px] after:h-[1px] after:w-[60px] after:bg-black">
                        {{ $t('usefulLink') }}
                    </h1>

                    <ul class="text-sm space-y-2">
                        <li><a href="#">{{ $t('warrantyComplaints') }}</a></li>
                        <li><a href="#">{{ $t('orderShipping') }}</a></li>
                        <li><a href="#">{{ $t('trackingOrder') }}</a></li>
                        <li><a href="#">{{ $t('aboutUs') }}</a></li>
                        <li><a href="#">{{ $t('repair') }}</a></li>
                        <li><a href="#">{{ $t('terms') }}</a></li>
                        <li><a href="#">{{ $t('faq') }}</a></li>
                    </ul>
                </div>

                <div class="flex flex-col gap-4 md:items-center md:text-center xl:items-start xl:text-left">
                    <h1 :class="locale === 'ar'
                        ? 'after:right-0 after:left-auto md:after:left-1/2 md:after:right-auto md:after:-translate-x-1/2 xl:after:right-0 xl:after:left-auto xl:after:translate-x-0'
                        : 'after:left-0 md:after:left-1/2 md:after:-translate-x-1/2 xl:after:left-0 xl:after:translate-x-0'
                        "
                        class="font-semibold text-xl relative after:content-[''] after:absolute after:bottom-[-5px] after:h-[1px] after:w-[60px] after:bg-black">
                        {{ $t('campaign') }}
                    </h1>

                    <ul class="text-sm space-y-2">
                        <li><a href="#">{{ $t('mengenalArtiCukup') }}</a></li>
                        <li><a href="#">{{ $t('tellYourDifference') }}</a></li>
                        <li><a href="#">{{ $t('waykambas') }}</a></li>
                        <li><a href="#">{{ $t('rebrand') }}</a></li>
                        <li><a href="#">{{ $t('gallery') }}</a></li>
                        <li><a href="#">{{ $t('singo') }}</a></li>
                        <li><a href="#">{{ $t('rakai') }}</a></li>
                        <li><a href="#">{{ $t('faq') }}</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="mt-10">
            <div
                class="container mx-auto  flex flex-col md:items-center md:text-center xl:flex-row xl:items-center xl:justify-between xl:text-left gap-4">
                <h1 :class="locale === 'ar'
                    ? 'after:right-0 after:left-auto md:after:left-1/2 md:after:right-auto md:after:-translate-x-1/2 xl:after:right-0 xl:after:left-auto xl:after:translate-x-0'
                    : 'after:left-0 md:after:left-1/2 md:after:-translate-x-1/2 xl:after:left-0 xl:after:translate-x-0'
                    "
                    class="font-semibold text-xl relative after:content-[''] after:absolute after:bottom-[-5px] after:h-[1px] after:w-[60px] after:bg-black">
                    {{ $t('paymentMethods') }}
                </h1>

                <div class="flex gap-3">
                    <SvgVisa />
                    <SvgPayPal />
                    <SvgMasterCard />
                    <SvgVodafone />
                    <SvgCash />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { locale } = useI18n()
</script>