<template>
  <div>
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome />
    <h1>Welcome to the homepage</h1> -->
    <!-- <AppAlert>
      This is an auto-imported component.
    </AppAlert> -->

     <div class="loaderWrapper"  v-show="showLoader">
      <div class="loader">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </div>


    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { watchEffect,onMounted } from 'vue'


const { locale } = useI18n()

watchEffect(() => {
  if (process.client) {
    document.documentElement.setAttribute(
      'dir',
      locale.value === 'ar' ? 'rtl' : 'ltr'
    )

    document.documentElement.setAttribute(
      'lang',
      locale.value
    )
  }
})

const showLoader = ref(true)

setTimeout(() => {
  showLoader.value = false
}, 5000)

</script>
<style scoped>
.loaderWrapper {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeLoader 0.3s 8s ease forwards;
}

.loader {
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 999;
}

.loader .bar {
  width: 10px;
  height: 5px;
  background: #000000;
  margin: 2px;
  animation: bar 1s infinite linear;
}

.loader .bar:nth-child(1) {
  animation-delay: 0s;
}

.loader .bar:nth-child(2) {
  animation-delay: 0.25s;
}

.loader .bar:nth-child(3) {
  animation-delay: 0.5s;
}

@keyframes bar {
  0% {
    transform: scaleY(1) scaleX(0.5);
  }

  50% {
    transform: scaleY(10) scaleX(1);
  }

  100% {
    transform: scaleY(1) scaleX(0.5);
  }
}

@keyframes fadeLoader {
  to {
    opacity: 0;
  }
}
</style>