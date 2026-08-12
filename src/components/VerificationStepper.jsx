import { Icon } from './Icon'

export function VerificationStepper({ activeStep = 'mobile' }) {
  const isEmailActive = activeStep === 'email'

  return (
    <ol className="verification-stepper" aria-label="Account verification progress">
      <li className={`verification-stepper__step ${isEmailActive ? 'verification-stepper__step--current' : 'verification-stepper__step--complete'}`}>
        <span className="verification-stepper__badge">{isEmailActive ? '1' : <Icon name="check" size={13} />}</span><span>Email</span>
      </li>
      <li className={`verification-stepper__line ${isEmailActive ? 'verification-stepper__line--pending' : ''}`} aria-hidden="true" />
      <li className={`verification-stepper__step ${isEmailActive ? 'verification-stepper__step--pending' : 'verification-stepper__step--current'}`}>
        <span className="verification-stepper__badge">2</span><span>Mobile</span>
      </li>
    </ol>
  )
}
