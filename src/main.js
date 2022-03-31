import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "lib-flexible/flexible.js"; // 导入 lib-flexible@0.3.2

createApp(App).use(store).use(router).mount("#app");
