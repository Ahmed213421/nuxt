<template>
  <nav class="relative">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <!-- Mobile menu button -->
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button
            type="button"
            class="relative inline-flex items-center justify-center rounded-md p-2"
            :aria-expanded="mobileOpen"
            aria-controls="mobile-menu"
            @click="mobileOpen = !mobileOpen"
          >
            <span class="sr-only">Open main menu</span>

            <!-- hamburger -->
            <svg v-show="!mobileOpen" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="size-6">
              <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <!-- X -->
            <svg v-show="mobileOpen" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="size-6">
              <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>

        <!-- Desktop nav -->
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start md:justify-center">
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex lg:gap-[38px] text-sm">
                <NuxtLink to="/" class="w-[80px] text-sm font-medium text-black">
                <span :class="route.path === '/en' || route.path === '/ar' ? ' border-b-2 border-[#CF6F7A]' : ''">{{$t('home')}}</span>
              </NuxtLink>
                <NuxtLink :to="localePath('/products')" class="w-[80px] text-sm font-medium text-black">
                <span :class="route.path === '/en/products' || route.path === '/ar/products' ? ' border-b-2 border-[#CF6F7A]' : ''">{{$t('products')}}</span>
              </NuxtLink>
              
              <a class="w-[80px] text-sm font-medium text-black" href="#"><span>{{$t('offers')}}</span></a>
              <a class="w-[80px] text-sm font-medium text-black" href="#"><span>{{$t('aboutUs')}}</span></a>
              <a class="w-[80px] text-sm font-medium text-black" href="#"><span>{{$t('categories')}}</span></a>
              <a class="w-[80px] text-sm font-medium text-black" href="#"><span>{{$t('contactUs')}}</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div id="mobile-menu" class="sm:hidden" v-show="mobileOpen">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <NuxtLink to="/" class="block rounded-md px-3 py-2 text-base font-medium text-black " @click="mobileOpen = false">
                <span :class="route.path === '/en' || route.path === '/ar' ? ' border-b-2 border-[#CF6F7A]' : ''" class="">{{$t('home')}}</span>
              </NuxtLink>
        <NuxtLink :to="localePath('/products')" class="block rounded-md px-3 py-2 text-base font-medium text-black " @click="mobileOpen = false">
                <span :class="route.path === '/en/products' || route.path === '/ar/products' ? ' border-b-2 border-[#CF6F7A]' : ''" class="">{{$t('products')}}</span>
              </NuxtLink>
        <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-black">{{$t('offers')}}</a>
        <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-black">{{$t('aboutUs')}}</a>
        <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-black">{{$t('categories')}}</a>
        <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-black">{{$t('contactUs')}}</a>

        <div class="pt-2">
          <NuxtLink v-show="!isAuth" :to="localePath('/login')" class="block rounded-md px-3 py-2 text-base font-medium text-black" @click="mobileOpen = false">
            {{ $t('login') }}
          </NuxtLink>
          <NuxtLink v-show="!isAuth" :to="localePath('/register')" class="block rounded-md px-3 py-2 text-base font-medium text-black" @click="mobileOpen = false">
            {{ $t('register') }}
          </NuxtLink>

          <NuxtLink v-show="isAuth" :to="localePath('/dashboard')" class="block rounded-md px-3 py-2" @click="mobileOpen = false">
            <div class="flex gap-[10px] items-center">
              <div class="w-[36px] h-[36px] rounded-[6px] overflow-hidden">
                <img src="/user.png" alt="">
              </div>
              <div class="text-start">
                <div class="font-[600] text-[14px] text-black">{{ auth?.userName }}</div>
                <div class="font-[500] text-[12px] text-[#28353D]">{{ auth?.email ?? 'email@email.com' }}</div>
              </div>
            </div>
          </NuxtLink>

          <button v-show="isAuth" type="button" class="block w-full text-left rounded-md px-3 py-2 text-base font-medium text-black" @click="logout">
            Logout
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const { locale } = useI18n()
const route = useRoute()
const localePath = useLocalePath()


const mobileOpen = ref(false)

const isAuth = ref(false)
let auth = ref('');

onMounted(() => [
  isAuth.value = localStorage.getItem('auth') === null ? false : true
])

onMounted(() => {
  auth.value = JSON.parse(localStorage.getItem('auth'))
})

const logout = () => {
  mobileOpen.value = false
  localStorage.removeItem('auth')
  window.location.reload()
}
</script>
