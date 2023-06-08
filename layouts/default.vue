<script setup>
const route = useRoute()

useHead({
  meta: [{ property: 'og:title', content: `AAJExp - ${route.meta.title}` }]
})
</script>

<template>
  <div class="default-layout container">
    <TheNavbar />

    <slot />

    <TheFooter />
  </div>
</template>

<style scoped></style>