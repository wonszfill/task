<script setup lang="ts">
interface Props {
  isVisibile: boolean
}

defineProps<Props>()
</script>

<template>
  <Transition name="fade">
    <section v-if="isVisibile" class="backdrop"></section>
  </Transition>
</template>

<style lang="scss">
.backdrop {
  position: fixed;
  top: $main-header-height-desktop;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #3e3e3e;
  opacity: 0.6;
  z-index: 20;
}
</style>
