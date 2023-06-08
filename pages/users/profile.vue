<script setup>
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup';

definePageMeta({ layout: "users" });

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().min(7).required(),
  password: yup.string().min(8).required(),
  confirmPass: yup.string().oneOf([yup.ref("password"), null], "Passwords must match"),
  gender: yup.string().required(),
});

const { handleSubmit } = useForm({
  validationSchema,
});

const name = useField('name', validationSchema)
const email = useField('email', validationSchema);
const phone = useField('phone', validationSchema)
const password = useField('password', validationSchema);
const confirmPass = useField('confirmPass', validationSchema)
const gender = useField('gender', validationSchema)

const items = ref([
  'Male',
  'Female',
  'Others',
])

// name.value.value = 'Jane Doe'
// email.value.value = 'jane_doe@mail.com'
// phone.value.value = '08012345678'
// gender.value.value = 'Male'



const update = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2))
})

const isEyeOpen = ref(false)
const isConfirmEyeOpen = ref(false)

</script>
  
<template>
  <v-container fluid class="my-16">
    <v-layout column>
      <v-row>
        <v-col cols="12" sm="8" class="mx-auto">
          <v-card class="my-4 px-4 elevation-5">
            <v-card-text class="d-flex justify-space-between align-center">
              <h3>Edit profile</h3>
              <p>User ID 1234567</p>
            </v-card-text>

            <v-divider />

            <v-card-title class="text-center">
              <v-avatar size="96" class="me-4">
                <img src="@/assets/aaj/thumbs-up.png" class="w-100" alt="Avatar">
              </v-avatar>
              <v-btn class="text-capitalize" @click="openAvatarPicker">Change Avatar</v-btn>
            </v-card-title>

            <v-card-text>
              <v-row>
                <v-col cols="12" sm="8" xs="12">
                  <v-text-field type="text" v-model="name.value.value" density="compact" variant="underlined" :counter="2"
                    :error-messages="name.errorMessage.value" label="Full name"></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" xs="12">
                  <v-select v-model="gender.value.value" :items="items" density="compact" variant="underlined"
                    :error-messages="gender.errorMessage.value" label="Gender"></v-select>
                </v-col>
                <v-col cols="12" sm="6" xs="12">
                  <v-text-field type="email" v-model="email.value.value" density="compact" variant="underlined"
                    :error-messages="email.errorMessage.value" label="E-mail"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" xs="12">
                  <v-text-field type="tel" v-model="phone.value.value" density="compact" variant="underlined" :counter="7"
                    :error-messages="phone.errorMessage.value" label="Phone number"></v-text-field>
                </v-col>

                <h3>Change password</h3>

                <v-divider class="my-5" />

                <v-col cols="12" sm="6" xs="12">
                  <v-text-field v-model="password.value.value" density="compact" variant="underlined"
                    :append-icon="isEyeOpen ? 'mdi-eye' : 'mdi-eye-off'" :type="isEyeOpen ? 'text' : 'password'"
                    label="Password" :counter="8" :error-messages="password.errorMessage.value"
                    @click:append="isEyeOpen = !isEyeOpen"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" xs="12">
                  <v-text-field v-model="confirmPass.value.value" density="compact" variant="underlined"
                    :append-icon="isConfirmEyeOpen ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="isConfirmEyeOpen ? 'text' : 'password'" label="Confirm password" :counter="8"
                    :error-messages="confirmPass.errorMessage.value"
                    @click:append="isConfirmEyeOpen = !isConfirmEyeOpen"></v-text-field>
                </v-col>

              </v-row>
            </v-card-text>

            <v-btn flat color="orange-darken-3" class="rounded-xl text-capitalize d-block mx-auto mb-5" :loading="loading"
              @click.native="update">
              <v-icon>mdi-check</v-icon>
              Save Changes
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-layout>
    <!-- <avatar-picker v-model="showAvatarPicker" :current-avatar="form.avatar" @selected="selectAvatar"></avatar-picker> -->
  </v-container>
</template>

<script>
export default {
  pageTitle: 'My Profile',
  data() {
    return {
      loading: false,
      form: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@doe.com',
        avatar: 'MALE_CAUCASIAN_BLOND_BEARD'
      },
      showAvatarPicker: false
    }
  },
  methods: {
    openAvatarPicker() {
      this.showAvatarPicker = true
    },
    selectAvatar(avatar) {
      this.form.avatar = avatar
    }
  }
}
</script>


<style lang="scss" scoped></style>