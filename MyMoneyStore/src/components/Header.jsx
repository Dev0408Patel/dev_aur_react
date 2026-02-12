import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header(props) {
    
  return (
    <>
        <div className="relative overflow">
        <div className="pt-6 pb-16 sm:pb-24 bg-radial relative from-orange-200 via-transparent to-transparent">
            <div className="mx-auto px-4 sm:px-6 max-w-7xl">
            <nav aria-label="Global" className="items-center justify-between sm:h-10 md:justify-center relative flex">
                <div className="items-center md:absolute md:inset-y-0 md:left-0 flex flex-1">
                <div className="items-center justify-between w-full md:w-auto flex">
                    
                <a href="http://www.w3.org"><span className="sr-only">SaaSPro</span><img alt="SaaSPro Logo" src="https://res.cloudinary.com/speedwares/image/upload/v1659284687/windframe-logo-main_daes7r.png" className="h-6 w-auto sm:h-8" /></a>
                    <div className="items-center md:hidden -mr-2 flex">
                    <button aria-expanded="false" type="button" className="mobile-menu-button p-2 inline-flex hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 bg-white rounded-md items-center justify-center text-gray-500">
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="" id="Windframe_0HJrazxGX">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    </div>
                </div>
                </div>
                <div className="md:flex md:space-x-10 hidden">
                <NavLink to={props.isLoggedIn?"/":"/products"} className={({isActive}) => 
                        `font-medium ${isActive ? "text-orange-600" : "text-gray-600"}  hover:text-orange-600`
                }>{props.isLoggedIn?"Friends":"Product"}</NavLink>
                <NavLink to={props.isLoggedIn?"/groups":"/features"} className={({isActive}) => 
                        `font-medium ${isActive ? "text-orange-600" : "text-gray-600"}  hover:text-orange-600`}>{props.isLoggedIn?"Groups":"Features"}</NavLink>
                <NavLink to={props.isLoggedIn?"/activities":"/aboutus"} className={({isActive}) => 
                        `font-medium ${isActive ? "text-orange-600" : "text-gray-600"}  hover:text-orange-600`}>{props.isLoggedIn?"Activities":"About us"}</NavLink>
                <NavLink to={props.isLoggedIn?"/profile":"/techstack"} className={({isActive}) => 
                        `font-medium ${isActive ? "text-orange-600" : "text-gray-600"}  hover:text-orange-600`}>{props.isLoggedIn?"Profile":"Tech Stack"}</NavLink>
                </div>
                <div className="md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0 hidden">
                {props.isLoggedIn ? (<div>
                <span className="rounded-md inline-flex shadow"><a href="#" onClick={props.loginchange} className="items-center px-4 py-2 text-base font-medium rounded-md text-orange-600 bg-white inline-flex border border-transparent hover:bg-gray-50">Log out</a></span>
                </div>)
                :(<div>
                <span className="rounded-md inline-flex shadow"><a href="#" onClick={props.loginchange} className="items-center px-4 py-2 text-base font-medium rounded-md text-orange-600 bg-white inline-flex border border-transparent hover:bg-gray-50">Log in</a></span>
                <span className="ml-3 rounded-md inline-flex shadow"><a href="#" className="justify-center rounded-md py-2 px-4 bg-orange-600 text-sm font-medium text-white shadow-sm inline-flex border border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 hover:bg-orange-700">Sign up</a></span>
                </div>)}
                </div>

            </nav>
            </div> 
        </div>
        </div>
    </>
  )
}

export default Header