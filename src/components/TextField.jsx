import { Icon } from './Icon'

export function TextField({ label, icon, type = 'text', placeholder, children }) {
  return (
    <label className="field">
      <span className="field__label">{label}</span>
      <span className="field__control">
        {icon && <span className="field__icon"><Icon name={icon} size={18} /></span>}
        <input type={type} placeholder={placeholder} />
        {children}
      </span>
    </label>
  )
}
