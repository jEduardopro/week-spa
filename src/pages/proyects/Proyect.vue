<template>
  <div>
    <toolbar>
      <template v-slot:tools>
        <div class="tools-proyect ml-5 d-flex flex-row align-center">
          <div class="icon">
            <v-icon color="indigo" large>mdi-layers-triple</v-icon>
          </div>
          <div class="proyect-toolbar ml-1 d-flex flex-column">
            <div class="proyect-title d-flex flex-row align-center">
              <strong class="mr-1"> Mantenimiento del sistema Week </strong>
              <!-- <ActionsMenu
                :selected-color="proyect.color"
                @set-color="setColor({ proyect, color: $event })"
                @edit-proyect="toggleProyectForm(proyect)"
                @delete-proyect="showDeleteDialog(proyect)"
              /> -->
              <v-btn icon small>
                <v-icon>mdi-information-outline</v-icon>
              </v-btn>
            </div>
            <div class="proyect-tabs">
              <v-tabs color="indigo">
                <v-tab :to="{ name: 'ProyectTasksList' }">Lista </v-tab>
                <v-tab :to="{ name: 'ProyectTasksBoard' }">Tablero</v-tab>
              </v-tabs>
            </div>
          </div>
        </div>
      </template>
    </toolbar>
    <!-- <v-card-title primary-title> Proyectos </v-card-title> -->
    <v-container>
      <!-- <v-tabs>
        <v-tab :to="{ name: 'ProyectTasksList' }">Lista </v-tab>
        <v-tab :to="{ name: 'ProyectTasksBoard' }">Tablero</v-tab>
      </v-tabs> -->
      <div class="py-1">
        <transition name="slide-fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
  }),
};
</script>
<style lang="scss">
.proyect-tabs {
  .v-tabs .v-tabs-bar {
    height: 20px;
    * {
      font-size: 14px;
      text-transform: capitalize;
    }
  }
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