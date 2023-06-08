<script setup></script>

<template>
  <div id="faq" class="my-16">
    <v-container grid-list-xs>
      <div class="text-center">
        <h2 :class="$vuetify.theme.name == 'dark' ? 'text-h2-dark' : 'dark'">Frequently Asked Questions</h2>
        <p>
          Here are some common questions asked about transacting with
          AAJExpress.
        </p>
      </div>

      <div class="mt-8">
        <FAQAccordion />
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.text-h2-dark {
  color: #ff9800;
}

.mt-custom {
  margin-top: 80px;
}

.p-custom {
  /* background-color: #f5f5f5;
  color: rgba(0, 0, 0, 0.87); */
  padding: 48px 0 60px;
}
</style>