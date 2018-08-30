import Vue from 'vue';
import PortalVue from 'portal-vue';

import App from './App.vue';
import router from './router';

Vue.use(PortalVue)
Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
