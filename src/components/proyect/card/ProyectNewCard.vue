<template>
  <div class="content-proyect-item proyect-new">
    <v-card @click="showDialogToAddProyect" outlined flat class="proyect-item">
      <v-card-text>
        <div class="text--primary text-center">
          <v-icon large>mdi-plus</v-icon>
        </div>
      </v-card-text>
    </v-card>
    <p class="caption pa-0 ma-0 text-center">nuevo proyecto</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("proyect", ["showDialogToAddProyect"]),
  },
};
</script>