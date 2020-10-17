<template>
  <v-main>
    <NavigationDrawer />
    <MainBar />

    <v-container fluid>
      <div class="main-content px-lg-5 px-sm-0">
        <Breadcrumbs class="px-0" />
        <router-view></router-view>
      </div>
    </v-container>

    <v-footer app> </v-footer>
  </v-main>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "App",
};
</script>

<style lang="scss">
.header-menu {
  height: 50px !important;
}
</style>
