import { siteInfo } from '../../data/content'
import logoIcon from '../../assets/images/logo-icon.png'
import './Logo.css'

export default function Logo({ className = '' }) {
  return (
    <a href="#home" className={`logo ${className}`} aria-label={`${siteInfo.name} home`}>
      <span className="logo__icon">
        <img src={logoIcon} alt="" />
      </span>
      <span className="logo__text">
        <span className="logo__name">{siteInfo.name}</span>
        <span className="logo__tagline">{siteInfo.tagline}</span>
      </span>
    </a>
  )
}
