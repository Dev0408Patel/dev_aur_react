import React, { useState } from 'react'

function Header(props) {
    
  return (
    <>
        <div class="relative overflow">
        <div class="pt-6 pb-16 sm:pb-24 bg-radial relative from-orange-200 via-transparent to-transparent">
            <div class="mx-auto px-4 sm:px-6 max-w-7xl">
            <nav aria-label="Global" class="items-center justify-between sm:h-10 md:justify-center relative flex">
                <div class="items-center md:absolute md:inset-y-0 md:left-0 flex flex-1">
                <div class="items-center justify-between w-full md:w-auto flex">
                    
                <a href="#"><span class="sr-only">SaaSPro</span><img alt="SaaSPro Logo" src="https://res.cloudinary.com/speedwares/image/upload/v1659284687/windframe-logo-main_daes7r.png" class="h-6 w-auto sm:h-8" /></a>
                    <div class="items-center md:hidden -mr-2 flex">
                    <button aria-expanded="false" type="button" class="mobile-menu-button p-2 inline-flex hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 bg-white rounded-md items-center justify-center text-gray-500">
                        <span class="sr-only">Open main menu</span>
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="" id="Windframe_0HJrazxGX">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    </div>
                </div>
                </div>
                <div class="md:flex md:space-x-10 hidden">
                <a href="#" class="font-medium text-gray-600 hover:text-orange-600">{props.isLoggedIn?"Friends":"Product"}</a>
                <a href="#" class="font-medium text-gray-600 hover:text-orange-600">{props.isLoggedIn?"Groups":"Features"}</a>
                <a href="#" class="font-medium text-gray-600 hover:text-orange-600">{props.isLoggedIn?"Activities":"About us"}</a>
                <a href="#" class="font-medium text-gray-600 hover:text-orange-600">{props.isLoggedIn?"Profile":"Tech Stack"}</a>
                </div>
                <div class="md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0 hidden">
                {props.isLoggedIn ? (<div>
                <span class="rounded-md inline-flex shadow"><a href="#" onClick={props.loginchange} class="items-center px-4 py-2 text-base font-medium rounded-md text-orange-600 bg-white inline-flex border border-transparent hover:bg-gray-50">Log out</a></span>
                </div>)
                :(<div>
                <span class="rounded-md inline-flex shadow"><a href="#" onClick={props.loginchange} class="items-center px-4 py-2 text-base font-medium rounded-md text-orange-600 bg-white inline-flex border border-transparent hover:bg-gray-50">Log in</a></span>
                <span class="ml-3 rounded-md inline-flex shadow"><a href="#" class="justify-center rounded-md py-2 px-4 bg-orange-600 text-sm font-medium text-white shadow-sm inline-flex border border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 hover:bg-orange-700">Sign up</a></span>
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