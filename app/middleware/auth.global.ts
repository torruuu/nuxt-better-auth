import { authClient } from '@/lib/auth/auth-client'

export default defineNuxtRouteMiddleware(async (to, _from) => {
  const { data: session } = await authClient.useSession(useFetch)
  if (!session.value) {
    if (to.path === '/') {
      return navigateTo('/login')
    }
    return
  }
  if (session.value && to.path === '/login') {
    return navigateTo('/')
  }
})
