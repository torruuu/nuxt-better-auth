import { authClient } from '@/lib/auth/auth-client'
import { defineStore } from 'pinia'

type SessionData = typeof authClient.$Infer.Session

export const useAuthStore = defineStore('auth', () => {
  const session = ref<SessionData | null>(null)

  async function init() {
    const { data } = await authClient.useSession(useFetch)

    session.value = data.value
  }

  return { session, init }
})
