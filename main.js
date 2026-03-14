//#endregion
// #region Imports
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// #endregion

// #region Create and Mount App
createApp(App).use(store).use(router).mount('#app');
// #endregion