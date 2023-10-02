import "vue-plyr/dist/vue-plyr.css";
import "font-awesome/scss/font-awesome.scss";
import "flag-icons/css/flag-icons.min.css";

import { createApp } from "vue";

// App 
import App from "./App.vue";

// router 
import router from "./router";

// Plyr
import VuePlyr from "vue-plyr";

// i18n
import i18n from "./i18n";

// Vuetify
import vuetify from './vuetify';

// Create and mount the app 
createApp(App, {})
  .use(router)
  .use(VuePlyr, {
    plyr: {},
  })
  .use(i18n)
  .use(vuetify)
  .mount("#app");
