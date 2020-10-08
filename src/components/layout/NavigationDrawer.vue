<template>
  <v-navigation-drawer app v-model="drawer">
    <v-card tile elevation-1 class="d-flex header-menu px-5 align-center">
      <img
        width="30px"
        height="30px"
        block
        class="block"
        :src="require('@/assets/logo.png')"
      />
      <p class="overline ma-0 pa-0 ml-2">Week</p>
    </v-card>
    <v-list>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
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

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>Sub item</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapFields } from "vuex-map-fields";
export default {
  computed: {
    ...mapFields(["drawer"]),
  },
  data: () => ({
    items: [
      { title: "Account", icon: "mdi-account-box" },
      { title: "Admin", icon: "mdi-gavel" },
    ],
  }),
};
</script>
