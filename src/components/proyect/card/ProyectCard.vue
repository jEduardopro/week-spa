<template>
  <div class="content-proyect-item">
    <v-card
      @click="showProyect"
      class="ma-0 pa-0 proyect-item"
      :color="proyect.color"
    >
      <ActionsMenu darkButton :proyect="proyect" />
      <v-card-text>
        <div class="text--primary text-center">
          <v-icon large color="white">mdi-layers-triple</v-icon>
        </div>
      </v-card-text>
    </v-card>
    <p class="caption proyect-item-name text-center">
      {{
        proyect.name.length > 45
          ? proyect.name.substr(0, 40) + "..."
          : proyect.name
      }}
    </p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["proyect"],
  methods: {
    showProyect() {
      this.$router.push({
        name: "ProyectTasksList",
        params: { id: this.proyect.id },
      });
    },
  },
};
</script>