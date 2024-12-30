<script setup lang="ts">
interface Props {
  bubbleContent?: string | number
}
withDefaults(defineProps<Props>(), {
  bubbleContent: '',
})
</script>

<template>
  <button class="icon-button">
    <slot />
    <span class="icon-button__bubble" v-if="bubbleContent || bubbleContent === 0">{{
      bubbleContent
    }}</span>
  </button>
</template>

<style lang="scss">
.icon-button {
  border: none;
  color: $primary;
  position: relative;
  transition: color 100ms ease-in-out;
  background-color: #fff;
  padding: 0;

  &::before {
    height: 2.5rem;
    width: 2.5rem;
    content: '';
    background-color: inherit;
    transition: background-color 100ms ease-in-out;
    position: absolute;
    border-radius: 100%;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }

  &:hover {
    color: #fff;
    background-color: $primary;
  }

  svg {
    color: inherit;
    position: relative;
    z-index: 1;
  }

  &__bubble {
    background-color: $primary;
    font-size: 0.625rem;
    line-height: 0.875rem;
    color: #fff;
    position: absolute;
    width: 0.8125rem;
    height: 0.8125rem;
    top: -2px;
    right: -7px;
    z-index: 1;
    border-radius: 1000px;
  }
}
</style>
