import Icon from '../../common/Icons'
import { certificates } from '../../../data/content'
import './Certificates.css'

/* Auto-sliding strip of awards & certificates. The list is rendered twice so the loop is seamless. */
export default function Certificates() {
  const items = [...certificates, ...certificates]

  return (
    <section className="section certificates" id="certificates">
      <div className="container certificates__header">
        <h2 className="section-title">
          Awards &amp; <span className="highlight">Certifications</span>
        </h2>
        <p className="text-muted">Trained and certified in advanced physiotherapy techniques.</p>
      </div>

      <div className="certificates__slider">
        <div className="certificates__track">
          {items.map((cert, i) => (
            <article
              className={`certificate certificate--${cert.type}`}
              key={i}
              aria-hidden={i >= certificates.length}
            >
              {cert.image ? (
                <img src={cert.image} alt={cert.title} className="certificate__image" />
              ) : (
                <span className="certificate__icon">
                  <Icon name={cert.type === 'award' ? 'award' : 'certificate'} size={26} />
                </span>
              )}
              <h3>{cert.title}</h3>
              <span className="certificate__detail">{cert.detail}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
