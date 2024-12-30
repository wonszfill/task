import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSettingsStore = defineStore('settings', () => {
  const locale = ref('pl-PL')
  const currency = ref('PLN')

  const getCurrency = () => currency.value
  const getLocale = () => locale.value

  return {
    getCurrency,
    getLocale,
  }
})
