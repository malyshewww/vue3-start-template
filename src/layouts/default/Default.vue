<template>
  <div class="wrapper">
    <Header />
    <main class="main">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
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
