import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter  as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Sidebar from './component/Sidebar'
import Header from './component/Header'
import Footer from './component/Footer'
function App() {
  

  return (
    <div className="overflow-hidden">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product/:id" element={<ProductDetails/>} />
        </Routes>
        <Footer/>
        <Sidebar/>
      </Router>
    </div>
  )
}

export default App
