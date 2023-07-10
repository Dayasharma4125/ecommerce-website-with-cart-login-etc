// import { cno } from '../home/home';
import { useContext, useEffect } from 'react';
import './navbar.scss'
import logo from '../logo.png'
import { useNavigate } from 'react-router-dom';
import { Dataf } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faBars, faCartShopping, faFire, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { tocken } from '../../App';
const Navbar = () => {
  const navigate = useNavigate()
  const { token, settocken } = useContext(tocken)
  const { state, dispach } = useContext(Dataf)
  const isdarkmode = () => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme:dark)").matches) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }
    else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      return (<><button className='darkmodebutton'></button></>)
    }
  }
  function navhome() {
    navigate("/webapp1/")
    togglenavm();
  }
  function navtrend() {
    navigate("/webapp1/trend")
    togglenavm();
  }
  function navcart() {
    navigate("/webapp1/cart")
    togglenavm();
  }
  function navlogin() {
    navigate("/webapp1/login")
    togglenavm();
  }
  useEffect(()=>{
    if(token){
      let a=document.querySelector(".loginbtn")
      let b=document.querySelector(".loginimg")
      a.style.display="none";
      b.style.display="block";
    }
    else if(!token){
      let a=document.querySelector(".loginbtn")
      let b=document.querySelector(".loginimg")
      a.style.display="block";
      b.style.display="none";
    }
  },[token])
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
  return (
    <header className='navhead'>
      <nav className='navhead2'>
        <img className='navimg1' src={logo} />
        <div className='navcont3' id="navcont3"><img className='navimg' src={logo} />
          <div className='navhome' onClick={navhome} ><FontAwesomeIcon icon={faHome} /> Home</div>
          <div className='navtrend' onClick={navtrend} ><FontAwesomeIcon icon={faFire} color='red' /> Trending</div></div>
        <div className='navcont3' id="navcont4">
          <div className='navsearch'><FontAwesomeIcon icon={faSearch} width={'15%'} height={'50%'} /><input placeholder="Search" type='text' /></div>
          <div className='navcart' onClick={navcart} ><FontAwesomeIcon icon={faCartShopping} /> Cart<sup>{state.length}</sup></div>
          <button className='loginbtn' onClick={navlogin} >Login</button>
          <img className="loginimg" src='https://lh3.googleusercontent.com/ogw/AGvuzYYKs11_NuDypqfHRn3GJdUPRVhP2iGW3dSfV5lVhQ=s32-c-mo' onClick={()=>{settocken(()=>"");alert("do you realy want to logout")}} alt='noimage'/>
          </div>
        <button id='toptobtmbtn' onClick={topFunction}   ><FontAwesomeIcon icon={faArrowUp} /> Top</button>
        <button id='navmenu' onClick={togglenavm}><FontAwesomeIcon icon={faBars} /> Menu </button>
        <span style={{display:"none"}}>{isdarkmode}</span>
      </nav>
    </header>
  )
}

export default Navbar;
