<script setup>
import { useTheme } from "vuetify";
const theme = useTheme();
const toggleTheme = () =>
  (theme.global.name.value = theme.global.current.value.dark ? "light" : "dark");

const drawer = ref(false);

const menuItems = [
  { title: "About Us", path: "#about" },
  { title: "Services", path: "#services" },
  { title: "FAQs", path: "#faq" },
  { title: "Contact Us", path: "#contact" },
];
</script>

<template>
  <v-layout>
    <v-app-bar fixed :color="$vuetify.theme.name == 'dark' ? 'grey-darken-4' : 'white'">
      <v-container>
        <v-toolbar :color="$vuetify.theme.name == 'dark' ? 'grey-darken-4' : 'white'" dark>
          <v-toolbar-title class="mt-2">
            <nuxt-link to="/">
              <img v-show="$vuetify.theme.name == 'dark'" src="@/assets/aaj/aaj-logo.png" width="60" alt="logo" />
              <img v-show="$vuetify.theme.name == 'light'" src="@/assets/aaj/logo.png" width="60" alt="logo" />
            </nuxt-link>
          </v-toolbar-title>

          <v-spacer />

          <v-toolbar-items variant="plain" class="hidden-xs">
            <v-btn v-for="menu in menuItems" :key="menu.title" class="text-capitalize" :to="menu.path">
              {{ menu.title }}
            </v-btn>
          </v-toolbar-items>

          <v-spacer />

          <v-toolbar-items class="hidden-xs me-5">
            <v-btn to="/login" variant="text" class="text-capitalize">Sign In</v-btn>
          </v-toolbar-items>

          <template v-slot:append>
            <v-btn :color="$vuetify.theme.name == 'dark' ? 'yellow darken-3' : 'dark'" :icon="$vuetify.theme.name == 'dark'
                ? 'mdi-weather-night'
                : 'mdi-weather-sunny'
              " size="small" elevation="1" @click="toggleTheme">
            </v-btn>

            <v-app-bar-nav-icon class="hidden-sm-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          </template>
        </v-toolbar>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" location="right" temporary>
      <v-list>
        <v-list-item v-for="menu in menuItems" :key="menu.title" class="justify-center">
          <v-btn variant="plain" class="text-capitalize hidden-sm-only" text :to="menu.path">
            {{ menu.title }}
          </v-btn>
        </v-list-item>

        <v-list-item class="hidden-sm-only text-center">
          <v-btn to="/login" text variant="plain" class="text-capitalize">Sign In</v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<style lang="scss" scoped></style>
