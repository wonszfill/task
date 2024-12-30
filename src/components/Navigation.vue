<script setup lang="ts">
import UiIconButton from './Ui/IconButton.vue'
import { MAIN_MENU_LIST } from '../consts'

import { useBasketStore } from '@/stores/basket'

const { toggleBasketPopup, getBasketQuantity } = useBasketStore()
</script>

<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li v-for="link in MAIN_MENU_LIST" :key="link.uid">
        <RouterLink class="navigation__list-item" :to="link.url">{{ link.label }}</RouterLink>
      </li>
    </ul>

    <div class="navigation__actions">
      <UiIconButton>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18.743"
          height="18.743"
          viewBox="0 0 18.743 18.743"
        >
          <g transform="translate(-11 -11)">
            <path
              fill="currentColor"
              d="M29.513,28.412l-4.506-4.506A7.892,7.892,0,1,0,23.9,25.011l4.506,4.5a.78.78,0,1,0,1.105-1.1ZM18.9,25.225a6.329,6.329,0,1,1,6.33-6.327A6.335,6.335,0,0,1,18.9,25.225Z"
            />
          </g>
        </svg>
      </UiIconButton>
      <UiIconButton>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18.33"
          height="18.33"
          viewBox="0 0 18.33 18.33"
        >
          <path
            fill="currentColor"
            d="M12.373,11.3a6.03,6.03,0,0,0,2.9-5.194,6.11,6.11,0,1,0-12.22,0,6.03,6.03,0,0,0,2.9,5.194A9.446,9.446,0,0,0,0,18.33H1.528a7.829,7.829,0,0,1,15.275,0H18.33A9.2,9.2,0,0,0,12.373,11.3ZM4.583,6.11a4.583,4.583,0,1,1,4.583,4.583A4.6,4.6,0,0,1,4.583,6.11Z"
          />
        </svg>
      </UiIconButton>
      <UiIconButton @click="toggleBasketPopup" :bubble-content="getBasketQuantity()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20.116"
          height="20.089"
          viewBox="0 0 20.116 20.089"
        >
          <g transform="translate(-1232 -66)">
            <g transform="translate(1225.56 59.6)">
              <g transform="translate(6.44 6.4)">
                <path
                  fill="currentColor"
                  d="M24.2,11.66a.691.691,0,0,0-.692-.588h-3.98V9.445a3.045,3.045,0,1,0-6.091,0v1.626H9.461a.691.691,0,0,0-.692.588L6.45,25.675a.68.68,0,0,0,.156.571.71.71,0,0,0,.536.242h18.7a.7.7,0,0,0,.709-.709.877.877,0,0,0-.035-.225L24.2,11.66ZM14.86,9.445a1.626,1.626,0,1,1,3.253,0v1.626H14.86V9.445ZM7.973,25.087l2.094-12.6h3.374v3.962a.709.709,0,0,0,1.419,0V12.491h3.253v3.962a.709.709,0,0,0,1.419,0V12.491h3.374L25,25.087H7.973Z"
                  transform="translate(-6.44 -6.4)"
                />
              </g>
            </g>
          </g>
        </svg>
      </UiIconButton>
    </div>
  </nav>
</template>

<style lang="scss">
.navigation {
  display: flex;
  align-items: center;
  gap: 5rem;

  &__list {
    display: flex;
    gap: 2.25rem;
  }

  &__list-item {
    color: $text-color;
    font-weight: 300;
    font-size: 0.875rem;
    line-height: 1.5rem;

    &:hover {
      color: $primary;
    }
  }

  &__actions {
    display: flex;
    gap: 1.875rem;
  }
}
</style>
