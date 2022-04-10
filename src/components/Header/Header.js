import React from 'react';
import "./Header.css";
// import {GrFormSearch} from "react-icons/gr";
import {FaSearch} from "react-icons/fa";
import {TiHome} from "react-icons/ti";
import {FaUserFriends} from "react-icons/fa";
import {BsBriefcaseFill} from "react-icons/bs";
import {AiFillMessage} from "react-icons/ai";
import {GoBell} from "react-icons/go";
import {CgMenuGridR} from "react-icons/cg";
import icon from "./img/icon.png";

const Header = () => {
  return (
    <div className='container'>
      <div className='header-1-column'>
        <img src={icon} alt='image-icon' className='icon-image' />
        <div className='div-input-search'>
          {/* <GrFormSearch className='input-icon'/> */}
          <FaSearch className='input-icon'/>
          <input type="text" className="input-header" placeholder="Buscar" />
        </div>
      </div>
      <div className='header-2-column'>
        <div className='div-icon'><TiHome className="icon"/> Inicio</div>
        <div className='div-icon'><FaUserFriends className="icon"/> Mi red</div>
        <div className='div-icon'><BsBriefcaseFill className="icon"/> Empleos</div>
        <div className='div-icon'><AiFillMessage className="icon"/> Mensajes</div>
        <div className='div-icon'><GoBell className="icon"/> Notificaciones</div>
        <div className='div-icon'><div className='div-icon-user'></div>User</div>
        <div className='div-icon border-left'><CgMenuGridR className="icon"/> Productos</div>
        <a href="#" className='div-premium'>Prueba Premium gratis</a>
      </div>
    </div>
  )
}

export default Header;