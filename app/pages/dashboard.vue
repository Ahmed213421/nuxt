<script setup>
import { ref, onMounted, onBeforeUnmount,computed } from 'vue'

const mobileOpen = ref(false)
const isMobile = ref(false)

const localePath = useLocalePath()

const router = useRouter()

const route = useRoute()

console.log(route)


definePageMeta({
  middleware: 'auth'
})

const { locale } = useI18n()

const logout = () => {
  localStorage.removeItem('auth')
  window.location.reload()
}

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
  { label: 'Track Order', to: '/dashboard/track-order',icon:icon3 },
  { label: 'Shopping Cart', to: '/dashboard/shopping-card' ,icon:icon4},
  { label: 'Wishlist', to: '/dashboard/wish-list' ,icon:icon5},
  { label: 'Compare', to: '/dashboard/compare' ,icon:icon6},
  { label: 'Cards & Address', to: '/dashboard/address' ,icon:icon7},
  { label: 'Browsing history', to: '/dashboard/error',icon:icon8 },
  { label: 'Settings', to: '/dashboard/settings' ,icon:icon9},
  { label: 'Returns', to: '/dashboard/error' ,icon:icon10},
]

const existingMenuPaths = new Set([
  '/dashboard',
  '/dashboard/order-history',
  '/dashboard/order-details',
  '/dashboard/track-order',
  '/dashboard/shopping-card',
  '/dashboard/wish-list',
  '/dashboard/compare',
  '/dashboard/address',
  '/dashboard/settings',
  '/dashboard/customer-support',
  '/dashboard/faqs',
  '/dashboard/checkout',
  '/dashboard/checkout-success',
  '/dashboard/error',
])

const onMenuNavigate = (to) => {
  mobileOpen.value = false

  const target = existingMenuPaths.has(to) ? to : '/dashboard/error'
  router.push(localePath(target))
}

const isActive = (to) => {
  return route.path === `/${locale.value}${to}` 
}

</script>

<template>
  <div>
    <div class="bg-[#F2F4F5]" v-if="!isMobile && !route.path.includes(`/dashboard/error`)">
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
          
          <el-breadcrumb-item v-if="route.path.includes(`/dashboard/checkout`)">
            {{ $t('Shopping Card') }}

          </el-breadcrumb-item>
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
          <el-breadcrumb-item v-if="route.path.includes(`dashboard/checkout`) "><span
              :class="route.path.includes(`dashboard/checkout`) ? 'text-[#C65C6A]' : ''">{{
                $t('Check Out')
              }}</span>
          </el-breadcrumb-item>
          <el-breadcrumb-item v-if="route.path.includes(`dashboard/wish-list`) "><span
              :class="route.path.includes(`dashboard/wish-list`) ? 'text-[#C65C6A]' : ''">{{
                $t('Wish List')
              }}</span>
          </el-breadcrumb-item>
          <el-breadcrumb-item v-if="route.path.includes(`dashboard/compare`) "><span
              :class="route.path.includes(`dashboard/compare`) ? 'text-[#C65C6A]' : ''">{{
                $t('compare')
              }}</span>
          </el-breadcrumb-item>
          <el-breadcrumb-item v-if="route.path.includes(`dashboard/settings`) "><span
              :class="route.path.includes(`dashboard/settings`) ? 'text-[#C65C6A]' : ''">{{
                $t('Settings')
              }}</span>
          </el-breadcrumb-item>
          <el-breadcrumb-item v-if="route.path.includes(`dashboard/customer-support`) "><span
              :class="route.path.includes(`dashboard/customer-support`) ? 'text-[#C65C6A]' : ''">{{
                $t('Customer Support')
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
       <aside v-if="!isMobile && !route.path.includes(`/dashboard/checkout`) && !route.path.includes(`/dashboard/address`) && !route.path.includes(`/dashboard/error`) && !route.path.includes(`/dashboard/track-order`) && !route.path.includes(`/dashboard/shopping-card`) && !route.path.includes(`/dashboard/customer-support`) && !route.path.includes(`/dashboard/faqs`) && !route.path.includes(`/dashboard/settings`) && !route.path.includes(`/dashboard/wish-list`) && !route.path.includes(`/dashboard/compare`)" class="shrink-0 lg:w-[264px]  border border-[#E4E7E9] rounded-[4px] h-[510px] pt-[16px]">
        <div class="surface-card border-round border-1 surface-border overflow-hidden">
          <ul class="list-none p-0 m-0">
            <li v-for="item in menuItems" :key="item.to"
                class=" py-[10px] border-bottom-1 surface-border flex gap-[12px]"
                :class="[{ activeSideBarHome: isActive(item.to)},locale === 'ar' ? 'pr-[24px]' : 'pl-[24px]']">
                <component :is="item.icon" class="dashboard-svg"/>
              <NuxtLink :to="localePath(item.to)">{{ item.label }}</NuxtLink>
            </li>
            <li class="py-[10px] flex gap-[12px] ps-[24px] cursor-pointer" @click="logout">
              <icon11 class="dashboard-svg"/>
              <span>Log out</span>
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
          <li v-for="item in menuItems" :key="item.to"
              class="p-3 border-bottom-1 surface-border flex items-center gap-[12px] cursor-pointer"
              :class="[{ activeSideBarHome: isActive(item.to)}]"
              @click="onMenuNavigate(item.to)">
              <component :is="item.icon" class="dashboard-svg"/>
              <span>{{ item.label }}</span>
          </li>
          <li class="p-3 flex items-center gap-[12px] cursor-pointer" @click="logout">
            <icon11 class="dashboard-svg"/>
            <span>Log out</span>
          </li>
        </ul>
      </div>
    </Sidebar>
  </div>

  <div class="mt-12 bg-[#F2F4F5] py-[72px] lg:px-[190px]" v-if="route.path.includes(`/dashboard/customer-support`)">
      <div class="container mx-auto  p-5 xl:p-0">

        <div class="mx-auto w-full flex justify-center">

          <div
            class="bg-[#3086C8] text-[14px] font-[400] text-white w-fit rounded-[2px] md:py-[8px] py-[4px] md:px-[16px] px-[10px] ">
            CONTACT US

          </div>
        </div>
        <div class="text-[24px] font-[600] text-center pt-4">Don’t find your answer Contact with us</div>
      
        <div class="grid grid-cols-12  gap-[24px] mt-6">
          <div class="col-span-12 lg:col-span-6">
            <div class="p-[32px] bg-[#FFFFFF]">

              <div class=" flex gap-[24px] flex-col md:flex-row">
                <div class="bg-[#EAF6FE] w-[96px] h-[96px] p-5 flex items-center justify-center">
                  <SvgContact1 />
                </div>
                <div class="flex flex-col gap-[24px]">
                  <div class="flex flex-col gap-[16px]">
                    <h5 class="font-[600] text-[18px]">Call us now</h5>
                    <p class="font-[400] text-[14px] text-[#5F6C72]">we are available online from 9:00 AM to 5:00 PM (GMT95:45) Talk with use now</p>
                    <h5 class="text-[24px] font-[400]">+1-202-555-0126</h5>
                  </div>
                  <div
                    class="bg-[#3086C8] text-[14px] font-[400] flex gap-[8px] text-white w-fit rounded-[2px] md:py-[8px] py-[4px] md:px-[16px] px-[24px] ">
                    <span>Call now</span>
                    <SvgRightArrowWhite class="rightArw" />

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-12 lg:col-span-6">
            <div class="p-[32px] bg-[#FFFFFF]">

              <div class=" flex gap-[24px] flex-col md:flex-row">
                <div class="bg-[#EAF6FE] w-[96px] h-[96px] p-5 flex items-center justify-center">
                  <SvgContact2 />
                </div>
                <div class="flex flex-col gap-[24px]">
                  <div class="flex flex-col gap-[16px]">
                    <h5 class="font-[600] text-[18px]">Chat with us</h5>
                    <p class="font-[400] text-[14px] text-[#5F6C72]">we are available online from 9:00 AM to 5:00 PM (GMT95:45) Talk with use now</p>
                    <h5 class="text-[24px] font-[400]">Support@clicon.com</h5>
                  </div>
                  <div
                    class="bg-[#2DB224] text-[14px] font-[400] flex gap-[8px] text-white w-fit rounded-[2px] md:py-[8px] py-[4px] md:px-[16px] px-[24px] ">
                    <span>Contact Us</span>
                    <SvgRightArrowWhite class="rightArw" />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
