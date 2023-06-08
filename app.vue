<script setup>
useHead({
  titleTemplate: '%s - AAJExp',
  // ... or as a function
  titleTemplate: (productCategory) => {
    return productCategory
      ? `${productCategory} - AAJExp`
      : 'AAJExp'
  }
})
</script>

<template>
  <div class="container mx-auto">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}

.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>
