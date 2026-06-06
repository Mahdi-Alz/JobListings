import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
    },
    {
      // In a web router, the colon (:) is a special flag that means: "This part of the URL is a wild card variable, not a literal word."
      path: "/:catchAll(.*)",
      name: "not found",
      component: NotFoundView,
    },
  ],
});

export default router;
