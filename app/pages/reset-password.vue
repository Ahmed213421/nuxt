<template>
    <div class="bg-[url('/bglogin2.jpg')] bg-cover bg-center h-screen">
        <div class="flex justify-center items-center h-screen">
            <div
                class="md:w-[621px] pt-[20%] pb-[20%] px-[10%] md:px-0 md:p-0 bg-[#FFFFFF] md:h-[687px] border border-[2px] flex flex-col md:pt-[5%] items-center border-[#CF6F7A] rounded-[24px]">
                <div>
                    <SvgIconHeader />
                </div>
                <div>
                    <h1 class="font-[600] md:text-[32px] text-center">Reset Your Password?</h1>
                </div>
                <div class="mt-10">
                    <h1>new password</h1>
                    <input type="text" placeholder="enter your new password" class="login-input mt-[6.5px] md:!w-[418px]">
                </div>
                <div class="mt-10">
                    <h1>password </h1>
                    <input type="text" placeholder="enter your old password" class="login-input mt-[6.5px] md:!w-[418px]">
                </div>
                <div
                    class="bg-[#CF6F7A] md:w-[418px] w-full mt-10 p-[19.57px] border border-[1.63px] border-[#E0959C] rounded-[12px] text-center  text-white cursor-pointer">
                    confirm
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')

const input = ref(null)

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