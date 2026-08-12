export function PrimaryButton({ children, href, type = 'button', ...props }) {
  if (href) {
    return <a className="primary-button" href={href} {...props}>{children}</a>
  }

  return (
    <button className="primary-button" type={type} {...props}>
      {children}
    </button>
  )
}
