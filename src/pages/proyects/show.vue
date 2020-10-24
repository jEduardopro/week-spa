<template>
  <div>
    <!-- <v-card-title primary-title> Proyectos </v-card-title> -->
    <v-container>
      <v-tabs>
        <v-tab :to="{ name: 'ProyectShowList' }">Lista </v-tab>
        <v-tab :to="{ name: 'ProyectShowBoard' }">Tablero</v-tab>
      </v-tabs>
      <div class="py-5">
        <router-view></router-view>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
  }),
};
</script>
