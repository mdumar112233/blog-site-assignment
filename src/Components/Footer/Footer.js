import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer-container'>
            <footer class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font footer-title font-medium  tracking-widest text-sm mb-3">About us</h2>
                        <nav class="list-none mb-10 about-us">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa perferendis minima expedita possimus quibusdam, repellendus molestiae quia itaque praesentium ab.</p>
                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font footer-title font-medium text-gray-900 tracking-widest text-sm mb-3">Quick Link</h2>
                        <nav class="list-none mb-10">
                        <li>
                            <Link class="nav-link">Home</Link>
                        </li>
                        <li>
                            <Link class="nav-link">Admin</Link>
                        </li>
                        <li>
                            <Link class="nav-link">Contact</Link>
                        </li>
                        <li>
                            <Link class="nav-link">Login</Link>
                        </li>
                        <li>
                            <Link class="nav-link">Sign up</Link>
                        </li>
                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font footer-title font-medium text-gray-900 tracking-widest text-sm mb-3">Our Blogs</h2>
                        <nav class="list-none mb-10">
                        <li>
                            <Link class="nav-link">First Blog</Link>
                        </li>
                        <li>
                            <Link class="nav-link">Second Blog</Link>
                        </li>
                        <li>
                            <Link class="nav-link">Third Blog</Link>
                        </li>
                        <li>
                            <Link class="nav-link">Fourth Blog</Link>
                        </li>
                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font footer-title font-medium text-gray-900 tracking-widest text-sm mb-3">Follow us</h2>
                        <nav class="list-none mb-10">
                        <li>
                            <Link class="nav-link">Facebook</Link>
                        </li>
                        <li>
                            <Link class="nav-link">Instagram</Link>
                        </li>
                        <li>
                            <Link class="nav-link">Twitter</Link>
                        </li>
                        <li>
                            <Link class="nav-link">Linkedin</Link>
                        </li>
                        </nav>
                    </div>
                    </div>
                </div>
                <p class="copy-right text-sm text-center sm:text-left">© copyright 2021
                    </p>
                </footer>
             </div>
    );
};

export default Footer;