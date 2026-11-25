import React, { useState } from 'react'
import { TYPES } from '../data.js'
import { validateInquiry } from '../validation.js'
export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState({})
  function submit(e) {
    e.preventDefault()
    const er = validateInquiry(new FormData(e.target))
    setErrors(er)
    if (!Object.keys(er).length) setSent(true)
  }
  return (
    <section id="contact" className="wrap alt">
      <h2>Start a project</h2>
      {sent ? <p className="ok" role="status">Thank you. This is a demo form, so nothing was sent.</p> : (
        <form onSubmit={submit} noValidate>
          <label>Name<input name="name" aria-invalid={!!errors.name} />{errors.name && <em>{errors.name}</em>}</label>
          <label>Email<input name="email" type="email" aria-invalid={!!errors.email} />{errors.email && <em>{errors.email}</em>}</label>
          <label>Project type<select name="type">{TYPES.slice(1).map(t => <option key={t}>{t}</option>)}</select></label>
          <label className="full">Message<textarea name="message" rows="4" aria-invalid={!!errors.message} />{errors.message && <em>{errors.message}</em>}</label>
          <button className="btn" type="submit">Send inquiry</button>
        </form>
      )}
    </section>
  )
}
