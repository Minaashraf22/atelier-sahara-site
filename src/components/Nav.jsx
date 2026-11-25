import React from 'react'
import { SECTIONS } from '../data.js'
export default function Nav({ active, theme, onToggleTheme }) {
  return (
    <header className="nav">
      <a className="brand" href="#top"><img src="logo.svg" alt="" /><span>Atelier Sahara</span></a>
      <nav>
        {SECTIONS.map(s => <a key={s} href={'#' + s} className={active === s ? 'on' : ''}>{s}</a>)}
        <button className="theme" aria-label="Toggle theme" onClick={onToggleTheme}>{theme === 'dark' ? 'Light' : 'Dark'}</button>
      </nav>
    </header>
  )
}
