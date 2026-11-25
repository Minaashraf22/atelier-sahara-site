import React from 'react'
export default function Hero() {
  return (
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
  )
}
