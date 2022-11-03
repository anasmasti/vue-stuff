import { createApp } from "vue";
import App from "./App.vue";
import PutColor from "./plugins/PutColor";
import ThrowHeelo from "./plugins/ThrowHeelo";
import router from "./router";
import mainStore from "./store";

// Init the APP creation
const app = createApp(App);

// Apply red color directive globaly
app.use(PutColor);

// Add plugin to create mixin on component created
app.use(ThrowHeelo);

// Declare the stote
app.use(mainStore);

// Use router
app.use(router)

// Mount the APP
app.mount("#app");
