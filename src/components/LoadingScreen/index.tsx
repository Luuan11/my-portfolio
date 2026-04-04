import './styles.css'

export function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loader-container">
        <div className="loader"></div>
        <p className="loader-text">Loading portfolio...</p>
      </div>
    </div>
  )
}
