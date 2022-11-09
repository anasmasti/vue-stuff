import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import NotFound from "./components/NotFound.vue";

// Init routes
const routes = [
  { path: "/hello", component: HelloWorld },
  { path: "/404", component: NotFound },
  { path: "/:catchAll(.*)", redirect: "/404" }
];

// Create router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
