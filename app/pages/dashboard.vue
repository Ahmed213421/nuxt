<script setup>
import { ref, onMounted, onBeforeUnmount,computed } from 'vue'

const mobileOpen = ref(false)
const isMobile = ref(false)

const localePath = useLocalePath()

const route = useRoute()

console.log(route)


definePageMeta({
  middleware: 'auth'
})

const { locale } = useI18n()


import icon1 from '~/components/svg/dashboard1.vue'
import icon2 from '~/components/svg/dashboard2.vue'
import icon3 from '~/components/svg/dashboard3.vue'
import icon4 from '~/components/svg/dashboard4.vue'
import icon5 from '~/components/svg/dashboard5.vue'
import icon6 from '~/components/svg/dashboard6.vue'
import icon7 from '~/components/svg/dashboard7.vue'
import icon8 from '~/components/svg/dashboard8.vue'
import icon9 from '~/components/svg/dashboard9.vue'
import icon10 from '~/components/svg/dashboard10.vue'
import icon11 from '~/components/svg/dashboard11.vue'


const checkScreen = () => {
  isMobile.value = window.innerWidth < 1024

  if (!isMobile.value) mobileOpen.value = false
}

onMounted(() => {
  checkScreen()
  window.addEventListener('resize', checkScreen)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreen)
})




const menuItems = [
  { label: 'Home', to: '/dashboard',icon:icon1 },
  { label: 'Order History', to: '/dashboard/order-history',icon:icon2 },
  { label: 'Track Order', to: '/dashboard/order-details',icon:icon3 },
  { label: 'Shopping Cart', to: '/dashboard/wishlist' ,icon:icon4},
  { label: 'Wishlist', to: '/dashboard/compare' ,icon:icon5},
  { label: 'Compare', to: '/dashboard/addresses' ,icon:icon6},
  { label: 'Cards & Address', to: '/dashboard/history' ,icon:icon7},
  { label: 'Browsing History', to: '/dashboard/history',icon:icon8 },
  { label: 'Setting', to: '/dashboard/history' ,icon:icon9},
  { label: 'Returns', to: '/dashboard/history' ,icon:icon10},
  { label: 'Log-out', to: '/dashboard/history' ,icon:icon11},
]

const isActive = (to) => {
  return route.path === `/${locale.value}${to}` 
}

</script>

<template>
  <div>
    <div class="bg-[#F2F4F5]">
      <div class="container xl:pl-[12%] mx-auto py-5 px-6">

        <el-breadcrumb :separator-icon="ArrowRight" class="flex items-center">
          <el-breadcrumb-item :to="{ path: '/dashboard' }">
            <div class="flex items-center gap-[4px]">
              <SvgHome /> <span>
                {{ $t('Home') }}
              </span>
            </div>
          </el-breadcrumb-item>
          <el-breadcrumb-item>{{ $t('User Account') }}</el-breadcrumb-item>
          <el-breadcrumb-item v-if="route.path == `/${locale}/dashboard/` || route.path == `/${locale}/dashboard` "><span
              :class="route.path === `/${locale}/dashboard/` || `/${locale}/dashboard` ? 'text-[#C65C6A]' : ''">{{
                $t('Dashboard')
              }}</span>
          </el-breadcrumb-item>
          <el-breadcrumb-item v-if="route.path == `/${locale}/dashboard/order-history/` || route.path == `/${locale}/dashboard/order-history` "><span
              :class="route.path === `/${locale}/order-history/` || `/${locale}/order-history` ? 'text-[#C65C6A]' : ''">{{
                $t('Order Hisory')
              }}</span>
          </el-breadcrumb-item>
          <el-breadcrumb-item v-if="route.path == `/${locale}/dashboard/order-details/` || route.path == `/${locale}/dashboard/order-details` "><span
              :class="route.path === `/${locale}/order-details/` || `/${locale}/order-details` ? 'text-[#C65C6A]' : ''">{{
                $t('Order Detatils')
              }}</span>
          </el-breadcrumb-item>
        </el-breadcrumb>
        
      </div>
    </div>

  <div class="container mx-auto px-3">
    <div class="flex align-items-center gap-2 py-3">
      <!-- show bars only on mobile -->
      <Button
        v-if="isMobile"
        icon="pi pi-bars"
        @click="mobileOpen = true"
      />
    </div>
    
    <div class="flex md:gap-[70px]">
      <!-- desktop menu -->
       <aside v-if="!isMobile" class="shrink-0 lg:w-[264px]  border border-[#E4E7E9] rounded-[4px] h-[510px] pt-[16px]">
        <div class="surface-card border-round border-1 surface-border overflow-hidden">
          <ul class="list-none p-0 m-0">
            <li v-for="item in menuItems" :key="item.to"
                class=" py-[10px] border-bottom-1 surface-border flex gap-[12px]"
                :class="[{ activeSideBarHome: isActive(item.to)},locale === 'ar' ? 'pr-[24px]' : 'pl-[24px]']">
                <component :is="item.icon" class="dashboard-svg"/>
              <NuxtLink :to="localePath(item.to)">{{ item.label }}</NuxtLink>
            </li>

          </ul>
        </div>
      </aside>


        <NuxtPage />
    </div>

    <!-- mobile overlay sidebar ONLY mounted on mobile -->
    <Sidebar
      v-if="isMobile"
      v-model:visible="mobileOpen"
      position="left"
      :modal="true"
      :blockScroll="true"
      @hide="mobileOpen = false"
    >
      <div class="surface-card border-round overflow-hidden">
        <div class="p-3 font-semibold bg-primary text-white">Dashboard</div>
        <ul class="list-none p-0 m-0">
          <li class="p-3 border-bottom-1 surface-border">Order History</li>
          <li class="p-3 border-bottom-1 surface-border">Track Order</li>
          <li class="p-3 border-bottom-1 surface-border">Shopping Cart</li>
          <li class="p-3 border-bottom-1 surface-border">Wishlist</li>
          <li class="p-3 border-bottom-1 surface-border">Compare</li>
          <li class="p-3 border-bottom-1 surface-border">Cards & Address</li>
          <li class="p-3 border-bottom-1 surface-border">Browsing History</li>
          <li class="p-3 border-bottom-1 surface-border">Setting</li>
          <li class="p-3 border-bottom-1 surface-border">Returns</li>
          <li class="p-3">Log-out</li>
        </ul>
      </div>
    </Sidebar>
  </div>
  </div>
</template>
