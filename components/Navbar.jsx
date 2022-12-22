
// import { Inter } from '@next/font/google'

// const inter = Inter({ subsets: ['latin'] })

// export default function Navbar() {
//   return (
//     <>
      {/* <!-- Mobile view --> */}
      {/* <header className="d-lg-none nav-mobile">
        <nav className="navbar navbar-expand-lg navbar-light py-4">
          <div className="container">
            <a className="navbar-brand " href="index.html">
              Therahub
            </a>
            <div className="navbar-toggler custom-hamburger-btn" type="button" data-toggle="collapse"
              data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
              aria-label="Toggle navigation">
              <div className="hamburger pt-2">
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
              </div>
            </div>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item mx-lg-3">
                  <a className="nav-link active-link" href="about.html">About</a>
                </li>
                <li className="nav-item mx-lg-3">
                  <a className="nav-link" href="#">Whom we help</a>
                </li>
                <li className="nav-item mx-lg-3">
                  <a className="nav-link" href="volunteer.html">Volunteer</a>
                </li>
                <li className="nav-item mx-lg-3">
                  <a className="nav-link" href="#">Contact</a>
                </li>
              </ul>
              <ul className="navbar-nav mx-auto">
                <a className="btn " href="#">Donate Now</a>
              </ul>
            </div>
          </div>
        </nav>

      </header> */}
      {/* <!-- Desktop view --> */}
      {/* <header className="header d-none d-lg-block">
        <nav className="navbar navbar-expand-lg navbar-light py-4">
          <div className="container">
            <a className="navbar-brand " href="index.html">
              Therahub
            </a>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item mx-lg-3">
                  <a className="nav-link active-link" href="about.html">About</a>
                </li>
                <li className="nav-item mx-lg-3">
                  <a className="nav-link" href="#">Whom we help</a>
                </li>
                <li className="nav-item mx-lg-3">
                  <a className="nav-link" href="volunteer.html">Volunteer</a>
                </li>
                <li className="nav-item mx-lg-3">
                  <a className="nav-link" href="#">Contact</a>
                </li>
              </ul>
              <ul className="navbar-nav mx-auto">
                <a className="btn py-2 px-4 " href="#">Donate Now</a>
              </ul>
            </div>
          </div>
        </nav>
      </header> */}
      
//     </>
//   )
// }

import React, { useState } from "react";
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

// import {
//   IoMdNotifications,
//   IoMdSettings,
//   IoIosArrowDown,
// } from "react-icons/io";
// import settingIcon from "../assets/settingIcon.svg";
// import Toggle from "./Toggle.jsx";
// import logo from "../assets/logo.png";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer } from "react-toastify";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    // console.log("works");
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>

<div className="isolate bg-white">
      <div className=" inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden sm:top-[-20rem]">
     <div>
          <nav className="flex h-9 items-center justify-between" aria-label="Global">
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="font-semibold text-gray-900 hover:text-gray-900">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
              <a
                href="#"
                className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
              >
                Log in
              </a>
            </div>
          </nav>
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
              <div className="flex h-9 items-center justify-between">
                <div className="flex">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img
                      className="h-8"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt=""
                    />
                  </a>
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
        </div>
        </div>
    </>
  );
};

export default Navbar;
