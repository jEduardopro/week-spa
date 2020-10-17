<template>
  <v-app-bar app color="white" dense flat height="50px">
    <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <v-menu offset-y transition="scale-transition" origin="top right">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-account-box</v-icon>
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
  methods: {
    ...mapActions(["toggleDrawer"]),
    ...mapActions("auth", ["logout"]),
  },
};
</script>
