<script setup lang="ts">
import { authClient } from '@/lib/auth/auth-client'

const { data: session } = await authClient.useSession(useFetch)
</script>

<template>
  <p>
    {{ session }}
  </p>
</template>
