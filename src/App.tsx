import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css/bundle';
import './styles/global.scss'
import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';
import useTheme from 'layouts/themes';
import AppRouter from "./router";
import { register } from 'swiper/element/bundle';

register();

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