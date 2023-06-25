// import { cno } from '../home/home';
import { useContext } from 'react';
import './navbar.scss'
import { useNavigate } from 'react-router-dom';
import { Dataf } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp, faArrowUp, faArrowUp19, faArrowUpWideShort, faBars, faCartShopping, faFire, faHamburger, faHome, faLongArrowUp, faSearch } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  const navigate = useNavigate()
  const {state,dispach}=useContext(Dataf)
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
          <div className='navhome' onClick={navhome} ><FontAwesomeIcon icon={faHome}/> Home</div>
          <div className='navtrend' onClick={navtrend} ><FontAwesomeIcon icon={faFire} color='red' /> Trending</div></div>
        <div className='navcont3' id="navcont4"><div className='navsearch'><FontAwesomeIcon icon={faSearch} width={'15%'} height={'50%'}/><input placeholder="Search" type='text' /></div>
          <div className='navcart' onClick={navcart} ><FontAwesomeIcon icon={faCartShopping}/> Cart<sup>{state.length}</sup></div>
          <button className='loginbtn' onClick={navlogin} >Login</button></div>
        <button id='toptobtmbtn' onClick={topFunction}   ><FontAwesomeIcon icon={faArrowUp}/> Top</button>
        <button id='navmenu' onClick={togglenavm}><FontAwesomeIcon icon={faBars}/> Menu </button>

      </nav>
    </header>
  )
}

export default Navbar;
