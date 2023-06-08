<script setup>
import { Field } from "vee-validate";
import * as yup from "yup";
import { useDate } from "vuetify/labs/date";

const date = useDate();

const selected = ref();
const selectableItems = ref([
  { props: { header: "Import" } },
  {
    title: "Abroad to Nigeria",
    value: "USA",
  },
  { props: { header: "Export" } },
  {
    title: "Nigeria to Abroad",
    value: "NGN",
  },
]);

const getFirstLetters = (str) => {
  const firstLetters = str
    .split(" ")
    .map((word) => word.charAt(0))
    .join("");

  return firstLetters;
};

const service_type = ref();
const mode = ref();
const insurance = ref();
const descFields = ref([
  {
    description: "",
    quantity: "",
    weight: "",
    item_value: "",
  },
]);

const trackingNumber = (pr = "AAJ", su = "EX") => {
  for (let i = 0; i < 5; i++) pr += ~~(Math.random() * 10);
  return pr + su;
};

const getRandomItem = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];

  return item;
};

const add = () => {
  descFields.value.push({
    description: "",
    quantity: "",
    weight: "",
    item_value: "",
  });
};

const remove = (index) => {
  descFields.value.splice(index, 1);
};

// break down the validation steps into multiple schemas
const validationSchema = [
  yup.object({
    senderName: yup.string().required().label("Full name"),
    senderEmail: yup.string().required().email().label("Email address"),
    senderPhone: yup.string().required().label("Phone number"),
    senderAddress: yup.string().required().label("Address"),
    senderCountry: yup
      .string()
      // .required()
      .label("Country")
      .oneOf(
        ["California", "Colorado", "Florida", "Georgia", "Texas", "Wyoming"],
        "Choose your country"
      ),
    senderState: yup
      .string()
      // .required()
      .label("State")
      .oneOf(["Abia", "Lagos", "Bayelsa", "Edo"], "Choose your state"),
    senderCity: yup.string(),
  }),
  yup.object({
    receiverName: yup.string().required().label("Full name"),
    receiverEmail: yup.string().required().email().label("Email address"),
    receiverPhone: yup.string().required().label("Phone number"),
    receiverAddress: yup.string().required().label("Address"),
    receiverCountry: yup
      .string()
      // .required()
      .label("Country")
      .oneOf(
        ["California", "Colorado", "Florida", "Georgia", "Texas", "Wyoming"],
        "Choose your country"
      ),
    receiverState: yup
      .string()
      // .required()
      .label("State")
      .oneOf(["Abia", "Lagos", "Bayelsa", "Edo"], "Choose your state"),
    receiverCity: yup.string(),
  }),
  // yup.object({
  //   weight: yup.string().required().label("Weight"),
  // }),
];

/**
 * Only Called when the last step is submitted
 */

const price = ref(0);
const weight = ref(0);
const emit = defineEmits(["submitOrder"]);

const handleIdx = (params) => {
  console.log("params: ", params);
  let weightArr = [];
  descFields.value.map((item) => weightArr.push(parseInt(item.weight)));
  weight.value = weightArr.reduce((prevVal, currVal) => prevVal + currVal, 0);
  price.value = new Intl.NumberFormat().format(weight.value * 2500);
};

const onSubmit = (formObj) => {
  const formatted = date.format(new Date(), "normalDateWithWeekday");
  const array = ["New", "Pending", "Delivered", "Cancelled"];

  formObj.items = descFields.value;
  formObj.serviceType = service_type.value;
  formObj.mode = mode.value;
  formObj.insurance = insurance.value;
  formObj.waybill = trackingNumber();
  formObj.date = formatted;
  formObj.weight = weight.value;
  formObj.price = price.value;
  formObj.status = getRandomItem(array);

  // form.value = JSON.stringify(formObj, null, 2);

  emit("submitOrder", formObj);
};
</script>

<template>
  <OrderFormWizard :validation-schema="validationSchema" @submit="onSubmit" @currentStepIdx="handleIdx">
    <OrderFormStep>
      <v-row class="align-center">
        <v-col cols="12" sm="8">
          <h4>{{ selected }}</h4>
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

      <v-row>
        <v-col cols="12">
          {{ senderName }}
          <Field name="senderName" v-slot="{ field, errors }">
            <v-text-field v-model.trim.lazy="senderName" density="compact" v-bind="field" label="Name of sender"
              :error-messages="errors" variant="underlined" :counter="2" />
          </Field>
        </v-col>

        <v-col cols="12" sm="6">
          <Field name="senderEmail" v-slot="{ field, errors }">
            <v-text-field type="email" v-model.trim.lazy="senderEmail" v-bind="field" density="compact"
              label="Sender email" :error-messages="errors" variant="underlined" />
          </Field>
        </v-col>
        <v-col cols="12" sm="6">
          <Field name="senderPhone" v-slot="{ field, errors }">
            <v-text-field type="tel" v-model.trim.lazy="senderPhone" v-bind="field" density="compact" variant="underlined"
              :counter="7" :error-messages="errors" label="Phone number" />
          </Field>
        </v-col>

        <v-col cols="12" sm="12">
          <Field name="senderAddress" v-slot="{ field, errors }">
            <v-textarea v-model.trim.lazy="senderAddress" v-bind="field" density="compact" variant="underlined" clearable
              :error-messages="errors" label="Sender address" rows="2" />
          </Field>
        </v-col>

        <v-col cols="12" sm="6" md="4">
          <Field name="senderCountry" v-slot="{ field, errors }">
            <v-select v-model.trim.lazy="senderCountry" v-bind="field" density="compact" variant="underlined" :items="[
                'California',
                'Colorado',
                'Florida',
                'Georgia',
                'Texas',
                'Wyoming',
              ]" :error-messages="errors" label="Country" />
          </Field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <Field name="senderState" v-slot="{ field, errors }">
            <v-select v-model.trim.lazy="senderState" v-bind="field" density="compact" variant="underlined"
              :items="['Abia', 'Lagos', 'Bayelsa', 'Edo']" :error-messages="errors" label="State" />
          </Field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <Field name="senderCity" v-slot="{ field, errors }">
            <v-select v-model.trim.lazy="senderCity" v-bind="field" density="compact" variant="underlined"
              :items="['Lagos Island', 'Surulere', 'Mainland']" :error-messages="errors" label="City" />
          </Field>
        </v-col>

        <v-col cols="12">
          <Field name="draft" :value="true" type="checkbox" v-slot="{ value, handleChange }">
            <v-checkbox :model-value="value" @update:modelValue="handleChange" label="Save to draft?" color="orange" />
          </Field>
        </v-col>
      </v-row>
    </OrderFormStep>

    <OrderFormStep>
      <v-row>
        <v-col cols="12">
          <Field name="receiverName" v-slot="{ field, errors }">
            <v-text-field v-model="receiverName" density="compact" v-bind="field" label="Name of receiver"
              :error-messages="errors" variant="underlined" :counter="2" />
          </Field>
        </v-col>

        <v-col cols="12" sm="6">
          <Field name="receiverEmail" v-slot="{ field, errors }">
            <v-text-field type="email" v-model="receiverEmail" v-bind="field" density="compact" label="Receiver email"
              :error-messages="errors" variant="underlined" />
          </Field>
        </v-col>
        <v-col cols="12" sm="6">
          <Field name="receiverPhone" v-slot="{ field, errors }">
            <v-text-field type="tel" v-model="receiverPhone" v-bind="field" density="compact" variant="underlined"
              :counter="7" :error-messages="errors" label="Phone number" />
          </Field>
        </v-col>

        <v-col cols="12" sm="12">
          <Field name="receiverAddress" v-slot="{ field, errors }">
            <v-textarea v-model="receiverAddress" v-bind="field" density="compact" variant="underlined" clearable
              :error-messages="errors" label="Receiver address" rows="2" />
          </Field>
        </v-col>

        <v-col cols="12" sm="6" md="4">
          <Field name="receiverCountry" v-slot="{ field, errors }">
            <v-select v-model="receiverCountry" v-bind="field" density="compact" variant="underlined" :items="[
                'California',
                'Colorado',
                'Florida',
                'Georgia',
                'Texas',
                'Wyoming',
              ]" :error-messages="errors" label="Country" />
          </Field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <Field name="receiverState" v-slot="{ field, errors }">
            <v-select v-model="receiverState" v-bind="field" density="compact" variant="underlined"
              :items="['Abia', 'Lagos', 'Bayelsa', 'Edo']" :error-messages="errors" label="State" />
          </Field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <Field name="receiverCity" v-slot="{ field, errors }">
            <v-select v-model="receiverCity" v-bind="field" density="compact" variant="underlined"
              :items="['Lagos Island', 'Surulere', 'Mainland']" :error-messages="errors" label="City" />
          </Field>
        </v-col>

        <v-col cols="12">
          <Field name="draft" :value="true" type="checkbox" v-slot="{ value, handleChange }">
            <v-checkbox :model-value="value" @update:modelValue="handleChange" label="Save to draft?" color="orange" />
          </Field>
        </v-col>
      </v-row>
    </OrderFormStep>

    <OrderFormStep>
      <v-row v-for="(textField, i) in descFields" :key="i">
        <div v-if="i != 0" class="my-8 w-100 border-sm bg-red" />
        <v-col cols="12">
          <v-textarea v-model.trim.lazy="textField.description" class="selectable" density="compact" variant="underlined"
            clearable label="Description" rows="1" />
        </v-col>
        <v-col cols="12">
          <v-text-field type="number" v-model.trim.lazy="textField.quantity" class="selectable" density="compact"
            label="Quantity" variant="underlined" />
        </v-col>
        <v-col cols="12">
          <v-text-field v-model.trim.lazy="textField.weight" class="selectable" density="compact" variant="underlined"
            label="Weight (Kg)" />
        </v-col>
        <v-col cols="12">
          <div class="d-flex justify-space-between">
            <v-text-field type="number" v-model.trim.lazy="textField.item_value" class="selectable" density="compact"
              variant="underlined" label="Item value" />

            <v-btn v-if="i != 0" size="small" @click="remove(i)" color="red-darken-3" class="ms-2" icon>
              <v-icon>mdi-trash-can-outline</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12 my-8">
          <v-btn @click="add" color="green" class="w-100 rounded-pill">Add another item</v-btn>
        </v-col>
      </v-row>
    </OrderFormStep>

    <OrderFormStep>
      <v-row class="checked">
        <v-col cols="12">
          <h3>Select Service Type</h3>

          <v-radio-group v-model="service_type">
            <v-radio label="Regular" color="orange" value="regular"></v-radio>
            <small class="text-grey">Normal delivery channel</small>
            <v-radio label="Extended" color="orange-darken-3" value="extended"></v-radio>
            <small class="text-grey">Faster delivery channel</small>
          </v-radio-group>
        </v-col>
        <v-col cols="12">
          <h3>Mode</h3>
          <v-radio-group v-model="mode">
            <v-radio label="Drop-off" color="orange" value="drop"></v-radio>
            <small class="text-grey">The shipper will drop off the item at one of our locations</small>
            <v-radio label="Pickup" color="orange-darken-3" value="pick"></v-radio>
            <small class="text-grey">This item should be picked up by a courier from the origin</small>
          </v-radio-group>
        </v-col>
      </v-row>
    </OrderFormStep>

    <OrderFormStep>
      <v-row class="checked">
        <v-col cols="12">
          <h3>Apply Insurance</h3>

          <v-radio-group v-model="insurance">
            <v-radio label="None" color="orange" value=""></v-radio>
            <v-radio label="Standard" color="orange" value="standard"></v-radio>
            <small class="text-grey">
              Insures your eligible shipments at a value of N30,000 for no additional cost
            </small>
            <v-radio label="Extended" color="orange-darken-3" value="extended"></v-radio>
            <small class="text-grey">
              Eligible shipments valued up to N200,000 for N1,500. Shipments valued above
              N200,000 are limited to an insurance cover of N200,000 or shipped entirely
              at the sender's risk
            </small>
          </v-radio-group>
        </v-col>
      </v-row>
    </OrderFormStep>

    <OrderFormStep>
      <v-row class="mb-8">
        <v-col cols="12">
          <h3>Quote</h3>

          <v-card class="text-center">
            <v-card-title class="text-center">
              <h3>
                {{ senderState + " (" + getFirstLetters(senderState) + ")" }} |
                {{ senderCountry + " (" + getFirstLetters(senderCountry) + ")" }}
              </h3>
            </v-card-title>
            <v-card-text class="card-text">TO</v-card-text>
            <v-card-title>
              <h3>
                {{ receiverState + " (" + getFirstLetters(receiverState) + ")" }} |
                {{ receiverCountry + " (" + getFirstLetters(receiverCountry) + ")" }}
              </h3>
            </v-card-title>

            <hr />

            <v-card-title>
              <h1>₦{{ price }}</h1>
            </v-card-title>
            <v-card-subtitle>
              <h6>{{ weight }}KG</h6>
            </v-card-subtitle>
            <v-card-text class="my-3">
              Rates and courier availability are based on your specified route and
              estimated weight
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </OrderFormStep>

    <OrderFormStep>
      <h3>Summary & Payment</h3>

      <v-card class="text-center mb-8">
        <v-card-title>
          <h1>₦{{ price }}</h1>
        </v-card-title>
        <v-card-subtitle>
          <h6>{{ weight }}KG</h6>
        </v-card-subtitle>
        <v-card-text>
          Rates and courier availability are based on your specified route and estimated
          weight
        </v-card-text>
      </v-card>

      <div class="summary grid-sm grid-md my-3">
        <details>
          <summary style="cursor: pointer">
            <span class="border-0 border-danger border-bottom">Origin</span>
          </summary>
          <p>
            <strong>Sender Name:</strong>
            <samp>{{ senderName }}</samp>
          </p>
          <p>
            <strong>Sender Phone:</strong>
            <samp>{{ senderPhone }}</samp>
          </p>
          <p>
            <strong>Sender Email:</strong>
            <samp>{{ senderEmail }}</samp>
          </p>
          <p>
            <strong>Originating Country:</strong>
            <samp>{{ senderCountry ?? "-" }}</samp>
          </p>
          <p>
            <strong>Address:</strong>
            <samp>{{ senderAddress ?? "-" }}</samp>
          </p>
          <p>
            <strong>Originating State:</strong>
            <samp>{{ senderState ?? "-" }}</samp>
          </p>
        </details>

        <details>
          <summary style="cursor: pointer">
            <span class="border-0 border-danger border-bottom">Destination</span>
          </summary>
          <p>
            <strong>Receiver Name:</strong>
            <samp>{{ receiverName }}</samp>
          </p>
          <p>
            <strong>Receiver Phone:</strong>
            <samp>{{ receiverPhone }}</samp>
          </p>
          <p>
            <strong>Receiver Email:</strong>
            <samp>{{ receiverEmail }}</samp>
          </p>
          <p>
            <strong>Destination Country:</strong>
            <samp>{{ receiverCountry ?? "-" }}</samp>
          </p>
          <p>
            <strong>Address:</strong>
            <samp>{{ receiverAddress ?? "-" }}</samp>
          </p>
          <p>
            <strong>Destination State:</strong>
            <samp>{{ receiverState ?? "-" }}</samp>
          </p>
        </details>
      </div>
    </OrderFormStep>
  </OrderFormWizard>
</template>

<style scoped>
input,
select {
  margin: 10px 0;
  display: block;
}

.summary {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  gap: 20px;
}

details p {
  margin-bottom: 0.3rem !important;
  background-color: var(--aaj-gray-light);
  padding: 0.3rem;
}

samp {
  display: block;
}
</style>
