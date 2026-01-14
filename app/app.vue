<template>
  <div>
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome />
    <h1>Welcome to the homepage</h1> -->
    <!-- <AppAlert>
      This is an auto-imported component.
    </AppAlert> -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { watchEffect } from 'vue'

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
</script>