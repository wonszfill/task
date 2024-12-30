<script setup lang="ts">
import Logo from './Logo.vue'
import Navigation from './Navigation.vue'
</script>

<template>
  <header class="container">
    <div class="main-header">
      <RouterLink to="/"><Logo class="main-header__logo" /></RouterLink>
      <Navigation />
    </div>
  </header>
</template>

<style lang="scss">
.main-header {
  background-color: #fff;
  height: $main-header-height-desktop;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid $light-border;
  width: 100%;

  /* to display over backdrop */
  position: relative;
  z-index: 21;

  &__logo {
    flex-shrink: 0;
  }
}
</style>
