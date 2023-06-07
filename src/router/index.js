import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Addproject from "../views/AddProject.vue"
import Editproject from "../views/EditProject.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/addproject",
    name: "AddProject",
    component: Addproject,
  },
  {
    path: "/editproject/:id",
    name: "EditProject",
    component: Editproject,
    props : true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
