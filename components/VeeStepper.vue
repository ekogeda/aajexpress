<script setup>
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';
const currentStep = ref(0);

// const validationSchema = yup.object().shape({
//   name: yup.string().required(),
//   email: yup.string().email().required(),
//   phone: yup.string().min(7).required(),
//   address: yup.string().required(),
//   country: yup.string().required(),
//   state: yup.string().required(),
// });


// Each step should have its own validation schema
const schemas = [
  yup.object().shape({
    sender_name: yup.string().required(),
    sender_email: yup.string().email().required(),
    sender_phone: yup.string().min(7).required(),
    sender_address: yup.string().required(),
    sender_country: yup.string().required(),
    sender_state: yup.string().required(),
  }),
  yup.object().shape({
    receiver_name: yup.string().required(),
    receiver_email: yup.string().email().required(),
    receiver_phone: yup.string().min(7).required(),
    receiver_address: yup.string().required(),
    receiver_country: yup.string().required(),
    receiver_state: yup.string().required(),
  }),
  yup.object().shape({
    address: yup.string().required(),
    postalCode: yup
      .string()
      .required()
      .matches(/^[0-9]+$/, 'Must be numeric'),
  }),
  yup.object().shape({
    terms: yup.bool().required().equals([true]),
  }),
];

const validationSchema = computed(() => {
  return schemas[currentStep.value];
});

const { handleSubmit, handleReset } = useForm({
  validationSchema,
});

const sender_name = useField('sender_name', validationSchema);
const sender_email = useField('sender_email', validationSchema);
const sender_phone = useField('sender_phone', validationSchema);
const sender_address = useField('sender_address', validationSchema);
const sender_country = useField('sender_country', validationSchema);
const sender_state = useField('sender_state', validationSchema);
const sender_city = useField('sender_city');

const receiver_name = useField('receiver_name', validationSchema);
const receiver_email = useField('receiver_email', validationSchema);
const receiver_phone = useField('receiver_phone', validationSchema);
const receiver_address = useField('receiver_address', validationSchema);
const receiver_country = useField('receiver_country', validationSchema);
const receiver_state = useField('receiver_state', validationSchema);
const receiver_city = useField('receiver_city');
const draft = useField('draft');

const nextStep = handleSubmit((values) => {
  console.log('values: ', values);
  if (currentStep.value === 3) {
    console.log('Done: ', JSON.stringify(values, null, 2));
    return;
  }

  currentStep.value++;
});

function prevStep() {
  if (currentStep.value <= 0) {
    return;
  }

  currentStep.value--;
}

const selected = ref();
// const isSelected = ref();
// isSelected.value = selected.value == 1 ? 'USA' : 'NGN';

const selectableItems = ref([
  { props: { header: 'Import' } },
  {
    title: 'Abroad to Nigeria',
    value: 1,
  },
  { props: { header: 'Export' } },
  {
    title: 'Nigeria to Abroad',
    value: 2,
  },
]);

// onMounted(() => {
//   handleOrigin();
// });
</script>

<template>
  <v-sheet rounded>
    <v-card>
      <v-card-title>
        <v-row class="align-center">
          <v-col cols="12" sm="8">
            <h4>{{ (selected == 1 && currentStep == 0) ? 'USA' : 'NGN' }}</h4>
          </v-col>
          <v-col cols="12" sm="4">
            <v-select variant="solo" density="compact" v-model="selected" label="International" :items="selectableItems"
              class="selectable">
              <template #item="data">
                <v-list-subheader v-if="data.props.header">
                  {{ data.props.header }}
                </v-list-subheader>
                <v-list-item v-else v-bind="data.props"></v-list-item>
              </template>
            </v-select>
          </v-col>
        </v-row>
      </v-card-title>

      <v-container>
        <form @submit.prevent="nextStep">
          <template v-if="currentStep === 0">
            <v-text-field type="text" v-model="sender_name.value.value" density="compact" variant="underlined"
              :counter="2" :error-messages="sender_name.errorMessage.value" label="Name of sender"></v-text-field>

            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field type="email" v-model="sender_email.value.value" density="compact" variant="underlined"
                  :error-messages="sender_email.errorMessage.value" label="E-mail"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field type="tel" v-model="sender_phone.value.value" density="compact" variant="underlined"
                  :counter="7" :error-messages="sender_phone.errorMessage.value" label="Phone number"></v-text-field>
              </v-col>

              <v-col cols="12" sm="12">
                <v-textarea v-model="sender_address.value.value" density="compact" variant="underlined" clearable
                  :error-messages="sender_address.errorMessage.value" label="Sender address" rows="2"></v-textarea>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-select v-model="sender_country.value.value" density="compact" variant="underlined"
                  :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                  :error-messages="sender_country.errorMessage.value" label="Country"></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-select v-model="sender_state.value.value" density="compact" variant="underlined"
                  :items="['Abia', 'Lagos', 'Bayelsa', 'Edo']" :error-messages="sender_state.errorMessage.value"
                  label="State"></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-select v-model="sender_city.value.value" density="compact" variant="underlined"
                  :items="['Lagos Island', 'Surulere', 'Mainland']" label="City"></v-select>
              </v-col>

              <v-col cols="12">
                <v-checkbox v-model="draft.value.value" value="1" label="Save to draft" type="checkbox"></v-checkbox>
              </v-col>
            </v-row>
          </template>

          <template v-if="currentStep === 1">
            <v-text-field type="text" v-model="receiver_name.value.value" density="compact" variant="underlined"
              :counter="2" :error-messages="receiver_name.errorMessage.value" label="Name of recipient"></v-text-field>

            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field type="email" v-model="receiver_email.value.value" density="compact" variant="underlined"
                  :error-messages="receiver_email.errorMessage.value" label="E-mail"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field type="tel" v-model="receiver_phone.value.value" density="compact" variant="underlined"
                  :counter="7" :error-messages="receiver_phone.errorMessage.value" label="Phone number"></v-text-field>
              </v-col>

              <v-col cols="12" sm="12">
                <v-textarea v-model="receiver_address.value.value" density="compact" variant="underlined" clearable
                  :error-messages="receiver_address.errorMessage.value" label="Sender address" rows="2"></v-textarea>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-select v-model="receiver_country.value.value" density="compact" variant="underlined"
                  :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                  :error-messages="receiver_country.errorMessage.value" label="Country"></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-select v-model="receiver_state.value.value" density="compact" variant="underlined"
                  :items="['Abia', 'Lagos', 'Bayelsa', 'Edo']" :error-messages="receiver_state.errorMessage.value"
                  label="State"></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-select v-model="receiver_city.value.value" density="compact" variant="underlined"
                  :items="['Lagos Island', 'Surulere', 'Mainland']" label="City"></v-select>
              </v-col>

              <v-col cols="12">
                <v-checkbox v-model="draft.value.value" value="1" label="Save to draft" type="checkbox"></v-checkbox>
              </v-col>
            </v-row>
          </template>

          <!--   <template v-if="currentStep === 2">
        <label for="address">Address</label>
        <Field as="textarea" name="address" id="address" />
        <ErrorMessage name="address" />

        <label for="postalCode">Postal Code</label>
        <Field name="postalCode" id="postalCode" />
        <ErrorMessage name="postalCode" />
      </template>

      <template v-if="currentStep === 3">
        <label for="terms">Agree to terms and conditions</label>
        <Field name="terms" type="checkbox" id="terms" :value="true" />
        <ErrorMessage name="terms" />
      </template> -->

          <v-btn v-if="currentStep !== 0" type="button" color="grey-lighten-1" class="me-2" @click="prevStep">
            Previous
          </v-btn>

          <v-btn v-if="currentStep !== 3" type="submit" color="orange-darken-3" class="me-2">Next</v-btn>

          <v-btn color="grey-lighten-1" @click="handleReset">clear</v-btn>

          <v-btn v-if="currentStep === 3" color="orange-darken-3" type="submit" class="me-2">Finish</v-btn>

          <pre>{{ values }}</pre>
        </form>
      </v-container>
    </v-card>
  </v-sheet>
</template>

<style scoped></style>
