<template>
  <div class="container">
    <h1 class="page-title">Home</h1>
    <p>{{ counter }}</p>
    <button @click="increment">счетчик</button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCounterStore } from '@/stores/counter'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Главная',
  meta: [
    {
      name: 'description',
      content: `Описание на странице`
    }
  ]
})
const counterStore = useCounterStore()
const counter = computed(() => counterStore.counter)
const increment = () => counterStore.increment()
</script>

<style lang="scss">
.page-title {
  color: gray;
  @media screen and (max-width: $lg) {
    color: black;
  }
  @media screen and (max-width: $lg) {
    font-size: 20px;
  }
}
</style>
