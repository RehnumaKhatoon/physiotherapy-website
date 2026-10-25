import Button from '../../common/Button'
import useReveal from '../../../hooks/useReveal'
import { conditions } from '../../../data/content'
import './Conditions.css'

export default function Conditions() {
  const revealRef = useReveal()

  return (
    <section className="section conditions" id="conditions">
      <div className="container reveal" ref={revealRef}>
        <div className="conditions__header">
          <h2 className="section-title">
            Conditions <span className="highlight">We Treat</span>
          </h2>
          <p className="text-muted">
            From nerve pain to spine problems, we treat these conditions with proven physiotherapy techniques.
          </p>
        </div>

        <ol className="conditions__grid">
          {conditions.map((item, i) => (
            <li className="condition" key={item.title}>
              <span className="condition__number">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="conditions__cta">
          <Button href="#appointment">Book a Consultation</Button>
        </div>
      </div>
    </section>
  )
}
