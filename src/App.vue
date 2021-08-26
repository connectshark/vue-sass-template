<template>
  <h1>{{title}}</h1>
  <router-view></router-view>
</template>

<script>
export default {
  setup () {
    return {
      title: 'hello'
    }
  }
}
</script>


<style>
#app {
  font-family: 'openhuninn', 'Noto Sans TC', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
