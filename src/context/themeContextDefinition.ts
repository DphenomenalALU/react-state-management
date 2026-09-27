import { createContext } from 'react'
import type { Theme } from '../constants/theme'

export interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)
