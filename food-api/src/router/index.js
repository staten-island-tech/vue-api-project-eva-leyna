import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Cart from "../views/Cart.vue";
import ResultsList from "../views/ResultsList.vue";
import RecipeView from "../views/RecipeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
    props: true,
  },
  {
    path: "/results",
    name: "SearchResults",
    component: ResultsList,
    props: true,
  },
  {
    path: "/results/:id",
    name: "RecipeView",
    component: RecipeView,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
