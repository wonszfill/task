import type { BasketProduct } from '@/types'
import { defineStore } from 'pinia'
import { computed, onMounted, ref, type Ref } from 'vue'

export const useBasketStore = defineStore('basket', () => {
  const isBasketPopupVisible = ref(false)

  const toggleBasketPopup = () => (isBasketPopupVisible.value = !isBasketPopupVisible.value)

  const basket: Ref<{ [key: string]: BasketProduct }> = ref({})
  const basketQuantity = computed(() => Object.keys(basket.value).length)

  function syncWithLocalStorage() {
    if (!localStorage) {
      return
    }
    localStorage.setItem('magazines', JSON.stringify(basket.value))
  }

  function getFromLocalStorage() {
    if (!localStorage) {
      return
    }
    const localData = localStorage.getItem('magazines')

    if (localData) {
      basket.value = JSON.parse(localData)
    }
  }

  onMounted(() => {
    getFromLocalStorage()
  })

  function addToBasket(item: BasketProduct) {
    if (item.uid in basket.value) {
      return
    }
    basket.value[item.uid] = item

    syncWithLocalStorage()
  }

  function removeFromBasket(item: BasketProduct) {
    if (item.uid in basket.value) {
      try {
        delete basket.value[item.uid]
      } catch (e) {
        console.warn(e)
      }
    }

    syncWithLocalStorage()
  }

  const getBasket = () => basket.value
  const getBasketQuantity = () => basketQuantity.value
  const getIsBasketPopupVisible = () => isBasketPopupVisible.value

  return {
    getBasket,
    getBasketQuantity,
    removeFromBasket,
    addToBasket,
    getIsBasketPopupVisible,
    toggleBasketPopup,
  }
})
