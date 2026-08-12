import { useRef } from 'react'

export function OtpInput({ value, onChange, length = 6 }) {
  const inputRefs = useRef([])
  const digits = Array.from({ length }, (_, index) => value[index] ?? '')

  const setDigit = (index, nextValue) => {
    const digit = nextValue.replace(/\D/g, '').slice(-1)
    const updated = digits.map((current, currentIndex) => currentIndex === index ? digit : current).join('')
    onChange(updated)
    if (digit && index < length - 1) inputRefs.current[index + 1]?.focus()
  }

  const handleKeyDown = (event, index) => {
    if (event.key === 'Backspace' && !digits[index] && index > 0) inputRefs.current[index - 1]?.focus()
  }

  const handlePaste = (event) => {
    event.preventDefault()
    onChange(event.clipboardData.getData('text').replace(/\D/g, '').slice(0, length))
    inputRefs.current[Math.min(event.clipboardData.getData('text').replace(/\D/g, '').length, length - 1)]?.focus()
  }

  return (
    <div className="otp-input" onPaste={handlePaste} aria-label="Six digit verification code">
      {digits.map((digit, index) => (
        <input
          key={index}
          ref={(element) => { inputRefs.current[index] = element }}
          className="otp-input__digit"
          inputMode="numeric"
          autoComplete={index === 0 ? 'one-time-code' : 'off'}
          aria-label={`Verification code digit ${index + 1}`}
          maxLength="1"
          value={digit}
          onChange={(event) => setDigit(index, event.target.value)}
          onKeyDown={(event) => handleKeyDown(event, index)}
        />
      ))}
    </div>
  )
}
