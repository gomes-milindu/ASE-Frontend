import { Icon } from './Icon'
import { OtpInput } from './OtpInput'
import { PrimaryButton } from './PrimaryButton'
import { SecurityNotice } from './SecurityNotice'
import { VerificationStepper } from './VerificationStepper'

export function OtpVerificationPage({ activeStep, icon, title, description, destination, actionLabel, actionHref, resendHref, changeHref }) {
  return (
    <main className="otp-page">
      <section className="otp-card" aria-labelledby={`${activeStep}-otp-title`}>
        <a className="otp-back-button" href="#register" aria-label="Back to registration"><Icon name="back" size={20} /></a>
        <VerificationStepper activeStep={activeStep} />

        <header className="otp-header">
          <span className="otp-header__icon"><Icon name={icon} size={36} /></span>
          <h1 id={`${activeStep}-otp-title`}>{title}</h1>
          <p>{description}</p>
          <strong>{destination}</strong>
        </header>

        <OtpInput />
        <PrimaryButton href={actionHref}>{actionLabel}</PrimaryButton>

        <div className="otp-actions">
          <p>Didn&apos;t receive it? <a href={resendHref}>Resend code</a></p>
          <a href={changeHref}>Wrong {activeStep === 'email' ? 'email' : 'number'}? Change it</a>
        </div>
        <SecurityNotice />
      </section>
    </main>
  )
}
