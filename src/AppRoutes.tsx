import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from '../src/layouts/DefaultLayout'

import { Cart } from './pages/Cart'
import { Home } from './pages/Home'
import { Order } from './pages/Order'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<Order />} />
      </Route>
    </Routes>
  )
}