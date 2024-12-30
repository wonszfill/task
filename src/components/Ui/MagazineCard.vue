<script setup lang="ts">
import type { Magazine } from '@/types'

interface Props {
  item: Magazine
  locale: string
  currency: string
}

defineProps<Props>()

defineEmits(['click'])
</script>

<template>
  <a @click="$emit('click')" class="magazine-card">
    <div class="magazine-card__wrapper">
      <img
        :src="item.coverUrl"
        :alt="item.label"
        :width="item.coverDimensions.width"
        :height="item.coverDimensions.height"
        class="magazine-card__cover"
      />

      <div class="magazine-card__box">
        <h3 class="magazine-card__label">{{ item.label }}</h3>
        <div class="magazine-card__price">
          {{ item.price.toLocaleString(locale) }}
          <span class="magazine-card__currency">{{ currency }}</span>
        </div>
        <div class="magazine-card__vat">+ VAT {{ item.vat }}%</div>
        <div class="magazine-card__details">Szczegóły</div>
      </div>
    </div>
  </a>
</template>

<style lang="scss">
.magazine-card {
  &__wrapper {
    max-width: 17.875rem;
    margin: 0 auto;
    padding-top: 7.8125rem;
    position: relative;
  }

  &__cover {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  &__box {
    padding: 5.3125rem 1.4375rem 1.4375rem;
    text-align: center;
    color: $primary;
    border: 1px solid transparent;
    transition:
      color 100ms,
      border-color 100ms;
  }

  &__label {
    font-weight: 900;
    font-size: 1.125rem;
    line-height: 1.6875rem;
    height: 3.3125rem;
    overflow: hidden;
  }

  &__price {
    font-size: 1.875rem;
    font-weight: 900;
  }

  &__currency {
    font-size: 1.25rem;
    text-transform: uppercase;
  }

  &__vat {
    font-size: 0.875rem;
    line-height: 1.5rem;
    font-weight: 300;
    margin-top: 0.75rem;
  }

  &__details {
    text-transform: uppercase;
    margin-top: 0.875rem;
    letter-spacing: 0.15rem;
  }

  &:hover & {
    &__box {
      border-color: $secondary;
      color: $secondary;
      box-shadow: 20px 20px 40px #2e383826;
    }
  }
}
</style>
