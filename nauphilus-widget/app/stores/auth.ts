import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as null | { apiClientId: string, apiClientSecret: string },
    keyRegistry: false,
    productKey: '' as string,
    membershipKey: '' as string
  }),
  getters: {
    isLoggedIn: (state) => !!state.user,
  },
  actions: {
    async getApiKeys(){
        if (!this.keyRegistry) {
    try {
      const response = await useFetch('/api/widget-config')
      if (response.error.value) {
        console.error('Error al cargar config del widget:', response.error.value)
      } else {
        this.keyRegistry=true
        this.productKey=response.data?.value?.productKey ?? ''
        this.membershipKey=response.data?.value?.membershipKey ?? ''
      }
    } catch (e) {
      console.error('Fallo al obtener config del widget:', e)
        }
      }
    },
    login(userData: { apiClientId: string, apiClientSecret: string }) {
      this.user = userData
    },

    logout() {
      this.user = null
    }
  }
})
