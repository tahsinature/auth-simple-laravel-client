import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import api from './api';

Vue.use(require('vue-moment'));

Vue.config.productionTip = false;

function renderVue() {
  new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app');
}

api.auth.authenticate().then(({ data, status }) => {
  if (status === 200) {
    store.dispatch('setAdmin', data);
    api.quote.get().then(({ data }) => {
      store.dispatch('addQuotes', data);
      renderVue();
    });
  } else {
    renderVue();
  }
}).catch(() => {
  renderVue();
});
