<template>
  <v-main>
    <ProyectForm />
    <Drawer />
    <NavigationDrawer />
    <MainBar />

    <v-container fluid>
      <div class="main-content px-lg-5 px-sm-0">
        <!-- <Breadcrumbs class="px-0" /> -->
        <v-card style="height: auto; min-height: 85vh; max-height: 100%">
          <transition name="slide-fade" mode="out-in">
            <router-view></router-view>
          </transition>
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
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
