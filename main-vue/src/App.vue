<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/vue">Vue子项目</router-link> |
      <router-link to="/umi">Umi子项目</router-link> |
      <router-link to="/react">React子项目</router-link> |
    </div>
    <!-- 主应用容器 -->
    <router-view />
    <!-- 子应用容器 -->
    <div id="container"></div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
