<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainHeader from './components/MainHeader.vue'
import './styles/global.scss'
</script>

<template>
  <MainHeader />
  <RouterView />
</template>
