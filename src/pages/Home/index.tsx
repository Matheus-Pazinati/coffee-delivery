import { CoffeeMenu } from "./components/CoffeeMenu";
import { Header } from "./components/Header";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Home() {
  return (
    <main>
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
    </main>
  )
}