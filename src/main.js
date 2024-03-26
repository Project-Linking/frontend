import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import MainComponent from "./components/main/MainComponent.vue";
import NotFound from "./components/global/NotFound.vue";
import LoginComponent from "./components/login/LoginComponent.vue";
import SignUpComponent from "./components/signup/SignUpComponent.vue";
import axios from "axios";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: MainComponent },
    { path: "/login-page", component: LoginComponent },
    {
      path: "/sign-up",
      component: SignUpComponent,
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});

const app = createApp(App);
app.use(router);
app.config.globalProperties.axios = axios;
app.mount("#app");
