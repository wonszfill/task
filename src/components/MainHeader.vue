<script setup lang="ts">
import Logo from './Logo.vue'
import Navigation from './Navigation.vue'
</script>

<template>
  <header class="main-header">
    <div class="main-header__wrapper container">
      <RouterLink to="/"><Logo class="main-header__logo" /></RouterLink>
      <Navigation />
    </div>
  </header>
</template>

<style lang="scss">
.main-header {
  background-color: #fff;
  border-bottom: 1px solid $light-gray;
  width: 100%;

  /* to display over backdrop */
  position: relative;
  z-index: 21;

  &__wrapper {
    height: $main-header-height-desktop;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    flex-shrink: 0;
  }
}
</style>
