import { createApp } from 'vue'
import App from './App.vue'
import VScroll from './components/VScroll'
import store from './store'

const app = createApp(App)
app.directive('scroll', VScroll) // Название директивы и вторым передаем саму директиву

app.use(store).mount('#app')
