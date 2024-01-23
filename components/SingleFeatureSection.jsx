'use client'
import React, { useState } from 'react'

export default function SingleFeatureSection() {
    const [tab, setTab] = useState("bookings")
    return (
        <div className='flex items-center justify-center flex-col my-10 max-w-7xl mx-auto px-10'>
            <h2 class="mt-3 mb-10 text-4xl font-bold font-heading">Manage and host it all on a single platform</h2>
            {/* <p class="mb-16 text-xl text-gray-500 text-center xl:w-2/3 w-full">Explore our pricing plans: the Light Plan for growing businesses and the Unlimited Plan for expansive needs, each tailored to elevate your business&apos;s communication strategy.</p> */}
            <div className='mb-10 space-x-10'>
                <button onClick={() => setTab("bookings")}>Bookings</button>
                <button onClick={() => setTab("meetings")}>Meetings</button>
                <button onClick={() => setTab("webiners")}>Webinars</button>
                <button onClick={() => setTab("agendas")}>Agendas</button>
                <button onClick={() => setTab("transcript")}>Transcript</button>
                <button onClick={() => setTab("cloudStorage")}>Cloud Storage</button>
            </div>
            {tab === "bookings" ?
            <div className='flex '>
                <div className='space-y-5 w-1/2'>
                    <div className="text-2xl font-bold">Bookings</div>
                    <div className="text-lg font-semibold">Grab their attention and keep it.</div>
                    <div className="space-y-5">
                        <div className='flex items-center justify-start space-x-3'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 9.5437C1.5 5.4037 4.86 2.0437 9 2.0437C13.14 2.0437 16.5 5.4037 16.5 9.5437C16.5 13.6837 13.14 17.0437 9 17.0437C4.86 17.0437 1.5 13.6837 1.5 9.5437ZM4.275 10.0687L6.9675 12.7612C7.26 13.0537 7.74 13.0537 8.025 12.7612L13.7175 7.0687C14.01 6.7762 14.01 6.3037 13.7175 6.0112C13.425 5.7187 12.9525 5.7187 12.66 6.0112L7.5 11.1712L5.3325 9.0112C5.04 8.7187 4.5675 8.7187 4.275 9.0112C4.13456 9.15132 4.05564 9.34156 4.05564 9.53995C4.05564 9.73834 4.13456 9.92858 4.275 10.0687Z" fill="#003a46"></path></svg></span>
                            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div className='flex items-center justify-start space-x-3'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 9.5437C1.5 5.4037 4.86 2.0437 9 2.0437C13.14 2.0437 16.5 5.4037 16.5 9.5437C16.5 13.6837 13.14 17.0437 9 17.0437C4.86 17.0437 1.5 13.6837 1.5 9.5437ZM4.275 10.0687L6.9675 12.7612C7.26 13.0537 7.74 13.0537 8.025 12.7612L13.7175 7.0687C14.01 6.7762 14.01 6.3037 13.7175 6.0112C13.425 5.7187 12.9525 5.7187 12.66 6.0112L7.5 11.1712L5.3325 9.0112C5.04 8.7187 4.5675 8.7187 4.275 9.0112C4.13456 9.15132 4.05564 9.34156 4.05564 9.53995C4.05564 9.73834 4.13456 9.92858 4.275 10.0687Z" fill="#003a46"></path></svg></span>
                            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div className='flex items-center justify-start space-x-3'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 9.5437C1.5 5.4037 4.86 2.0437 9 2.0437C13.14 2.0437 16.5 5.4037 16.5 9.5437C16.5 13.6837 13.14 17.0437 9 17.0437C4.86 17.0437 1.5 13.6837 1.5 9.5437ZM4.275 10.0687L6.9675 12.7612C7.26 13.0537 7.74 13.0537 8.025 12.7612L13.7175 7.0687C14.01 6.7762 14.01 6.3037 13.7175 6.0112C13.425 5.7187 12.9525 5.7187 12.66 6.0112L7.5 11.1712L5.3325 9.0112C5.04 8.7187 4.5675 8.7187 4.275 9.0112C4.13456 9.15132 4.05564 9.34156 4.05564 9.53995C4.05564 9.73834 4.13456 9.92858 4.275 10.0687Z" fill="#003a46"></path></svg></span>
                            <p className='text-sm'>Use AI to create interactive polls in seconds.</p>
                        </div>
                    </div>

                    <a href="" class="inline-block w-full px-12 py-3 mt-10 text-sm font-semibold text-center text-white capitalize bg-[#003a46] md:w-auto hover:bg-gray-800 focus:outline-none focus:bg-gray-800 md:mx-0 rounded-full" >
                        Start now
                    </a>
                </div>
                <div className='w-1/2'>
                    <img src="https://site.sessions.flowos.com/_content/images/revamp/manage-bookings-min.png" alt="" />
                </div>
            </div>:tab==="meeting"?
            <div className='flex '>
                <div className='space-y-5 w-1/2'>
                    <div className="text-2xl font-bold">Meeting</div>
                    <div className="text-lg font-semibold">Grab their attention and keep it.</div>
                    <div className="space-y-5">
                        <div className='flex items-center justify-start space-x-3'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 9.5437C1.5 5.4037 4.86 2.0437 9 2.0437C13.14 2.0437 16.5 5.4037 16.5 9.5437C16.5 13.6837 13.14 17.0437 9 17.0437C4.86 17.0437 1.5 13.6837 1.5 9.5437ZM4.275 10.0687L6.9675 12.7612C7.26 13.0537 7.74 13.0537 8.025 12.7612L13.7175 7.0687C14.01 6.7762 14.01 6.3037 13.7175 6.0112C13.425 5.7187 12.9525 5.7187 12.66 6.0112L7.5 11.1712L5.3325 9.0112C5.04 8.7187 4.5675 8.7187 4.275 9.0112C4.13456 9.15132 4.05564 9.34156 4.05564 9.53995C4.05564 9.73834 4.13456 9.92858 4.275 10.0687Z" fill="#003a46"></path></svg></span>
                            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div className='flex items-center justify-start space-x-3'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 9.5437C1.5 5.4037 4.86 2.0437 9 2.0437C13.14 2.0437 16.5 5.4037 16.5 9.5437C16.5 13.6837 13.14 17.0437 9 17.0437C4.86 17.0437 1.5 13.6837 1.5 9.5437ZM4.275 10.0687L6.9675 12.7612C7.26 13.0537 7.74 13.0537 8.025 12.7612L13.7175 7.0687C14.01 6.7762 14.01 6.3037 13.7175 6.0112C13.425 5.7187 12.9525 5.7187 12.66 6.0112L7.5 11.1712L5.3325 9.0112C5.04 8.7187 4.5675 8.7187 4.275 9.0112C4.13456 9.15132 4.05564 9.34156 4.05564 9.53995C4.05564 9.73834 4.13456 9.92858 4.275 10.0687Z" fill="#003a46"></path></svg></span>
                            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div className='flex items-center justify-start space-x-3'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 9.5437C1.5 5.4037 4.86 2.0437 9 2.0437C13.14 2.0437 16.5 5.4037 16.5 9.5437C16.5 13.6837 13.14 17.0437 9 17.0437C4.86 17.0437 1.5 13.6837 1.5 9.5437ZM4.275 10.0687L6.9675 12.7612C7.26 13.0537 7.74 13.0537 8.025 12.7612L13.7175 7.0687C14.01 6.7762 14.01 6.3037 13.7175 6.0112C13.425 5.7187 12.9525 5.7187 12.66 6.0112L7.5 11.1712L5.3325 9.0112C5.04 8.7187 4.5675 8.7187 4.275 9.0112C4.13456 9.15132 4.05564 9.34156 4.05564 9.53995C4.05564 9.73834 4.13456 9.92858 4.275 10.0687Z" fill="#003a46"></path></svg></span>
                            <p className='text-sm'>Use AI to create interactive polls in seconds.</p>
                        </div>
                    </div>

                    <a href="" class="inline-block w-full px-12 py-3 mt-10 text-sm font-semibold text-center text-white capitalize bg-[#003a46] md:w-auto hover:bg-gray-800 focus:outline-none focus:bg-gray-800 md:mx-0 rounded-full" >
                        Start now
                    </a>
                </div>
                <div className='w-1/2'>
                            <img src="https://site.sessions.flowos.com/_content/images/revamp/manage-meetings-min.png" alt="" />
                </div>
            </div>:tab==="webiners"?
            <div className='flex '>
                <div className='space-y-5 w-1/2'>
                    <div className="text-2xl font-bold">Webiners</div>
                    <div className="text-lg font-semibold">Grab their attention and keep it.</div>
                    <div className="space-y-5">
                        <div className='flex items-center justify-start space-x-3'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 9.5437C1.5 5.4037 4.86 2.0437 9 2.0437C13.14 2.0437 16.5 5.4037 16.5 9.5437C16.5 13.6837 13.14 17.0437 9 17.0437C4.86 17.0437 1.5 13.6837 1.5 9.5437ZM4.275 10.0687L6.9675 12.7612C7.26 13.0537 7.74 13.0537 8.025 12.7612L13.7175 7.0687C14.01 6.7762 14.01 6.3037 13.7175 6.0112C13.425 5.7187 12.9525 5.7187 12.66 6.0112L7.5 11.1712L5.3325 9.0112C5.04 8.7187 4.5675 8.7187 4.275 9.0112C4.13456 9.15132 4.05564 9.34156 4.05564 9.53995C4.05564 9.73834 4.13456 9.92858 4.275 10.0687Z" fill="#003a46"></path></svg></span>
                            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div className='flex items-center justify-start space-x-3'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 9.5437C1.5 5.4037 4.86 2.0437 9 2.0437C13.14 2.0437 16.5 5.4037 16.5 9.5437C16.5 13.6837 13.14 17.0437 9 17.0437C4.86 17.0437 1.5 13.6837 1.5 9.5437ZM4.275 10.0687L6.9675 12.7612C7.26 13.0537 7.74 13.0537 8.025 12.7612L13.7175 7.0687C14.01 6.7762 14.01 6.3037 13.7175 6.0112C13.425 5.7187 12.9525 5.7187 12.66 6.0112L7.5 11.1712L5.3325 9.0112C5.04 8.7187 4.5675 8.7187 4.275 9.0112C4.13456 9.15132 4.05564 9.34156 4.05564 9.53995C4.05564 9.73834 4.13456 9.92858 4.275 10.0687Z" fill="#003a46"></path></svg></span>
                            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div className='flex items-center justify-start space-x-3'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 9.5437C1.5 5.4037 4.86 2.0437 9 2.0437C13.14 2.0437 16.5 5.4037 16.5 9.5437C16.5 13.6837 13.14 17.0437 9 17.0437C4.86 17.0437 1.5 13.6837 1.5 9.5437ZM4.275 10.0687L6.9675 12.7612C7.26 13.0537 7.74 13.0537 8.025 12.7612L13.7175 7.0687C14.01 6.7762 14.01 6.3037 13.7175 6.0112C13.425 5.7187 12.9525 5.7187 12.66 6.0112L7.5 11.1712L5.3325 9.0112C5.04 8.7187 4.5675 8.7187 4.275 9.0112C4.13456 9.15132 4.05564 9.34156 4.05564 9.53995C4.05564 9.73834 4.13456 9.92858 4.275 10.0687Z" fill="#003a46"></path></svg></span>
                            <p className='text-sm'>Use AI to create interactive polls in seconds.</p>
                        </div>
                    </div>

                    <a href="" class="inline-block w-full px-12 py-3 mt-10 text-sm font-semibold text-center text-white capitalize bg-[#003a46] md:w-auto hover:bg-gray-800 focus:outline-none focus:bg-gray-800 md:mx-0 rounded-full" >
                        Start now
                    </a>
                </div>
                <div className='w-1/2'>
                                <img src="https://site.sessions.flowos.com/_content/images/revamp/manage-webinars-min.png" alt="" />
                </div>
            </div>:tab==="agendas"?
            <div className='flex '>
                <div className='space-y-5 w-1/2'>
                    <div className="text-2xl font-bold">Agendas</div>
                    <div className="text-lg font-semibold">Grab their attention and keep it.</div>
                    <div className="space-y-5">
                        <div className='flex items-center justify-start space-x-3'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 9.5437C1.5 5.4037 4.86 2.0437 9 2.0437C13.14 2.0437 16.5 5.4037 16.5 9.5437C16.5 13.6837 13.14 17.0437 9 17.0437C4.86 17.0437 1.5 13.6837 1.5 9.5437ZM4.275 10.0687L6.9675 12.7612C7.26 13.0537 7.74 13.0537 8.025 12.7612L13.7175 7.0687C14.01 6.7762 14.01 6.3037 13.7175 6.0112C13.425 5.7187 12.9525 5.7187 12.66 6.0112L7.5 11.1712L5.3325 9.0112C5.04 8.7187 4.5675 8.7187 4.275 9.0112C4.13456 9.15132 4.05564 9.34156 4.05564 9.53995C4.05564 9.73834 4.13456 9.92858 4.275 10.0687Z" fill="#003a46"></path></svg></span>
                            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div className='flex items-center justify-start space-x-3'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 9.5437C1.5 5.4037 4.86 2.0437 9 2.0437C13.14 2.0437 16.5 5.4037 16.5 9.5437C16.5 13.6837 13.14 17.0437 9 17.0437C4.86 17.0437 1.5 13.6837 1.5 9.5437ZM4.275 10.0687L6.9675 12.7612C7.26 13.0537 7.74 13.0537 8.025 12.7612L13.7175 7.0687C14.01 6.7762 14.01 6.3037 13.7175 6.0112C13.425 5.7187 12.9525 5.7187 12.66 6.0112L7.5 11.1712L5.3325 9.0112C5.04 8.7187 4.5675 8.7187 4.275 9.0112C4.13456 9.15132 4.05564 9.34156 4.05564 9.53995C4.05564 9.73834 4.13456 9.92858 4.275 10.0687Z" fill="#003a46"></path></svg></span>
                            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div className='flex items-center justify-start space-x-3'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 9.5437C1.5 5.4037 4.86 2.0437 9 2.0437C13.14 2.0437 16.5 5.4037 16.5 9.5437C16.5 13.6837 13.14 17.0437 9 17.0437C4.86 17.0437 1.5 13.6837 1.5 9.5437ZM4.275 10.0687L6.9675 12.7612C7.26 13.0537 7.74 13.0537 8.025 12.7612L13.7175 7.0687C14.01 6.7762 14.01 6.3037 13.7175 6.0112C13.425 5.7187 12.9525 5.7187 12.66 6.0112L7.5 11.1712L5.3325 9.0112C5.04 8.7187 4.5675 8.7187 4.275 9.0112C4.13456 9.15132 4.05564 9.34156 4.05564 9.53995C4.05564 9.73834 4.13456 9.92858 4.275 10.0687Z" fill="#003a46"></path></svg></span>
                            <p className='text-sm'>Use AI to create interactive polls in seconds.</p>
                        </div>
                    </div>

                    <a href="" class="inline-block w-full px-12 py-3 mt-10 text-sm font-semibold text-center text-white capitalize bg-[#003a46] md:w-auto hover:bg-gray-800 focus:outline-none focus:bg-gray-800 md:mx-0 rounded-full" >
                        Start now
                    </a>
                </div>
                <div className='w-1/2'>
                                    <img src="https://site.sessions.flowos.com/_content/images/revamp/manage-agendas-min.png" alt="" />
                </div>
            </div>:tab==="transcript"?
            <div className='flex '>
                <div className='space-y-5 w-1/2'>
                    <div className="text-2xl font-bold">Transcript</div>
                    <div className="text-lg font-semibold">Grab their attention and keep it.</div>
                    <div className="space-y-5">
                        <div className='flex items-center justify-start space-x-3'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 9.5437C1.5 5.4037 4.86 2.0437 9 2.0437C13.14 2.0437 16.5 5.4037 16.5 9.5437C16.5 13.6837 13.14 17.0437 9 17.0437C4.86 17.0437 1.5 13.6837 1.5 9.5437ZM4.275 10.0687L6.9675 12.7612C7.26 13.0537 7.74 13.0537 8.025 12.7612L13.7175 7.0687C14.01 6.7762 14.01 6.3037 13.7175 6.0112C13.425 5.7187 12.9525 5.7187 12.66 6.0112L7.5 11.1712L5.3325 9.0112C5.04 8.7187 4.5675 8.7187 4.275 9.0112C4.13456 9.15132 4.05564 9.34156 4.05564 9.53995C4.05564 9.73834 4.13456 9.92858 4.275 10.0687Z" fill="#003a46"></path></svg></span>
                            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div className='flex items-center justify-start space-x-3'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 9.5437C1.5 5.4037 4.86 2.0437 9 2.0437C13.14 2.0437 16.5 5.4037 16.5 9.5437C16.5 13.6837 13.14 17.0437 9 17.0437C4.86 17.0437 1.5 13.6837 1.5 9.5437ZM4.275 10.0687L6.9675 12.7612C7.26 13.0537 7.74 13.0537 8.025 12.7612L13.7175 7.0687C14.01 6.7762 14.01 6.3037 13.7175 6.0112C13.425 5.7187 12.9525 5.7187 12.66 6.0112L7.5 11.1712L5.3325 9.0112C5.04 8.7187 4.5675 8.7187 4.275 9.0112C4.13456 9.15132 4.05564 9.34156 4.05564 9.53995C4.05564 9.73834 4.13456 9.92858 4.275 10.0687Z" fill="#003a46"></path></svg></span>
                            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div className='flex items-center justify-start space-x-3'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 9.5437C1.5 5.4037 4.86 2.0437 9 2.0437C13.14 2.0437 16.5 5.4037 16.5 9.5437C16.5 13.6837 13.14 17.0437 9 17.0437C4.86 17.0437 1.5 13.6837 1.5 9.5437ZM4.275 10.0687L6.9675 12.7612C7.26 13.0537 7.74 13.0537 8.025 12.7612L13.7175 7.0687C14.01 6.7762 14.01 6.3037 13.7175 6.0112C13.425 5.7187 12.9525 5.7187 12.66 6.0112L7.5 11.1712L5.3325 9.0112C5.04 8.7187 4.5675 8.7187 4.275 9.0112C4.13456 9.15132 4.05564 9.34156 4.05564 9.53995C4.05564 9.73834 4.13456 9.92858 4.275 10.0687Z" fill="#003a46"></path></svg></span>
                            <p className='text-sm'>Use AI to create interactive polls in seconds.</p>
                        </div>
                    </div>

                    <a href="" class="inline-block w-full px-12 py-3 mt-10 text-sm font-semibold text-center text-white capitalize bg-[#003a46] md:w-auto hover:bg-gray-800 focus:outline-none focus:bg-gray-800 md:mx-0 rounded-full" >
                        Start now
                    </a>
                </div>
                <div className='w-1/2'>
                                        <img src="https://site.sessions.flowos.com/_content/images/revamp/manage-transripts-min.png" alt="" />
                </div>
            </div>:
            <div className='flex '>
                <div className='space-y-5 w-1/2'>
                    <div className="text-2xl font-bold">Cloud Storage</div>
                    <div className="text-lg font-semibold">Grab their attention and keep it.</div>
                    <div className="space-y-5">
                        <div className='flex items-center justify-start space-x-3'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 9.5437C1.5 5.4037 4.86 2.0437 9 2.0437C13.14 2.0437 16.5 5.4037 16.5 9.5437C16.5 13.6837 13.14 17.0437 9 17.0437C4.86 17.0437 1.5 13.6837 1.5 9.5437ZM4.275 10.0687L6.9675 12.7612C7.26 13.0537 7.74 13.0537 8.025 12.7612L13.7175 7.0687C14.01 6.7762 14.01 6.3037 13.7175 6.0112C13.425 5.7187 12.9525 5.7187 12.66 6.0112L7.5 11.1712L5.3325 9.0112C5.04 8.7187 4.5675 8.7187 4.275 9.0112C4.13456 9.15132 4.05564 9.34156 4.05564 9.53995C4.05564 9.73834 4.13456 9.92858 4.275 10.0687Z" fill="#003a46"></path></svg></span>
                            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div className='flex items-center justify-start space-x-3'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 9.5437C1.5 5.4037 4.86 2.0437 9 2.0437C13.14 2.0437 16.5 5.4037 16.5 9.5437C16.5 13.6837 13.14 17.0437 9 17.0437C4.86 17.0437 1.5 13.6837 1.5 9.5437ZM4.275 10.0687L6.9675 12.7612C7.26 13.0537 7.74 13.0537 8.025 12.7612L13.7175 7.0687C14.01 6.7762 14.01 6.3037 13.7175 6.0112C13.425 5.7187 12.9525 5.7187 12.66 6.0112L7.5 11.1712L5.3325 9.0112C5.04 8.7187 4.5675 8.7187 4.275 9.0112C4.13456 9.15132 4.05564 9.34156 4.05564 9.53995C4.05564 9.73834 4.13456 9.92858 4.275 10.0687Z" fill="#003a46"></path></svg></span>
                            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div className='flex items-center justify-start space-x-3'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 9.5437C1.5 5.4037 4.86 2.0437 9 2.0437C13.14 2.0437 16.5 5.4037 16.5 9.5437C16.5 13.6837 13.14 17.0437 9 17.0437C4.86 17.0437 1.5 13.6837 1.5 9.5437ZM4.275 10.0687L6.9675 12.7612C7.26 13.0537 7.74 13.0537 8.025 12.7612L13.7175 7.0687C14.01 6.7762 14.01 6.3037 13.7175 6.0112C13.425 5.7187 12.9525 5.7187 12.66 6.0112L7.5 11.1712L5.3325 9.0112C5.04 8.7187 4.5675 8.7187 4.275 9.0112C4.13456 9.15132 4.05564 9.34156 4.05564 9.53995C4.05564 9.73834 4.13456 9.92858 4.275 10.0687Z" fill="#003a46"></path></svg></span>
                            <p className='text-sm'>Use AI to create interactive polls in seconds.</p>
                        </div>
                    </div>

                    <a href="" class="inline-block w-full px-12 py-3 mt-10 text-sm font-semibold text-center text-white capitalize bg-[#003a46] md:w-auto hover:bg-gray-800 focus:outline-none focus:bg-gray-800 md:mx-0 rounded-full" >
                        Start now
                    </a>
                </div>
                <div className='w-1/2'>
                                        <img src="https://site.sessions.flowos.com/_content/images/revamp/manage-cloud-min.png" alt="" />
                </div>
            </div>}
        </div>
    )
}
