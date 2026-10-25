import Icon from './Icons'
import './Button.css'

/*
  Reusable button / link.
  - Pass `href` to render a link, otherwise a <button>.
  - variant: 'dark' (default) | 'light'
  - withArrow: shows the green arrow badge on the right
*/
export default function Button({ children, href, variant = 'dark', withArrow = true, className = '', ...props }) {
  const classes = `btn btn--${variant} ${className}`
  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <span className="btn__arrow">
          <Icon name="arrow" size={14} />
        </span>
      )}
    </>
  )

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    )
  }
  return (
    <button className={classes} {...props}>
      {content}
    </button>
  )
}
