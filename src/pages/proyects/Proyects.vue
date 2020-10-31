<template>
  <div>
    <!-- <v-card-title primary-title> Proyectos </v-card-title> -->
    <v-container>
      <v-layout class="proyects-wrap py-5 px-12" row wrap>
        <v-col
          class="col-lg-3 col-md-6 col-xs-12 content-proyect pa-1 d-flex flex-column justify-center align-center"
        >
          <v-card
            @click="showProyect"
            width="120px"
            class="proyect-item"
            color="red"
          >
            <v-menu bottom right offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon dark v-bind="attrs" v-on="on">
                  <v-icon>mdi-dots-horizontal</v-icon>
                </v-btn>
              </template>

              <v-list>
                <v-menu right offset-x :close-on-content-click="false">
                  <template v-slot:activator="{ on, attrs }">
                    <v-list-item v-bind="attrs" v-on="on">
                      <v-list-item-icon>
                        <v-icon class="red--text"> mdi-square-rounded</v-icon>
                      </v-list-item-icon>

                      <v-list-item-content>
                        <v-list-item-title>Define un color</v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-icon>
                        <v-icon>mdi-chevron-right</v-icon>
                      </v-list-item-icon>
                    </v-list-item>
                  </template>

                  <v-card>
                    <v-container>
                      <v-row class="pa-0 ma-0">
                        <v-col class="pa-0 ma-0">
                          <v-btn small icon class="pa-0 ma-0">
                            <v-icon color="red">mdi-square-rounded</v-icon>
                          </v-btn>
                        </v-col>

                        <v-col class="pa-0 ma-0">
                          <v-btn small icon class="pa-0 ma-0">
                            <v-icon color="orange">mdi-square-rounded</v-icon>
                          </v-btn>
                        </v-col>
                        <v-col class="pa-0 ma-0">
                          <v-btn small icon class="pa-0 ma-0">
                            <v-icon color="yellow darken-2"
                              >mdi-square-rounded</v-icon
                            >
                          </v-btn>
                        </v-col>
                        <v-col class="pa-0 ma-0">
                          <v-btn small icon class="pa-0 ma-0">
                            <v-icon color="light-green"
                              >mdi-square-rounded</v-icon
                            >
                          </v-btn>
                        </v-col>
                        <v-col class="pa-0 ma-0">
                          <v-btn small icon class="pa-0 ma-0">
                            <v-icon color="green">mdi-square-rounded</v-icon>
                          </v-btn>
                        </v-col>
                        <v-col class="pa-0 ma-0">
                          <v-btn small icon class="pa-0 ma-0">
                            <v-icon color="green darken-3"
                              >mdi-square-rounded</v-icon
                            >
                          </v-btn>
                        </v-col>
                      </v-row>
                      <v-row class="pa-0 ma-0">
                        <v-col class="pa-0 ma-0">
                          <v-btn small icon class="pa-0 ma-0">
                            <v-icon color="blue">mdi-square-rounded</v-icon>
                          </v-btn>
                        </v-col>
                        <v-col class="pa-0 ma-0">
                          <v-btn small icon class="pa-0 ma-0">
                            <v-icon color="indigo">mdi-square-rounded</v-icon>
                          </v-btn>
                        </v-col>
                        <v-col class="pa-0 ma-0">
                          <v-btn small icon class="pa-0 ma-0">
                            <v-icon color="purple">mdi-square-rounded</v-icon>
                          </v-btn>
                        </v-col>
                        <v-col class="pa-0 ma-0">
                          <v-btn small icon class="pa-0 ma-0">
                            <v-icon color="pink">mdi-square-rounded</v-icon>
                          </v-btn>
                        </v-col>
                        <v-col class="pa-0 ma-0">
                          <v-btn small icon class="pa-0 ma-0">
                            <v-icon color="pink darken-3"
                              >mdi-square-rounded</v-icon
                            >
                          </v-btn>
                        </v-col>
                        <v-col class="pa-0 ma-0">
                          <v-btn small icon class="pa-0 ma-0">
                            <v-icon color="pink lighten-2"
                              >mdi-square-rounded</v-icon
                            >
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card>
                </v-menu>
                <v-list-item link>
                  <v-list-item-icon>
                    <v-icon>mdi-lead-pencil</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title
                      >Editar nombre y descripcion</v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                  <v-list-item-icon>
                    <v-icon class="red--text">mdi-trash-can-outline</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title class="red--text"
                      >Eliminar proyecto</v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-card-text class="mt-2">
              <div class="text--primary text-center">
                <v-icon large color="white">mdi-layers-triple</v-icon>
              </div>
            </v-card-text>
          </v-card>
          <p class="caption pa-0 ma-0 text-center">proyect</p>
        </v-col>
        <v-col
          class="col-lg-3 col-md-6 col-xs-12 content-proyect pa-1 d-flex flex-column justify-center align-center"
        >
          <v-card
            @click="dialog = true"
            width="120px"
            outlined
            flat
            class="proyect-item"
          >
            <v-card-text>
              <div class="text--primary text-center">
                <v-icon large>mdi-plus</v-icon>
              </div>
            </v-card-text>
          </v-card>
          <p class="caption pa-0 ma-0 text-center">nuevo proyecto</p>
        </v-col>
      </v-layout>
    </v-container>

    <v-dialog
      v-model="dialog"
      max-width="500px"
      transition="scroll-y-reverse-transition"
    >
      <v-card>
        <v-card-title>
          Crear proyecto
          <v-spacer></v-spacer>
          <v-btn small fab elevation="0" flat>
            <v-icon color="grey darken-1">mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <div class="text--primary">
            <v-text-field
              type="text"
              label="Nombre del proyecto"
              placeholder="Mi primer proyecto"
            ></v-text-field>
            <v-textarea
              label="Descripcion del proyecto"
              auto-grow
              placeholder="Proyecto escolar"
            ></v-textarea>
          </div>
          <v-btn block color="primary" @click="dialog = false"> save </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
  }),
  methods: {
    showProyect() {
      this.$router.replace({
        name: "ProyectShowList",
        params: { id: "000000125485113131121" },
      });
    },
  },
};
</script>
