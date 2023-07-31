<template>
<main>
  <div>
    <router-link to="/users/John">John page</router-link>
    <router-link to="/">Home page</router-link>
  </div>
  <router-view></router-view>
</main>
</template>


<style lang="scss">
#app {
  font-family: 'Poppins', 'Noto Sans TC', sans-serif;
  text-align: center;
  main {
    height: 100vh;
    background-color: #111111;
    display: grid;
    place-items: center;
  }
  a {
    color: #fff;
    margin: 0 1rem;
  }
}
</style>
