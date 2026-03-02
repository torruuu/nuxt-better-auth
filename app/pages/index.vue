<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { authClient } from '@/lib/auth/auth-client'

const { data: session } = await authClient.useSession(useFetch)

const handleSignOut = async () => {
  await authClient.signOut({
    fetchOptions: {
      onSuccess: () => reloadNuxtApp(),
    },
  })
}
</script>

<template>
  <div>
    <p>Welcome {{ session?.user.name }}</p>
    <Button @click="handleSignOut">Sign Out</Button>
  </div>
</template>
