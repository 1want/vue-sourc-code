<template>
  <div @click="goAbout">home</div>
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
