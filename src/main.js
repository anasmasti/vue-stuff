import { createApp } from 'vue'
import App from './App.vue'
import PutColor from "./plugins/PutColor"
import ThrowHeelo from './plugins/ThrowHeelo'
import mainStore from './store'

const app = createApp(App)

// Apply red color directive globaly 
app.use(PutColor)
app.use(ThrowHeelo)
app.use(mainStore)

app.mount('#app')
