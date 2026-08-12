import { Icon } from '../components/Icon'
import { PrimaryButton } from '../components/PrimaryButton'
import { TextField } from '../components/TextField'

export function RegisterPage() {
  return (
    <main className="signup-page">
      <section className="signup-card" aria-labelledby="signup-title">
        <a className="back-link" href="#home"><Icon name="arrow" size={18} /> Back to home</a>

        <header className="signup-header">
          <p className="eyebrow">Start your journey</p>
          <h1 id="signup-title">Create your account</h1>
          <p>Join thousands of people building better habits, one day at a time.</p>
        </header>

        <div>
          <div className="section-heading">Personal information</div>
          <div className="form-fields">
            <TextField label="Username" icon="user" placeholder="e.g. john_doe" />
            <div className="name-fields">
              <TextField label="First name" placeholder="John" />
              <TextField label="Last name" placeholder="Doe" />
            </div>
            <TextField label="Address" icon="location" placeholder="123 Main Street, City" />
            <TextField label="National ID number" icon="idCard" placeholder="e.g. 1990199001234" />
          </div>

          <div className="section-heading section-heading--separated">Contact details</div>
          <div className="form-fields">
            <TextField label="Email address" icon="mail" type="email" placeholder="you@example.com" />
            <TextField label="Phone number" icon="phone" type="tel" placeholder="(555) 000-0000" />
          </div>

          <div className="section-heading section-heading--separated">Security</div>
          <div className="form-fields">
            <TextField label="Password" icon="lock" type="password" placeholder="At least 8 characters" />
            <TextField label="Confirm password" icon="lock" type="password" placeholder="Re-enter password" />
          </div>

          <label className="terms">
            <input type="checkbox" defaultChecked />
            <span>I agree to the <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a></span>
          </label>

          <PrimaryButton href="#verify-email">Create account</PrimaryButton>
        </div>

        <p className="login-prompt">Already have an account? <a href="#login">Log in</a></p>
      </section>
    </main>
  )
}
