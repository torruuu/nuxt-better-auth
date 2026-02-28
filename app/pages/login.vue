<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/shadcn/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/shadcn/tabs'
</script>

<template>
  <Tabs class="max-auto my-6 w-full px-4" default-value="signin">
    <TabsList>
      <TabsTrigger value="signin">{{ $t('title.sign_in') }}</TabsTrigger>
      <TabsTrigger value="signup">{{ $t('title.sign_up') }}</TabsTrigger>
    </TabsList>
    <Card>
      <TabsContent value="signin">
        <CardHeader>
          <CardTitle>{{ $t('title.sign_in') }}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Sign in form</p>
        </CardContent>
      </TabsContent>
      <TabsContent value="signup">
        <CardHeader>
          <CardTitle>{{ $t('title.sign_up') }}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Sign up form</p>
        </CardContent>
      </TabsContent>
    </Card>
  </Tabs>
</template>
