import { useEffect } from 'react'
import { AppLogo } from '../components/AppLogo'

export function SplashPage() {
  useEffect(() => {
    const redirectTimer = window.setTimeout(() => {
      window.location.hash = 'register'
    }, 3000)

    return () => window.clearTimeout(redirectTimer)
  }, [])

  return (
    <main className="splash-page" aria-label="Verifly">
      <div className="splash-page__content">
        <AppLogo />
        <div className="splash-page__brand">
          <strong>Verifly</strong>
          <span>Smart Banking. Simplified.</span>
        </div>
      </div>
      <p className="splash-page__footer">Trusted. Secure. Instant.</p>
    </main>
  )
}
