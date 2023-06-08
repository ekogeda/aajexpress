<script setup>
const icons = ref(['mdi-facebook', 'mdi-whatsapp', 'mdi-instagram'])
</script>
  
<template>
  <v-layout>
    <v-footer id="contact" class="d-flex flex-column" dark>
      <div class="navy py-5">
        <v-container>
          <v-row>
            <v-col cols="12" lg="2" sm="4" class="text-sm-left text-center">
              <img src="@/assets/aaj/aaj-logo.png" width="100px" alt="logo" />

              <small class="d-block fs-12 my-3">
                <v-icon small color="white-darken-2"> mdi-email </v-icon>
                info@aajexpress.org
              </small>
              <small class="d-block fs-12">
                <v-icon small color="white-darken-2"> mdi-whatsapp </v-icon>
                +234 813 2269 487
              </small>
              <small class="d-block fs-12 my-3">
                <v-icon small color="white-darken-2"> mdi-map-marker </v-icon>
                Shop F217, First Floor Tejuosho Ultra modern market. Yaba, Lagos
                State
              </small>
            </v-col>
            <v-col cols="12" lg="2" sm="4" class="text-sm-left text-center">
              <h3 class="mb-3">Product</h3>
              <v-list-item class="px-0 justify-sm-start justify-center">
                <nuxt-link class="text-white text-decoration-none text-capitalize" to="#!">Home</nuxt-link>
              </v-list-item>
              <v-list-item class="px-0 justify-sm-start justify-center">
                <nuxt-link class="text-white text-decoration-none text-capitalize" to="#!">Features</nuxt-link>
              </v-list-item>
              <v-list-item class="px-0 justify-sm-start justify-center">
                <nuxt-link class="text-white text-decoration-none text-capitalize" to="#!">Contact
                  Us</nuxt-link>
              </v-list-item>
              <v-list-item class="px-0 justify-sm-start justify-center">
                <nuxt-link class="text-white text-decoration-none text-capitalize" to="#!">Track your
                  Goods</nuxt-link>
              </v-list-item>
              <v-list-item class="px-0 justify-sm-start justify-center">
                <nuxt-link class="text-white text-decoration-none text-capitalize" to="#!">Get
                  Estimate</nuxt-link>
              </v-list-item>
            </v-col>
            <v-col cols="12" lg="2" sm="4" class="text-sm-left text-center">
              <h3 class="mb-3">Company</h3>
              <v-list-item class="px-0 justify-sm-start justify-center">
                <nuxt-link class="text-white text-decoration-none text-capitalize" to="#">About</nuxt-link>
              </v-list-item>
              <v-list-item class="px-0 justify-sm-start justify-center">
                <nuxt-link class="text-white text-decoration-none text-capitalize" to="#">Blog</nuxt-link>
              </v-list-item>
              <v-list-item class="px-0 justify-sm-start justify-center">
                <nuxt-link class="text-white text-decoration-none text-capitalize" to="#">Services</nuxt-link>
              </v-list-item>
              <v-list-item class="px-0 justify-sm-start justify-center">
                <nuxt-link class="text-white text-decoration-none text-capitalize" to="#">Career</nuxt-link>
              </v-list-item>
              <v-list-item class="px-0 justify-sm-start justify-center">
                <nuxt-link class="text-white text-decoration-none text-capitalize" to="#">Contact</nuxt-link>
              </v-list-item>
            </v-col>
            <v-col cols="12" lg="2" sm="4" class="text-sm-left text-center">
              <h3 class="mb-3">Support</h3>
              <v-list-item class="px-0 justify-sm-start justify-center">
                <nuxt-link class="text-white text-decoration-none text-capitalize" to="#!">Getting
                  Started</nuxt-link>
              </v-list-item>
              <v-list-item class="px-0 justify-sm-start justify-center">
                <nuxt-link class="text-white text-decoration-none text-capitalize" to="#!">Tutorials</nuxt-link>
              </v-list-item>
              <v-list-item class="px-0 justify-sm-start justify-center">
                <nuxt-link class="text-white text-decoration-none text-capitalize" to="#!">Contact
                  Support</nuxt-link>
              </v-list-item>
              <v-list-item class="px-0 justify-sm-start justify-center">
                <nuxt-link class="text-white text-decoration-none text-capitalize" to="#!">FAQ</nuxt-link>
              </v-list-item>
            </v-col>
            <v-col cols="12" lg="2" sm="4" class="text-sm-left text-center">
              <h3 class="mb-3">Legal</h3>
              <v-list-item class="px-0 justify-sm-start justify-center">
                <nuxt-link class="text-white text-decoration-none text-capitalize" to="#!">Terms &
                  Conditions</nuxt-link>
              </v-list-item>
            </v-col>
            <v-col cols="12" lg="2" sm="4" class="text-sm-left text-center">
              <h3 class="mb-3">Follow us</h3>
              <v-btn v-for="icon in icons" :key="icon" class="me-2" dark icon :to="'#' + icon">
                <v-icon size="24px">
                  {{ icon }}
                </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <v-card-text class="py-5 bg-black text-center w-100">
        {{ new Date().getFullYear() }} - <strong>AAJExpress</strong>
      </v-card-text>
    </v-footer>
  </v-layout>
</template>

<style lang="scss" scoped>
.v-footer {
  padding: 0 !important;
  background: #163476;
  color: #fff;
}
</style>