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
        v-model="table.search"
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
      :search="table.search"
      :headers="table.headers"
      :items="tasks"
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
          {{ items[0].priority_text }}
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
            v-if="item.relationships.subtasks.length > 0"
            x-small
            class="pa-0 ma-0 text--secondary d-none d-sm-flex"
            elevation="0"
          >
            {{ item.relationships.subtasks.length }}
            <v-icon small class="pa-0 ma-0">mdi-file-tree</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            @click.prevent="showTask(item)"
            x-small
            elevation="0"
            class="caption text-capitalize"
          >
            Detalles
            <v-icon small color="">mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </template>
      <template v-slot:item.responsable="{ item }">
        {{
          item.relationships.hasOwnProperty("responsable")
            ? item.relationships.responsable.email
            : ""
        }}
      </template>
      <template v-slot:item.due_date="{ item }">
        {{ item.due_date_short }}
      </template>
      <template v-slot:item.priority_text="{ item }">
        <v-chip :color="taskPriorityColor(item.priority_text)" x-small>
          {{ item.priority_text }}
        </v-chip>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import { mapFields } from "vuex-map-fields";
import task from "@/mixins/task";
export default {
  mixins: [task],
  props: ["proyectTasks"],
  computed: {
    ...mapFields("task", ["table", "currentTask", "tasks"]),
  },
  methods: {
    ...mapActions("task", ["setTasks", "setCurrentTask"]),
    showTask(item) {
      this.setCurrentTask(item);
      this.addDrawer("taskShow", { title: "dialer_contact_detail_show" }, 42);
    },
  },
  created() {
    this.setTasks(this.proyectTasks);
  },
};
</script>
