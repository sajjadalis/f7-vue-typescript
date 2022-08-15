import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from "./locale";
import Framework7 from "framework7/lite-bundle";
import Framework7Vue, { registerComponents } from 'framework7-vue/bundle';
import App from './App.vue'


import "framework7/css/bundle";
import 'uno.css'
import './app.css';

// Init Framework7-Vue Plugin
Framework7.use(Framework7Vue);

const app = createApp(App)

// Register All Framework7 Vue components
// registerComponents(app);

app.use(createPinia())

app.use(i18n)

app.mount('#app')
