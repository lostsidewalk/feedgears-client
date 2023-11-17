import { createWebHistory, createRouter } from "vue-router";
import LandingView from "@/views/LandingView.vue";

const routes = [
  {
    path: "/",
    redirect: "/newsgears",
  },
  {
    path: "/newsgears",
    name: "Newsgears",
    component: LandingView,
    props: {
      selectedApplication: "NEWSGEARS",
      baseUrl: process.env.VUE_APP_NEWSGEARS_API_URL,
    },
  },
  {
    path: "/composable-rss",
    name: "ComposableRss",
    component: LandingView,
    props: {
      selectedApplication: "COMPOSABLE_RSS",
      baseUrl: process.env.VUE_APP_NEWSGEARS_API_URL,
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const defaultRouteTitle = "Newsgears";

const titlesByRoute = {
  LandingView: "Newsgears from LostSidewalk Software",
  HomeView: "Newsgears Feed Dashboard",
  PasswordResetRequestView: "Newsgears Password Reset Request",
  PasswordResetCallbackView: "Newsgears Password Reset Continuation",
  RegistrationRequestView: "Newsgears User Registration",
  VerificationCallbackView: "Newsgears Email Verification Continuation",
  SettingsView: "Newsgears User Settings",
};

router.beforeEach((to, from, next) => {
  let t = titlesByRoute[to.name];
  document.title = t ? t : defaultRouteTitle;
  next();
});

export default router;
