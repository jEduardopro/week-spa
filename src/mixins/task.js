export default {
  methods: {
    taskPriorityColor(priority) {
      let color;
      switch (priority) {
        case "baja":
          color = "orange lighten-1";
          break;
        case "media":
          color = "orange darken-2";
          break;
        case "alta":
          color = "red lighten-1";
          break;
      }
      return color;
    },
  },
};
