<template>
  <div>
    <login-layout>
      <template v-slot:form>
        <v-text-field
          v-model="formLogin.email"
          label="Direccion de correo"
          outlined
          dense
        ></v-text-field>
        <v-btn
          @click="requestReset"
          block
          color="teal accent-3"
          large
          class="mb-8 white--text"
          >Restablecer contraseña</v-btn
        >
        <router-link :to="{ name: 'Login' }">Iniciar sesion</router-link>
      </template>
    </login-layout>
  </div>
</template>

<script>
import LoginLayout from "../components/auth/LoginLayout.vue";
import { mapActions, mapState } from "vuex";
export default {
  components: { LoginLayout },
  computed: {
    ...mapState("auth", ["formLogin"]),
  },
  methods: {
    ...mapActions("auth", ["requestReset"]),
  },
};
</script>
