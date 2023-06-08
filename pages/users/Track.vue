<script setup>
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup';

definePageMeta({ layout: "users" });

const isTracking = ref(false)

// const status = ref('New Shipment')
// const statuses = [
//   'New Shipment',
//   'Pending',
//   'Decline',
//   'Processing',
//   'In-progress',
//   'Not Available',
//   'Cancelled',
//   'Returned',
//   'At Destination',
//   'Shipment Delivered',
// ]

const validationSchema = yup.object().shape({
  waybill: yup.string().min(10).required().label("Waybill number"),
});

const { handleSubmit, handleReset } = useForm({
  validationSchema,
});

const waybill = useField('waybill', validationSchema)
const handleTrackOrder = handleSubmit(values => {
  isTracking.value = true;
  console.log(JSON.stringify(values, null, 2))
})
</script>

<template>
  <v-container class="my-16">
    <v-row class="mb-5">
      <v-col cols="12" lg="6" md="8" sm="12" class="mx-auto">
        <v-card class="my-4 px-4">
          <v-card-actions title="Back">
            <v-btn @click="$router.back()" prepend-icon="mdi-keyboard-backspace">Back</v-btn>
          </v-card-actions>

          <v-card-title>
            Track your shipment
          </v-card-title>
          <v-card-subtitle class="mb-4">
            Enter the waybill-number you received when you booked your
            request
          </v-card-subtitle>

          <template v-if="isTracking">
            <v-list class="mb-3 px-3">
              <v-list-item class="mb-5 elevation-3 rounded-xl" style="border-radius: 25px">
                <p class="text-uppercase">Waybill Number</p>
                <h5 class="fw-normal">{{ 'AAJ94836EX' }}</h5>
              </v-list-item>
              <v-list-item class="mb-5 elevation-3 rounded-xl" style="border-radius: 25px">
                <p class="text-uppercase">Status</p>
                <h5 class="fw-normal">New shipment</h5>
              </v-list-item>
              <v-list-item class="mb-5 elevation-3 rounded-xl">
                <p class="text-uppercase">Origin</p>
                <h5 class="fw-normal">{{ 'tracked.o_address' }}</h5>
              </v-list-item>
              <v-list-item class="mb-5 elevation-3 rounded-xl">
                <p class="text-uppercase">Destination</p>
                <h5 class="fw-normal">{{ 'tracked.d_address' }}</h5>
              </v-list-item>
            </v-list>
          </template>

          <v-card-text>
            <form @submit.prevent="handleTrackOrder" class="mb-5">
              <v-text-field type="text" v-model="waybill.value.value" variant="solo" :counter="10"
                :error-messages="waybill.errorMessage.value" label="Enter your waybill number"></v-text-field>

              <div class="mt-8">
                <v-btn type="submit" color="orange-darken-3" class="me-4">
                  Track
                </v-btn>
                <v-btn @click="handleReset">
                  clear
                </v-btn>
              </div>
            </form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<style lang="scss" scoped></style>