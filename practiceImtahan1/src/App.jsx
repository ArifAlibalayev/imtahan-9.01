import react from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import Mainpage from './pages/Mainpage'
import BasketPage from './pages/BasketPage'

function App() {

  return (
    <>
    <Routes>
      <Route element={<MainLayout/>}> 
    <Route path='/' element={<Mainpage/>}/>
    <Route path='/Basketpage' element={<BasketPage/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
