import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VDataTable } from 'vuetify/labs/VDataTable'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: false,
    components: { ...components, VDataTable },
    directives,
    theme: {
      defaultTheme: "dark",
      // themes: {
      //   light: {
      //     dark: false,
      //     colors: {
      //       primary: "#ad1c3d",
      //       "page-header-background": "#d7d7ce",
      //       "page-background": "#cdcdc1",
      //       "table-header": "#cdcdc1",
      //       background: "#c0c0b5",
      //       "header-background": "#b5b5a6",
      //       "info-text": "#666660",
      //     },
      //   },
      //   dark: {
      //     dark: true,
      //     colors: {
      //       primary: "#52E3C2",
      //       "page-header-background": "#282831",
      //       "page-background": "#32323E",
      //       "table-header": "#2e2e2e",
      //       background: "red",
      //       "header-background": "#4a4a59",
      //       "info-text": "#99999F",
      //     },
      //   },
      // },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
