import { useAuthStore } from '~/stores/auth'

/*
Middleware to handel user navigation when authenticated
(restrictive by login view)
* */
export default defineNuxtRouteMiddleware(async (to, from) => {
  const authStore = useAuthStore()

  if (authStore.user === null) {
    if (to.path !== '/login') {
      return navigateTo('/login')
    }
  } else if (to.path === '/login') {
    return navigateTo('/')
  }

  return true
})
