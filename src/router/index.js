import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import JobView from "@/views/JobView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import AddJobView from "@/views/AddJobView.vue";

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
      path: "/jobs/:id",
      name: "job",
      component: JobView,
    },
    {
      // In a web router, the colon (:) is a special flag that means: "This part of the URL is a wild card variable, not a literal word."
      path: "/:catchAll(.*)",
      name: "not found",
      component: NotFoundView,
    },
    {
      path: "/jobs/add",
      name: "add-job",
      component: AddJobView,
    },
  ],
});

export default router;
