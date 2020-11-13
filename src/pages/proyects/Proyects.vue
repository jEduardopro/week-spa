<template>
  <div>
    <toolbar title="Proyects"></toolbar>
    <!-- <v-card-title primary-title> Proyectos </v-card-title> -->
    <v-container>
      <v-layout class="proyects-wrap py-5 px-12" row wrap>
        <v-col class="col-lg-3 col-md-6 col-xs-12 content-proyect pa-0">
          <ProyectNewCard />
        </v-col>
        <template v-if="proyects.length">
          <v-col
            v-for="(proyect, index) in proyects"
            :key="index"
            class="col-lg-3 col-md-6 col-xs-12 content-proyect pa-0"
          >
            <ProyectCard :proyect="proyect" />
          </v-col>
        </template>
      </v-layout>
      <DeleteConfirmation />
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
  created() {
    this.getProyects();
  },
};
</script>
