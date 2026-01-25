<template>
    <div class="bg-[url('/bglogin2.jpg')] bg-cover bg-center h-screen">
        <div class="flex justify-center items-center h-screen">
            <div
                class="md:w-[621px] pt-[20%] pb-[20%] px-[10%] md:px-0 md:p-0 bg-[#FFFFFF] md:h-[800px] border border-[2px] flex flex-col md:pt-[5%] items-center border-[#CF6F7A] rounded-[24px]">
                <div>
                    <SvgIconHeader />
                </div>
                <div>
                    <h1 class="font-[600] md:text-[32px] text-center">Register New Account</h1>
                </div>
                <div class="mt-10">
                    <h1>user name</h1>
                    <input type="text" v-model="userName" placeholder="enter your user name"
                        class="login-input mt-[6.5px] md:!w-[418px]">
                </div>
                <div class="mt-10">
                    <h1>email </h1>
                    <input type="text" v-model="email" placeholder="enter your email"
                        class="login-input mt-[6.5px] md:!w-[418px]">
                </div>
                <div class="mt-10">
                    <h1>password </h1>
                    <input type="text" v-model="password" placeholder="enter your password"
                        class="login-input mt-[6.5px] md:!w-[418px]">
                </div>
                <div @click="register" 
                    class="bg-[#CF6F7A] md:w-[418px] w-full mt-10 p-[19.57px] border border-[1.63px] border-[#E0959C] rounded-[12px] text-center  text-white cursor-pointer">
                    register
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')

const input = ref(null)

const userName = ref(null)
const password = ref(null)
const email = ref(null)
const { locale } = useI18n()


import { useRouter } from 'vue-router'
const router = useRouter()

const register = () => {

    if (userName.value !== null && password.value !== null && email !== null) {
        const json = JSON.stringify({
            "userName": userName.value,
            "password": password.value,
            "email" : email.value
        })
        localStorage.setItem('auth', json)
        router.push(`/${locale.value}/dashboard`)
    }
}


defineI18nRoute(false)
definePageMeta({
    layout: false,
    i18n: false
})

</script>

<style scoped>
.login-input {
    border-radius: 12px;
    border: 1.5px solid #E0959C;
    box-shadow: none;
}

.login-input {
    padding-top: 10.57px;
    padding-bottom: 10.57px;
    padding-inline-start: 15px;
}   
</style>

