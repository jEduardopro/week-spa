<template>
  <div>
    <toolbar v-if="proyect.id">
      <template v-slot:tools>
        <div class="tools-proyect ml-5 d-flex flex-row align-center">
          <div class="icon">
            <v-icon :color="proyect.color" large>mdi-layers-triple</v-icon>
          </div>
          <div class="proyect-toolbar ml-1 d-flex flex-column">
            <div class="proyect-title d-flex flex-row align-center">
              <strong class="mr-1"> {{ proyect.name }} </strong>
              <ActionsMenu
                small
                :deleteAction="true"
                icon="mdi-chevron-down"
                :proyect="proyect"
              />
              <v-btn icon small>
                <v-icon>mdi-information-outline</v-icon>
              </v-btn>
            </div>
            <div class="proyect-tabs">
              <v-tabs :color="proyect.color">
                <v-tab :to="{ name: 'ProyectTasksList' }">Lista </v-tab>
                <v-tab :to="{ name: 'ProyectTasksBoard' }">Tablero</v-tab>
              </v-tabs>
            </div>
          </div>
        </div>
      </template>
    </toolbar>
    <v-container>
      <div v-if="proyect.id" class="py-1">
        <transition name="slide-fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </v-container>
    <DeleteConfirmation />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  props: ["id"],
  data: () => ({
    dialog: false,
  }),
  computed: {
    ...mapState("proyect", ["proyect"]),
  },
  methods: {
    ...mapActions("proyect", ["getProyect"]),
  },
  async created() {
    await this.getProyect(this.id);
    document.title = this.proyect.name + " - " + process.env.VUE_APP_NAME;
  },
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
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>