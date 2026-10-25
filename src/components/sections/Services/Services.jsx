import { useEffect, useRef, useState } from 'react'
import Button from '../../common/Button'
import Icon, { Sparkle } from '../../common/Icons'
import useReveal from '../../../hooks/useReveal'
import { services } from '../../../data/content'
import './Services.css'

export default function Services() {
  const trackRef = useRef(null)
  const revealRef = useReveal()
  const [activePage, setActivePage] = useState(0)
  const [pageCount, setPageCount] = useState(2)

  // Work out how many "pages" of cards exist and which one is visible
  const handleScroll = () => {
    const track = trackRef.current
    const pages = Math.max(1, Math.round(track.scrollWidth / track.clientWidth))
    setPageCount(pages)
    setActivePage(Math.round(track.scrollLeft / track.clientWidth))
  }

  // Recalculate on first render and when the screen size changes
  useEffect(() => {
    handleScroll()
    window.addEventListener('resize', handleScroll)
    return () => window.removeEventListener('resize', handleScroll)
  }, [])

  const goToPage = (index) => {
    const track = trackRef.current
    track.scrollTo({ left: index * track.clientWidth, behavior: 'smooth' })
  }

  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="services__panel reveal" ref={revealRef}>
          <div className="services__header">
            <h2 className="section-title">
              Physiotherapy <span className="highlight">Services</span>
            </h2>
            <div className="services__header-right">
              <Sparkle size={70} className="services__sparkle" />
              <Button href="#appointment">All Services</Button>
            </div>
          </div>

          <div className="services__track" ref={trackRef} onScroll={handleScroll}>
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <div className="service-card__image">
                  <img src={service.image} alt={service.title} loading="lazy" />
                  <a href="#appointment" className="service-card__link" aria-label={`Book ${service.title}`}>
                    <Icon name="arrow" size={16} />
                  </a>
                </div>
                <p>{service.text}</p>
              </article>
            ))}
          </div>

          <div className="services__dots">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                className={i === activePage ? 'is-active' : ''}
                onClick={() => goToPage(i)}
                aria-label={`Show services page ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
