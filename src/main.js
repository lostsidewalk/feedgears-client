import "@vue-a11y/announcer/dist/style.css";
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

// Announcer 
import VueAnnouncer from "@vue-a11y/announcer";

// i18n
import i18n from "./i18n";

// Vuetify
import vuetify from './vuetify';

// NativeNotification 
import Vue3NativeNotification from "vue3-native-notification";

// Create and mount the app 
createApp(App, {})
  .use(router)
  .use(VuePlyr, {
    plyr: {},
  })
  .use(VueAnnouncer)
  .use(i18n)
  .use(vuetify)
  .use(Vue3NativeNotification, {
    requestOnNotify: true,
  })
  .mount("#app");
