<template>
  <v-container class="px-8">
    <portal :to="portalKey" v-if="portalKey">
      <v-toolbar
        flat
        class="px-4"
        style="border-bottom: 1px solid #e8ecee"
        background-color="transparent"
      >
        <v-btn
          small
          elevation="0"
          outlined
          class="text-capitalize py-3 text--secondary"
        >
          <v-icon small color="primary">mdi-check</v-icon>

          <span>Marcar como completada</span>
        </v-btn>

        <!-- <v-toolbar-title>{{ title }}</v-toolbar-title> -->
        <v-spacer></v-spacer>
        <v-btn
          fab
          small
          elevation="0"
          class="pa-0 mx-1 text--secondary"
          color="transparent"
        >
          <v-icon>mdi-thumb-up-outline</v-icon>
        </v-btn>
        <v-btn
          fab
          small
          elevation="0"
          class="pa-0 mx-1 text--secondary"
          color="transparent"
        >
          <v-icon>mdi-paperclip</v-icon>
        </v-btn>
        <v-btn
          fab
          small
          elevation="0"
          class="pa-0 mx-1 text--secondary"
          color="transparent"
        >
          <v-icon>mdi-file-tree</v-icon>
        </v-btn>
        <v-btn
          fab
          small
          elevation="0"
          class="pa-0 mx-1 text--secondary"
          color="transparent"
        >
          <v-icon>mdi-dots-horizontal</v-icon>
        </v-btn>
        <v-btn
          fab
          small
          elevation="0"
          class="pa-0 mx-1 text--secondary"
          color="transparent"
        >
          <v-icon>mdi-arrow-collapse-right</v-icon>
        </v-btn>
      </v-toolbar>
    </portal>
    <v-text-field
      label="Nombre de la tarea"
      v-model="currentTask.name"
      height="28px"
      hide-details="auto"
      class="mb-3"
    ></v-text-field>
    <v-autocomplete
      v-model="currentTask.responsable_id"
      :items="users"
      item-text="name"
      item-value="id"
      label="Responsable"
      clearable
      @change="updateResponsable"
      no-data-text="No se encontraron usuarios"
    >
    </v-autocomplete>
    <v-menu
      ref="menu1"
      v-model="datePickMenu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      max-width="290px"
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="currentTask.due_date"
          label="Fecha de fin"
          height="28px"
          hide-details="auto"
          class="mb-3"
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="currentTask.due_date"
        locale="es-es"
        no-title
        :min="nowDate"
        @input="datePickMenu = false"
      ></v-date-picker>
    </v-menu>
    <v-autocomplete
      v-model="currentTask.priority"
      :items="priorities"
      item-text="priority_text"
      item-value="priority"
      label="Prioridad"
      clearable
      no-data-text="No se encontraron prioridades"
    >
      <template v-slot:selection="{ item }">
        <v-chip :color="taskPriorityColor(item.priority_text)" x-small>
          {{ item.priority_text }}
        </v-chip>
      </template>
      <template v-slot:item="{ item }">
        <v-chip :color="taskPriorityColor(item.priority_text)" x-small>
          {{ item.priority_text }}
        </v-chip>
      </template>
    </v-autocomplete>
    <v-textarea
      v-model="currentTask.description"
      label="Descripcion de la tarea"
      auto-grow
      row-height="8"
      placeholder="Mi primer tarea"
      class="mb-0"
      hide-details="auto"
    ></v-textarea>
    <v-card-subtitle
      class="text--secondary px-0 my-0 d-flex flex-row align-center"
    >
      <!-- <span>Sub tareas</span>
      <v-spacer></v-spacer> -->
      <v-btn
        x-small
        elevation="0"
        outlined
        class="text-capitalize text--secondary"
      >
        <v-icon small>mdi-plus</v-icon>

        agregar sub tarea
      </v-btn>
    </v-card-subtitle>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { mapFields } from "vuex-map-fields";
import task from "@/mixins/task";
export default {
  mixins: [task],
  name: "TaskShow",
  props: {
    portalKey: {},
    title: {},
  },
  watch: {
    "currentTask.name"(oval, val) {
      this.updateAfterTyping();
    },
    "currentTask.description"(oval, val) {
      this.updateAfterTyping();
    },
    // "currentTask.responsable_id"(oval, val) {
    //   this.updateResponsable();
    // },
  },
  computed: {
    ...mapFields("task", [
      "datePickMenu",
      "priorities",
      "nowDate",
      "currentTask",
    ]),
    ...mapState("user", ["users"]),
  },
  methods: {
    ...mapActions("user", ["getUsers"]),
    ...mapActions("task", ["updateAfterTyping", "updateResponsable"]),
  },
  created() {
    this.getUsers();
    console.log(this.title);
    console.log(this.portalKey);
  },
};
</script>
