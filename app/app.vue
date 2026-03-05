<script setup lang="ts">
import { Toaster } from '@/components/ui/sonner'
import { ConfigProvider } from 'reka-ui'

const { locale } = useI18n()
</script>

<template>
  <Toaster class="pointer-events-auto" position="top-right" />
  <ConfigProvider :locale>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </ConfigProvider>
</template>
