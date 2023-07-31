<template>
<div>
  <h1>Hello! {{ route.params.username }}</h1>
</div>
</template>

<script setup>
import { useRoute } from 'vue-router/auto'

const route = useRoute('/user/[username]')

</script>

<style lang="scss" scoped>
h1 {
  color: #fff;
  font-size: 4rem;
}
</style>