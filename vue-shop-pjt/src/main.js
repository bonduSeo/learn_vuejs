import "./plugins/axios";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mixins from "./mixins";

createApp(App).mixin(mixins).use(store).use(router).mount("#app");

window.kakao.init("317f4318256ec89cb64c84d2fb886bb2");
