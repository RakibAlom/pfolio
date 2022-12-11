import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  const menus = <>
    <li className="">
      <NavLink className="rounded-lg px-3 py-2 font-normal" to="/"> Home </NavLink>
    </li>
    <li><NavLink className="rounded-lg px-3 py-2" to="portfolio"> Portfolio </NavLink></li>

    <li>
      <NavLink
        className="inline-flex items-center rounded-lg px-3 py-2"
        to="https://storialtech.com"
        target="_blank"
      >
        StorialTech
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="ml-1.5 h-4 w-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          ></path>
        </svg>
      </NavLink>
    </li>

    <li>
      <Link
        class="group relative inline-block overflow-hidden border font-normal transition-all border-[#64ffda] text-[#64ffda] px-4 py-1 hover:bg-[#64ffda1a] focus:outline-none focus:ring"
        href="/download"
      >
        Resume
      </Link>
    </li>

  </>
  return (
    <>
      <div className="container">
        <nav
          aria-label="Site Nav"
          className="mx-auto flex items-center justify-between py-4 my-5 rounded"
        >
          <Link
            to="/"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#64ffda]"
          >
            <span className='font-bold text-[#64ffda]'>R</span>
          </Link>
          <ul className="flex items-center gap-2 text-sm font-medium text-gray-500">
            {menus}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;