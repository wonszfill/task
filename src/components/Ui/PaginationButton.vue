<script setup lang="ts">
import type { PaginationPage } from '@/types'

interface Props {
  page: PaginationPage
}

defineProps<Props>()
</script>

<template>
  <RouterLink
    :to="page.url"
    class="pagination-button"
    :class="{ 'pagination-button--active': page.isActive }"
    ><slot>{{ page.index }}</slot></RouterLink
  >
</template>

<style lang="scss">
.pagination-button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.0625rem;
  padding: 0 0.7688rem;
  color: $sirocco;
  font-size: 0.75rem;
  line-height: 2.0625rem;

  &--active {
    background-color: $primary;
    color: #fff;
    font-weight: bold;
  }
}
</style>
