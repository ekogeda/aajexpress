<script setup></script>
  
<template>
  <div class="main mt-16 mt-xs-8">
    <Hero />

    <v-container class="mt-16 mt-xs-8">
      <!-- //? ABOUT -->
      <About />

      <!-- //? SHIPPING -->
      <Shipping />

      <!-- //? SERVICES -->
      <Services />

      <!-- //? FAQ -->
      <FAQ />

      <!-- //? SHOPPING -->
      <Shopping />
    </v-container>
  </div>
</template>


<style lang="scss" scoped>
@media only screen and (max-width: 600px) {
  .mt-xs-8 {
    margin-top: 8px !important;
  }
}
</style>