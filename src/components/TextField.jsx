import { Icon } from './Icon'

export function TextField({ label, icon, type = 'text', value, onChange, placeholder, children }) {
  return (
    <label className="field">
      <span className="field__label">{label}</span>
      <span className="field__control">
        {icon && <span className="field__icon"><Icon name={icon} size={18} /></span>}
        <input type={type} value={value} onChange={onChange} placeholder={placeholder} required />
        {children}
      </span>
    </label>
  )
}
