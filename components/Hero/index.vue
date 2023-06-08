<script setup>
const trackerId = ref()
const loading = ref(false)

const track = () => {
  loading.value = true
  trackerId.value = 'Wait for it...'
  setTimeout(() => {
    loading.value = false
    trackerId.value = ''
  }, 2000)
}

const slides = [
  {
    title: 'Trusted logistics \n\r service provider.',
    subtitle:
      'Improves customer retention. AAJ Express is here \n\r to help with that',
    imgSrc: 'assets/img/slider.png',
  },
  {
    title: 'Build trust with your customers \n\r by choosing AAJ Express',
    subtitle: 'Fast and reliable deliveries',
    imgSrc: 'assets/img/slider1.png',
  },
  {
    title: 'Fast and reliable deliveries',
    subtitle:
      'Improves customer retention. AAJ Express is here \r to help with that',
    imgSrc: 'assets/img/load.png',
  },
]

// const colors = ['lightgrey', 'lightgrey', 'lightgrey']
</script>
  
<template>
  <div class="hero elevation-1">
    <v-hover v-slot="{ hover }">
      <v-carousel height="400" hide-delimiters show-arrows="hover" :cycle="hover ? true : false" interval="6000">
        <v-carousel-item v-for="(slide, i) in slides" :key="i" fade>
          <v-sheet :style="{ backgroundImage: `url(${slide.imgSrc})` }" height="100%" class="sheet">
            <v-container grid-list-xs>
              <v-row>
                <v-col>
                  <div class="d-flex flex-column justify-space-between hero-content">
                    <div>
                      <h1 class="text-h4 font-weight-bold mb-2 w-custom text-wrap"
                        :class="$vuetify.theme.name == 'dark' ? 'text-h4-dark' : 'dark'">
                        {{ slide.title }}
                      </h1>
                      <h3 class="font-weight-light">
                        {{ slide.subtitle }}
                      </h3>
                    </div>
                    <div class="">
                      <v-row>
                        <v-col cols="12" md="6" sm="6">
                          <v-text-field v-model="trackerId" type="text" clearable density="compact" variant="outlined"
                            rounded="0" hide-details placeholder="Input tracking ID to track your goods">
                            <template v-slot:append-inner>
                              <v-fade-transition leave-absolute>
                                <v-progress-circular v-if="loading" color="warning" indeterminate
                                  size="24"></v-progress-circular>
                                <v-btn v-else elevation="0" density="comfortable"
                                  class="bg-yellow-darken-3 text-capitalize" @click="track">
                                  Search &#8594;
                                </v-btn>
                              </v-fade-transition>
                            </template>
                          </v-text-field>
                          <small>Send . Track . Receive</small>
                        </v-col>
                      </v-row>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-hover>
    <div class="position-abs">
      <HeaderCard />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.w-custom {
  width: 75%;
}

.text-h4-dark {
  color: #ff9800;
}

.sheet {
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
}

.v-field .v-field--appended {
  // padding-right: 6px !important;
  padding-inline-end: 0 !important;
  -webkit-padding-end: 6px !important;
  // padding-inline-end: 6px !important;
}

.hero {
  position: relative;

  .position-abs {
    position: absolute;
    top: auto;
    right: 0;
    left: 0;
    bottom: -25%;
    z-index: 1;
  }

  .hero-content {
    margin: 60px 0;
    height: 25vh;
  }
}


@media only screen and (max-width: 700px) {
  .sheet {
    background-image: none !important;
  }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .w-custom {
    width: 100%;
  }

  .hero {
    .position-abs {
      position: relative;
    }

    .hero-content {
      margin: 48px 0 30px;
      height: 100%;
    }
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {

  .hero {
    .position-abs {
      position: relative;
    }
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .hero {
    .position-abs {
      position: absolute;
      bottom: -25%;
    }

    .hero-content {
      margin: 20px 0;
      height: 100%;
    }
  }
}
</style>