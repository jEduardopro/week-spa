<template>
  <v-navigation-drawer
    background-color="#151b26"
    color="#151b26"
    dark
    app
    width="240px"
    v-model="drawerMenu"
  >
    <v-card
      color="#151b26"
      tile
      flat
      elevation-1
      class="d-flex px-4 header-menu align-center"
    >
      <img
        width="25px"
        height="25px"
        block
        class="block"
        :src="require('@/assets/icono-week.png')"
      />
      <h2 class="h2 font-weight-bold ma-0 pa-0 ml-2">week</h2>
    </v-card>
    <v-list>
      <v-list-item exact active-class="item-active" :to="{ name: 'Home' }" link>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        exact
        active-class="item-active"
        :to="{ name: 'Proyects' }"
        link
      >
        <v-list-item-icon>
          <v-icon>mdi-layers-triple-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Mis proyectos</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        exact
        active-class="item-active"
        :to="{ name: 'Tasks' }"
        link
      >
        <v-list-item-icon>
          <v-icon>mdi-checkbox-marked-circle-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Mis tareas</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item
        exact
        active-class="item-active"
        :to="{ name: 'Activities' }"
        link
      >
        <v-list-item-icon>
          <v-icon>mdi-format-list-bulleted</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Mis actividades</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-group
        active-class="active-group"
        prepend-icon="mdi-tag-multiple-outline"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>Etiquetas</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          exact
          active-class="item-active"
          :to="{ name: 'Categories' }"
          link
        >
          <v-list-item-icon>
            <v-icon>mdi-tag-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Categories</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          exact
          active-class="item-active"
          :to="{ name: 'Subcategories' }"
          link
        >
          <v-list-item-icon>
            <v-icon>mdi-tag-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Subcategorias</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
      <v-list-item
        exact
        active-class="item-active"
        :to="{ name: 'Documents' }"
        link
      >
        <v-list-item-icon>
          <v-icon>mdi-file-document-multiple-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Mis documentos</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapFields } from "vuex-map-fields";
export default {
  computed: {
    ...mapFields(["drawerMenu"]),
  },
  data: () => ({}),
};
</script>
