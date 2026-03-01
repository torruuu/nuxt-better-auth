<script setup lang="ts">
import { LangSwitch, ThemeSwitch } from '@/components/ui/switches'
</script>

<template>
  <div>
    <div class="flex items-center justify-end gap-2">
      <ThemeSwitch />
      <LangSwitch />
    </div>
    <slot />
  </div>
</template>
