<template>
  <div>
    <!-- <v-card-title primary-title> Proyectos </v-card-title> -->
    <v-container>
      <v-layout class="proyects-wrap pa-5" row wrap>
        <v-col
          class="col-lg-3 col-md-6 col-xs-12 content-proyect pa-1 d-flex flex-column justify-center align-center"
        >
          <v-card width="120px" class="proyect-item" color="primary">
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
                      <v-list-item-content>
                        <v-list-item-title
                          >selecciona un icono</v-list-item-title
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </template>

                  <v-card>
                    <v-list>
                      <v-list-item>
                        <v-list-item-avatar>
                          <img
                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                            alt="John"
                          />
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title>John Leider</v-list-item-title>
                          <v-list-item-subtitle
                            >Founder of Vuetify</v-list-item-subtitle
                          >
                        </v-list-item-content>

                        <v-list-item-action>
                          <v-btn
                            :class="fav ? 'red--text' : ''"
                            icon
                            @click="fav = !fav"
                          >
                            <v-icon>mdi-heart</v-icon>
                          </v-btn>
                        </v-list-item-action>
                      </v-list-item>
                    </v-list>

                    <v-divider></v-divider>

                    <v-list>
                      <v-list-item>
                        <v-list-item-action>
                          <v-switch v-model="message" color="purple"></v-switch>
                        </v-list-item-action>
                        <v-list-item-title>Enable messages</v-list-item-title>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-action>
                          <v-switch v-model="hints" color="purple"></v-switch>
                        </v-list-item-action>
                        <v-list-item-title>Enable hints</v-list-item-title>
                      </v-list-item>
                    </v-list>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn text @click="menu = false"> Cancel </v-btn>
                      <v-btn color="primary" text @click="menu = false">
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-menu>
                <v-list-item link>
                  <v-list-item-content>
                    <v-list-item-title
                      >editar nombre y descripcion</v-list-item-title
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
          <v-card width="120px" class="proyect-item" color="primary">
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
                      <v-list-item-content>
                        <v-list-item-title
                          >selecciona un icono</v-list-item-title
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </template>

                  <v-card>
                    <v-list>
                      <v-list-item>
                        <v-list-item-avatar>
                          <img
                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                            alt="John"
                          />
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title>John Leider</v-list-item-title>
                          <v-list-item-subtitle
                            >Founder of Vuetify</v-list-item-subtitle
                          >
                        </v-list-item-content>

                        <v-list-item-action>
                          <v-btn
                            :class="fav ? 'red--text' : ''"
                            icon
                            @click="fav = !fav"
                          >
                            <v-icon>mdi-heart</v-icon>
                          </v-btn>
                        </v-list-item-action>
                      </v-list-item>
                    </v-list>

                    <v-divider></v-divider>

                    <v-list>
                      <v-list-item>
                        <v-list-item-action>
                          <v-switch v-model="message" color="purple"></v-switch>
                        </v-list-item-action>
                        <v-list-item-title>Enable messages</v-list-item-title>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-action>
                          <v-switch v-model="hints" color="purple"></v-switch>
                        </v-list-item-action>
                        <v-list-item-title>Enable hints</v-list-item-title>
                      </v-list-item>
                    </v-list>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn text @click="menu = false"> Cancel </v-btn>
                      <v-btn color="primary" text @click="menu = false">
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-menu>
                <v-list-item link>
                  <v-list-item-content>
                    <v-list-item-title
                      >editar nombre y descripcion</v-list-item-title
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
          <v-card width="120px" class="proyect-item" color="primary">
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
                      <v-list-item-content>
                        <v-list-item-title
                          >selecciona un icono</v-list-item-title
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </template>

                  <v-card>
                    <v-list>
                      <v-list-item>
                        <v-list-item-avatar>
                          <img
                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                            alt="John"
                          />
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title>John Leider</v-list-item-title>
                          <v-list-item-subtitle
                            >Founder of Vuetify</v-list-item-subtitle
                          >
                        </v-list-item-content>

                        <v-list-item-action>
                          <v-btn
                            :class="fav ? 'red--text' : ''"
                            icon
                            @click="fav = !fav"
                          >
                            <v-icon>mdi-heart</v-icon>
                          </v-btn>
                        </v-list-item-action>
                      </v-list-item>
                    </v-list>

                    <v-divider></v-divider>

                    <v-list>
                      <v-list-item>
                        <v-list-item-action>
                          <v-switch v-model="message" color="purple"></v-switch>
                        </v-list-item-action>
                        <v-list-item-title>Enable messages</v-list-item-title>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-action>
                          <v-switch v-model="hints" color="purple"></v-switch>
                        </v-list-item-action>
                        <v-list-item-title>Enable hints</v-list-item-title>
                      </v-list-item>
                    </v-list>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn text @click="menu = false"> Cancel </v-btn>
                      <v-btn color="primary" text @click="menu = false">
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-menu>
                <v-list-item link>
                  <v-list-item-content>
                    <v-list-item-title
                      >editar nombre y descripcion</v-list-item-title
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
          <v-card width="120px" class="proyect-item" color="primary">
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
                      <v-list-item-content>
                        <v-list-item-title
                          >selecciona un icono</v-list-item-title
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </template>

                  <v-card>
                    <v-list>
                      <v-list-item>
                        <v-list-item-avatar>
                          <img
                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                            alt="John"
                          />
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title>John Leider</v-list-item-title>
                          <v-list-item-subtitle
                            >Founder of Vuetify</v-list-item-subtitle
                          >
                        </v-list-item-content>

                        <v-list-item-action>
                          <v-btn
                            :class="fav ? 'red--text' : ''"
                            icon
                            @click="fav = !fav"
                          >
                            <v-icon>mdi-heart</v-icon>
                          </v-btn>
                        </v-list-item-action>
                      </v-list-item>
                    </v-list>

                    <v-divider></v-divider>

                    <v-list>
                      <v-list-item>
                        <v-list-item-action>
                          <v-switch v-model="message" color="purple"></v-switch>
                        </v-list-item-action>
                        <v-list-item-title>Enable messages</v-list-item-title>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-action>
                          <v-switch v-model="hints" color="purple"></v-switch>
                        </v-list-item-action>
                        <v-list-item-title>Enable hints</v-list-item-title>
                      </v-list-item>
                    </v-list>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn text @click="menu = false"> Cancel </v-btn>
                      <v-btn color="primary" text @click="menu = false">
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-menu>
                <v-list-item link>
                  <v-list-item-content>
                    <v-list-item-title
                      >editar nombre y descripcion</v-list-item-title
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
          <v-card width="120px" class="proyect-item" color="primary">
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
                      <v-list-item-content>
                        <v-list-item-title
                          >selecciona un icono</v-list-item-title
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </template>

                  <v-card>
                    <v-list>
                      <v-list-item>
                        <v-list-item-avatar>
                          <img
                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                            alt="John"
                          />
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title>John Leider</v-list-item-title>
                          <v-list-item-subtitle
                            >Founder of Vuetify</v-list-item-subtitle
                          >
                        </v-list-item-content>

                        <v-list-item-action>
                          <v-btn
                            :class="fav ? 'red--text' : ''"
                            icon
                            @click="fav = !fav"
                          >
                            <v-icon>mdi-heart</v-icon>
                          </v-btn>
                        </v-list-item-action>
                      </v-list-item>
                    </v-list>

                    <v-divider></v-divider>

                    <v-list>
                      <v-list-item>
                        <v-list-item-action>
                          <v-switch v-model="message" color="purple"></v-switch>
                        </v-list-item-action>
                        <v-list-item-title>Enable messages</v-list-item-title>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-action>
                          <v-switch v-model="hints" color="purple"></v-switch>
                        </v-list-item-action>
                        <v-list-item-title>Enable hints</v-list-item-title>
                      </v-list-item>
                    </v-list>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn text @click="menu = false"> Cancel </v-btn>
                      <v-btn color="primary" text @click="menu = false">
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-menu>
                <v-list-item link>
                  <v-list-item-content>
                    <v-list-item-title
                      >editar nombre y descripcion</v-list-item-title
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
          <v-card width="120px" class="proyect-item" color="primary">
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
                      <v-list-item-content>
                        <v-list-item-title
                          >selecciona un icono</v-list-item-title
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </template>

                  <v-card>
                    <v-list>
                      <v-list-item>
                        <v-list-item-avatar>
                          <img
                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                            alt="John"
                          />
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title>John Leider</v-list-item-title>
                          <v-list-item-subtitle
                            >Founder of Vuetify</v-list-item-subtitle
                          >
                        </v-list-item-content>

                        <v-list-item-action>
                          <v-btn
                            :class="fav ? 'red--text' : ''"
                            icon
                            @click="fav = !fav"
                          >
                            <v-icon>mdi-heart</v-icon>
                          </v-btn>
                        </v-list-item-action>
                      </v-list-item>
                    </v-list>

                    <v-divider></v-divider>

                    <v-list>
                      <v-list-item>
                        <v-list-item-action>
                          <v-switch v-model="message" color="purple"></v-switch>
                        </v-list-item-action>
                        <v-list-item-title>Enable messages</v-list-item-title>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-action>
                          <v-switch v-model="hints" color="purple"></v-switch>
                        </v-list-item-action>
                        <v-list-item-title>Enable hints</v-list-item-title>
                      </v-list-item>
                    </v-list>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn text @click="menu = false"> Cancel </v-btn>
                      <v-btn color="primary" text @click="menu = false">
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-menu>
                <v-list-item link>
                  <v-list-item-content>
                    <v-list-item-title
                      >editar nombre y descripcion</v-list-item-title
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
          <v-card width="120px" class="proyect-item" color="primary">
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
                      <v-list-item-content>
                        <v-list-item-title
                          >selecciona un icono</v-list-item-title
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </template>

                  <v-card>
                    <v-list>
                      <v-list-item>
                        <v-list-item-avatar>
                          <img
                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                            alt="John"
                          />
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title>John Leider</v-list-item-title>
                          <v-list-item-subtitle
                            >Founder of Vuetify</v-list-item-subtitle
                          >
                        </v-list-item-content>

                        <v-list-item-action>
                          <v-btn
                            :class="fav ? 'red--text' : ''"
                            icon
                            @click="fav = !fav"
                          >
                            <v-icon>mdi-heart</v-icon>
                          </v-btn>
                        </v-list-item-action>
                      </v-list-item>
                    </v-list>

                    <v-divider></v-divider>

                    <v-list>
                      <v-list-item>
                        <v-list-item-action>
                          <v-switch v-model="message" color="purple"></v-switch>
                        </v-list-item-action>
                        <v-list-item-title>Enable messages</v-list-item-title>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-action>
                          <v-switch v-model="hints" color="purple"></v-switch>
                        </v-list-item-action>
                        <v-list-item-title>Enable hints</v-list-item-title>
                      </v-list-item>
                    </v-list>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn text @click="menu = false"> Cancel </v-btn>
                      <v-btn color="primary" text @click="menu = false">
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-menu>
                <v-list-item link>
                  <v-list-item-content>
                    <v-list-item-title
                      >editar nombre y descripcion</v-list-item-title
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
          <v-card width="120px" class="proyect-item" color="primary">
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
                      <v-list-item-content>
                        <v-list-item-title
                          >selecciona un icono</v-list-item-title
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </template>

                  <v-card>
                    <v-list>
                      <v-list-item>
                        <v-list-item-avatar>
                          <img
                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                            alt="John"
                          />
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title>John Leider</v-list-item-title>
                          <v-list-item-subtitle
                            >Founder of Vuetify</v-list-item-subtitle
                          >
                        </v-list-item-content>

                        <v-list-item-action>
                          <v-btn
                            :class="fav ? 'red--text' : ''"
                            icon
                            @click="fav = !fav"
                          >
                            <v-icon>mdi-heart</v-icon>
                          </v-btn>
                        </v-list-item-action>
                      </v-list-item>
                    </v-list>

                    <v-divider></v-divider>

                    <v-list>
                      <v-list-item>
                        <v-list-item-action>
                          <v-switch v-model="message" color="purple"></v-switch>
                        </v-list-item-action>
                        <v-list-item-title>Enable messages</v-list-item-title>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-action>
                          <v-switch v-model="hints" color="purple"></v-switch>
                        </v-list-item-action>
                        <v-list-item-title>Enable hints</v-list-item-title>
                      </v-list-item>
                    </v-list>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn text @click="menu = false"> Cancel </v-btn>
                      <v-btn color="primary" text @click="menu = false">
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-menu>
                <v-list-item link>
                  <v-list-item-content>
                    <v-list-item-title
                      >editar nombre y descripcion</v-list-item-title
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
          <v-card width="120px" class="proyect-item" color="primary">
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
                      <v-list-item-content>
                        <v-list-item-title
                          >selecciona un icono</v-list-item-title
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </template>

                  <v-card>
                    <v-list>
                      <v-list-item>
                        <v-list-item-avatar>
                          <img
                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                            alt="John"
                          />
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title>John Leider</v-list-item-title>
                          <v-list-item-subtitle
                            >Founder of Vuetify</v-list-item-subtitle
                          >
                        </v-list-item-content>

                        <v-list-item-action>
                          <v-btn
                            :class="fav ? 'red--text' : ''"
                            icon
                            @click="fav = !fav"
                          >
                            <v-icon>mdi-heart</v-icon>
                          </v-btn>
                        </v-list-item-action>
                      </v-list-item>
                    </v-list>

                    <v-divider></v-divider>

                    <v-list>
                      <v-list-item>
                        <v-list-item-action>
                          <v-switch v-model="message" color="purple"></v-switch>
                        </v-list-item-action>
                        <v-list-item-title>Enable messages</v-list-item-title>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-action>
                          <v-switch v-model="hints" color="purple"></v-switch>
                        </v-list-item-action>
                        <v-list-item-title>Enable hints</v-list-item-title>
                      </v-list-item>
                    </v-list>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn text @click="menu = false"> Cancel </v-btn>
                      <v-btn color="primary" text @click="menu = false">
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-menu>
                <v-list-item link>
                  <v-list-item-content>
                    <v-list-item-title
                      >editar nombre y descripcion</v-list-item-title
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
          <v-card width="120px" class="proyect-item" color="primary">
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
                      <v-list-item-content>
                        <v-list-item-title
                          >selecciona un icono</v-list-item-title
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </template>

                  <v-card>
                    <v-list>
                      <v-list-item>
                        <v-list-item-avatar>
                          <img
                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                            alt="John"
                          />
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title>John Leider</v-list-item-title>
                          <v-list-item-subtitle
                            >Founder of Vuetify</v-list-item-subtitle
                          >
                        </v-list-item-content>

                        <v-list-item-action>
                          <v-btn
                            :class="fav ? 'red--text' : ''"
                            icon
                            @click="fav = !fav"
                          >
                            <v-icon>mdi-heart</v-icon>
                          </v-btn>
                        </v-list-item-action>
                      </v-list-item>
                    </v-list>

                    <v-divider></v-divider>

                    <v-list>
                      <v-list-item>
                        <v-list-item-action>
                          <v-switch v-model="message" color="purple"></v-switch>
                        </v-list-item-action>
                        <v-list-item-title>Enable messages</v-list-item-title>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-action>
                          <v-switch v-model="hints" color="purple"></v-switch>
                        </v-list-item-action>
                        <v-list-item-title>Enable hints</v-list-item-title>
                      </v-list-item>
                    </v-list>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn text @click="menu = false"> Cancel </v-btn>
                      <v-btn color="primary" text @click="menu = false">
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-menu>
                <v-list-item link>
                  <v-list-item-content>
                    <v-list-item-title
                      >editar nombre y descripcion</v-list-item-title
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
          <v-card width="120px" class="proyect-item" color="primary">
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
                      <v-list-item-content>
                        <v-list-item-title
                          >selecciona un icono</v-list-item-title
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </template>

                  <v-card>
                    <v-list>
                      <v-list-item>
                        <v-list-item-avatar>
                          <img
                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                            alt="John"
                          />
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title>John Leider</v-list-item-title>
                          <v-list-item-subtitle
                            >Founder of Vuetify</v-list-item-subtitle
                          >
                        </v-list-item-content>

                        <v-list-item-action>
                          <v-btn
                            :class="fav ? 'red--text' : ''"
                            icon
                            @click="fav = !fav"
                          >
                            <v-icon>mdi-heart</v-icon>
                          </v-btn>
                        </v-list-item-action>
                      </v-list-item>
                    </v-list>

                    <v-divider></v-divider>

                    <v-list>
                      <v-list-item>
                        <v-list-item-action>
                          <v-switch v-model="message" color="purple"></v-switch>
                        </v-list-item-action>
                        <v-list-item-title>Enable messages</v-list-item-title>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-action>
                          <v-switch v-model="hints" color="purple"></v-switch>
                        </v-list-item-action>
                        <v-list-item-title>Enable hints</v-list-item-title>
                      </v-list-item>
                    </v-list>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn text @click="menu = false"> Cancel </v-btn>
                      <v-btn color="primary" text @click="menu = false">
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-menu>
                <v-list-item link>
                  <v-list-item-content>
                    <v-list-item-title
                      >editar nombre y descripcion</v-list-item-title
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
          <v-card width="120px" class="proyect-item" color="primary">
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
                      <v-list-item-content>
                        <v-list-item-title
                          >selecciona un icono</v-list-item-title
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </template>

                  <v-card>
                    <v-list>
                      <v-list-item>
                        <v-list-item-avatar>
                          <img
                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                            alt="John"
                          />
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title>John Leider</v-list-item-title>
                          <v-list-item-subtitle
                            >Founder of Vuetify</v-list-item-subtitle
                          >
                        </v-list-item-content>

                        <v-list-item-action>
                          <v-btn
                            :class="fav ? 'red--text' : ''"
                            icon
                            @click="fav = !fav"
                          >
                            <v-icon>mdi-heart</v-icon>
                          </v-btn>
                        </v-list-item-action>
                      </v-list-item>
                    </v-list>

                    <v-divider></v-divider>

                    <v-list>
                      <v-list-item>
                        <v-list-item-action>
                          <v-switch v-model="message" color="purple"></v-switch>
                        </v-list-item-action>
                        <v-list-item-title>Enable messages</v-list-item-title>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-action>
                          <v-switch v-model="hints" color="purple"></v-switch>
                        </v-list-item-action>
                        <v-list-item-title>Enable hints</v-list-item-title>
                      </v-list-item>
                    </v-list>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn text @click="menu = false"> Cancel </v-btn>
                      <v-btn color="primary" text @click="menu = false">
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-menu>
                <v-list-item link>
                  <v-list-item-content>
                    <v-list-item-title
                      >editar nombre y descripcion</v-list-item-title
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
      </v-layout>
    </v-container>
  </div>
</template>
