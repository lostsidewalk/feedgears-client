import { createWebHistory, createRouter } from "vue-router";
import LandingView from "@/views/LandingView.vue";

const routes = [
  {
    path: "/",
    name: "LandingView",
    component: LandingView,
    props: {
      baseUrl: process.env.VUE_APP_FEEDGEARS_API_URL,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const defaultRouteTitle = "FeedGears RSS";

const titlesByRoute = {
  LandingView: "FeedGears RSS from LostSidewalk Software",
  HomeView: "FeedGears RSS Feed Dashboard",
  PasswordResetRequestView: "FeedGears RSS Password Reset Request",
  PasswordResetCallbackView: "FeedGears RSS Password Reset Continuation",
  RegistrationRequestView: "FeedGears RSS User Registration",
  VerificationCallbackView: "FeedGears RSS Email Verification Continuation",
  SettingsView: "FeedGears RSS User Settings",
};

router.beforeEach((to, from, next) => {
  let t = titlesByRoute[to.name];
  document.title = t ? t : defaultRouteTitle;
  next();
});

export default router;
