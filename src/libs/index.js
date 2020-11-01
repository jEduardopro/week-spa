import Vue from "vue";
// ------------------------------PortalVue--------------------------

import PortalVue from "portal-vue";
Vue.use(PortalVue);
// ------------------------------Moment--------------------------

const moment = require("moment");
require("moment/locale/es");
Vue.use(require("vue-moment"), {
  moment,
});

// ------------------------------VueToastr2--------------------------
import VueToastr2 from "vue-toastr-2";
import "vue-toastr-2/dist/vue-toastr-2.min.css";
window.toastr = require("toastr");
Vue.use(VueToastr2);
toastr.options = {
  closeButton: true,
  debug: false,
  newestOnTop: true,
  progressBar: true,
  positionClass: "toast-bottom-left",
  preventDuplicates: true,
  onclick: null,
  showDuration: "300",
  hideDuration: "1000",
  timeOut: "5000",
  extendedTimeOut: "1000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
};
