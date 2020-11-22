<template>
  <v-dialog
    v-model="showForm"
    max-width="500px"
    transition="scroll-y-reverse-transition"
  >
    <v-card>
      <v-card-title>
        Crear proyecto
        <v-spacer></v-spacer>
        <v-btn @click="showForm = false" small fab elevation="0" text>
          <v-icon color="grey darken-1">mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <div class="text--primary">
          <v-text-field
            type="text"
            v-model="form.name"
            label="Nombre del proyecto"
            placeholder="Mi primer proyecto"
          ></v-text-field>
          <v-textarea
            label="Descripcion del proyecto"
            v-model="form.description"
            auto-grow
            placeholder="Proyecto escolar"
          ></v-textarea>
        </div>
        <v-btn
          block
          @click="save"
          :loading="loadingButton"
          :disabled="loadingButton"
          color="primary"
        >
          guardar
        </v-btn>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { mapFields } from "vuex-map-fields";
import debounce from "lodash.debounce";
export default {
  computed: {
    ...mapFields("proyect", ["showForm", "form"]),
    ...mapGetters(["loadingButton"]),
  },
  watch: {
    "form.name"() {
      this.saveAfterwards();
    },
    "form.description"() {
      this.saveAfterwards();
    },
  },
  methods: {
    ...mapActions("proyect", ["save"]),
    saveAfterwards: debounce(function () {
      if (this.form.id) {
        this.save();
      }
    }, 500),
  },
};
</script>