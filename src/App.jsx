import React, { useEffect, useState, useCallback } from 'react'
import { projects, services, steps } from './data.js'

const sections = ['work', 'services', 'process', 'contact']

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('as-theme') || 'dark')
  const [filter, setFilter] = useState('All')
  const [open, setOpen] = useState(null)
  const [active, setActive] = useState('')
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem('as-theme', theme) }, [theme])
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    sections.forEach(id => { const el = document.getElementById(id); el && io.observe(el) })
    return () => io.disconnect()
  }, [])

  const types = ['All', ...new Set(projects.map(p => p.type))]
  const list = projects.filter(p => filter === 'All' || p.type === filter)
  const step = useCallback(d => setOpen(i => (i === null ? i : (i + d + list.length) % list.length)), [list.length])
  useEffect(() => {
    if (open === null) return
    const k = e => { if (e.key === 'Escape') setOpen(null); if (e.key === 'ArrowRight') step(1); if (e.key === 'ArrowLeft') step(-1) }
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k)
  }, [open, step])

  function submit(e) {
    e.preventDefault()
    const f = new FormData(e.target), er = {}
    if (!f.get('name').trim()) er.name = 'Please enter your name'
    if (!/^\S+@\S+\.\S+$/.test(f.get('email'))) er.email = 'Enter a valid email'
    if (f.get('message').trim().length < 10) er.message = 'Tell us a little more (10+ characters)'
    setErrors(er)
    if (!Object.keys(er).length) setSent(true)
  }

  return (
    <>
      <header className="nav">
        <a className="brand" href="#top"><img src="logo.svg" alt="" /><span>Atelier Sahara</span></a>
        <nav>
          {sections.map(s => <a key={s} href={'#' + s} className={active === s ? 'on' : ''}>{s}</a>)}
          <button className="theme" aria-label="Toggle theme" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? 'Light' : 'Dark'}</button>
        </nav>
      </header>

      <section className="hero" id="top" style={{ backgroundImage: 'linear-gradient(180deg,rgba(10,8,6,.35),rgba(10,8,6,.85)),url(img/hero.jpg)' }}>
        <p className="eyebrow">Architecture · Interiors · Light</p>
        <h1>Buildings shaped by sun, sand and shade.</h1>
        <p className="lead">A fictional design studio for Gulf and Red Sea climates. Demo site, AI-generated images.</p>
        <div className="cta"><a className="btn" href="#work">See the work</a><a className="btn ghost" href="#contact">Start a project</a></div>
        <dl className="stats">
          <div><dt>5</dt><dd>featured projects</dd></div>
          <div><dt>3</dt><dd>climate zones</dd></div>
          <div><dt>1</dt><dd>idea per building</dd></div>
        </dl>
      </section>

      <section id="work" className="wrap">
        <h2>Selected work</h2>
        <div className="chips" role="tablist">
          {types.map(t => <button key={t} className={t === filter ? 'chip on' : 'chip'} onClick={() => setFilter(t)}>{t}</button>)}
        </div>
        <div className="grid">
          {list.map((p, i) => (
            <button key={p.id} className={'card c' + (i % 3)} onClick={() => setOpen(i)} aria-label={'Open ' + p.name}>
              <img src={p.img} alt={p.name} loading="lazy" />
              <span className="meta"><b>{p.name}</b><small>{p.type} · {p.year}</small></span>
            </button>
          ))}
        </div>
      </section>

      <section id="services" className="wrap alt">
        <h2>What we do</h2>
        <div className="svc">{services.map(([t, d]) => <article key={t}><h3>{t}</h3><p>{d}</p></article>)}</div>
      </section>

      <section id="process" className="wrap">
        <h2>How we work</h2>
        <ol className="steps">{steps.map(([n, t, d]) => <li key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></li>)}</ol>
      </section>

      <section id="contact" className="wrap alt">
        <h2>Start a project</h2>
        {sent ? <p className="ok" role="status">Thank you. This is a demo form, so nothing was sent.</p> : (
          <form onSubmit={submit} noValidate>
            <label>Name<input name="name" aria-invalid={!!errors.name} />{errors.name && <em>{errors.name}</em>}</label>
            <label>Email<input name="email" type="email" aria-invalid={!!errors.email} />{errors.email && <em>{errors.email}</em>}</label>
            <label>Project type<select name="type">{types.slice(1).map(t => <option key={t}>{t}</option>)}</select></label>
            <label className="full">Message<textarea name="message" rows="4" aria-invalid={!!errors.message} />{errors.message && <em>{errors.message}</em>}</label>
            <button className="btn" type="submit">Send inquiry</button>
          </form>
        )}
      </section>

      <footer>© Atelier Sahara. Fictional studio for a portfolio demo. Images are AI-generated.</footer>

      {open !== null && list[open] && (
        <div className="lb" role="dialog" aria-modal="true" aria-label={list[open].name} onClick={() => setOpen(null)}>
          <div className="lbbox" onClick={e => e.stopPropagation()}>
            <img src={list[open].img} alt={list[open].name} />
            <div className="lbtext">
              <small>{list[open].type} · {list[open].place} · {list[open].year}</small>
              <h3>{list[open].name}</h3>
              <p>{list[open].text}</p>
              <div className="lbnav"><button onClick={() => step(-1)} aria-label="Previous">←</button><span>{open + 1} / {list.length}</span><button onClick={() => step(1)} aria-label="Next">→</button><button onClick={() => setOpen(null)} aria-label="Close">Close</button></div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
