import React, { useState } from 'react'
import  { HiOutlineMenuAlt3 }  from "react-icons/hi";
import { GiKnifeFork } from "react-icons/gi";
import "./NavBar.css";

const NavBar = () => {
    const [toggleMenu , setToggleMenu] = useState(false);
    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <a href='/' >LOGO</a>
            </div>
            <ul className='app__navbar-links'>
                {['Home' ,'About' , 'Photo Gallery' , 'Menu' ,'Contact'].map((item) => (
                    <li key={`${item}`}>
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>
            <div className='app__navbar-menu' >
                <HiOutlineMenuAlt3 className='app__navbar-menu-open' fontSize={27} onClick={() => setToggleMenu(true)}/>
                {toggleMenu && (
                    <div className='app__navbar-menu-overlay'>
                        <GiKnifeFork onClick={() => setToggleMenu(false)} className='overlay-close'/>
                        <ul className='app__navbar-menu-links'>
                        {['Home' ,'About' , 'Menu', 'Photo Gallery' ,  'Contact'].map((item) => (
                            <li  key={`${item}`}>
                                <a href={`#${item}`}>{item}</a>
                            </li>
                        ))}
                        </ul>
                    </div>
                )}

            </div>
        </nav>
    )
}

export default NavBar;