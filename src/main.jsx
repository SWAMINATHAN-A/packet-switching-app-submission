import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>NetSwitch</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
        Circuit and packet switching learning app deployment is now configured for GitHub Pages.
      </p>
      <p>
        You can also open the static resources page at{' '}
        <a href="./resources.html" style={{ color: 'var(--accent)' }}>resources.html</a>.
      </p>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
