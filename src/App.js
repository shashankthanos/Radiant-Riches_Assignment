import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Categories from './Components/Categories'
import Footer from './Components/Footer'
import Builders from './Components/Builders'
import Deals from './Components/Deals'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Categories/>} />
        <Route path='/builders' element={<Builders/>} />
        <Route path='/deals' element={<Deals/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
