import React, { useState } from 'react';

export const ResponsiveNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="max-w-7xl py-4 mx-auto" >
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {menuOpen &&
        <MobileMenu>
          {navLinks}
        </MobileMenu>}
    </div>
  );
};

const pages = ['About', 'Pricing', 'Contact'];
const navLinks = pages.map(page => <a key={page} className="no-underline text-black font-semibold hover:opacity-90" href={`#${page}`}>{page}</a>);

const Navbar = ({ menuOpen, setMenuOpen }) => (
  <div className="flex items-center justify-between p-4">
    <div className="flex items-center">
      <FireSvg />
      <a href="#home" className="text-xl font-bold no-underline text-black hover:opacity-90">Cams Request</a>
    </div>
    <nav className="hidden md:block space-x-6">
      {navLinks}
    </nav>
    <button type="button" aria-label="Toggle mobile menu" onClick={() => setMenuOpen(!menuOpen)} className="rounded md:hidden focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50"><MenuAlt4Svg menuOpen={menuOpen} /></button>
  </div>
);

const MobileMenu = ({ children }) => (
  <nav className="p-4 flex flex-col space-y-3 md:hidden">
    {children}
  </nav>
);


const FireSvg = () => (
    <svg className="fill-blue-600 w-10 h-10 mr-3 " fill="none" viewBox="0 0 444 512" xmlns="http://www.w3.org/2000/svg">
    <path d="m110.25 63.721-110.25 63.69v257.1l110.37 63.728c60.702 35.05 110.95 63.728 111.65 63.728 0.708 0 50.943-28.671 111.63-63.713l110.35-63.713v-257.16l-110.35-63.706c-60.693-35.038-110.98-63.692-111.75-63.676-0.769 0.017-51.011 28.691-111.65 63.721zm95.422 56.911c-0.194 0.194-29.75 0.237-65.679 0.095l-65.326-0.257 130.83-75.5 0.262 37.654c0.144 20.71 0.104 37.814-0.09 38.008zm99.328-37.359c34.375 19.802 62.928 36.384 63.45 36.85 0.523 0.466-28.615 0.847-64.75 0.847h-65.7v-76.07l2.25 1.185c1.238 0.652 30.375 17.387 64.75 37.188zm-99 106.7c0 20.9-0.253 38-0.563 38-0.534 0-130.48-74.802-131.35-75.614-0.229-0.212 29.359-0.386 65.75-0.386h66.167v38zm163.92-37.609c-0.705 0.663-129.34 74.83-130.67 75.342-0.987 0.38-1.25-7.551-1.25-37.626v-38.107h66.167c36.391 0 65.979 0.176 65.75 0.391zm-242.42 67.114c34.1 19.649 62.309 36.012 62.686 36.361 0.377 0.348-14.249 9.209-32.503 19.689l-33.189 19.054-32.497-56.333c-17.873-30.983-32.672-56.846-32.886-57.472-0.214-0.627 1.136-0.214 3 0.918 1.864 1.131 31.289 18.133 65.389 37.783zm224.93 17.931c-17.986 31.151-33.03 56.509-33.431 56.351-2.241-0.884-64.962-37.371-64.957-37.787 8e-3 -0.632 130.35-75.868 130.78-75.486 0.173 0.155-14.401 25.77-32.388 56.922zm-286.48 18.351c17.224 29.857 31.146 54.432 30.937 54.611-0.466 0.398-60.487 34.806-63.63 36.476l-2.25 1.196 4e-3 -76.285c3e-3 -74.041 0.057-76.197 1.813-73.285 0.994 1.65 15.901 27.429 33.126 57.287zm346.82 54.152-0.262 37.939-32.5-18.806c-21.164-12.247-32.384-19.289-32.168-20.189 0.182-0.761 14.807-26.462 32.5-57.115l32.168-55.732 0.262 37.982c0.144 20.89 0.144 55.055 0 75.921zm-207 86.916-0.262 38.004-32.318-55.975c-17.775-30.787-32.171-56.418-31.99-56.96 0.18-0.541 14.724-9.253 32.318-19.36l31.99-18.376 0.262 37.332c0.144 20.533 0.144 54.433 0 75.335zm65.805-94.171c17.778 10.277 32.18 18.939 32.005 19.25-3.251 5.774-64.964 112.69-65.215 112.98-0.197 0.229-0.357-33.634-0.357-75.25 0-41.617 0.28-75.667 0.622-75.667s15.167 8.408 32.945 18.684zm94.933 54.818c15.95 9.194 29.328 17.017 29.728 17.385s-28.617 17.614-64.484 38.324c-35.866 20.711-65.377 37.489-65.58 37.286-0.276-0.275 48.423-85.338 63.125-110.26l1.926-3.265 3.143 1.908c1.728 1.05 16.192 9.431 32.142 18.624zm-220.67 36.605c17.781 30.837 32.18 56.217 31.998 56.4-0.237 0.237-95.5-54.426-129.68-74.409-0.905-0.53 9.31-6.925 31-19.408 17.793-10.24 32.801-18.625 33.351-18.635 0.55-9e-3 15.548 25.214 33.329 56.052z" />
    </svg>
);

const MenuAlt4Svg = ({ menuOpen }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`transition duration-100 ease h-8 w-8 ${menuOpen ? 'transform rotate-90' : ''}`} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
  </svg>
);