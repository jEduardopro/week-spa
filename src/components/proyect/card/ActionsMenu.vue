<template>
  <v-menu bottom right offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon :small="small" :dark="darkButton" v-bind="attrs" v-on="on">
        <v-icon>{{ icon ? icon : "mdi-dots-horizontal" }}</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-menu right offset-x :close-on-content-click="false">
        <template v-slot:activator="{ on, attrs }">
          <v-list-item v-bind="attrs" v-on="on">
            <v-list-item-icon>
              <v-icon :color="proyect.color"> mdi-square-rounded</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Define un color</v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon>mdi-chevron-right</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </template>

        <v-card>
          <v-container>
            <v-row
              v-for="(row, index) in dataColors"
              :key="row + index"
              class="pa-0 ma-0"
            >
              <v-col
                v-for="(color, idx) in row"
                :key="color + idx"
                class="pa-0 ma-0"
              >
                <v-btn
                  @click="setColor({ proyect, color })"
                  small
                  icon
                  class="pa-0 ma-0"
                >
                  <v-icon :color="color">mdi-square-rounded</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-menu>
      <v-list-item @click="showDialogToEditProyect(proyect)" link>
        <v-list-item-icon>
          <v-icon>mdi-lead-pencil</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Editar nombre y descripcion</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-if="deleteAction" @click="showDeleteDialog(proyect)" link>
        <v-list-item-icon>
          <v-icon class="red--text">mdi-trash-can-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="red--text"
            >Eliminar proyecto</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { colors } from "@/utils/proyect-colors.js";
import { mapActions } from "vuex";
export default {
  props: ["proyect", "icon", "small", "darkButton", "deleteAction"],
  computed: {
    dataColors() {
      return colors;
    },
  },
  methods: {
    ...mapActions("proyect", [
      "setColor",
      "showDialogToEditProyect",
      "showDeleteDialog",
    ]),
  },
};
</script>