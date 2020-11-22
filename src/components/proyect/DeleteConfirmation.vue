<template>
  <v-dialog
    v-model="deleteDialog"
    max-width="520px"
    transition="dialog-transition"
  >
    <v-card>
      <v-card-title primary-title>
        Estas seguro de eliminar el {{ currentProyect.name }}?
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <p class="mt-5">
          Esta accion no se puede revertir, ademas se eliminaran:
        </p>
        <ul>
          <li>Tareas sin asignar</li>
          <li>Tareas asignadas</li>
          <li>Tareas completadas</li>
        </ul>
        <!-- <div class="text--primary"></div> -->
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="secondary" text @click.stop="deleteDialog = false"
          >Cancelar</v-btn
        >
        <v-btn color="red" text @click.stop="remove"> Eliminar </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { mapFields } from "vuex-map-fields";
export default {
  computed: {
    ...mapFields("proyect", ["deleteDialog"]),
    ...mapGetters("proyect", ["currentProyect"]),
  },
  methods: {
    ...mapActions("proyect", ["remove"]),
  },
};
</script>