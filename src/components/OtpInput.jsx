export function OtpInput({ length = 6 }) {
  return (
    <div className="otp-input" aria-label="Six digit verification code">
      {Array.from({ length }, (_, index) => (
        <input
          key={index}
          className="otp-input__digit"
          inputMode="numeric"
          autoComplete={index === 0 ? 'one-time-code' : 'off'}
          aria-label={`Verification code digit ${index + 1}`}
          maxLength="1"
        />
      ))}
    </div>
  )
}
