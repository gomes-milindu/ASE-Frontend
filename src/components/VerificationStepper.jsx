import { Icon } from './Icon'

export function VerificationStepper() {
  return (
    <ol className="verification-stepper" aria-label="Account verification progress">
      <li className="verification-stepper__step verification-stepper__step--complete">
        <span className="verification-stepper__badge"><Icon name="check" size={13} /></span><span>Email</span>
      </li>
      <li className="verification-stepper__line" aria-hidden="true" />
      <li className="verification-stepper__step verification-stepper__step--current">
        <span className="verification-stepper__badge">2</span><span>Mobile</span>
      </li>
    </ol>
  )
}
