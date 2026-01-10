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
              <a class="w-[80px] text-sm font-medium text-black" href="#">
               <span class=" border-b-2 border-[#CF6F7A]">Home</span></a>
              <a class="w-[80px] text-sm font-medium text-black" href="#"><span>Products</span></a>
              <a class="w-[80px] text-sm font-medium text-black" href="#"><span>Offers</span></a>
              <a class="w-[80px] text-sm font-medium text-black" href="#"><span>About Us</span></a>
              <a class="w-[80px] text-sm font-medium text-black" href="#"><span>About Us</span></a>
              <a class="w-[80px] text-sm font-medium text-black" href="#"><span>Categories</span></a>
              <a class="w-[80px] text-sm font-medium text-black" href="#"><span>Contact Us</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div id="mobile-menu" class="sm:hidden" v-show="mobileOpen">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-black">الرئيسيه</a>
        <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-black">المنتجات</a>
        <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-black">العروض</a>
        <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-black">تواصل معنا</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const mobileOpen = ref(false)
</script>
