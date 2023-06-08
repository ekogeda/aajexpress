<script setup>
const panels = [
  {
    title: 'How do I get started?',
    text: 'It\'s simple! All you have to do is sign up, complete the on-boarding process and an account will be created for you.',
  },
  {
    title: 'How does shipping work?',
    text: 'AAJExpress shipping is effortless. All you have to do is simply log in and request a delivery.',
  },
  {
    title: 'Where can I ship to?',
    text: 'Anywhere locally and internationally! With AAJExpress delivery, distance is not a barrier.',
  },
  {
    title: 'What type of items can be shipped via AAJExpress?',
    text: 'The short answer is almost anything. However, there are a some categories of items cannot handle. This is mostly due to regulatory reasons or restrictions placed by government agencies.',
  },
  {
    title: 'What will I be charged for?',
    text: 'We charge you a delivery fee, based on the route and weight of your package. For items sold using the AAJExpress for Business platform, we also charge a 2.5% of the total value of every product sold on the platform.',
  },
  {
    title: 'What can I sell using AAJExpress?',
    text: 'You can sell absolutely anything! From everyday essentials to fashion, hair extensions, cosmetics, skin care products, groceries, food, and beverages. However, only certain Items can be displayed on the AAJExpress marketplace.',
  },
  {
    title:
      'Do I need to pay for marketing my products listed on the platform?',
    text: 'No, you don\'t. However, to reach a wider audience we are able to offer extended marketing services at an affordable rate.',
  },
]
</script>
  
<template>
  <v-expansion-panels variant="inset" class="my-5">
    <v-expansion-panel v-for="(panel, i) in panels" :key="i" :title="panel.title" :text="panel.text"></v-expansion-panel>
  </v-expansion-panels>
</template>

<style lang="scss" scoped></style>