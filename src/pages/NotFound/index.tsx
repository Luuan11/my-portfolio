import { Link } from 'react-router-dom'
import { Navigation } from '../../components/Navigation'
import './styles.css'

export function NotFound() {
  return (
    <>
      <Navigation />
      <div className="not-found-page">
        <div className="not-found-content">
          <h1 className="not-found-title">404</h1>
          
          <h2>Page Not Found</h2>
          <p>
            Oops! Looks like you got lost in the digital space. 
            The page you are looking for does not exist or has been moved.
          </p>
          
          <div className="not-found-actions">
            <Link to="/" className="btn-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
