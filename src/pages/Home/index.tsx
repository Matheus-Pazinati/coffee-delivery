import { CoffeeMenu } from "./components/CoffeeMenu";
import { Header } from "./components/Header";

import { HomeContainer } from './styles'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <CoffeeMenu />
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnHover={false}
        draggable
        theme="colored"
      />
    </HomeContainer>
  )
}