import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import axios from "axios";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("./components/main/MainComponent.vue"),
    },

    {
      path: "/login",
      component: () => import("./components/login/LoginComponent.vue"),
    },
    {
      path: "/sign-up",
      component: () => import("./components/signup/SignUpComponent.vue"),
    },
    {
      path: "/:notFound(.*)*",
      component: () => import("./components/global/NotFound.vue"),
    },
  ],
});

const app = createApp(App);
app.use(router);
app.config.globalProperties.axios = axios;
app.mount("#app");
