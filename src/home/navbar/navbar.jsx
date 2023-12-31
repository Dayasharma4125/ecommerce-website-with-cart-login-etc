// import { cno } from '../home/home';
import { useContext, useEffect } from 'react';
import './navbar.scss'
import logo from '../logo.png'
import { useNavigate } from 'react-router-dom';
import { Dataf, data } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faBars, faCartShopping, faFire, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { tocken } from '../../App';
import { useState } from 'react';
import axios from 'axios';
const Navbar = () => {
  const navigate = useNavigate()
  const { token, settocken } = useContext(tocken)
  const { state, dispach } = useContext(Dataf)
  const [serverdata, setserverdata] = useState([])
  const { serverdatan, setserverdatan } = useContext(data);
  const isdarkmode = () => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme:dark)").matches) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }
    else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      // return (<><button className='darkmodebutton'></button></>)
    }
  }
  useEffect(() => {
    const fectdata = async () => {
      let data1 = await axios.get("https://fakestoreapi.com/products");
      setserverdata(data1.data);
      setserverdatan(data1.data)
    }
    fectdata();
    // setserverdatan(serverdata);
  }, [])

  function navhome() {
    navigate("/")
    togglenavm();
  }
  function navtrend() {
    navigate("/trend")
    togglenavm();
  }
  function navcart() {
    navigate("/cart")
    togglenavm();
  }
  function navlogin() {
    navigate("/login")
    togglenavm();
  }
  useEffect(() => {
    if (token) {
      let a = document.querySelector(".loginbtn")
      let b = document.querySelector(".loginimg")
      a.style.display = "none";
      b.style.display = "block";
    }
    else if (!token) {
      let a = document.querySelector(".loginbtn")
      let b = document.querySelector(".loginimg")
      a.style.display = "block";
      b.style.display = "none";
    }
  }, [token])
  window.onscroll = function () { toptobtmbtn() }
  function toptobtmbtn() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      document.getElementById('toptobtmbtn').style.visibility = "visible";
    }
    else {
      document.getElementById('toptobtmbtn').style.visibility = "hidden";
    }
  }
  function topFunction() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  function togglenavm() {
    document.getElementById('navcont3').classList.toggle('open')
    document.getElementById('navcont4').classList.toggle('open')
  }
  let z = []
  function searchin(x) {
    if (x == "" | x == " " | x == null | x == undefined) {
      setserverdatan(serverdata)
    }
    else {
      z = serverdata.filter(e => {
        if (e.title.toLowerCase().includes(x)||e.title.toUpperCase().includes(x)) {
          return e;
        }
      })
      setserverdatan(z);
    }

  }
  return (
    <header className='navhead'>
      <nav className='navhead2'>
        <img className='navimg1' src={logo} />
        <div className='navcont3' id="navcont3"><img className='navimg' src={logo} />
          <div className='navhome' onClick={navhome} ><FontAwesomeIcon icon={faHome} /> Home</div>
          <div className='navtrend' onClick={navtrend} ><FontAwesomeIcon icon={faFire} color='red' /> Trending</div></div>
        <div className='navcont3' id="navcont4">
          <div className='navsearch'><FontAwesomeIcon icon={faSearch} width={'15%'} height={'50%'} /><input placeholder="Search" id='navserch' onChange={(e) => searchin(e.target.value)} type='text' /></div>
          <div className='navcart' onClick={navcart} ><FontAwesomeIcon icon={faCartShopping} /> Cart<sup>{state.length}</sup></div>
          <button className='loginbtn' onClick={navlogin} >Login</button>
          <img className="loginimg" src='https://lh3.googleusercontent.com/ogw/AGvuzYYKs11_NuDypqfHRn3GJdUPRVhP2iGW3dSfV5lVhQ=s32-c-mo' onClick={() => { settocken(() => ""); alert("do you realy want to logout") }} alt='noimage' />
        </div>
        <button id='toptobtmbtn' onClick={topFunction}   ><FontAwesomeIcon icon={faArrowUp} /></button>
        <button id='navmenu' onClick={togglenavm}><FontAwesomeIcon icon={faBars} /> Menu </button>
        <span style={{ display: "none" }}>{isdarkmode}</span>
      </nav>
    </header>
  )
}

export default Navbar;
