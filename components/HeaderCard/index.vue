<script setup>
const dataObj = [
  {
    title: 'Local Delivery',
    subtitle: 'Within Lagos',
    imgSrc: 'assets/img/bike-thumb.png',
  },
  {
    title: 'Interstate Delivery',
    subtitle: 'Across Nigeria',
    imgSrc: 'assets/img/bus-thumb.png',
  },
  {
    title: 'International Delivery',
    subtitle: 'Export',
    imgSrc: 'assets/img/plane-thumb.png',
  },
  {
    title: 'Shopping',
    subtitle: 'Shop from UK and get delivered in Nigeria',
    imgSrc: 'assets/img/cart-thumb-2.png',
  },
]
</script>

<template>
  <v-container grid-list-xs>
    <v-card>
      <div class="grid">
        <div v-for="(item, i) in dataObj" :key="i">
          <v-list-item lines="two">
            <v-avatar max-width="50" size="50" rounded-circle>
              <img :src="item.imgSrc" class="w-100" :alt="item.title" />
            </v-avatar>

            <v-list-item-title> {{ item.title }} </v-list-item-title>
            <small class="text-grey-lighten-1 fs-t">{{ item.subtitle }}</small>
          </v-list-item>

          <v-card-actions>
            <v-btn plain class="text-capitalize"> Explore &rightarrow; </v-btn>
          </v-card-actions>
        </div>
      </div>
    </v-card>
  </v-container>
</template>

<style lang="scss" scoped>
.fs-t {
  font-size: 13px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.v-list-item__title {
  white-space: none !important;
}

/* For extremely small screen devices (595px and below) */
@media only screen and (max-width: 595px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Small screen devices (600px and above) */
@media only screen and (min-width: 600px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>