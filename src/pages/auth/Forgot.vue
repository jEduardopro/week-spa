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
        <v-btn
          @click="requestReset"
          block
          color="primary"
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
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState("auth", ["creadentials"]),
  },
  methods: {
    ...mapActions("auth", ["requestReset"]),
  },
};
</script>
