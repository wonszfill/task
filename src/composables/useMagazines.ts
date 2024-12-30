import type { Magazine, MagazinesResponse, Pagination } from '@/types'
import { onBeforeUnmount, ref, type Ref } from 'vue'

export function useMagazines() {
  const paginationModel = () => ({
    pages: [],
  })

  const pagination: Ref<Pagination> = ref(paginationModel())
  const products: Ref<Magazine[]> = ref([])

  const fetchController: Ref<undefined | AbortController> = ref()

  const fetchMagazines = async () => {
    fetchController.value = new AbortController()
    const signal = fetchController.value.signal

    try {
      const data = (await (await fetch('/magazines.json', { signal }))?.json()) as MagazinesResponse

      pagination.value = data?.pagination || paginationModel()
      products.value = data?.products || []
    } catch (e) {
      console.warn(e)
    }
  }

  fetchMagazines()

  onBeforeUnmount(() => {
    if (fetchController.value) {
      fetchController.value.abort('Unmounting component.')
    }
  })

  return {
    fetchMagazines,
    pagination,
    products,
  }
}
