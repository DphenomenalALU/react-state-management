import { DARK_THEME } from './constants/theme'
import { Navbar } from './components/Navbar'
import { TaskManager } from './components/TaskManager'
import { useTheme } from './context/useTheme'
import './App.css'

function App() {
  const { theme } = useTheme()

  return (
    <div className={`app ${theme === DARK_THEME ? 'dark' : 'light'}`}>
      <Navbar />
      <main className="main-content">
        <section className="intro" aria-labelledby="page-title">
          <p className="intro-label">State management, made visible</p>
          <h1 id="page-title">Plan with clarity.</h1>
          <p>
            A focused workspace for practicing React&apos;s Context API and reducer pattern.
            Switch themes or add a task to see state updates travel through the app.
          </p>
        </section>
        <TaskManager />
      </main>
      <footer className="footer">Built with React, TypeScript, useContext, and useReducer.</footer>
    </div>
  )
}

export default App
