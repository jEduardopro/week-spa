<template>
  <v-main>
    <NavigationDrawer />
    <MainBar />

    <v-container fluid>
      <div class="main-content px-lg-5 px-sm-0">
        <!-- <Breadcrumbs class="px-0" /> -->
        <v-card>
          <router-view></router-view>
        </v-card>
      </div>
    </v-container>
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
  height: 65px !important;
}
</style>
