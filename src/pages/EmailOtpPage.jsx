import { OtpVerificationPage } from '../components/OtpVerificationPage'

export function EmailOtpPage() {
  return (
    <OtpVerificationPage
      activeStep="email"
      icon="envelope"
      title="Verify your email"
      description="We've sent an email with a 6-digit code to"
      destination="you@example.com"
      actionLabel="Verify email"
      actionHref="#verify-mobile"
      resendHref="#resend-email"
      changeHref="#change-email"
    />
  )
}
