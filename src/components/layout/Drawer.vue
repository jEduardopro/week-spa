<template>
  <div>
    <v-navigation-drawer
      light
      app
      temporary
      hide-overlay
      v-model="currentDrawer.show"
      :right="true"
      :width="currentDrawer.width ? `${currentDrawer.width}vw` : '10vw'"
      @input="detectModel($event)"
    >
      <template slot="prepend">
        <portal-target :name="`drawer${currentDrawer.component}`" />
      </template>
      <component
        :is="currentDrawer.component"
        :portal-key="`drawer${currentDrawer.component}`"
        v-bind="currentDrawer.props"
      />
    </v-navigation-drawer>
  </div>
</template>

<script>
import Vue from "vue";

const files = require.context("../", true, /.vue$/i);

files.keys().map((file) => {
  var subName = file.replace(/(^.\/)/g, "").split(".")[0];
  //   console.log(subName);
  if ((subName.match(/\//g) || []).length === 1) {
    var name = subName.replace(/\//g, "");
    // console.log(name);
    Vue.component(name, files(file).default);
  }
});

import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapState("drawer", ["currentDrawer"]),
  },
  methods: {
    detectModel(evt) {
      console.log(evt);
      console.log("detect model drawer global");
    },
  },
};
</script>
