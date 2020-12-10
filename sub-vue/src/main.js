import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router'

Vue.use(VueRouter)
Vue.config.productionTip = false

let router = null
let instance = null

function render (props = {}) {
  const { container } = props
  console.log(process.env)
  router = new VueRouter({
    mode: 'history',
    base: '/vue',
    // base: window.__POWERED_BY_QIANKUN__ ? '/vue' : '/', // '/vue' 与主项目里面的激活路由一致！
    routes
  })
  console.log('router:', router)
  console.log('router.options:', JSON.stringify(router.options, null, 2))
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}
if (window.__POWERED_BY_QIANKUN__) {
  Vue.prototype.$qk = true
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
  console.log('qiankun 运行...')
} else {
  Vue.prototype.$qk = false
  console.log('独立运行...')
  render()
}

// eslint-disable-next-line no-undef
console.log('__webpack_public_path__:', __webpack_public_path__) // '/'

export async function bootstrap (props) {
  console.log('bootstrap 函数: ', props)
}
export async function mount (props) {
  console.log('mount 函数: ', props)
  render(props)
}
export async function unmount (props) {
  console.log('unmount函数:', props)
  instance.$destroy()
  instance = null
  router = null
}
