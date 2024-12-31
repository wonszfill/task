<script setup lang="ts">
import { useMagazines } from '@/composables/useMagazines'
import MagazineCard from './Ui/MagazineCard.vue'
import Pagination from './Ui/Pagination.vue'

const { pagination, products } = useMagazines()
import { useBasketStore } from '@/stores/basket'

const { addToBasket } = useBasketStore()

import { useSettingsStore } from '@/stores/settings'

const { getLocale, getCurrency } = useSettingsStore()
</script>

<template>
  <section class="magazines-catalogue container">
    <h2>Wyszukaj czasopismo</h2>
    <div class="magazines-catalogue__products">
      <MagazineCard
        @click="addToBasket(item)"
        v-for="item in products"
        :key="item.uid"
        :item="item"
        :locale="getLocale()"
        :currency="getCurrency()"
      />
    </div>
    <Pagination :pagination="pagination" />
  </section>
</template>

<style lang="scss">
.magazines-catalogue {
  padding-bottom: 4.6288rem;

  h2 {
    margin-bottom: 5.5306rem;
    font-weight: 900;
    color: $primary;
    font-size: 2.625rem;
    line-height: 3.125rem;
  }

  &__products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
    margin-bottom: 2.3156rem;
  }
}
</style>
