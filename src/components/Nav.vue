<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <div class="container">
      <router-link to="/" class="navbar-brand">Auth Simple Laravel</router-link>
      <!-- <a class="navbar-brand" href="#">Laravel Simple Auth</a> -->
      <!-- <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>-->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" v-if="!$store.getters.getAdmin">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item" v-if="!$store.getters.getAdmin">
            <router-link class="nav-link" to="/register">Register</router-link>
          </li>
          <li class="nav-item" v-if="!$store.getters.getAdmin">
            <router-link class="nav-link" to="/about">About this App</router-link>
          </li>
          <li class="nav-item dropdown" v-if="$store.getters.getAdmin">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >{{$store.getters.getAdmin.name}}</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" to="/me">Profile</router-link>
              <router-link class="dropdown-item" to="/me/edit">Edit Profile</router-link>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" @click="logoutUser" style="cursor: pointer">Log Out</a>
              <div class="dropdown-divider"></div>
              <router-link class="dropdown-item" to="/about">About this App</router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    logoutUser() {
      localStorage.removeItem("token");
      window.location.reload();
    }
  }
};
</script>

<style>
</style>
