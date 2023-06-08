<script setup></script>
  
<template>
  <v-layout class="my-16">
    <v-container>
      <v-row justify="space-between" align="start">
        <v-col cols="12" sm="5">
          <h3 class="mb-3">
            Local and Inter-state Shipping <br />
            for Personal and <br />
            Business use
          </h3>

          <v-card class="mx-auto">
            <v-list lines="two">
              <!-- <v-list-subheader>Today</v-list-subheader> -->

              <v-list-item prepend-avatar="/assets/img/check-o.png">
                <template v-slot:title>
                  Request a pickup or delivery <br />
                  from you or from the seller
                </template>
              </v-list-item>

              <v-divider inset></v-divider>

              <v-list-item prepend-avatar="/assets/img/check-o.png">
                <template v-slot:title>
                  Get it delivered to where you <br />
                  need it to go.
                </template>
              </v-list-item>

              <v-divider inset></v-divider>

              <v-list-item class="mt-5">
                <v-btn color="orange-darken-3" flat>Get Estimate</v-btn>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" class="d-none d-sm-flex">
          <div class="position-relative">
            <img src="@/assets/aaj/bus-blue.png" class="d-block w-100 h-100" alt="Offer" />
          </div>
        </v-col>
      </v-row>

      <v-row justify="space-between" align="start" class="d-none mt-16">
        <v-col cols="12" sm="6" class="d-none d-sm-flex">
          <div class="position-relative">
            <img src="@/assets/aaj/aaj-plane-globe.png" style="display: block" width="100%" height="100%" alt="Offer" />
          </div>
        </v-col>

        <v-col cols="12" sm="5">
          <h3 class="mb-3">
            Local and Inter-state Shipping <br />
            for Personal and <br />
            Business use
          </h3>

          <v-card class="mx-auto">
            <v-list lines="two">
              <!-- <v-list-subheader>Today</v-list-subheader> -->

              <v-list-item prepend-avatar="/assets/img/check-o.png">
                <template v-slot:title>
                  Request a pickup or delivery <br />
                  from you or from the seller
                </template>
              </v-list-item>

              <v-divider inset></v-divider>

              <v-list-item prepend-avatar="/assets/img/check-o.png">
                <template v-slot:title>
                  Get it delivered to where you <br />
                  need it to go.
                </template>
              </v-list-item>

              <v-divider inset></v-divider>

              <v-list-item class="mt-5">
                <v-btn color="orange-darken-3" flat>Get Estimate</v-btn>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<style lang="scss" scoped></style>