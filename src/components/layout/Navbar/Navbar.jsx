import { useEffect, useState } from 'react'
import Logo from '../../common/Logo'
import Icon from '../../common/Icons'
import { navLinks, siteInfo } from '../../../data/content'
import './Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Add a solid background once the user scrolls down
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <div className="navbar__left">
          <Logo />
          <nav className={`navbar__menu ${isOpen ? 'is-open' : ''}`} aria-label="Main navigation">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={closeMenu}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <a href={siteInfo.phoneLink} className="navbar__phone">
          <Icon name="phone" size={16} />
          <span>{siteInfo.phone}</span>
        </a>

        <button
          className="navbar__toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <Icon name={isOpen ? 'close' : 'menu'} size={22} />
        </button>
      </div>
    </header>
  )
}
