import Button from '../../common/Button'
import { Sparkle } from '../../common/Icons'
import useReveal from '../../../hooks/useReveal'
import { processSteps } from '../../../data/content'
import './Process.css'

export default function Process() {
  const revealRef = useReveal()

  return (
    <section className="section process" id="process">
      <div className="container">
        <div className="process__panel reveal" ref={revealRef}>
          <div className="process__intro">
            <h2 className="section-title">
              Our <span className="highlight">3-Step</span> Recovery Process
            </h2>
            <p className="text-muted">
              We believe recovery is more than treatment, it’s a journey. Our certified physiotherapists combine
              clinical expertise with personalized care to help you recover from injuries, manage pain, and prevent
              future issues.
            </p>
          </div>

          {processSteps.map((step, i) => (
            <article className={`process-step process-step--${i + 1}`} key={step.number}>
              <h3>
                <span className="process-step__number">{step.number}</span>
                {step.title}
              </h3>
              <img src={step.image} alt={step.title} loading="lazy" />
              <p>{step.text}</p>
            </article>
          ))}

          <Sparkle size={180} className="process__sparkle" />
          <Sparkle size={40} className="process__sparkle process__sparkle--small" />

          <div className="process__cta">
            <Button href="#appointment">Start Your Recovery Journey</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
