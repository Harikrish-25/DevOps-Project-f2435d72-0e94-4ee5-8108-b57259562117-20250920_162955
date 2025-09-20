import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>DevOps-Project-f2435d72-0e94-4ee5-8108-b57259562117</h1>
        <p>Welcome to your new React application!</p>
        
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            Count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        
        <div className="features">
          <h2>Features Include:</h2>
          <ul>
            <li>⚡ Vite for fast development</li>
            <li>⚛️ React 18 with hooks</li>
            <li>🎨 TypeScript for type safety</li>
            <li>📱 Responsive design</li>
            <li>🚀 Production ready</li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default App