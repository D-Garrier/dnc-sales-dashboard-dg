import { StrictMode } from 'react'
import { ThemeProvider } from 'styled-components'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { darkTheme, GlobalStyle, ligthTheme } from './styles/'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={ligthTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>
)
