import { useCallback, useEffect, useState } from 'react'
// Lightbox index with Escape and arrow-key navigation, wrapping at both ends.
export function useLightbox(count) {
  const [open, setOpen] = useState(null)
  const step = useCallback(d => setOpen(i => (i === null ? i : (i + d + count) % count)), [count])
  useEffect(() => {
    if (open === null) return
    const k = e => { if (e.key === 'Escape') setOpen(null); if (e.key === 'ArrowRight') step(1); if (e.key === 'ArrowLeft') step(-1) }
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k)
  }, [open, step])
  return { open, setOpen, step }
}
