<script setup lang="ts"></script>

<template>
  <nav class="main-nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
</template>

<style lang="scss">
@mixin my-border($color) {
  border: 1px solid $color;
}

.main-nav {
  @include my-border(red);
}
</style>
