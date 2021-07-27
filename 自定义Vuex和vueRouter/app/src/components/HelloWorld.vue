<template>
  <div>
    <span @click="goAbout">home</span>
    <p>
      {{ $store.state.num }}
    </p>
    <p>
      {{ $store.getters.getNum }}
    </p>
    <button @click="$store.commit('add', 2)">mutations</button>
    <button @click="$store.dispatch('add', 20)">actions</button>
  </div>
</template>

<script>
export default {
  methods: {
    goAbout() {
      this.$router.push('/about')
      // console.log(this.$router)
    }
  }
}
</script>

<style></style>
