import { useEffect, useState } from 'react'
import Icon from '../../common/Icons'
import useReveal from '../../../hooks/useReveal'
import { testimonials } from '../../../data/content'
import './Testimonials.css'

const AUTO_PLAY_MS = 7000

export default function Testimonials() {
  const revealRef = useReveal()
  const [current, setCurrent] = useState(0)
  const total = testimonials.length

  const next = () => setCurrent((i) => (i + 1) % total)
  const prev = () => setCurrent((i) => (i - 1 + total) % total)

  // Auto-advance; restarts whenever the slide changes
  useEffect(() => {
    const timer = setTimeout(() => setCurrent((i) => (i + 1) % total), AUTO_PLAY_MS)
    return () => clearTimeout(timer)
  }, [current, total])

  const t = testimonials[current]

  return (
    <section className="section testimonials" id="reviews">
      <div className="container reveal" ref={revealRef}>
        <h2 className="section-title testimonials__title">
          What Our <span className="highlight">Patient’s</span> Says
        </h2>

        <div className="testimonials__slider">
          <button className="testimonials__nav" onClick={prev} aria-label="Previous review">
            <Icon name="chevronLeft" />
          </button>

          {/* `key` re-mounts the card so the fade-in animation replays */}
          <div className="testimonial" key={current}>
            <div className="testimonial__avatar">
              <img src={t.image} alt={t.name} />
            </div>
            <div className="testimonial__body">
              <Icon name="quote" size={48} className="testimonial__quote-icon" />
              <div className="testimonial__person">
                <h3>{t.name}</h3>
                <span>{t.role}</span>
              </div>
              <p>{t.quote}</p>
            </div>
          </div>

          <button className="testimonials__nav" onClick={next} aria-label="Next review">
            <Icon name="chevronRight" />
          </button>
        </div>

        <div className="testimonials__dots">
          {testimonials.map((item, i) => (
            <button
              key={item.name}
              className={i === current ? 'is-active' : ''}
              onClick={() => setCurrent(i)}
              aria-label={`Show review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
