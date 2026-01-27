<template>
    <div>
        <div class="grid lg:grid-cols-2 grid-cols-1">
            <div class="flex lg:justify-end justify-center items-center lg:pe-[15%] h-screen">
                <div class="flex flex-col gap-[32px] items-center justify-center">
                    <SvgIconHeader />
                    <h1 class="text-[24px] ">Login</h1>
                    <div class="flex gap-[24px] flex-col">
                        <div>
                            <h1>user name</h1>
                            <input type="text" v-model="userName" placeholder="enter your user name" class="login-input mt-[6.5px] md:!w-[400px]">
                        </div>
                        <div class="relative">
                            <h1>password</h1>
                            <input type="password" v-model="password" ref="input" placeholder="enter your passworrd" class="login-input mt-[6.5px] md:!w-[400px]">
                            <svg width="27" height="27" viewBox="0 0 27 27" @click="view" class="absolute top-10 end-2 cursor-pointer" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.5987 13.0445C10.5987 12.3958 10.8564 11.7737 11.3151 11.315C11.7738 10.8563 12.3959 10.5986 13.0446 10.5986C13.6932 10.5986 14.3153 10.8563 14.774 11.315C15.2327 11.7737 15.4904 12.3958 15.4904 13.0445C15.4904 13.6932 15.2327 14.3153 14.774 14.774C14.3153 15.2327 13.6932 15.4903 13.0446 15.4903C12.3959 15.4903 11.7738 15.2327 11.3151 14.774C10.8564 14.3153 10.5987 13.6932 10.5987 13.0445Z"
                                    fill="#CF6F7A" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M2.17416 13.0445C2.17416 14.8273 2.63615 15.4262 3.56014 16.6274C5.40486 19.0233 8.4986 21.7409 13.0446 21.7409C17.5907 21.7409 20.6844 19.0233 22.5291 16.6274C23.4531 15.4273 23.9151 14.8262 23.9151 13.0445C23.9151 11.2618 23.4531 10.6628 22.5291 9.46161C20.6844 7.06576 17.5907 4.34814 13.0446 4.34814C8.4986 4.34814 5.40486 7.06576 3.56014 9.46161C2.63615 10.6639 2.17416 11.2628 2.17416 13.0445ZM13.0446 8.96809C11.9635 8.96809 10.9266 9.39757 10.1622 10.162C9.39768 10.9265 8.9682 11.9634 8.9682 13.0445C8.9682 14.1257 9.39768 15.1625 10.1622 15.927C10.9266 16.6915 11.9635 17.1209 13.0446 17.1209C14.1258 17.1209 15.1626 16.6915 15.9271 15.927C16.6916 15.1625 17.121 14.1257 17.121 13.0445C17.121 11.9634 16.6916 10.9265 15.9271 10.162C15.1626 9.39757 14.1258 8.96809 13.0446 8.96809Z"
                                    fill="#CF6F7A" />
                            </svg>
                            <div class="flex mt-4 justify-between items-center">
                                
                                <el-checkbox v-model="check"  size="large" />
                                <NuxtLink to="/forget-password">
                                <h1 class="cursor-pointer">forget password?</h1>
                                </NuxtLink>
                            </div>
                            <div @click="login" class="bg-[#CF6F7A] p-[19.57px] border border-[1.63px] border-[#E0959C] rounded-[12px] text-center mt-3 text-white cursor-pointer">
                                login
                            </div>
                        </div>
                        
                        <div class="separator">or</div>
                    </div>
                    <div class="w-full flex flex-col gap-4">

                        <div class=" w-full cursor-pointer">
                            <div class="w-[100%] border border-[#E4E7E9] rounded-[12px] px-4 py-3">
                                <div class="w-[68%] flex justify-between">
                                    <div>
                                        <SvgGoogle />
                                    </div>
                                    <div class="font-[400] text-[14px] text-[#475156]">   
                                    Login With Google
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" w-full cursor-pointer">
                        <div class="w-[100%] border border-[#E4E7E9] rounded-[12px] px-4 py-3">
                            <div class="w-[68%] flex justify-between">
                                <div>
                                    <SvgFacebookLogin />
                                </div>
                                <div class="font-[400] text-[14px] text-[#475156]">   
                                    Login With Facebook
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <div class="text-[19px] text-[#6D6666] font-[400]">dont have an account? <NuxtLink to="/register"><span class="text-[#000000] font-[700] text-[19px] cursor-pointer">sign up</span></NuxtLink></div>
                </div>
                </div>
            </div>

            <div class="bg-[url('/bglogin.jpg')] bg-cover bg-center h-screen lg:block hidden">
                
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

const check = ref(false)

import { useRouter } from 'vue-router'
const router = useRouter()

const route = useRoute()
const { locale } = useI18n()

let r = (Math.random() + 1).toString(7).substring(7)
const login = () => {
    if (check.value === true) {
        router.push('/forget-password')
    }

    if (userName.value !== null && password.value !== null) {
        const json = JSON.stringify({
            "userName" : userName.value,
            "password": password.value,
            "token" : r
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

const view = () => {
    var x = input.value;
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}


onMounted
</script>

<style scoped>
.login-input {
    border-radius: 12px;
    border: 1.5px solid #E0959C;
    box-shadow: none;
}
.login-input {
    padding-top : 10.57px;
    padding-bottom : 10.57px;
    padding-inline-start:15px;
}

.separator {
    display: flex;
    align-items: center;
    text-align: center;
    color: #8a949b;
}

.separator::before,
.separator::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #e2e8f0;
}

.separator:not(:empty)::before {
    margin-right: .5em;
}

.separator:not(:empty)::after {
    margin-left: .5em;
}

:deep(.el-checkbox__input .el-checkbox__inner){
    border-color: #C65C6A !important;

}
:deep(.el-checkbox__input.is-checked .el-checkbox__inner){
        background-color: #C65C6A !important;
        border-color: #C65C6A !important;
    }
</style>