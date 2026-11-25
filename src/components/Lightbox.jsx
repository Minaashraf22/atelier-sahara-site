import React from 'react'
export default function Lightbox({ p, index, total, onStep, onClose }) {
  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label={p.name} onClick={onClose}>
      <div className="lbbox" onClick={e => e.stopPropagation()}>
        <img src={p.img} alt={p.name} />
        <div className="lbtext">
          <small>{p.type} · {p.place} · {p.year}</small>
          <h3>{p.name}</h3>
          <p>{p.text}</p>
          <div className="lbnav"><button onClick={() => onStep(-1)} aria-label="Previous">←</button><span>{index + 1} / {total}</span><button onClick={() => onStep(1)} aria-label="Next">→</button><button onClick={onClose} aria-label="Close">Close</button></div>
        </div>
      </div>
    </div>
  )
}
