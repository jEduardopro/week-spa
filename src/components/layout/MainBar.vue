<template>
  <v-app-bar
    app
    color="white"
    dense
    style="border-bottom:1px solid #E8ECEE!important;"
    flat
    height="65px"
  >
    <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
    <p class="mx-5 pt-4">{{ $route.meta.title }}</p>
    <v-spacer></v-spacer>
    <div
      :class="['search-content ', activeInputSearch && 'focus-input-search']"
    >
      <v-text-field
        type="text"
        label="buscar"
        rounded
        solo
        hide-details
        hide-controls
        @focus="changeWidthParent"
        @blur="resetWidthParent"
        color
        class="mr-1"
        clearable
        prepend-inner-icon="mdi-magnify"
      ></v-text-field>
      <v-list v-show="activeInputSearch">
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-checkbox-marked-circle-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Tareas creadas recientemente</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-format-list-bulleted</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Actividades registradas</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-file-document-multiple-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              >Documentos subidos recientemente</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>

    <v-menu offset-y transition="scale-transition" origin="top right">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon large color="primary">mdi-plus-circle</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-layers-triple-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Proyecto</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-checkbox-marked-circle-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Tarea</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-format-list-bulleted</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Actividad</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-tag-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Categoria</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-tag-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Subcategoria</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-file-document-multiple-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Documento</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-menu offset-y transition="scale-transition" origin="top right">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon large>mdi-account-circle</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-title> Perfil </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title> Cuenta </v-list-item-title>
        </v-list-item>
        <v-list-item @click="logout">
          <v-list-item-title> Cerrar session </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
<script>
import { mapActions } from "vuex";
export default {
  watch: {
    $route(to, from) {
      console.log(to);
    },
  },
  data: () => ({
    activeInputSearch: false,
  }),
  methods: {
    ...mapActions(["toggleDrawer"]),
    ...mapActions("auth", ["logout"]),
    changeWidthParent() {
      this.activeInputSearch = true;
    },
    resetWidthParent() {
      this.activeInputSearch = false;
    },
  },
};
</script>

<style lang="scss">
.search-content {
  position: relative;
  transition: width 0.3s ease-in-out;
  width: 200px;
  .v-text-field * {
    height: 34px !important;
    min-height: 34px !important;
  }
  .v-list {
    position: absolute;
    top: 105%;
    left: auto;
    width: 100%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25) !important;
    border-radius: 6px !important;
  }
  &.focus-input-search {
    width: 580px;
    transition: width 0.3s ease-in-out;
  }
}
</style>
