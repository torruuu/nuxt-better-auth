<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/shadcn/tabs'
</script>

<template>
  <Tabs class="max-auto my-6 w-full px-4" default-value="signin">
    <TabsList>
      <TabsTrigger value="signin">Sign in</TabsTrigger>
      <TabsTrigger value="signup">Sign up</TabsTrigger>
    </TabsList>
    <TabsContent value="signin">
      <h1>Sign in</h1>
    </TabsContent>
    <TabsContent value="signup">
      <h1>Sign up</h1>
    </TabsContent>
  </Tabs>
</template>
