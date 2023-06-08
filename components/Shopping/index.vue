<script setup></script>
    
<template>
  <div light>
    <v-container grid-list-xs>
      <div class="text-center mb-5">
        <h2 :class="$vuetify.theme.name == 'dark' ? 'text-h2-dark' : 'dark'">
          Your shopping <br />
          experience made simple
        </h2>
      </div>

      <v-row>
        <v-col cols="12" sm="4">
          <v-card flat class="mx-auto">
            <div style="height:300px">
              <img src="@/assets/aaj/packed.png" class="w-100 h-100" alt="packed" />
            </div>

            <v-card-title class="text-truncate">
              Delivery
            </v-card-title>

            <v-card-text>Shop from UK & get deliver to Nigeria</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card flat class="mx-auto">
            <div style="height:300px">
              <img src="@/assets/aaj/invoice.png" class="w-100 h-100" alt="invoice" />
            </div>

            <v-card-title> Invoicing </v-card-title>

            <v-card-text> Invoice well documented </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card flat class="mx-auto">
            <div style="height:300px">
              <img src="@/assets/aaj/store.png" class="w-100 h-100" alt="store" />
            </div>

            <v-card-title> Packaging </v-card-title>

            <v-card-text> Goods packed and delivered </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-btn color="orange-darken-3" class="d-block mx-auto my-5">Explore</v-btn>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.text-h2-dark {
  color: #ff9800;
}
</style>