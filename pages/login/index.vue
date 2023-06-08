<script setup>
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup';

const router = useRouter();

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const { handleSubmit, handleReset } = useForm({
  validationSchema,
});

const email = useField('email', validationSchema)
const password = useField('password', validationSchema)

const submit = handleSubmit(values => {
  console.log(JSON.stringify(values, null, 2))
  router.push({ path: "/users" });
})

const isEyeOpen = ref(false)

</script>
    
<template>
  <v-sheet class="pa-6 mt-16" rounded>
    <v-card class="mx-auto my-16" max-width="400" title="Login to your account">
      <v-container>
        <form @submit.prevent="submit" class="mb-5">
          <v-text-field type="email" v-model="email.value.value" density="compact" variant="underlined"
            :error-messages="email.errorMessage.value" label="E-mail"></v-text-field>

          <v-text-field v-model="password.value.value" density="compact" variant="underlined"
            :append-icon="isEyeOpen ? 'mdi-eye' : 'mdi-eye-off'" :type="isEyeOpen ? 'text' : 'password'" label="Password"
            :error-messages="password.errorMessage.value" @click:append="isEyeOpen = !isEyeOpen"></v-text-field>

          <div class="mt-8">
            <v-btn color="orange-darken-3" class="me-4" type="submit">
              Login
            </v-btn>
            <v-btn @click="handleReset">
              clear
            </v-btn>
          </div>
        </form>

        <p>
          Don't have an account?
          <nuxt-link to="/signup" class="text-decoration-none">Get Started</nuxt-link>
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