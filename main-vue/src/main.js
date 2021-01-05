import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { registerMicroApps, start } from 'qiankun'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

registerMicroApps([
  // {
  //   name: 'react app', // app name registered
  //   entry: '//localhost:7100',
  //   container: '#yourContainer',
  //   activeRule: '/yourActiveRule'
  // },
  // {
  //   name: 'vue app',
  //   entry: { scripts: ['//localhost:7100/main.js'] },
  //   container: '#yourContainer2',
  //   activeRule: '/yourActiveRule2',
  // },
  // {
  //   name: 'vueApp',
  //   entry: '//localhost:1888',
  //   container: '#container',
  //   activeRule: '/vue', // 与子项目的 router.base一致
  // },
  {
    name: 'sub-vue',
    entry: '//localhost:8081',
    container: '#container',
    activeRule: '/vue', // 与子项目的 router.base一致
  },
  // {
  //   name: 'sub-umi',
  //   entry: '//localhost:8090',
  //   container: '#container',
  //   activeRule: '/umi', // 与子项目的 router.base一致
  // },
  // {
  //   name: 'sub-react',
  //   entry: '//localhost:8100',
  //   container: '#container',
  //   activeRule: '/react', // 与子项目的 router.base一致
  // },
])

// 开启服务
start()
