import React, { useState } from 'react';
import menuIcon from '../../../Images/menu.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <div className='header-container'>
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white-500">
                  <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                      <a
                        className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                        to="/home" style={{fontSize: '20px'}}
                      >
                        <span>a</span>sentus
                      </a>
                      <button
                        className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                      >
                          <img src={menuIcon} alt="" />
                        <i className="fas fa-bars text-black "></i>
                      </button>
                    </div>
                    <div
                      className={
                        "lg:flex flex-grow items-center" +
                        (navbarOpen ? " flex" : " hidden")
                      }
                      id="example-navbar-danger"
                    >
                      <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        <li className="nav-item">
                          <Link
                            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                            to="/home"
                          >
                            <i className="fab fa-facebook-square text-lg leading-lg text-black opacity-75"></i><span className="ml-2">Home</span>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                            to="/addBlog"
                          >
                            <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Admin</span>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                            to=""
                          >
                            <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Contact</span>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                            to="/login"
                          >
                            <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Login</span>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                            to="/signUp"
                          >
                            <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Sign Up</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
        </div>
    );
};

export default Navbar;