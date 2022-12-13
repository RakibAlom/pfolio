import React from 'react';
import { FaBlog, FaHome, FaIdBadge, FaProductHunt } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  const menus = <>
    <li>
      <NavLink className="rounded-lg px-3 py-2  border border-[#64ffda] sm:border-0" to="/">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink className="rounded-lg px-3 py-2  border border-[#64ffda] sm:border-0" to="/portfolio">
        Portfolio
      </NavLink>
    </li>
    <li>
      <NavLink className="rounded-lg px-3 py-2  border border-[#64ffda] sm:border-0" to="/blog">
        Blog
      </NavLink>
    </li>
    <li>
      <NavLink className="rounded-lg px-3 py-2  border border-[#64ffda] sm:border-0" to="/contact">
        Contact
      </NavLink>
    </li>

    <li className='hidden md:block'>
      <a
        className="inline-flex items-center rounded-lg px-3 py-2"
        href="https://storialtech.com"
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
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          ></path>
        </svg>
      </a>
    </li>

  </>
  return (
    <>
      <div className="navbar-section fixed w-full">
        <div className="px-2">
          <nav
            aria-label="Site Nav"
            className="mx-auto flex items-center justify-between py-4 rounded"
          >
            <Link
              to="/"
              className="inline-flex h-10 w-10 items-center justify-center font-bold bg-[#64ffda] text-[#111722] sm:bg-transparent sm:text-[#64ffda] rounded-lg border border-[#64ffda]"
            >
              R
            </Link>
            <ul className="flex items-center gap-2 text-sm font-medium text-gray-500">
              {menus}
            </ul>
            <a
              className="hidden sm:block inline-block overflow-hidden border font-normal transition-all rounded border-[#64ffda] text-[#64ffda] px-4 py-2 hover:bg-[#64ffda1a] focus:outline-none focus:ring"
              href="https://drive.google.com/file/d/1jld2Z3kEsJJJRZ8FYNUSSuu4UHCTAmNE/view"
              target="_blank"
            >
              Resume
            </a>
          </nav>
        </div>

      </div>
    </>
  );
};

export default Navbar;