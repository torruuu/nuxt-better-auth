export default defineNuxtRouteMiddleware(async (to, _from) => {
  const authStore = useAuthStore()
  await callOnce('auth-store', () => authStore.init())

  if (!authStore.session) {
    if (to.path !== '/login') return navigateTo('/login')
    return
  }

  if (to.path === '/login') return navigateTo('/')
})
