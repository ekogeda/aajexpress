<script setup>
import { useTheme } from "vuetify";

const route = useRoute()
useHead({
  meta: [{ property: 'og:title', content: `AAJExp - ${route.meta.title}` }]
})

const { $toast } = useNuxtApp();
const router = useRouter();
const theme = useTheme();
const toggleTheme = () =>
  (theme.global.name.value = theme.global.current.value.dark ? "light" : "dark");

const drawer = ref(true)
const rail = ref(true)

const items = [
  { title: 'Dashboard', icon: 'mdi-home-city' },
  { title: 'Profile', icon: 'mdi-account-circle' },
  { title: 'Order', icon: 'mdi-van-utility' },
  { title: 'Track', icon: 'mdi-access-point-network' },
  { title: 'Get Estimate', icon: 'mdi-calculator' },
  { title: 'Report', icon: 'mdi-chart-line' },
  { title: 'Transaction', icon: 'mdi-alpha-t-circle-outline' },
  { title: 'Shopping', icon: 'mdi-shopping-outline' },
  { title: 'Wallet', icon: 'mdi-wallet-bifold-outline' },
  { title: 'Settings', icon: 'mdi-cog-outline' },
  { title: 'Logout', icon: 'mdi-power' },
]

const icons = [
  { title: 'Search', icon: 'mdi-magnify' },
  { title: 'Notification', icon: 'mdi-bell-badge' },
  { title: 'Settings', icon: 'mdi-cog' }
]

const onChangeLink = (params) => {
  if (params != 'logout') {
    console.log('Link:', params)
    // $toast.success('You did it!', { position: 'top-right' });

    params == 'dashboard' ? router.push({ path: '/users' }) : router.push({ path: '/users/' + params })
  } else {
    $toast.success('Thank you for using AAJExpress!', { position: 'top-right' });
    router.push({ path: '/' })
  }
}

</script>

<template>
  <div class="admin-layout">
    <v-card>
      <v-layout>
        <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false">
          <v-list-item-title class="my-3 text-center">
            <nuxt-link to="/">
              <img v-show="$vuetify.theme.name == 'dark'" src="@/assets/aaj/aaj-logo.png" width="50" alt="logo" />
              <img v-show="$vuetify.theme.name == 'light'" src="@/assets/aaj/logo.png" width="50" alt="logo" />
            </nuxt-link>
          </v-list-item-title>

          <v-divider></v-divider>

          <v-list-item title="James Smith" prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" nav>
            <template v-slot:append>
              <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
            </template>
          </v-list-item>

          <v-list density="compact" nav>
            <v-list-item v-for="(item, i) in items" :key="i" :prepend-icon="item.icon" :title="item.title"
              :value="item.title" @click="onChangeLink((item.title).toLowerCase())"></v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-app-bar fixed :color="$vuetify.theme.name == 'dark' ? 'grey-darken-4' : 'white'">
          <v-toolbar title="Dashboard" :color="$vuetify.theme.name == 'dark' ? 'grey-darken-4' : 'white'" dark>

            <v-spacer />

            <v-btn :color="$vuetify.theme.name == 'dark' ? 'yellow darken-3' : 'dark'" @click="toggleTheme" icon>
              <v-icon>
                {{ $vuetify.theme.name == 'dark' ? 'mdi-weather-night' : 'mdi-weather-sunny' }}
              </v-icon>
            </v-btn>

            <v-sheet class="hidden-xs">
              <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-bell-badge</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-cog</v-icon>
              </v-btn>
            </v-sheet>

            <v-menu transition="scale-transition">
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="hidden-sm-and-up" icon>
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>

              <v-list>
                <v-list-item v-for="(icon, i) in icons" :key="i" :title="icon.title">
                  <template v-slot:prepend>
                    <v-btn size="x-small" variant="text" class="me-1" icon>
                      <v-icon>{{ icon.icon }}</v-icon>
                    </v-btn>
                  </template>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-toolbar>
        </v-app-bar>

        <v-main>
          <slot />

          <UserFooter />
        </v-main>

      </v-layout>

    </v-card>
  </div>
</template>

<style lang="scss" scoped></style>