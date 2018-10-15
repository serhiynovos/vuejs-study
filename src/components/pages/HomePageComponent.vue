<template>
  <div id="home">
    <h3>Home Page</h3>

    <p>Count: {{count}}</p>

    <div>
      <button class="btn btn-danger" @click="decrement()">-</button>
      <button class="btn btn-success" @click="increment()">+</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    }
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
})
</script>

<style lang="sass">
  #home
    text-align: center
</style>
