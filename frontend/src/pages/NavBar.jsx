import React from 'react'
import MenuBar from '../components/NavBar/MenuBar'
import '../css/NavBar/navbar.css'
const NavBar = () => {
  return (
    <div className='navbar '>
        <div className="navbar-container">
          <div className="nav-logo">
              <a href="/">
              <img src="/logo.png" alt="" srcset="" className='main-nav-item' height={'45px'} width={'100px'}/>
              </a>
          </div>
            
            <MenuBar fontSize={'19.2px'} fontColor={'#F76F32'}/>
            
        </div>

    </div>
  )
}

export default NavBar