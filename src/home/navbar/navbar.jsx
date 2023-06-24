// import { cno } from '../home/home';
import { useContext } from 'react';
import './navbar.scss'
import { useNavigate } from 'react-router-dom';
import { Dataf } from '../../App';
const Navbar = () => {
  const navigate = useNavigate()
  const {state,dispach}=useContext(Dataf)
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
        <img className='navimg1' src="https://www.pngmart.com/files/Amazon-Logo-Download-PNG-Image.png" alt="?" />
        <div className='navcont3' id="navcont3"><img className='navimg' src="https://www.pngmart.com/files/Amazon-Logo-Download-PNG-Image.png" alt="?" />
          <div className='navhome' onClick={navhome} >Home</div>
          <div className='navtrend' onClick={navtrend} >Trending</div></div>
        <div className='navcont3' id="navcont4"><input className='navsearch' placeholder="Search" type='text' />
          <div className='navcart' onClick={navcart} >Cart<sup>{state.length}</sup></div>
          <button className='loginbtn' onClick={navlogin} >Login</button></div>
        <button id='toptobtmbtn' onClick={topFunction}   > Top</button>
        <button id='navmenu' onClick={togglenavm}> menu </button>

      </nav>
    </header>
  )
}

export default Navbar;
