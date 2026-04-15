<script setup>
const localePath = useLocalePath()

await navigateTo(localePath('/dashboard/error'), { replace: true })
</script>

<template></template>
