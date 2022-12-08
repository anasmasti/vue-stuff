import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import NotFound from "./components/NotFound.vue";

// Init routes
const routes = [
  { path: "/hello", component: HelloWorld },
  {
    path: "/404",
    component: NotFound,
    props: true,
    beforeEnter: ({ query }, _, next) => {
      console.log(query);
      if (query.name == "Anas") {
        next();
      } else {
        console.log("stop");
      }
    },
  },
  { path: "/:catchAll(.*)", redirect: "/404" },
];

// Create router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  let isAuth = false;

  if (to.name == "hello" && !isAuth) {
    console.log(from);
  } else {
    next();
  }
});

export default router;
