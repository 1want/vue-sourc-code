<template>
  <div @click="goHome">about</div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.go(-1)
    }
  }
}
</script>

<style></style>
