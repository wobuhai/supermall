import { createApp ,Vue} from 'vue'
import router from './router'
import store from './store'
import App from "./App";

createApp(App).use(store).use(router).mount('#app')
