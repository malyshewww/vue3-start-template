<template>
  <div class="container">
    <!-- <hello-world msg="Welcome" /> -->
    <h1 class="page-title">Home</h1>
    <p>{{ counter }}</p>
    <button @click="increment">счетчик</button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import { useHead } from '@vueuse/head'
import { useCounterStore } from '@/stores/counter'

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
}
</style>
