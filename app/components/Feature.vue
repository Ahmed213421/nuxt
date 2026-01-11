<template>
    <div class="container mx-auto">
  <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 md:grid-cols-2 mt-[60px] shadow-[0_8px_40px_0_rgba(0,38,3,0.08)]  p-[40px] rounded-[8px]">
    <div class="flex items-center justify-start md:justify-center xl:justify-start gap-[16px] mt-5 xl:mt-[0px]" :class="[index >= 2 ? 'md:mt-[20px]' : 'lg:mt-0',index == 3 ? 'md:ml-[27px]' : 'xl:ml-[0px]']" v-for="(item,index) in features" :key="item.id">
      <component :is="item.icon" />
      <div class="flex flex-col gap-[3px] md:gap-[8px]">
        <span class="text-[16px] font-[600] text-[#1A1A1A]">{{item.title}}</span>
        <span class="text-[14px] font-[400] text-[#999999]">{{item.description}}</span>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
    
  import IconsFastShipping from '~/components/icons/FastShipping.vue'
  import IconsHeadPhones from '~/components/icons/HeadPhones.vue'
  import IconsShoppingBag from '~/components/icons/ShoppingBag.vue'
  import IconsPackage from '~/components/icons/Package.vue'
const features = [
  {
    id: 1,
    icon: IconsFastShipping,
    title: 'Free Shipping',
    description: 'Free shipping on all your order',
  },
  {
    id: 1,
    icon: IconsHeadPhones,
    title: 'Customer Support 24/7',
    description: 'Instant access to Support',
  },
  {
    id: 1,
    icon: IconsShoppingBag,
    title: '100% Secure Payment',
    description: 'We ensure your money is save',
  },
  {
    id: 1,
    icon: IconsPackage,
    title: 'Money-Back Guarantee',
    description: '30 Days Money-Back Guarantee',
  },
];
</script>