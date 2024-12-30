<script setup lang="ts">
import { useBasketStore } from '@/stores/basket'
import BasketItem from './Ui/BasketItem.vue'

const { getBasket, getBasketTotal, getBasketQuantity, removeFromBasket, toggleBasketPopup } =
  useBasketStore()

import { useSettingsStore } from '@/stores/settings'

const { getCurrency } = useSettingsStore()
</script>

<template>
  <div class="basket-popup">
    <div class="basket-popup__top">
      <h3>Twój koszyk</h3>

      <button @click="toggleBasketPopup">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14.677"
          height="14.677"
          viewBox="0 0 14.677 14.677"
          fill="currentColor"
        >
          <path
            class="a"
            d="M9.45,7.573a.324.324,0,0,1,0-.469l5.026-5.026a.724.724,0,0,0,.2-.469.724.724,0,0,0-.2-.469L13.538.2a.724.724,0,0,0-.469-.2A.608.608,0,0,0,12.6.2L7.573,5.228a.324.324,0,0,1-.469,0L2.078.2A.724.724,0,0,0,1.608,0a.724.724,0,0,0-.469.2L.2,1.139a.724.724,0,0,0-.2.469.724.724,0,0,0,.2.469L5.228,7.1a.324.324,0,0,1,0,.469L.2,12.6a.648.648,0,0,0,0,.938l.938.938a.724.724,0,0,0,.469.2.724.724,0,0,0,.469-.2L7.1,9.45a.324.324,0,0,1,.469,0L12.6,14.476a.648.648,0,0,0,.938,0l.938-.938a.648.648,0,0,0,0-.938Z"
          />
        </svg>
      </button>
    </div>

    <template v-if="getBasketQuantity()">
      <div class="basket-popup__list">
        <BasketItem
          v-for="product in getBasket()"
          :key="product.uid"
          :currency="getCurrency()"
          :product="product"
          @remove="removeFromBasket(product)"
        />
      </div>

      <div class="basket-popup__summary">
        <div class="basket-popup__total">
          <span class="basket-popup__total-label">Łączna kwota:</span>
          <div class="basket-popup__total-price">
            <div>
              <span class="basket-popup__total-whole">{{ getBasketTotal().whole }}</span
              ><span class="basket-popup__total-fraction">{{ getBasketTotal().fraction }}</span
              ><span class="basket-popup__total-currency">{{ getCurrency() }}</span>
            </div>
            <span class="basket-popup__total-vat">+ VAT 23%</span>
          </div>
        </div>

        <a class="basket-popup__total-button">Przejdź do koszyka </a>
      </div>
    </template>

    <div class="basket-popup__empty" v-else>Koszyk jest pusty.</div>
  </div>
</template>

<style lang="scss">
.basket-popup {
  $basket-popup-side-padding: 1.1875rem;

  position: absolute;
  background-color: #fff;
  top: calc(100% + 2.075rem);
  right: 0;
  width: 23.8125rem;

  &__top {
    padding-left: $basket-popup-side-padding;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    h3 {
      font-weight: bold;
      font-size: 18px;
      line-height: 30px;
    }

    button {
      height: 41px;
      width: 41px;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $primary;
      color: #fff;

      &:hover {
        background-color: $secondary;
      }
    }
  }

  &__list {
    padding: 1rem $basket-popup-side-padding 1.25rem;

    & > div:not(:first-child) {
      margin-top: 0.6875rem;
    }
  }

  &__empty {
    padding: 1rem $basket-popup-side-padding;
  }

  &__summary {
    border-top: 1px solid $sirocco;
    padding: 1.5625rem 1.6875rem 34px 1.5625rem;
    color: $text-color;
  }

  &__total {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__total-label {
    font-weight: bold;
    font-size: 1rem;
    line-height: 1.875rem;
  }

  &__total-price {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
  }

  &__total-whole {
    font-size: 1.375rem;
    line-height: 1.5rem;
    font-weight: 900;
  }

  &__total-fraction,
  &__total-currency {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 900;
  }

  &__total-vat {
    font-weight: 300;
  }

  &__total-fraction::after {
    content: ' ';
  }

  &__total-fraction::before {
    content: ',';
  }

  &__total-button {
    background-color: $secondary;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 0.15rem;
    font-weight: medium;
    margin-top: 1rem;
    margin-left: 0.4375rem;

    &:hover {
      opacity: 0.9;
    }
  }
}
</style>
