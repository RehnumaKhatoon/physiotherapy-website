import Icon from '../../common/Icons'
import useReveal from '../../../hooks/useReveal'
import { doctors } from '../../../data/content'
import './Doctors.css'

export default function Doctors() {
  const revealRef = useReveal()

  return (
    <section className="section doctors" id="doctors">
      <div className="container reveal" ref={revealRef}>
        <h2 className="section-title doctors__title">
          Meet Our <span className="highlight">Doctors</span>
        </h2>

        <div className="doctors__grid">
          {doctors.map((doc) => (
            <article className="doctor" key={doc.name}>
              {/* Replace the initials with <img src={doc.image} /> when a photo is available */}
              <div className="doctor__avatar">
                {doc.image ? <img src={doc.image} alt={doc.name} /> : <span>{doc.initials}</span>}
              </div>
              <div className="doctor__info">
                <h3>{doc.name}</h3>
                <span className="doctor__degree">{doc.degree}</span>
                <p className="doctor__role">{doc.role}</p>
                <ul>
                  {doc.highlights.map((h) => (
                    <li key={h}>
                      <Icon name="check" size={14} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
