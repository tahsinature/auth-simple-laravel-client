<template>
  <div id="app">
    <app-nav></app-nav>
    <router-view/>
  </div>
</template>

<script>
import NavVue from './components/Nav.vue';

export default {
  components: {
    'app-nav': NavVue,
  },
};
</script>


<style lang="scss">
</style>
