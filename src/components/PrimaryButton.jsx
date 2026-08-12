export function PrimaryButton({ children, type = 'button', ...props }) {
  return (
    <button className="primary-button" type={type} {...props}>
      {children}
    </button>
  )
}
