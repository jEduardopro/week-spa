<template>
  <v-main>
    <NavigationDrawer />
    <MainBar />

    <v-container fluid>
      <router-view></router-view>
    </v-container>

    <v-footer app> </v-footer>
  </v-main>
</template>

<script>
import { mapActions } from "vuex";
import NavigationDrawer from "../components/layout/NavigationDrawer.vue";
import MainBar from "../components/layout/MainBar.vue";
export default {
  components: { NavigationDrawer, MainBar },
  name: "App",
};
</script>

<style lang="scss">
.header-menu {
  height: 50px !important;
}
</style>