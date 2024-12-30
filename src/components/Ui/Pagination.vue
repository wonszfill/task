<script setup lang="ts">
import type { Pagination } from '@/types'
import PaginationButton from './PaginationButton.vue'

interface Props {
  pagination: Pagination
}

defineProps<Props>()
</script>

<template>
  <ul class="pagination">
    <li v-if="pagination.prev">
      <PaginationButton aria-label="Poprzednia strona" :page="pagination.prev">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="5.004"
          height="9.355"
          viewBox="0 0 5.004 9.355"
          fill="currentColor"
          class="pagination__rotate-icon"
        >
          <g transform="translate(0 9.355) rotate(-90)">
            <path
              class="a"
              d="M9.259.1a.331.331,0,0,0-.467,0L4.682,4.215.564.1A.33.33,0,0,0,.1.564L4.44,4.908a.323.323,0,0,0,.234.1.336.336,0,0,0,.234-.1L9.251.564A.324.324,0,0,0,9.259.1Z"
              transform="translate(0 0)"
            />
          </g>
        </svg>
      </PaginationButton>
    </li>
    <li v-for="page in pagination.pages" :key="page.index">
      <PaginationButton :page="page" />
    </li>
    <li v-if="pagination.next">
      <PaginationButton aria-label="Następna strona" :page="pagination.next">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="5.004"
          height="9.355"
          viewBox="0 0 5.004 9.355"
          fill="currentColor"
        >
          <g transform="translate(0 9.355) rotate(-90)">
            <path
              class="a"
              d="M9.259.1a.331.331,0,0,0-.467,0L4.682,4.215.564.1A.33.33,0,0,0,.1.564L4.44,4.908a.323.323,0,0,0,.234.1.336.336,0,0,0,.234-.1L9.251.564A.324.324,0,0,0,9.259.1Z"
              transform="translate(0 0)"
            />
          </g>
        </svg>
      </PaginationButton>
    </li>
  </ul>
</template>

<style lang="scss">
.pagination {
  display: flex;
  margin: 0 auto;
  width: max-content;

  &__rotate-icon {
    transform: rotate(180deg);
  }
}
</style>
