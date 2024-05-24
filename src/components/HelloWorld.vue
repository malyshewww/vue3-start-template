<template>
  <div class="row">
    <div class="col text-center">
      <h1 class="msg">{{ msg }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<script setup>
defineProps({
  msg: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss"></style>
