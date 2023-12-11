import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/global.scss'
import AppRouter from "./router";


function App() {
  return <>
    <AppRouter />
    <ToastContainer />
  </>
}

export default App;
