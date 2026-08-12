import './App.css'
import { MobileOtpPage } from './pages/MobileOtpPage'
import { RegisterPage } from './pages/RegisterPage'
import { SplashPage } from './pages/SplashPage'

function App() {
  return (
    <div className="app-pages">
      <div id="splash" className="app-page app-page--splash"><SplashPage /></div>
      <div id="register" className="app-page app-page--register"><RegisterPage /></div>
      <div id="verify-mobile" className="app-page app-page--otp"><MobileOtpPage /></div>
    </div>
  )
}

export default App
