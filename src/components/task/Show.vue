<template>
  <v-container class="px-8">
    <portal :to="portalKey" v-if="portalKey">
      <v-toolbar
        flat
        class="px-4"
        style="border-bottom:1px solid #E8ECEE;"
        background-color="transparent"
      >
        <v-btn
          small
          elevation="0"
          outlined
          class="text-capitalize text--secondary"
        >
          <v-icon color="primary">mdi-check</v-icon>

          <span>Marcar como completada</span>
        </v-btn>

        <!-- <v-toolbar-title>{{ title }}</v-toolbar-title> -->
        <v-spacer></v-spacer>
        <v-btn
          x-small
          elevation="0"
          class="pa-0 text--secondary"
          color="transparent"
        >
          <v-icon>mdi-thumb-up-outline</v-icon>
        </v-btn>
        <v-btn
          x-small
          elevation="0"
          class="pa-0 text--secondary"
          color="transparent"
        >
          <v-icon>mdi-dots-horizontal</v-icon>
        </v-btn>
        <v-btn
          x-small
          elevation="0"
          class="pa-0 text--secondary"
          color="transparent"
        >
          <v-icon>mdi-arrow-collapse-right</v-icon>
        </v-btn>
      </v-toolbar>
    </portal>
    <v-card-title class="pa-0 mb-8" primary-title>
      {{ item.name }}
    </v-card-title>
    <v-combobox
      clearable
      height="25px"
      label="Responsable"
      placeholder="Asigna al responsable de la tarea"
    ></v-combobox>
    <v-menu
      ref="menu1"
      v-model="menu1"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      max-width="290px"
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="date"
          label="Fecha de fin"
          height="25px"
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="date"
        locale="es-es"
        no-title
        :min="nowDate"
        @input="menu1 = false"
      ></v-date-picker>
    </v-menu>
    <v-combobox
      clearable
      height="30px"
      :items="priorities"
      item-text="name"
      item-value="value"
      label="Prioridad"
      placeholder="Define la prioridad de la tarea"
    >
      <template v-slot:selection="{ item }">
        <v-chip v-if="item.name == 'alta'" color="red lighten-1" dark small>
          {{ item.name }}
        </v-chip>
        <v-chip v-if="item.name == 'media'" color="orange darken-2" dark small>
          {{ item.name }}
        </v-chip>
        <v-chip v-if="item.name == 'baja'" color="orange lighten-1" dark small>
          {{ item.name }}
        </v-chip>
      </template>
      <template v-slot:item="{ item }">
        <v-chip v-if="item.name == 'alta'" color="red lighten-1" dark small>
          {{ item.name }}
        </v-chip>
        <v-chip v-if="item.name == 'media'" color="orange darken-2" dark small>
          {{ item.name }}
        </v-chip>
        <v-chip v-if="item.name == 'baja'" color="orange lighten-1" dark small>
          {{ item.name }}
        </v-chip>
      </template>
    </v-combobox>
    <v-textarea
      label="Descripcion de la tarea"
      auto-grow
      row-height="15"
      placeholder="Mi primer tarea"
    ></v-textarea>
    <v-card-subtitle class="text--secondary px-0 d-flex flex-row align-center">
      <span>Sub tareas</span>
      <v-spacer></v-spacer>
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
export default {
  name: "TaskShow",
  props: {
    portalKey: {},
    title: {},
    item: {},
  },
  data: () => ({
    menu1: false,
    date: new Date().toISOString().substr(0, 10),
    nowDate: new Date().toISOString().substr(0, 10),
    priorities: [
      {
        name: "alta",
        value: 2,
      },
      {
        name: "media",
        value: 1,
      },
      {
        name: "baja",
        value: 0,
      },
    ],
  }),
  created() {
    console.log(this.item);
    console.log(this.title);
    console.log(this.portalKey);
  },
};
</script>
