<template>
  <div>
    {{ message }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'hello'
    }
  },
  created() {
    console.log(this._data.message)
  }
}
</script>

<style></style>
