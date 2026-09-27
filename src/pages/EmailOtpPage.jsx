import { useEffect, useState } from 'react'
import { OtpVerificationPage } from '../components/OtpVerificationPage'

export function EmailOtpPage() {
  const [email, setEmail] = useState(sessionStorage.getItem("verifyEmail"))

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#verify-email") {
        setEmail(sessionStorage.getItem("verifyEmail"))
      }
    }
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  return (
    <OtpVerificationPage
      activeStep="email"
      icon="envelope"
      title="Verify your email"
      description="We've sent an email with a 6-digit code to"
      destination={email}
      actionLabel="Verify email"
      actionHref="#verify-mobile"
      resendHref="#resend-email"
      changeHref="#change-email"
    />
  )
}