import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// Pinia //
import { createPinia } from "pinia";
// Pinia //
//Emiter//
import mitt from "mitt";
const emitter = mitt();
//Emiter//
// swiper //
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// swiper //
//Vuetify & Mdi/Font//
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
const vuetify = createVuetify({
  components,
  directives,
});
//Vuetify & Mdi/Font//
createApp(App)
  .provide("emitter", emitter)
  .use(createPinia())
  .use(vuetify)
  .use(router)
  .mount("#app");
