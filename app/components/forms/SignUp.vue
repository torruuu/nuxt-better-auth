<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from '@/components/ui/field'
import { Input, InputPassword } from '@/components/ui/input'
import { Spinner } from '@/components/ui/spinner'
import { FormValidator } from '@/validators/FormValidator'
import { useForm, Field as VeeField } from 'vee-validate'
import { z } from 'zod'

const { t } = useI18n()

const schema = computed(() =>
  z.object({
    name: FormValidator.string(t).max(10),
    email: FormValidator.email(t),
    password: FormValidator.string(t).min(8),
  }),
)

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema,
})

const onSubmit = handleSubmit(async (values) => {
  await new Promise((resolve) =>
    setTimeout(() => {
      console.log(values)
      resolve(true)
    }, 1000),
  )
})
</script>

<template>
  <form @submit="onSubmit">
    <FieldSet>
      <FieldGroup>
        <VeeField v-slot="{ field, errors }" name="name">
          <Field>
            <FieldLabel for="name">{{ $t('form.label.name') }}</FieldLabel>
            <Input v-bind="field" id="name" :aria-invalid="!!errors.length" />
            <FieldError v-if="errors.length" :errors="errors" />
          </Field>
        </VeeField>

        <VeeField v-slot="{ field, errors }" name="email">
          <Field>
            <FieldLabel for="email">{{ $t('form.label.email') }}</FieldLabel>
            <Input v-bind="field" id="email" :aria-invalid="!!errors.length" />
            <FieldError v-if="errors.length" :errors="errors" />
          </Field>
        </VeeField>

        <VeeField v-slot="{ field, errors }" name="password">
          <Field>
            <FieldLabel for="password">{{ $t('form.label.password') }}</FieldLabel>
            <InputPassword v-bind="field" id="password" :aria-invalid="!!errors.length" />
            <FieldError v-if="errors.length" :errors="errors" />
          </Field>
        </VeeField>
      </FieldGroup>
    </FieldSet>

    <Field class="mt-6">
      <Button :disabled="isSubmitting" type="submit">
        <Spinner v-if="isSubmitting" />
        {{ $t('action.submit') }}
      </Button>
    </Field>
  </form>
</template>
