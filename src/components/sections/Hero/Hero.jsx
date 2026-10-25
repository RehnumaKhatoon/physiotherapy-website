import AppointmentForm from './AppointmentForm'
import Icon from '../../common/Icons'
import { hero } from '../../../data/content'
import heroImage from '../../../assets/images/hero.jpg'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero__top">
        <p className="hero__intro">{hero.intro}</p>
        <h1 className="hero__title">
          {hero.titleLines[0]}
          <br />
          {hero.titleLines[1]} <span className="highlight">{hero.titleHighlight}</span>
        </h1>
      </div>

      <div className="container hero__media">
        <div className="hero__photo">
          <img src={heroImage} alt="Physiotherapist treating a patient" className="hero__image" />

          <div className="hero__badge">
            <span className="hero__badge-icon">
              <Icon name="user" size={18} />
            </span>
            <span>{hero.badgeText}</span>
          </div>
        </div>

        <div className="hero__form">
          <AppointmentForm />
        </div>
      </div>
    </section>
  )
}
