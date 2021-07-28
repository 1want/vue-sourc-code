<template>
  <div id="app">
    <router-link to="/">Home</router-link>

    <router-link to="/about">About</router-link>

    {{ getName }}
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      msg: 'hello',
      firstName: 'Mr',
      lastNamr: 'walt'
    }
  },
  created() {
    console.log(this)
  },
  computed: {
    getName() {
      return this.firstName + this.lastNamr
    }
  }
}
</script>

<style lang="less">
a {
  margin-right: 20px;
}
</style>
