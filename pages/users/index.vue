<script setup>
definePageMeta({ layout: "users" });

const statistics = [
  { title: 'All Orders', color: 'blue-darken-3', value: '13' },
  { title: 'Pending', color: 'orange-darken-4', value: '0' },
  { title: 'Delivered', color: 'green-lighten-1', value: '3' }
]
</script>

<template>
  <v-container class="my-8">
    <v-row>
      <v-col cols="9" md="9" sm="9" xs="12" class="d-flex align-center">
        <div>
          <v-icon>mdi-human-greeting</v-icon>
          Welcome User
        </div>
      </v-col>
      <v-col cols="12" md="3" sm="3" xs="12" class="text-md-end">
        <v-btn color="orange-darken-3" class="text-capitalize w-100">Create shipment</v-btn>
      </v-col>

      <v-col v-for="(stats, i) in statistics" :key="i" cols="12" sm="4">
        <v-card class="mx-auto rounded-xl elevation-5">
          <template #append>
            <v-btn variant="flat" :color="stats.color" icon>
              <v-icon>
                mdi-van-utility
              </v-icon>
            </v-btn>
          </template>
          <template v-slot:title>
            {{ stats.title }}

            <v-card-subtitle class="text-h6 font-weight-bold" style="opacity:1">
              {{ stats.value }}
            </v-card-subtitle>
          </template>
        </v-card>
      </v-col>
    </v-row>

    <v-spacer class="my-16" />

    <v-row>
      <v-col cols="12" md="7" sm="7">
        <v-card class="elevation-5">
          <v-card-title class="mb-5">
            <h4>Transaction</h4>
          </v-card-title>

          <ChartBar />
        </v-card>
      </v-col>

      <v-col cols="12" md="5" sm="5">
        <v-card class="elevation-5">
          <v-card-title class="d-flex justify-space-between align-center">
            <h4>Recent shipments</h4>
            <v-btn flat size="small" color="orange-darken-3" class="text-capitalize">Track</v-btn>
          </v-card-title>

          <UserTable class="ma-1" />
        </v-card>
      </v-col>
    </v-row>

    <v-spacer class="my-16" />

    <v-row>
      <v-col cols="12" md="7" sm="12" xs="12">
        <v-card class="elevation-5">
          <v-card-title class="mb-5">
            <h4>Summary</h4>
          </v-card-title>

          <v-row>
            <v-col cols="12" md="6" sm="6" xs="12">
              <ChartRadial :data="{ title: 'Paid Bills', value: 85, color: '#198754', label: 'Paid Bills' }" />
            </v-col>
            <v-col cols="12" md="6" sm="6" xs="12">
              <ChartRadial :data="{ title: 'On-route', value: 25, color: '#fd7e14', label: 'On-route' }" />
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col cols="12" md="5" sm="8" xs="12" class="mx-auto">
        <v-card class="elevation-5">
          <v-card-title class="mb-5">
            <h4>Statistics</h4>
          </v-card-title>

          <ChartPie />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped></style>
