<template>
  <!-- <v-app>
    <v-app-bar app color="white" height="50px">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-menu offset-y transition="scale-transition" origin="top right">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-account-box</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option fghjfdhhdjfhk {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer">
      <v-card tile elevation-1 class="d-flex header-menu px-5 align-center">
        <img
          width="30px"
          height="30px"
          block
          class="block"
          :src="require('./assets/logo.png')"
        />
        <p class="overline ma-0 pa-0 ml-2">Week</p>
      </v-card>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group prepend-icon="mdi-account" no-action>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Treeview</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Sub item</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <HelloWorld />
    </v-main>
  </v-app> -->

  <v-main>
    <v-navigation-drawer app v-model="drawer">
      <v-card tile elevation-1 class="d-flex header-menu px-5 align-center">
        <img
          width="30px"
          height="30px"
          block
          class="block"
          :src="require('../assets/logo.png')"
        />
        <p class="overline ma-0 pa-0 ml-2">Week</p>
      </v-card>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group prepend-icon="mdi-account" no-action>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Treeview</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Sub item</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="white" height="50px">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-menu offset-y transition="scale-transition" origin="top right">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-account-box</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option fghjfdhhdjfhk {{ n }}</v-list-item-title>
          </v-list-item>
          <v-list-item @click="logout">
            <v-list-item-title> Cerrar session </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-container fluid>
      <router-view></router-view>
    </v-container>

    <v-footer app> </v-footer>
  </v-main>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "App",

  data: () => ({
    items: [
      { title: "Account", icon: "mdi-account-box" },
      { title: "Admin", icon: "mdi-gavel" },
    ],
    drawer: true,
  }),
  methods: {
    ...mapActions("auth", ["logout"]),
  },
};
</script>

<style lang="scss">
.header-menu {
  height: 50px !important;
}
</style>