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
      const { data, error } = await useFetch('/api/widget-config')

      if (error.value) {
        console.error('Error al cargar config del widget:', error.value)
      } else {
        this.keyRegistry=true
        this.productKey=data.productKey
        this.membershipKey=data.membershipKey
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
