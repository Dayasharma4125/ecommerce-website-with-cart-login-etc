import './App.css'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { createContext, lazy, useReducer, useState } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { ScaleLoader } from 'react-spinners'
// import Home from './home/home/home1'
// import Navbar from './home/navbar/navbar'
import { reducer } from './home/cart/pureredux'
import { Suspense } from 'react'
import { useLayoutEffect } from 'react'
import { useRef } from 'react'
// import Productinfo from './home/product info'
// import Login from './login/login'
const Home = lazy(() => import("./home/home/home1"))
const Navbar = lazy(() => import("./home/navbar/navbar"))
const Pureredux = lazy(() => import("./home/cart/pureredux"))
const Productinfo = lazy(() => import("./home/product info"))
const Login = lazy(() => import('./login/login'))


const Dataf = createContext();
const datainfo = createContext()
const tocken = createContext()
const data = createContext();
function App() {
  const ref = useRef(null)
  const [state, dispatch] = useReducer(reducer, [])
  const [state1, setstate1] = useState([])
  const [token, settocken] = useState("");
  const [serverdatan, setserverdatan] = useState([]);
  const productroute = serverdatan.map((e) => {
    <Route key={e.title} path={`/products/${e.title}`} element={<><Productinfo /></>} />
  })
  return (
    <BrowserRouter>
      <Suspense fallback={
        <ScaleLoader
          color="#dbe1ef"
          cssOverride={{}}
          height={50}
          margin={5}
          radius={9}
          speedMultiplier={1}
          width={8}
        />}>
        <data.Provider value={{ serverdatan, setserverdatan }}>
          <Dataf.Provider value={{ state, dispatch }}>
            <datainfo.Provider value={{ state1, setstate1 }}>
              <tocken.Provider value={{ token, settocken }}>
                <Navbar />
                <HelmetProvider>
                  <Routes>
                    <Route path="/" element={<><Home /></>} ></Route>
                    <Route path="/cart" element={<><Pureredux /> </>} ></Route>
                    <Route path="/product/:id" element={<><Productinfo /> </>} ></Route>
                    <Route path='/login' element={<><Login /></>}></Route>
                    {productroute}
                  </Routes>
                </HelmetProvider>
              </tocken.Provider>
            </datainfo.Provider>
          </Dataf.Provider>
        </data.Provider>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
export { Dataf, datainfo, tocken, data }