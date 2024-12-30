<script setup lang="ts">
import type { BasketProduct } from '@/types'
import { computed } from 'vue'
import { splitNumberByComma } from '@/helpers'

interface Props {
  product: BasketProduct
  currency: string
}

const props = defineProps<Props>()

const splittedPrice = computed(() => splitNumberByComma(props.product.price))

defineEmits(['remove'])
</script>

<template>
  <div class="basket-item">
    <div class="basket-item__upper">
      <div class="basket-item__upper-left">
        <div class="basket-item__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            fill="currentColor"
            height="22.241"
            viewBox="0 0 31 22.241"
          >
            <g transform="translate(0 -58.303)">
              <g transform="translate(0 58.303)">
                <path
                  d="M30.4,60.154H28.356v-.7a.6.6,0,0,0-.433-.6,16.926,16.926,0,0,0-4.332-.553,11.175,11.175,0,0,0-8.1,3,11.057,11.057,0,0,0-8.1-3,16.926,16.926,0,0,0-4.332.553.6.6,0,0,0-.433.6v.691H.6a.6.6,0,0,0-.6.6V79.941a.6.6,0,0,0,.9.523,21.185,21.185,0,0,1,14.457-1.2H15.5a.6.6,0,0,0,.144,0c8.412-2.133,14.421,1.148,14.457,1.2a.6.6,0,0,0,.9-.517V60.755A.6.6,0,0,0,30.4,60.154ZM1.2,78.986V61.356H2.638v15.07a.6.6,0,0,0,.691.6,26.3,26.3,0,0,1,3.756-.3,15.587,15.587,0,0,1,5.132.775A22.09,22.09,0,0,0,1.2,78.986Zm5.883-3.455a26.442,26.442,0,0,0-3.269.21V59.932a16.573,16.573,0,0,1,3.563-.4,9.811,9.811,0,0,1,7.5,2.944L14.9,77.448A14.046,14.046,0,0,0,7.085,75.531ZM16.1,62.48a9.9,9.9,0,0,1,7.5-2.944,16.645,16.645,0,0,1,3.563.4V75.741a26.435,26.435,0,0,0-3.251-.216A14.163,14.163,0,0,0,16.1,77.442ZM29.792,78.986A22.094,22.094,0,0,0,18.754,77.5a15.624,15.624,0,0,1,5.156-.775,26.288,26.288,0,0,1,3.78.294.6.6,0,0,0,.691-.6V61.356h1.436Z"
                  transform="translate(0 -58.303)"
                />
              </g>
            </g>
          </svg>
        </div>

        <div class="basket-item__label">
          {{ product.label }}
        </div>
      </div>

      <button class="basket-item__delete" @click="$emit('remove')">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13.056"
          height="16.517"
          viewBox="0 0 13.056 16.517"
          fill="currentColor"
        >
          <g transform="translate(-74.133)">
            <g transform="translate(74.133)">
              <path
                d="M93.063,1.945H90.857V.512A.512.512,0,0,0,90.336,0a.078.078,0,0,0-.056.019A.071.071,0,0,0,90.243,0H84.985a.5.5,0,0,0-.512.512V1.945H82.259a1.112,1.112,0,0,0-1.126,1.126V4.913h.977V15.4a1.1,1.1,0,0,0,1.117,1.117H92.1A1.1,1.1,0,0,0,93.221,15.4V4.913h.968V3.071A1.112,1.112,0,0,0,93.063,1.945ZM85.5,1.024h4.327v.921H85.5ZM92.188,15.4c0,.065-.028.093-.093.093H83.227c-.065,0-.093-.028-.093-.093V4.913h9.054ZM93.156,3.89H82.166V3.071c0-.065.028-.1.093-.1h10.8c.065,0,.093.037.093.1Z"
                transform="translate(-81.133)"
              />
              <rect width="1.033" height="8.468" transform="translate(8.403 6.114)" />
              <rect width="1.033" height="8.468" transform="translate(6.021 6.114)" />
              <rect width="1.033" height="8.468" transform="translate(3.638 6.114)" />
            </g>
          </g>
        </svg>
      </button>
    </div>

    <div class="basket-item__lower">
      <span class="basket-item__price-label">Cena</span>
      <div class="basket-item__price">
        <span class="basket-item__price-whole">{{ splittedPrice.whole }}</span>
        <span class="basket-item__price-fraction">{{ splittedPrice.fraction }}</span>
        <span class="basket-item__price-currency">{{ currency }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.basket-item {
  &__upper {
    padding: 0.6875rem 0.5625rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid $light-gray;
    color: $primary;
    justify-content: space-between;
  }

  &__upper-left {
    display: flex;
  }

  &__lower {
    display: flex;
    justify-content: space-between;
    padding: 0.5625rem 1.3125rem 0.5625rem 1.4375rem;
    color: $text-color;
    align-items: flex-end;
  }

  &__icon {
    width: 3.25rem;
    height: 3.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    background-color: $light-gray;
    flex-shrink: 0;
    margin-right: 13px;
  }

  &__label {
    font-weight: bold;
    font-size: 1rem;
    line-height: 1.5rem;
    max-width: 11.75rem;
    align-self: flex-start;
  }

  &__delete {
    color: $sirocco;

    &:hover {
      color: $secondary;
    }
  }

  &__price-label {
    font-size: 0.875rem;
    line-height: 1.5rem;
    font-weight: 300;
  }

  &__price-whole {
    font-size: 1.125rem;
    line-height: 1.875rem;
    font-weight: 900;
    &::after {
      content: ',';
    }
  }

  &__price-currency::before {
    content: ' ';
  }

  &__price-fraction,
  &__price-currency {
    font-size: 0.9375rem;
    line-height: 1.875rem;
    font-weight: 900;
  }
}
</style>
