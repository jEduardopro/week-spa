<template>
  <div>
    <login-layout>
      <template v-slot:form>
        <v-text-field
          v-model="creadentials.email"
          label="Direccion de correo"
          outlined
          dense
        ></v-text-field>
        <v-text-field
          v-model="creadentials.password"
          outlined
          dense
          :append-icon="creadentials.showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="creadentials.showPassword ? 'text' : 'password'"
          label="Contraseña"
          @click:append="creadentials.showPassword = !creadentials.showPassword"
          class="mt-3"
        ></v-text-field>
        <v-text-field
          v-model="creadentials.password_confirmation"
          outlined
          dense
          :append-icon="creadentials.showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="creadentials.showPassword ? 'text' : 'password'"
          label="Confirmar Contraseña"
          @click:append="creadentials.showPassword = !creadentials.showPassword"
          class="mt-3"
        ></v-text-field>
        <v-btn
          block
          color="teal accent-3"
          large
          class="mb-8 white--text"
          @click="reset"
          >Restablecer contraseña</v-btn
        >
        <router-link :to="{ name: 'Login' }">Iniciar sesion</router-link>
      </template>
    </login-layout>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  props: ["token"],
  computed: {
    ...mapState("auth", ["creadentials"]),
  },
  methods: {
    ...mapActions("auth", ["reset"]),
  },
  created() {
    this.creadentials.token = this.token;
    this.creadentials.email = this.$route.query.email || "";
  },
};
</script>
