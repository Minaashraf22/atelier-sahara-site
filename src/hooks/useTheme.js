import { useEffect, useState } from 'react'
export function useTheme() {
  const [theme, setTheme] = useState(() => localStorage.getItem('as-theme') || 'dark')
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem('as-theme', theme) }, [theme])
  return [theme, () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))]
}
