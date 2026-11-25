import { useEffect, useState } from 'react'
// Highlights the nav link of the section currently in the middle of the viewport.
export function useActiveSection(ids) {
  const [active, setActive] = useState('')
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    ids.forEach(id => { const el = document.getElementById(id); el && io.observe(el) })
    return () => io.disconnect()
  }, [])
  return active
}
