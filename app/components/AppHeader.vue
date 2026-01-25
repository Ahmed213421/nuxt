<template>
    <div class=" border-b border-[#246062] hidden md:block">

    <header class="flex container p-2 xl:p-0 mx-auto justify-between items-center">
        <div class="flex hidden xl:block">
            <SvgIconHeader />
        </div>
        <div class="py-[23px] h-[44px] items-center  flex gap-[24px]">
            <div class="relative w-full max-w-sm">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                
                <input 
                    type="text" 
                    class="block xl:w-[327px] xl:w-[250px] lg:w-[200px] w-[150px] border border-[1.5px] border-[#CF6F7A] pl-10 pr-[16px] py-[14px] rounded-[12px] leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                    :placeholder="`${$t('search')}...`"
                >

                
            </div>

            <div class="relative inline-block text-left group flex " tabindex="0">

                <button type="button" class="inline-flex items-center gap-[2px] text-sm font-[600]  bg-white  focus:outline-none">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.22266 7.55554H29.7782V24.4444H2.22266V7.55554Z" fill="black"/>
                        <path d="M2.22266 13.3334H29.7782V18.6667H2.22266V13.3334Z" fill="white"/>
                        <path d="M2.22266 7.55554H29.7782V13.3333H2.22266V7.55554Z" fill="#D22F27"/>
                        <path d="M14.667 14.6666H17.3337V17.3333H14.667V14.6666Z" fill="#F1B31C" stroke="#F1B31C" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16 14.2222V17.7777" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2.22266 7.55554H29.7782V24.4444H2.22266V7.55554Z" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    {{ locale === 'ar' ? 'AR' : 'EN' }}
                    <SvgDropDown/>
                </button>

                <div class="absolute top-5 right-0 z-20 hidden w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 group-focus-within:block">
                    <div class="py-1">
                  <NuxtLink
                    :to="switchLocalePath('en')"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                  >
                    {{ $t('english') }}
                  </NuxtLink>                    
                  <NuxtLink
                    :to="switchLocalePath('ar')"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                  >
                    {{ $t('arabic') }}
                  </NuxtLink>
                    <div class="border-t border-gray-100 my-1"></div>
                    </div>
                </div>

            </div>

            <div class="flex items-center gap-[24px] ">
                <div class="relative">
                    <SvgLikes />
                    <div class="badge-red">

                    </div>
                </div>
                <div class="relative">
                    <SvgShoppingCart />
                    <div class="badge-red">

                    </div>
                </div>
            </div>

            <div class="flex gap-[12px] ">
              <NuxtLink v-show="!isAuth" to="/login" href="#" class="border rounded-[12px] whitespace-nowrap bg-[#CF6F7A] py-[13px] px-[19px] text-white">{{$t('login')}}</NuxtLink>
                
                <NuxtLink v-show="!isAuth" to="/register" href="#" class="border whitespace-nowrap rounded-[12px] border-[1.5px] border-[#CF6F7A] py-[13px] px-[19px] text-[#CF6F7A]">{{$t('register')}}</NuxtLink>

            </div>
            <Menu as="div" class="relative inline-block text-left hidden lg:block">
    <!-- 3 dots button -->
            <MenuButton v-show="isAuth"
              class="py-[3px] px-[11px] rounded-[12px] w-[214px] items-center flex justify-between align-center focus:outline-none border border-[#CF6F7A]"
            >
            <div class="flex gap-[6px] items-center">
                <div class="avatar-wrapper w-[31px] h-[31px] rounded-[6px]">
                    <img src="/user.png" alt="">
                </div>
                <div class="text-start">
                    <div class="font-[600] text-[12px]">{{auth?.userName}}</div>
                    <div class="font-[500] text-[12px] text-[#28353D]">{{auth?.email}}</div>
                </div>
            </div>
              <EllipsisVerticalIcon class="w-5 h-5 text-gray-600" />
            </MenuButton>

    <!-- Dropdown -->
            <MenuItems
              class="absolute right-0 z-10 mt-2 w-40 origin-top-right
                    rounded-md bg-white shadow-lg ring-1 ring-black/5"
            >
              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    'block w-full px-4 py-2 text-left text-sm',
                    active && 'bg-gray-100'
                  ]"
                >
                  View profile
                </button>
              </MenuItem>

              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    'block w-full px-4 py-2 text-left text-sm',
                    active && 'bg-gray-100'
                  ]"
                >
                  Edit
                </button>
              </MenuItem>

              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    'block w-full px-4 py-2 text-left text-sm text-red-600',
                    active && 'bg-gray-100'
                  ]" @click="logout"
                >
                  Logout
                </button>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
        
    </header>
    <!-- <el-button type="primary">OK</el-button> -->
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue';
import { ArrowDown } from '@element-plus/icons-vue'
// import Dropdown from 'primevue/dropdown';
const { locale } = useI18n()


import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { EllipsisVerticalIcon } from '@heroicons/vue/24/solid'

const switchLocalePath = useSwitchLocalePath()

const isAuth = ref(false)

let auth = ref('');

onMounted(() => [
  isAuth.value = localStorage.getItem('auth') === null ? false : true
  
  
])

onMounted(() => {
    auth.value = JSON.parse(localStorage.getItem('auth'))
})

const logout = () => {
  localStorage.removeItem('auth')
  window.location.reload()
}

const input1 = ref('');

</script>

<style scoped>
.badge-red{
    position:absolute;
    width:8px;
    height:8px;
    border-radius: 50%;
    background: #BD0000;
    top:0;
    right:0;
}
</style>