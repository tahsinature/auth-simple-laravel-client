<template>
  <div class="container">
    <div class="title">
      <h3>My Quote Ground</h3>
    </div>
    <div
      class="overload"
      v-if="$store.getters.getQuotes.length >= maxNumber"
    >Slot Full. Please Remove Some Quotes</div>
    <input
      v-else
      type="text"
      v-model="newQuoteText"
      @keyup.enter="addQuote"
      placeholder="Take a Quote Shot..."
    >
    <div class="progress">
      <div
        class="progress-bar bg-info"
        :class="{'bg-danger': $store.getters.getQuotes.length >= maxNumber}"
        role="progressbar"
        :style="{width: ($store.getters.getQuotes.length / maxNumber) * 100 +'%'}"
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <span
          v-if="$store.getters.getQuotes.length > 0"
        >{{$store.getters.getQuotes.length}} / {{maxNumber}}</span>
      </div>
    </div>
    <div class="loader" v-if="isLoading">
      <div class="spinner-grow" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div class="text-center">
      <small class="text-muted">(Click over quote box to remove)</small>
    </div>
    <hr>
    <div class="quotes">
      <div
        class="quote"
        v-for="quote in $store.getters.getQuotes"
        :key="quote.id"
        @click="deleteQuote(quote.id)"
      >{{quote.text}}</div>
    </div>
  </div>
</template>

<script>
import api from '../api';
import store from '../store';

export default {
  data() {
    return {
      newQuoteText: '',
      maxNumber: 10,
      isLoading: false,
    };
  },
  methods: {
    addQuote() {
      this.isLoading = true;
      api.quote.add({ text: this.newQuoteText }).then(({ data }) => {
        this.isLoading = false;
        this.$store.dispatch('addQuote', data);
        this.newQuoteText = '';
        document.activeElement.blur();
      });
    },
    deleteQuote(id) {
      this.isLoading = true;
      api.quote.remove(id).then(({ data }) => {
        this.isLoading = false;
        store.dispatch('deleteQuote', id);
      });
    },
  },
  beforeRouteEnter(to, from, next) {
    if (!store.getters.getAdmin) {
      return next('/login');
    }
    next();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/main";
@import url("https://fonts.googleapis.com/css?family=ZCOOL+QingKe+HuangYou");
.title {
  padding: 1rem;
  background: #eee;
  text-align: center;
  width: 80%;
  margin: auto;
  border-radius: 10px;
  color: rgb(95, 95, 95);
  margin-top: 2rem;
}
.overload {
  text-align: center;
  width: 80%;
  margin: auto;
  border-radius: 10px;
  padding: 1rem;
  border: 3px solid #eee;
  background: rgb(255, 224, 224);
  color: rgb(85, 85, 85);
  margin-top: 1rem;
}
input {
  width: 80%;
  margin: auto;
  display: block;
  border-radius: 10px;
  border: 3px solid #eee;
  margin-top: 1rem;
  padding: 1rem 1rem;
  transition: all 0.3s;
  &:focus {
    outline: none;
    padding: 2rem 1rem;
  }
}
.quotes {
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @include respond(df, tab-p) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @include respond(df, mbl) {
    grid-template-columns: 1fr 1fr;
  }
  grid-gap: 1rem;
  .quote {
    font-family: "ZCOOL QingKe HuangYou", cursive;
    min-height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    text-align: center;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid rgb(255, 224, 224);
    transition: all 0.3s;
    padding: 0.4rem;
    &:hover {
      background: rgb(255, 224, 224);
      color: rgb(83, 81, 81);
    }
  }
}
.progress {
  width: 80%;
  margin: 1rem auto;
  border-radius: 5px;
}
.loader {
  text-align: center;
}
</style>
