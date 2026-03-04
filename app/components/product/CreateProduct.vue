<script setup lang="ts">
import { createProductMutation } from '@/client/@tanstack/vue-query.gen'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from '@/components/ui/input-group'
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from '@/components/ui/number-field'
import { Spinner } from '@/components/ui/spinner'
import { FormValidator } from '@/validators/FormValidator'
import { useMutation } from '@tanstack/vue-query'
import { useForm, Field as VeeField } from 'vee-validate'
import { z } from 'zod'

const { t } = useI18n()

const isOpen = ref(false)

const schema = computed(() =>
  z.object({
    name: FormValidator.string(t).max(50),
    description: FormValidator.string(t).max(200),
    price: FormValidator.number(t).min(0).max(1000000),
    stock: FormValidator.number(t).min(0).max(1000000),
    category: FormValidator.string(t).max(50),
  }),
)

const { handleSubmit, isSubmitting, setFieldValue } = useForm({
  validationSchema: schema,
})

const createProduct = useMutation({
  ...createProductMutation(),
  onSuccess: (data) => {
    console.log(data)
    isOpen.value = false
  },
  onError: (error) => {
    console.log(error)
  },
})

const onSubmit = handleSubmit((values) => {
  createProduct.mutate({ body: values })
})
</script>

<template>
  <Dialog v-model:open="isOpen">
    <DialogTrigger as-child>
      <Button>Create Product</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create Product</DialogTitle>
        <DialogDescription>
          Create a new product with the following details.
        </DialogDescription>
      </DialogHeader>
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

            <VeeField v-slot="{ field, errors }" name="description">
              <Field :data-invalid="!!errors.length">
                <FieldLabel for="description">
                  {{ $t('form.label.description') }}
                </FieldLabel>
                <InputGroup>
                  <InputGroupTextarea
                    id="description"
                    v-bind="field"
                    :aria-invalid="!!errors.length"
                    :rows="6"
                    class="min-h-24 resize-none"
                  />
                  <InputGroupAddon align="block-end">
                    <InputGroupText class="tabular-nums">
                      {{ field.value?.length || 0 }}/200
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
                <FieldError v-if="errors.length" :errors="errors" />
              </Field>
            </VeeField>

            <VeeField v-slot="{ value, errors }" name="price">
              <Field :data-invalid="!!errors.length" class="w-2xs">
                <FieldLabel for="price">{{ $t('form.label.price') }}</FieldLabel>
                <NumberField
                  :format-options="{
                    style: 'currency',
                    currency: 'EUR',
                    currencyDisplay: 'code',
                    currencySign: 'accounting',
                  }"
                  :min="0"
                  :model-value="value"
                  :step="0.01"
                  class="gap-2"
                  @update:model-value="(v) => setFieldValue('price', v)"
                >
                  <NumberFieldContent>
                    <NumberFieldDecrement />
                    <NumberFieldInput />
                    <NumberFieldIncrement />
                  </NumberFieldContent>
                </NumberField>
                <FieldError v-if="errors.length" :errors="errors" />
              </Field>
            </VeeField>

            <VeeField v-slot="{ value, errors }" name="stock">
              <Field :data-invalid="!!errors.length" class="w-2xs">
                <FieldLabel for="stock">{{ $t('form.label.stock') }}</FieldLabel>
                <NumberField
                  :min="0"
                  :model-value="value"
                  class="gap-2"
                  @update:model-value="(v) => setFieldValue('stock', v)"
                >
                  <NumberFieldContent>
                    <NumberFieldDecrement />
                    <NumberFieldInput />
                    <NumberFieldIncrement />
                  </NumberFieldContent>
                </NumberField>
                <FieldError v-if="errors.length" :errors="errors" />
              </Field>
            </VeeField>

            <VeeField v-slot="{ field, errors }" name="category">
              <Field>
                <FieldLabel for="category">{{ $t('form.label.category') }}</FieldLabel>
                <Input v-bind="field" id="category" :aria-invalid="!!errors.length" />
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
    </DialogContent>
  </Dialog>
</template>
