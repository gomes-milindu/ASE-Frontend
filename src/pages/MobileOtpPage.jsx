import { OtpVerificationPage } from '../components/OtpVerificationPage'

export function MobileOtpPage() {
  return (
    <OtpVerificationPage
      activeStep="mobile"
      icon="smartphone"
      title="Verify your mobile"
      description="We've sent an SMS with a 6-digit code to"
      destination="+1 (555) 000-0000"
      actionLabel="Verify mobile"
      resendHref="#resend"
      changeHref="#change-number"
    />
  )
}
