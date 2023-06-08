<script setup>
const items = [
  {
    imgSrc: 'assets/img/marker.png',
    title: 'Personal',
    subtitle:
      'We are here for the simple things. Use AAJExpress for one-off local and international deliveries, e-commerce payments, bill payments and more.',
  },
  {
    imgSrc: 'assets/img/cart.png',
    title: 'Online, offline & Social Sellers',
    subtitle:
      'Do you own your own physical store, e-commerce website or you sell on Instagram? We have services that help you increase your visibility and grow your sales.',
  },
  {
    imgSrc: 'assets/img/bag.png',
    title: 'Retailers & Brands',
    subtitle:
      "Increase visibility and distribution for your products and services using our platform. We'd love to help you achieve more.",
  },
  {
    imgSrc: 'assets/img/globe-b.png',
    title: 'Couriers',
    subtitle:
      'Improve your operations and sales by working with us. You can expand your services using our network.',
  },
  {
    imgSrc: 'assets/img/chimney.png',
    title: 'Platforms & Market Places',
    subtitle:
      "Are you building marketplace that requires payments and deliveries? Do you need to automate distribution of products and services? You've come to the right place.",
  },
  {
    imgSrc: 'assets/img/grid-p.png',
    title: 'Agents & Franchise Partners',
    subtitle:
      'Increase your income and maximize utility of your free space by joining our network. Find out how right away.',
  },
]
</script>
  
<template>
  <div id="services" light>
    <v-container>
      <div class="text-center mb-8">
        <h2 :class="$vuetify.theme.name == 'dark' ? 'text-h2-dark' : 'dark'">
          The solutions provider with services that fit your needs.
        </h2>
        <p>
          From personal needs to platform integrations, we are ready to work
          with you.
        </p>
      </div>

      <div class="grid">
        <v-card v-for="(item, i) in items" :key="i" class="hover my-1">
          <v-list-item lines="two">
            <v-avatar max-width="70" size="70" rounded-circle>
              <img :src="item.imgSrc" class="w-100" :alt="item.title" />
            </v-avatar>

            <v-list-item-title class="font-weight-bold text-h6 my-3"> {{ item.title }} </v-list-item-title>
            <p class="text--secondary">{{ item.subtitle }}</p>
          </v-list-item>

          <v-card-actions>
            <v-btn plain class="text-capitalize">
              Learn more &rightarrow;
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.text-h2-dark {
  color: #ff9800;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}

.hover {
  transition: transform 0.3s linear;
  border-radius: 20px;
}

.hover p {
  line-height: 26px;
  font-size: 1rem;
}

.hover:hover {
  background: rgba(0, 0, 0, 0.2);
  transform: scale(0.99);
}

/* Small screen devices (600px and above) */
@media only screen and (min-width: 600px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>