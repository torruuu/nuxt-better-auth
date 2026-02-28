<script setup lang="ts">
import LangSwitch from '@/components/ui/switches/LangSwitch.vue'
import ThemeSwitch from '@/components/ui/switches/ThemeSwitch.vue'
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
