<template>
  <div>
    <navbar/>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Navbar from "./NavbarComponent";

export default Vue.extend({
  components: {
    Navbar
  }
});
</script>
