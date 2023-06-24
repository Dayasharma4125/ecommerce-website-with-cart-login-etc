import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './home/home/home1'
import Navbar from './home/navbar/navbar'
import { BrowserRouter } from 'react-router-dom'
import { createContext, useReducer, useState } from 'react'
import  Pureredux, { reducer } from './home/cart/pureredux'
import Productinfo from './home/product info'

const Dataf = createContext();
const datainfo=createContext()

function App() {
  const [state,dispatch]=useReducer(reducer,[])
  const [state1,setstate1]=useState([])
  return (
    <BrowserRouter>
      <Dataf.Provider value={{state, dispatch}}>
      <datainfo.Provider value={{state1,setstate1}}>
        <Navbar />
        <Routes>
          <Route path="/webapp1/" element={<><Home /> </>} ></Route>
          <Route path="/webapp1/cart" element={<><Pureredux /> </>} ></Route>
          <Route path="/webapp1/product/:id" element={<><Productinfo /> </>} ></Route>
        </Routes>
      </datainfo.Provider>
      </Dataf.Provider>
    </BrowserRouter>
  )
}

export default App
export { Dataf ,datainfo}