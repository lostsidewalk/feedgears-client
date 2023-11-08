import { createWebHistory, createRouter } from "vue-router";
import LandingView from "@/views/LandingView.vue";

const routes = [
  {
    path: "/",
    name: "LandingView",
    component: LandingView,
    props: {
      baseUrl: process.env.VUE_APP_NEWSGEARS_API_URL,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const defaultRouteTitle = "Newsgears RSS";

const titlesByRoute = {
  LandingView: "Newsgears RSS from LostSidewalk Software",
  HomeView: "Newsgears RSS Feed Dashboard",
  PasswordResetRequestView: "Newsgears RSS Password Reset Request",
  PasswordResetCallbackView: "Newsgears RSS Password Reset Continuation",
  RegistrationRequestView: "Newsgears RSS User Registration",
  VerificationCallbackView: "Newsgears RSS Email Verification Continuation",
  SettingsView: "Newsgears RSS User Settings",
};

router.beforeEach((to, from, next) => {
  let t = titlesByRoute[to.name];
  document.title = t ? t : defaultRouteTitle;
  next();
});

export default router;
