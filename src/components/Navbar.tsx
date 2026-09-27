import { DARK_THEME, LIGHT_THEME } from '../constants/theme'
import { useTheme } from '../context/ThemeContext'
import styles from './Navbar.module.css'

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const nextTheme = theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME

  return (
    <nav className={styles.navbar} aria-label="Main navigation">
      <div>
        <p className={styles.eyebrow}>React guided activity</p>
        <span className={styles.brand}>Focus Board</span>
      </div>
      <button
        className={styles.toggleButton}
        type="button"
        onClick={toggleTheme}
        aria-label={`Switch to ${nextTheme} theme`}
      >
        <span aria-hidden="true">{theme === LIGHT_THEME ? '☾' : '☀'}</span>
        Switch to {nextTheme} mode
      </button>
    </nav>
  )
}
