<template>
  <div>
    <!-- <v-card-title primary-title> Proyectos </v-card-title> -->
    <v-container>
      <v-layout class="proyects-wrap py-5 px-12" row wrap>
        <v-col
          class="col-lg-3 col-md-6 col-xs-12 content-proyect pa-1 d-flex flex-column justify-center align-center"
        >
          <ProyectNewCard />
        </v-col>
        <v-col
          class="col-lg-3 col-md-6 col-xs-12 content-proyect pa-1 d-flex flex-column justify-center align-center"
        >
          <ProyectCard />
        </v-col>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapGetters("proyect", ["proyects"]),
  },
  methods: {
    ...mapActions("proyect", ["getProyects"]),
  },
};
</script>
