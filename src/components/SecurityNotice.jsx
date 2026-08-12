import { Icon } from './Icon'

export function SecurityNotice() {
  return (
    <aside className="security-notice">
      <Icon name="shield" size={20} />
      <p>Never share your OTP with anyone. Verifly will never ask for it.</p>
    </aside>
  )
}
