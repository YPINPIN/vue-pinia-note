import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import MainTitle from './components/MainTitle.vue';

// 創建 pinia 實例
import { createPinia } from 'pinia';
const pinia = createPinia();

const app = createApp(App);

app.use(router);
// 使用 pinia
app.use(pinia);

app.component('MainTitle', MainTitle);

app.mount('#app');
