import Button from '../../common/Button'
import Icon from '../../common/Icons'
import useReveal from '../../../hooks/useReveal'
import { about } from '../../../data/content'
import aboutImage from '../../../assets/images/about.jpg'
import './About.css'

export default function About() {
  const revealRef = useReveal()

  return (
    <section className="section about" id="about">
      <div className="container about__grid reveal" ref={revealRef}>
        <div className="about__media">
          <img src={aboutImage} alt="Physiotherapist with a smiling patient" loading="lazy" />
          <div className="about__badge">
            <strong>{about.badgeTop}</strong>
            <span>{about.badgeLabel}</span>
          </div>
        </div>

        <div className="about__content">
          <h2 className="section-title">
            Expert <span className="highlight">Physiotherapy</span>
            <br />
            for a Healthier, Pain-Free Life
          </h2>
          <p className="text-muted">{about.text}</p>

          <ul className="about__points">
            {about.points.map((point) => (
              <li key={point}>
                <Icon name="check" size={16} />
                {point}
              </li>
            ))}
          </ul>

          <Button href="#doctors">Meet Our Doctors</Button>
        </div>
      </div>
    </section>
  )
}
