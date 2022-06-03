import { createWebHistory, createRouter } from "vue-router";
import About from "../components/About.vue";
import ContactUS from "../components/ContactUS.vue";
import Dashboard from "../components/Dashboard.vue";
const routes = [
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contactus",
    name: "ContactUS",
    component: ContactUS,
  },
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
