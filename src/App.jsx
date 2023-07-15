import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './home/home/home1'
import Navbar from './home/navbar/navbar'
import { BrowserRouter } from 'react-router-dom'
import { createContext, useReducer, useState } from 'react'
import  Pureredux, { reducer } from './home/cart/pureredux'
import Productinfo from './home/product info'
import Login from './login/login'
import { HelmetProvider } from 'react-helmet-async'

const Dataf = createContext();
const datainfo=createContext()
const tocken=createContext()
function App() {
  const [state,dispatch]=useReducer(reducer,[])
  const [state1,setstate1]=useState([])
  const [token,settocken]=useState("");
  return (
    <BrowserRouter basename='/webapp'>
      <Dataf.Provider value={{state, dispatch}}>
      <datainfo.Provider value={{state1,setstate1}}>
      <tocken.Provider value={{token,settocken}}>
        <Navbar />
        <HelmetProvider>
        <Routes>
          <Route path="/" element={<><Home /> </>} ></Route>
          <Route path="/cart" element={<><Pureredux /> </>} ></Route>
          <Route path="/product/:id" element={<><Productinfo /> </>} ></Route>
          <Route path='/login' element={<><Login/></>}></Route>
        </Routes>
        </HelmetProvider>
        </tocken.Provider>
      </datainfo.Provider>
      </Dataf.Provider>
    </BrowserRouter>
  )
}

export default App
export { Dataf ,datainfo,tocken}