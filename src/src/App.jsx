import React from 'react'

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '16px'
    }}>
      <h1 style={{ fontSize: '32px', fontWeight: '700' }}>
        Empire AI
      </h1>
      <p style={{ color: 'rgb(148, 163, 184)' }}>
        Foundation loaded successfully ✓
      </p>
    </div>
  )
}

export default App
