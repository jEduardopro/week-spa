<template>
  <div>
    <v-card @click="showProyect" width="120px" class="proyect-item" color="red">
      <ActionsMenu />
      <v-card-text class="mt-2">
        <div class="text--primary text-center">
          <v-icon large color="white">mdi-layers-triple</v-icon>
        </div>
      </v-card-text>
    </v-card>
    <p class="caption pa-0 ma-0 text-center">proyect</p>
  </div>
</template>

<script>
export default {
  methods: {
    showProyect() {
      this.$router.push({
        name: "ProyectTasksList",
        params: { id: "000000125485113131121" },
      });
    },
  },
};
</script>