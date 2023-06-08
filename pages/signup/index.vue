<script setup>
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().min(7).required(),
  password: yup.string().min(8).required(),
  confirmation: yup.string().oneOf([yup.ref("password"), null], "Passwords must match"),
  gender: yup.string().required(),
  terms: yup.bool().oneOf([true], 'You need to accept the terms and conditions').required(),
});

const { handleSubmit, handleReset } = useForm({
  validationSchema,
});

const name = useField('name', validationSchema)
const email = useField('email', validationSchema);
const phone = useField('phone', validationSchema)
const password = useField('password', validationSchema);
const confirmation = useField('confirmation', validationSchema)
const gender = useField('gender', validationSchema)
const terms = useField('terms', validationSchema)

const items = ref([
  'Male',
  'Female',
  'Others',
])

const submit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2))
})

const isEyeOpen = ref(false)
const isConfirmEyeOpen = ref(false)


</script>
    
<template>
  <v-sheet class="pa-6 mt-16" rounded>
    <v-card class="mx-auto my-16" max-width="400" title="Get started with a free account">
      <v-container>
        <form @submit.prevent="submit">
          <v-text-field type="text" v-model="name.value.value" density="compact" variant="underlined" :counter="2"
            :error-messages="name.errorMessage.value" label="Full name"></v-text-field>

          <v-text-field type="email" v-model="email.value.value" density="compact" variant="underlined"
            :error-messages="email.errorMessage.value" label="E-mail"></v-text-field>

          <v-text-field type="tel" v-model="phone.value.value" density="compact" variant="underlined" :counter="7"
            :error-messages="phone.errorMessage.value" label="Phone number"></v-text-field>

          <v-select v-model="gender.value.value" :items="items" density="compact" variant="underlined"
            :error-messages="gender.errorMessage.value" label="Gender"></v-select>

          <v-text-field v-model="password.value.value" density="compact" variant="underlined"
            :append-icon="isEyeOpen ? 'mdi-eye' : 'mdi-eye-off'" :type="isEyeOpen ? 'text' : 'password'" label="Password"
            :counter="8" :error-messages="password.errorMessage.value"
            @click:append="isEyeOpen = !isEyeOpen"></v-text-field>

          <v-text-field v-model="confirmation.value.value" density="compact" variant="underlined"
            :append-icon="isConfirmEyeOpen ? 'mdi-eye' : 'mdi-eye-off'" :type="isConfirmEyeOpen ? 'text' : 'password'"
            label="Confirm password" :counter="8" :error-messages="confirmation.errorMessage.value"
            @click:append="isConfirmEyeOpen = !isConfirmEyeOpen"></v-text-field>

          <v-checkbox v-model="terms.value.value" :error-messages="terms.errorMessage.value" value="1"
            label="I agree to terms & conditions" type="checkbox"></v-checkbox>

          <div class="mt-8">
            <v-btn color="orange-darken-3" class="me-4" type="submit">
              submit
            </v-btn>

            <v-btn @click="handleReset">
              clear
            </v-btn>
          </div>
        </form>

        <p class="my-5">
          Already have an account?
          <nuxt-link to="/login" class="text-decoration-none">Login here</nuxt-link>
        </p>
      </v-container>
    </v-card>
  </v-sheet>
</template>

<style lang="scss" scoped>
a {
  color: #FE6802;
}
</style>