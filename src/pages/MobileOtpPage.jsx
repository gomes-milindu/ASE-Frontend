import { useState } from 'react'
import { Icon } from '../components/Icon'
import { OtpInput } from '../components/OtpInput'
import { PrimaryButton } from '../components/PrimaryButton'
import { SecurityNotice } from '../components/SecurityNotice'
import { VerificationStepper } from '../components/VerificationStepper'

export function MobileOtpPage() {
  const [code, setCode] = useState('')
  const [message, setMessage] = useState('')

  const verify = () => setMessage(code.length === 6 ? 'Mobile number verified.' : 'Enter the six-digit code to continue.')

  return (
    <main className="otp-page">
      <section className="otp-card" aria-labelledby="otp-title">
        <a className="otp-back-button" href="#register" aria-label="Back to registration"><Icon name="back" size={20} /></a>
        <VerificationStepper />

        <header className="otp-header">
          <span className="otp-header__icon"><Icon name="smartphone" size={36} /></span>
          <h1 id="otp-title">Verify your mobile</h1>
          <p>We&apos;ve sent an SMS with a 6-digit code to</p>
          <strong>+1 (555) 000-0000</strong>
        </header>

        <OtpInput value={code} onChange={setCode} />
        <PrimaryButton type="button" onClick={verify}>Verify mobile</PrimaryButton>
        <p className="form-message" role="status" aria-live="polite">{message}</p>

        <div className="otp-actions">
          <p>Didn&apos;t receive it? <a href="#resend">Resend code</a></p>
          <a href="#change-number">Wrong number? Change it</a>
        </div>
        <SecurityNotice />
      </section>
    </main>
  )
}
