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
        <v-btn
          block
          color="teal accent-3"
          large
          class="mb-8 white--text"
          @click="login"
          >Iniciar sesion</v-btn
        >
        <router-link :to="{ name: 'ForgotPassword' }"
          >Olvidaste tu contraseña?</router-link
        >
      </template>
    </login-layout>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState("auth", ["creadentials"]),
  },
  methods: {
    ...mapActions("auth", ["login"]),
  },
};
</script>
