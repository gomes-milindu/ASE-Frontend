export function AppLogo({ size = 88 }) {
  return (
    <div className="app-logo" style={{ width: size, height: size }} aria-hidden="true">
      <svg width={size * 0.55} height={size * 0.55} viewBox="0 0 40 40" fill="none">
        <path d="M4 8 20 32 36 8" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="32" r="3" fill="currentColor" />
      </svg>
    </div>
  )
}
