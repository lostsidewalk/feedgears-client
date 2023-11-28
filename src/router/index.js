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
  {
    path: "/:catchAll(.*)",
    redirect: "/newsgears",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
