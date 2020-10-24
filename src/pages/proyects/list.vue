<template>
  <div>
    <v-card-title>
      <v-btn
        small
        elevation="0"
        outlined
        class="text-capitalize text--secondary"
      >
        <v-icon small>mdi-plus</v-icon>

        agregar tarea
      </v-btn>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="fa fa-search"
        label="Buscar"
        single-line
        hide-details
        clearable
      ></v-text-field>
    </v-card-title>
    <v-data-table
      dense
      group-by="priority"
      :search="search"
      :headers="headers"
      :items="desserts"
      class="elevation-0"
      :items-per-page="15"
      :footer-props="{
        itemsPerPageAllText: 'Todos',
        itemsPerPageText: 'Registros por pagina',
        itemsPerPageOptions: [5, 10, 15, 25, -1],
      }"
    >
      <template v-slot:group.header="{ items, isOpen, toggle }">
        <th colspan="4">
          <v-icon @click="toggle"
            >{{ isOpen ? "mdi-chevron-up" : "mdi-chevron-down" }}
          </v-icon>
          {{ items[0].priority }}
        </th>
      </template>
      <template v-slot:item.name="{ item }">
        <div class="d-flex flex-row align-center">
          <v-btn
            x-small
            class="d-none d-sm-flex"
            elevation="0"
            color="primary"
            icon
          >
            <v-icon>mdi-check-circle-outline</v-icon>
          </v-btn>

          <span class="caption ml-1 mr-3">
            {{
              item.name.length > 50
                ? item.name.substr(0, 30) + "..."
                : item.name
            }}
          </span>
          <v-btn
            x-small
            class="pa-0 ma-0 text--secondary d-none d-sm-flex"
            elevation="0"
          >
            2
            <v-icon small class="pa-0 ma-0">mdi-file-tree</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            x-small
            @click.prevent="drawerEdit = true"
            elevation="0"
            class="caption text-capitalize"
          >
            Detalles
            <v-icon small color="">mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </template>
      <template v-slot:item.priority_text="{ item }">
        <v-chip
          v-if="item.priority_text == 'alta'"
          color="red lighten-1"
          dark
          x-small
        >
          {{ item.priority_text }}
        </v-chip>
        <v-chip
          v-if="item.priority_text == 'media'"
          color="orange darken-1"
          dark
          x-small
        >
          {{ item.priority_text }}
        </v-chip>
        <v-chip
          v-if="item.priority_text == 'baja'"
          color="orange lighten-1"
          dark
          x-small
        >
          {{ item.priority_text }}
        </v-chip>
      </template>
    </v-data-table>
    <v-navigation-drawer v-model="drawerEdit" absolute temporary right>
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Jane Smith</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data: () => ({
    drawerEdit: false,
    search: "",
    desserts: [
      {
        name: "Recolectar gemas del infinito de thanos en infinity war 1",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "media",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 1",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 1",
        responsable: "jesus",
        due_date: "",
        priority: 2,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "media",
      },
      {
        name: "Task 1",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Recolectar gemas del infinito de thanos en infinity war 1",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "media",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 1",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 1",
        responsable: "jesus",
        due_date: "",
        priority: 2,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "media",
      },
      {
        name: "Task 1",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Recolectar gemas del infinito de thanos en infinity war 1",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "media",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 1",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 1",
        responsable: "jesus",
        due_date: "",
        priority: 2,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "media",
      },
      {
        name: "Task 1",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Recolectar gemas del infinito de thanos en infinity war 1",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "media",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 1",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 1",
        responsable: "jesus",
        due_date: "",
        priority: 2,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "media",
      },
      {
        name: "Task 1",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Recolectar gemas del infinito de thanos en infinity war 1",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "media",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 1",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 1",
        responsable: "jesus",
        due_date: "",
        priority: 2,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "media",
      },
      {
        name: "Task 1",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Recolectar gemas del infinito de thanos en infinity war 1",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "media",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 1",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 1",
        responsable: "jesus",
        due_date: "",
        priority: 2,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "media",
      },
      {
        name: "Task 1",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Recolectar gemas del infinito de thanos en infinity war 1",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "media",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 1",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 1",
        responsable: "jesus",
        due_date: "",
        priority: 2,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "media",
      },
      {
        name: "Task 1",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Recolectar gemas del infinito de thanos en infinity war 1",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "media",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 1",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 1",
        responsable: "jesus",
        due_date: "",
        priority: 2,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "media",
      },
      {
        name: "Task 1",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Recolectar gemas del infinito de thanos en infinity war 1",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "media",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 1",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 1",
        responsable: "jesus",
        due_date: "",
        priority: 2,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "media",
      },
      {
        name: "Task 1",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Recolectar gemas del infinito de thanos en infinity war 1",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "media",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 1",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 1",
        responsable: "jesus",
        due_date: "",
        priority: 2,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "media",
      },
      {
        name: "Task 1",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Recolectar gemas del infinito de thanos en infinity war 1",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "media",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 1",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 1",
        responsable: "jesus",
        due_date: "",
        priority: 2,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "media",
      },
      {
        name: "Task 1",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Recolectar gemas del infinito de thanos en infinity war 1",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "media",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 1",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 1",
        responsable: "jesus",
        due_date: "",
        priority: 2,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "media",
      },
      {
        name: "Task 1",
        responsable: "jesus",
        due_date: "",
        priority: 1,
        status: 0,
        priority_text: "alta",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "baja",
      },
      {
        name: "Task 2",
        responsable: "jesus",
        due_date: "",
        priority: 0,
        status: 0,
        priority_text: "baja",
      },
    ],
    headers: [
      {
        text: "Nombre de la tarea",
        align: "start",
        value: "name",
      },
      { text: "responsable", value: "responsable" },
      { text: "fecha de fin", value: "due_date" },
      { text: "prioridad", value: "priority_text" },
    ],
  }),
};
</script>