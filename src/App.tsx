import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/global.scss'
import { ThemeProvider } from '@mui/material'
import useTheme from 'layouts/themes';
import AppRouter from "./router";


function App() {
  const theme = useTheme()
  return <>
    <ThemeProvider {...{ theme }}>
      <AppRouter />
      <ToastContainer />
    </ThemeProvider>
  </>
}

export default App;