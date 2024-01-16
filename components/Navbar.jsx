"use client"

import { useState } from "react";

export const Nav = () => {
    const [mobile, setMobile] = useState(false);
    const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
    const [featuresOpen, setFeaturesOpen] = useState(false);

    const toggleMobileMenu = () => setMobile(!mobile);
    const toggleLanguageMenu = () => setLanguageMenuOpen(!languageMenuOpen);
    const toggleFeatures = () => setFeaturesOpen(!featuresOpen);

    return (
        <>
            <div class="z-20 flex items-center justify-center w-full h-10 px-5 overflow-hidden text-xs font-normal cursor-pointer bg-gradient-to-r from-indigo-500 via-blue-400 to-green-400 text-blue-50">
                <a href="https://calendly.com"><div class="flex items-center justify-center w-full h-full mx-auto max-w-7xl">

                    <svg class="w-4 h-4 mr-1 text-blue-100 stroke-current" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z">
                        </path>
                    </svg>
                    <span class=""><span class=" sm:inline-block text-md font-bold">Schedule a call</span>
                    </span></div>
                </a>

            </div>
            <nav className="relative mt-10 mx-auto md:pb-6 max-w-7xl md:flex md:justify-between md:items-center">
                <div className="relative z-20 flex items-center justify-between">
                    <div>
                        <a className="text-xl font-bold text-gray-800 md:text-2xl hover:text-gray-700" href="#top">
                            <img style={{ maxHeight: '40px' }} src="https://wpbox.mobidonia.com/uploads/default/logo.png" alt="" />
                        </a>
                    </div>

                    <div onClick={toggleMobileMenu} className="flex md:hidden">
                        <button type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className={`left-0 z-10 items-center justify-center w-full font-semibold select-none md:flex lg:absolute ${mobile ? 'flex' : 'hidden'}`}>
                    <div className="flex flex-col justify-center w-full mt-4 space-y-2 md:mt-0 md:flex-row md:space-x-6 lg:space-x-10 xl:space-x-16 md:space-y-0">
                        {/* <a className="py-3 text-gray-800 hover:text-gray-700 hover:underline" href="#features">Features</a> */}
                        <div onMouseEnter={toggleFeatures} onMouseLeave={toggleFeatures} className="relative py-3">
                            <div className="relative z-10 flex items-center space-x-1 text-gray-800 cursor-pointer lg:space-x-3 hover:text-gray-700 focus:outline-none">
                                <span>
                                    <span className="nav-link-inner--text">Features</span>
                                </span>
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </div>

                            <div
                                style={{ display: featuresOpen ? 'block' : 'none' }}
                                className="absolute left-0 z-20 z-30 w-full p-3 lg:p-10 mt-3 -ml-0 space-y-2 overflow-hidden transform bg-gray-200 shadow-lg lg:left-1/2 lg:-ml-24 md:w-[800px] rounded-xl ring-1 ring-black ring-opacity-5"
                            >
                                <div className="grid grid-cols-2 gap-10">
                                    <div className="flex space-x-3">
                                        <img src="https://site.sessions.flowos.com/_content/images/subscriptions.svg" alt="" />
                                        <div>
                                            <p >Ultra HD Video and Audio</p>
                                            <p className="text-sm font-light">Everything you'd expect from a top videoconferencing platform and more.</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-3">
                                        <img src="https://site.sessions.flowos.com/_content/images/subscriptions.svg" alt="" />
                                        <div>
                                            <p >Ultra HD Video and Audio</p>
                                            <p className="text-sm font-light">Everything you'd expect from a top videoconferencing platform and more.</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-3">
                                        <img src="https://site.sessions.flowos.com/_content/images/subscriptions.svg" alt="" />
                                        <div>
                                            <p >Ultra HD Video and Audio</p>
                                            <p className="text-sm font-light">Everything you'd expect from a top videoconferencing platform and more.</p>
                                        </div>
                                    </div>
                               </div>
                                {/* <a href="?lang=EN" className="block px-4 py-3 text-sm text-gray-700 capitalize cursor-pointer hover:bg-gray-50 rounded-xl hover:text-gray-800" data-rounded="rounded-xl">
                                    English
                                </a>
                                <a href="?lang=FR" className="block px-4 py-3 text-sm text-gray-700 capitalize cursor-pointer hover:bg-gray-50 rounded-xl hover:text-gray-800" data-rounded="rounded-xl">
                                    French
                                </a> */}
                            </div>
                        </div>
                        <a className="py-3 text-gray-800 hover:text-gray-700 hover:underline" href="#demo">Demo</a>
                        <a className="py-3 text-gray-800 hover:text-gray-700 hover:underline" href="#pricing">Pricing</a>
                        <a className="py-3 text-gray-800 hover:text-gray-700 hover:underline" href="#faq">FAQ</a>

                        <div onMouseEnter={toggleLanguageMenu} onMouseLeave={toggleLanguageMenu} className="relative py-3">
                            <div className="relative z-10 flex items-center space-x-1 text-gray-800 cursor-pointer lg:space-x-3 hover:text-gray-700 focus:outline-none">
                                <span>
                                    <span className="nav-link-inner--text">English</span>
                                </span>
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </div>

                            <div
                                style={{ display: languageMenuOpen ? 'block' : 'none' }}
                                className="absolute left-0 z-20 z-30 w-full p-3 mt-3 -ml-0 space-y-2 overflow-hidden transform bg-white shadow-lg lg:left-1/2 lg:-ml-24 md:w-48 rounded-xl ring-1 ring-black ring-opacity-5"
                            >
                                <a href="?lang=EN" className="block px-4 py-3 text-sm text-gray-700 capitalize cursor-pointer hover:bg-gray-50 rounded-xl hover:text-gray-800" data-rounded="rounded-xl">
                                    English
                                </a>
                                <a href="?lang=FR" className="block px-4 py-3 text-sm text-gray-700 capitalize cursor-pointer hover:bg-gray-50 rounded-xl hover:text-gray-800" data-rounded="rounded-xl">
                                    French
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${mobile ? 'flex' : 'hidden md:flex'} relative z-20 flex-col justify-center pr-5 mt-4 space-y-8 md:pr-3 lg:pr-0 md:flex-row md:space-y-0 md:items-center md:space-x-6 md:mt-0 hidden md:flex`}>
                    <a className="flex-shrink-0 font-semibold  text-gray-900 hover:underline" href="https://wpbox.mobidonia.com/login">Login</a>
                    <a href="https://wpbox.mobidonia.com/register" className="flex-shrink-0 rounded-full w-auto text-base font-semibold leading-5 text-left text-gray-800 capitalize bg-transparent md:text-sm md:py-3 md:px-8 md:font-medium md:text-center md:text-white md:bg-gray-900 md:mx-0" data-rounded="" data-primary="gray-900">
                        Sign up
                    </a>
                </div>
            </nav>
        </>

    );
};