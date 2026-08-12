import { AppLogo } from '../components/AppLogo'

export function SplashPage() {
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
