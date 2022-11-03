import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";

// Init routes
const routes = [{ path: "/hello", component: HelloWorld }];

// Create router
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
