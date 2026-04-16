<template>
  <div class="container mx-auto">
    <div
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-6 gap-x-8 mt-[60px] shadow-[0_8px_40px_0_rgba(0,38,3,0.08)] p-[40px] rounded-[8px]">
      <div v-for="item in features" :key="item.id" class="flex items-center justify-start gap-[16px]">
        <component :is="item.icon" />
        <div class="flex flex-col gap-[4px]">
          <span class="text-[16px] font-[600] text-[#1A1A1A]">
            {{ item.title }}
          </span>
          <span class="text-[14px] font-[400] text-[#999999]">
            {{ item.description }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>


const { locale } = useI18n()

import IconsFastShipping from '~/components/svg/FastShipping.vue'
import IconsHeadPhones from '~/components/svg/HeadPhones.vue'
import IconsShoppingBag from '~/components/svg/ShoppingBag.vue'
import IconsPackage from '~/components/svg/Package.vue'
const features = [
  {
    id: 1,
    icon: IconsFastShipping,
    title: $t('features.freeShippingTitle'),
    description: $t('features.freeShippingSubtitle'),
  },
  {
    id: 1,
    icon: IconsHeadPhones,
    title: $t('features.supportTitle'),
    description: $t('features.supportSubtitle'),
  },
  {
    id: 1,
    icon: IconsShoppingBag,
    title: $t('features.securePaymentTitle'),
    description: $t('features.securePaymentSubtitle'),
  },
  {
    id: 1,
    icon: IconsPackage,
    title: $t('features.moneyBackTitle'),
    description: $t('features.moneyBackSubtitle'),
  },
];
</script>