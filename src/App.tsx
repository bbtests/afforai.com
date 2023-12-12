import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/global.scss'
import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';
import useTheme from 'layouts/themes';
import AppRouter from "./router";


function App() {
  const theme = useTheme()
  return <>
    <ThemeProvider {...{ theme }}>
      <CssBaseline enableColorScheme >
        <AppRouter />
        <ToastContainer />
      </CssBaseline>
    </ThemeProvider>
  </>
}

export default App;