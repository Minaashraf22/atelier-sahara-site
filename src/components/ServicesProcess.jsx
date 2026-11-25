import React from 'react'
import { services, steps } from '../data.js'
export function Services() {
  return (
    <section id="services" className="wrap alt">
      <h2>What we do</h2>
      <div className="svc">{services.map(([t, d]) => <article key={t}><h3>{t}</h3><p>{d}</p></article>)}</div>
    </section>
  )
}
export function Process() {
  return (
    <section id="process" className="wrap">
      <h2>How we work</h2>
      <ol className="steps">{steps.map(([n, t, d]) => <li key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></li>)}</ol>
    </section>
  )
}
