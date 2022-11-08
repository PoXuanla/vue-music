import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import { vfmPlugin } from "vue-final-modal";
import App from "./App.vue";
import router from "./router";
import storeReset from "./stores/storeReset";
import "./assets/main.css";

const app = createApp(App);
const pinia = createPinia();

pinia.use(storeReset);

app.use(pinia);
app.use(router);
app.use(ElementPlus);
app.use(vfmPlugin);
app.mount("#app");
