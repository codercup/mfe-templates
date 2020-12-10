<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <img alt="Vue logo" :src="imgSrc" />
    <button @click="login">Login</button>
    <button @click="clear">clear</button>
    <div>{{ userInfo }}</div>
  </div>
</template>

<script>
import { login } from '@/api/login'
import imgSrc from '@/assets/logo.png'

export default {
  name: 'Home',
  data () {
    return {
      imgSrc,
      userInfo: ''
    }
  },
  mounted () {
    this.login()
  },
  methods: {
    async login () {
      const res = await login({ name: 'admin' })
      console.log(JSON.stringify(res, null, 2))
      this.userInfo = JSON.stringify(res, null, 2)
    },
    clear () {
      this.userInfo = ''
    }
  }
}
</script>
