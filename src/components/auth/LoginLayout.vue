<template>
  <v-container class="grey lighten-5" fill-height fluid>
    <v-row class="d-flex flex-row ma-0 pa-0 justify-center">
      <v-col class="col-lg-10 col-md-12 col-sm-8 col-xs-12">
        <v-card elevation="10" class="ma-0 pa-0">
          <v-row
            class="d-flex ma-0 pa-0 flex-lg-row flex-xs-column mb-sm-5 justify-center"
          >
            <v-col
              class="col-lg-4 cyan lighten-5 col-md-6 col-sm-12 text-center d-flex flex-column justify-center"
            >
              <div class="pa-lg-9 pa-md-6 pa-sm-3">
                <div class="logo text-center mb-5">
                  <img
                    :src="require('@/assets/icono-week.png')"
                    width="25%"
                    alt=""
                  />
                </div>
                <slot name="form"></slot>
              </div>
            </v-col>
            <v-col
              class="col-lg-8 col-md-6 col-sm-12 text-center d-none d-md-flex"
            >
              <v-carousel
                cycle
                height="550"
                light
                hide-delimiter-background
                :show-arrows="false"
              >
                <v-carousel-item v-for="(slide, i) in slides" :key="i">
                  <h2 class="text-center">{{ slide.text }}</h2>
                  <img
                    :src="require(`@/assets/${slide.img}`)"
                    width="460px"
                    height="520px"
                    alt=""
                  />
                </v-carousel-item>
              </v-carousel>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    slides: [
      {
        text:
          "Empieza a plasmar tus ideas, mediante Proyectos, Tareas y listas de Pendientes.",
        img: "slide1.jpg",
      },
      {
        text:
          "Detecta tus oprtunidades de mejora y avanza en tus tareas de manera eficaz.",
        img: "slide2.jpg",
      },
    ],
  }),
};
</script>
