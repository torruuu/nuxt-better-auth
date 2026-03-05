export function useApiErrorMessage(code: string | undefined): string {
  const { $i18n } = useNuxtApp()
  const { t, te } = $i18n

  if (!code) return t('api.error.internal_server_error')

  const key = `api.error.${code.toLowerCase()}`
  if (te(key)) return t(key)

  return t('api.error.internal_server_error')
}
