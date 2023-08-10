import React from 'react'
import  Header  from "./Front-End/Header/Header"
import Home from "./Page/Home"
import Category from "./Page/Category"
import About from "./Page/About"
import Footer from "./Front-End/Footer"
import NewProduct from "./Page/NewProduct"
import Admin from "./Page/Admin"
import { Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <div>
   <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/category" element={<Category/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/newProduct" element={<NewProduct/>} />
          <Route path="/admin" element={<Admin/>} />
        </Routes>
        
      </main>
    <Footer/>
    </div>

  )
}

export default App
