<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainHeader from './components/MainHeader.vue'
import '@/styles/global.scss'

import { useBasketStore } from '@/stores/basket'
import Backdrop from './components/Ui/Backdrop.vue'

const { getIsBasketPopupVisible } = useBasketStore()
</script>

<template>
  <MainHeader />
  <RouterView />
  <Backdrop :is-visibile="getIsBasketPopupVisible()" />
</template>
