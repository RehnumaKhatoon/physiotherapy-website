import { Sparkle } from '../../common/Icons'
import { marqueeWords } from '../../../data/content'
import './Marquee.css'

/* Big scrolling text band. The list is rendered twice so the loop is seamless. */
export default function Marquee() {
  const items = [...marqueeWords, ...marqueeWords]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((word, i) => (
          <span className="marquee__item" key={i}>
            {word}
            <Sparkle size={40} className="marquee__sparkle" />
          </span>
        ))}
      </div>
    </div>
  )
}
