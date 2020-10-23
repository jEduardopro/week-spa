<template>
  <div>
    <v-card-title primary-title> Home </v-card-title>
    <v-card-text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
      veritatis?
    </v-card-text>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("auth", ["me"]),
  },
  created() {
    this.me();
  },
};
</script>
