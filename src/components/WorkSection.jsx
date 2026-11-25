import React, { useState } from 'react'
import { projects, TYPES } from '../data.js'
import { useLightbox } from '../hooks/useLightbox.js'
import Lightbox from './Lightbox.jsx'
export default function WorkSection() {
  const [filter, setFilter] = useState('All')
  const list = projects.filter(p => filter === 'All' || p.type === filter)
  const lb = useLightbox(list.length)
  return (
    <>
      <section id="work" className="wrap">
        <h2>Selected work</h2>
        <div className="chips" role="tablist">
          {TYPES.map(t => <button key={t} className={t === filter ? 'chip on' : 'chip'} onClick={() => setFilter(t)}>{t}</button>)}
        </div>
        <div className="grid">
          {list.map((p, i) => (
            <button key={p.id} className={'card c' + (i % 3)} onClick={() => lb.setOpen(i)} aria-label={'Open ' + p.name}>
              <img src={p.img} alt={p.name} loading="lazy" />
              <span className="meta"><b>{p.name}</b><small>{p.type} · {p.year}</small></span>
            </button>
          ))}
        </div>
      </section>
      {lb.open !== null && list[lb.open] && <Lightbox p={list[lb.open]} index={lb.open} total={list.length} onStep={lb.step} onClose={() => lb.setOpen(null)} />}
    </>
  )
}
