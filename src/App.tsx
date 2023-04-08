import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import VoiceRecognizer from 'components/VoiceRecognizer'
import { Layout } from 'components/styled'
import Header from 'components/Header'

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
})

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <Layout>
        <Header />
        <VoiceRecognizer />
      </Layout>
    </ThemeProvider>
  )
}

export default App
