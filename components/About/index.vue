<script setup></script>

<template>
  <v-layout id="about" class="main">
    <v-container>
      <v-row justify="space-between" align="start">
        <v-col cols="12" sm="6" class="my-5">
          <div class="position-relative">
            <img src="@/assets/aaj/aaj-lady.png" class="d-block w-100 h-100" alt="Offer" />
            <div class="position-abs hidden-xs-only">
              <img src="@/assets/aaj/aaj-plane-b.png" alt="Offer" />
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="5" sm="6" class="my-5">
          <img src="@/assets/aaj/aajexpress1.png" alt="Offer" />
          <p class="mb-3">
            We offer doorstep delivery not only to all states within Nigeria but also
            worldwide.
          </p>

          <v-card class="mx-auto">
            <v-list lines="two">
              <!-- <v-list-subheader>Today</v-list-subheader> -->

              <v-list-item prepend-avatar="/assets/img/check-o.png">
                <template v-slot:title>
                  Fast, Secure, Affordable and <br />Reliable
                </template>
              </v-list-item>

              <v-divider inset></v-divider>

              <v-list-item prepend-avatar="/assets/img/check-o.png">
                <template v-slot:title>
                  Doorstep Delivery Locally <br />
                  and Internationally
                </template>
              </v-list-item>

              <v-divider inset></v-divider>

              <v-list-item prepend-avatar="/assets/img/check-o.png">
                <template v-slot:title>
                  Chip to USA, CA, UK, EU, SA, GH <br />for as low as
                  <span class="font-weight-bold text-orange-darken-1">N2,500/Kg</span>
                </template>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<style lang="scss" scoped>
.position-relative {
  position: relative;
}

.position-abs {
  position: absolute;
  top: auto;
  bottom: -10%;
}

.position-abs img {
  width: 40%;
  display: block;
  margin: 0 auto;
}
</style>
