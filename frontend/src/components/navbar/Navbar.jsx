import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.jpg'
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <section id='navbar'>

        <div className='logo__div'>
            <img src={logo} alt="" />
        </div>

        <p>Home</p>
        <p>Subjects
            <MdKeyboardArrowDown />
        </p>

        <div className='search__div'>
            <FaSearch />
            <input type="text" placeholder="find it here" id="" />
        </div>

        <div>
            <Link to='/login'>Login</Link>
            <Link to='/register'>SignUp</Link>
        </div>

    </section>
  )
}

export default Navbar