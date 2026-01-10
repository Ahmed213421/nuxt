<template>
    dd

    {{ data }}

    <div v-if="pending">Loading...</div>
  <div v-else-if="error">Error: {{ error.statusMessage }}</div>
  <pre v-else>{{ data }}</pre>
</template>

<script setup>
const { data, error, pending } = await useFetch('/api/hello')


const route = useRoute()

console.log(route.fullPath)


</script>