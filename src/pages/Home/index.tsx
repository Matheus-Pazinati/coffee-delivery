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
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </main>
  )
}