<script setup lang="ts">
import { useBasketStore } from '@/stores/basket'

const { getBasket, removeFromBasket, toggleBasketPopup } = useBasketStore()
</script>

<template>
  <div class="basket-popup">{{ getBasket() }}</div>
</template>
