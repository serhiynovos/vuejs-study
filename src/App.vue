<template>
  <layout-component/>
</template>

<script>
import VueRouter from "vue-router";

import LayoutComponent from "./components/layout/LayoutComponent";
import HomePageComponent from "./components/pages/HomePageComponent";

const router = new VueRouter({
  routes: [{ path: "/", component: HomePageComponent }]
});

export default {
  name: "app",
  router,
  components: {
    LayoutComponent
  }
};
</script>

<style>
</style>
