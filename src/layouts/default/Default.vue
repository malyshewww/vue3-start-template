<template>
  <div class="wrapper">
    <AppHeader />
    <main class="main">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'
</script>

<style lang="scss">
body {
  &.lock {
    overflow: hidden;
    touch-action: none;
  }
  .loaded & {
  }
}
.workemail {
  display: none;
}
.wrapper {
  width: 100%;
  min-height: 100vh;
  overflow: clip;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
.footer {
  margin-top: auto;
}
</style>
