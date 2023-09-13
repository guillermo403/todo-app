export const useLocalStorage = (key: string, value?: string | any) => {
  if (value === undefined) return window.localStorage.getItem(key) ?? '[]'

  const setLocalStorage = (v: string) => window.localStorage.setItem(key, v)

  if (typeof value === 'string') {
    return setLocalStorage(value)
  }

  return setLocalStorage(JSON.stringify(value))
}
