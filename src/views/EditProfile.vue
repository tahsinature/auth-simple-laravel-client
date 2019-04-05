<template>
  <div class="container">
    <div class="title">
      <h3>Edit Profile</h3>
    </div>
    <hr>
    <form class="mt-4 mb-4" @submit.prevent="editProfile">
      <div class="form-group">
        <label for="name">Full Name</label>
        <input id="name" type="text" class="form-control" v-model="name">
      </div>
      <div class="form-group">
        <label for="name">Email</label>
        <input
          id="name"
          type="text"
          class="form-control"
          :value="$store.getters.getAdmin.email"
          disabled
        >
      </div>
      <div class="form-group">
        <label for="name">Old Password</label>
        <input id="name" type="text" class="form-control" v-model="oldPassword">
      </div>
      <div class="form-group">
        <label for="name">New Password</label>
        <input id="name" type="text" class="form-control" v-model.lazy="newPassword">
      </div>
      <div class="form-group">
        <label for="name">Confirm New Password</label>
        <input
          id="name"
          type="text"
          class="form-control"
          v-model="confirmNewPassword"
          :class="{'is-invalid': newPassword !== confirmNewPassword}"
        >
        <span
          v-if="newPassword !== confirmNewPassword"
          class="invalid-feedback"
        >Password needs to be matched.</span>
      </div>
      <div class="loader text-center" v-if="isLoading">
        <div class="spinner-grow" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <button class="btn btn-block btn-secondary mt-4" @click="editProfile">Edit Profile</button>
    </form>
  </div>
</template>

<script>
import api from '../api';
import store from '../store';

export default {
  data() {
    return {
      name: '',
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: '',
      isLoading: false,
    };
  },
  // computed: {
  //   isPasswordTouched() {
  //     if (!this.oldPassword && !this.newPassword && !this.confirmNewPassword) {
  //       return false;
  //     }
  //     return true;
  //   },
  //   // eslint-disable-next-line vue/return-in-computed-property
  //   isPasswordPassed() {
  //     if (this.oldPassword && this.newPassword === this.confirmNewPassword) {
  //       return true;
  //     }
  //     // return false;
  //   },
  //   isSubmittable() {

  //   }
  // },
  methods: {
    editProfile() {
      this.isLoading = true;
      api.auth
        .edit({
          name: this.name,
          oldPassword: this.oldPassword,
          newPassword: this.newPassword,
        })
        .then(({ data }) => {
          this.isLoading = false;
          this.$store.dispatch('setAdmin', data);
          this.$router.push('/me');
        })
        .catch(({ response }) => {
          this.isLoading = false;
          if (response.data === 'Wrong Password' && response.status === 400) {
            // eslint-disable-next-line no-alert
            alert('Wrong Password');
          }
        });
    },
  },
  beforeRouteEnter(to, from, next) {
    if (!store.getters.getAdmin) {
      return next('/login');
    }
    next();
  },
  created() {
    this.name = store.getters.getAdmin.name;
  },
};
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  padding: 1rem;
  background: #eee;
  width: 80%;
  margin: auto;
  border-radius: 10px;
  color: rgb(95, 95, 95);
  margin-top: 2rem;
}
form {
  width: 80%;
  margin: auto;
}
</style>
