<script setup lang="ts">
import SignIn from '@/components/forms/SignIn.vue'
import SignUp from '@/components/forms/SignUp.vue'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
</script>

<template>
  <Tabs class="max-auto my-6 w-full px-4" default-value="signin">
    <TabsList>
      <TabsTrigger value="signin">{{ $t('title.sign_in') }}</TabsTrigger>
      <TabsTrigger value="signup">{{ $t('title.sign_up') }}</TabsTrigger>
    </TabsList>
    <TabsContent value="signin">
      <Card>
        <CardHeader>
          <CardTitle>{{ $t('title.sign_in') }}</CardTitle>
          <CardDescription>
            {{ $t('form.description.sign_in') }}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignIn />
        </CardContent>
      </Card>
    </TabsContent>

    <TabsContent value="signup">
      <Card>
        <CardHeader>
          <CardTitle>{{ $t('title.sign_up') }}</CardTitle>
          <CardDescription>
            {{ $t('form.description.sign_up') }}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignUp />
        </CardContent>
      </Card>
    </TabsContent>
  </Tabs>
</template>
