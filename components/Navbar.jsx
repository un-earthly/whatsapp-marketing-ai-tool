"use client"

import { useState } from "react";

export const Nav = () => {
    const [mobile, setMobile] = useState(false);
    const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
    const [featuresOpen, setFeaturesOpen] = useState(false);
    const [useCases, setUseCasesOpen] = useState(false);

    const toggleMobileMenu = () => setMobile(!mobile);
    const toggleLanguageMenu = () => setLanguageMenuOpen(!languageMenuOpen);
    const toggleUseCases = () => setUseCasesOpen(!useCases);
    const toggleFeatures = () => setFeaturesOpen(!featuresOpen);

    return (
        <>
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

                <div className={`z-10 items-center justify-center w-full font-semibold select-none md:flex ${mobile ? 'flex' : 'hidden'}`}>
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
                                className="absolute left-0 z-20 z-30 w-full p-3 lg:p-10 mt-3 -ml-0 space-y-2 overflow-hidden transform bg-gray-100 shadow-lg lg:left-1/2 lg:-ml-24 md:w-[800px] rounded-xl ring-1 ring-black ring-opacity-5"
                            >
                                <div className="grid grid-cols-2 gap-10">
                                    <div className="flex space-x-3">
                                        <img src="https://site.sessions.flowos.com/_content/images/subscriptions.svg" alt="" />
                                        <div>
                                            <p >Ultra HD Video and Audio</p>
                                            <p className="text-sm font-light">Everything you&apos;d expect from a top videoconferencing platform and more.</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-3">
                                        <img src="https://site.sessions.flowos.com/_content/images/subscriptions.svg" alt="" />
                                        <div>
                                            <p >Ultra HD Video and Audio</p>
                                            <p className="text-sm font-light">Everything you&apos;d expect from a top videoconferencing platform and more.</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-3">
                                        <img src="https://site.sessions.flowos.com/_content/images/subscriptions.svg" alt="" />
                                        <div>
                                            <p >Ultra HD Video and Audio</p>
                                            <p className="text-sm font-light">Everything you&apos;d expect from a top videoconferencing platform and more.</p>
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
                        <a className="py-3 text-gray-800 hover:text-gray-700 hover:underline" href="#demo">Resources</a>
                        {/* <a className="py-3 text-gray-800 hover:text-gray-700 hover:underline" href="#demo">Use Cases</a> */}
                        <div onMouseEnter={toggleUseCases} onMouseLeave={toggleUseCases} className="relative py-3">
                            <div className="relative z-10 flex items-center space-x-1 text-gray-800 cursor-pointer lg:space-x-3 hover:text-gray-700 focus:outline-none">
                                <span>
                                    <span className="nav-link-inner--text">Use Cases</span>
                                </span>
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </div>

                            <div
                                style={{ display: useCases ? 'block' : 'none' }}
                                className="absolute left-0 z-20 z-30 w-full p-3 lg:p-10 mt-3 -ml-0 space-y-2 overflow-hidden transform bg-gray-100 shadow-lg lg:left-1/2 lg:-ml-24 md:w-[800px] rounded-xl ring-1 ring-black ring-opacity-5"
                            >
                                <div className="grid grid-cols-2 gap-10">
                                    <div className="flex space-x-3">
                                        <img src="https://site.sessions.flowos.com/_content/images/subscriptions.svg" alt="" />
                                        <div>
                                            <p >Ultra HD Video and Audio</p>
                                            <p className="text-sm font-light">Everything you&apos;d expect from a top videoconferencing platform and more.</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-3">
                                        <img src="https://site.sessions.flowos.com/_content/images/subscriptions.svg" alt="" />
                                        <div>
                                            <p >Ultra HD Video and Audio</p>
                                            <p className="text-sm font-light">Everything you&apos;d expect from a top videoconferencing platform and more.</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-3">
                                        <img src="https://site.sessions.flowos.com/_content/images/subscriptions.svg" alt="" />
                                        <div>
                                            <p >Ultra HD Video and Audio</p>
                                            <p className="text-sm font-light">Everything you&apos;d expect from a top videoconferencing platform and more.</p>
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
                        <a className="py-3 text-gray-800 hover:text-gray-700 hover:underline" href="#pricing">Pricing</a>
                        <a className="py-3 text-gray-800 hover:text-gray-700 hover:underline" href="#faq">FAQ</a>
                        <div className="relative py-3">
                            <div
                                onClick={toggleLanguageMenu}

                                className="relative z-10 flex items-center space-x-1 text-gray-800 cursor-pointer lg:space-x-3 hover:text-gray-700 focus:outline-none">
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
                                <a className="block px-4 py-3 text-sm text-gray-700 capitalize cursor-pointer hover:bg-gray-50 rounded-xl hover:text-gray-800" data-rounded="rounded-xl">
                                    English
                                </a>
                                <a className="block px-4 py-3 text-sm text-gray-700 capitalize cursor-pointer hover:bg-gray-50 rounded-xl hover:text-gray-800" data-rounded="rounded-xl">
                                    French
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${mobile ? 'flex' : 'hidden md:flex'} relative z-20 flex-col justify-center pr-5 mt-4 space-y-8 md:pr-3 lg:pr-0 md:flex-row md:space-y-0 md:items-center md:space-x-6 md:mt-0 hidden md:flex`}>
                    <a className="flex-shrink-0 font-semibold  text-gray-900 hover:underline" href="https://wpbox.mobidonia.com/login">Login</a>
                    <a className="flex-shrink-0 font-semibold  text-gray-900 hover:underline" href="https://wpbox.mobidonia.com/login">Sign Up</a>
                    <a href="#" className="flex-shrink-0 rounded-full w-auto text-base font-semibold leading-5 text-left text-gray-800 capitalize md:text-sm md:py-3 md:px-8 md:font-medium md:text-center md:text-white md:mx-0" style={{
                        backgroundColor: "#F7F8F8"
                    }} data-rounded="" data-primary="gray-900">
                        Book A Call
                    </a>
                </div>
            </nav>
        </>

    );
};