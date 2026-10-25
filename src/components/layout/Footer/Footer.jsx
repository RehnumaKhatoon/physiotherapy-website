import Logo from '../../common/Logo'
import Icon, { Sparkle } from '../../common/Icons'
import { footer, siteInfo } from '../../../data/content'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      {/* Dark brand band */}
      <div className="container">
        <div className="footer__band">
          <div className="footer__brand">
            <Logo />
            <Sparkle size={22} className="footer__sparkle" />
          </div>
          <a href={siteInfo.phoneLink} className="footer__phone">
            <Icon name="phone" size={16} />
            {siteInfo.phone}
          </a>
        </div>
      </div>

      {/* Link columns */}
      <div className="container footer__grid">
        <div className="footer__col">
          <h4>Follow Us:</h4>
          <div className="footer__socials">
            {footer.socials.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label}>
                <Icon name={s.icon} size={14} />
              </a>
            ))}
          </div>
          <p>{footer.about}</p>
        </div>

        {footer.columns.map((col) => (
          <div className="footer__col" key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer__col">
          <h4>Contact Us</h4>
          <ul className="footer__contact">
            <li>
              <Icon name="mapPin" size={16} />
              {siteInfo.address}
            </li>
            <li>
              <Icon name="clock" size={16} />
              {siteInfo.timing}
            </li>
            <li>
              <Icon name="phone" size={16} />
              <a href={siteInfo.phoneLink}>{siteInfo.phone}</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="container footer__bottom">
        <p>
          © {siteInfo.year} {siteInfo.fullName}. All Rights Reserved.
        </p>
        <div>
          <a href="#">Terms and Conditions</a> | <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}
