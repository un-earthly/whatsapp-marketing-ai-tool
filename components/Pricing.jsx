"use client"
import React, { useState } from 'react'

export default function Pricing() {
    const [openTab, setOpenTab] = React.useState(1);
    const [color] = useState("black")
    return (
        <section class="bg-white">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <p className='text-blue-400 uppercase text-sm mb-4 font-semibold'>OUR flexible prices</p>
                    <h2 class="mb-4 text-4xl tracking-tight font-semibold text-gray-900">Pricing Plans for Everyone</h2>
                    <p class="mb-5 font-light text-gray-500 sm:text-xl">Our plans were crafted specifically to help you succeed. Our flexible pricing model will help you gain the most of our service.</p>
                </div>



                {/* <div className="flex items-center justify-center my-5">
                    <label class="relative inline-flex items-center me-5 cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" checked />
                        <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
                        <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Monthly</span>
                    </label>

                    <label class="relative inline-flex items-center me-5 cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" checked />
                        <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                        <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Yearly</span>
                    </label>

                    <label class="relative inline-flex items-center me-5 cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" checked />
                        <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                        <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Lifetime</span>
                    </label>
                </div> */}

                <div className="flex flex-wrap">
                    <div className="w-2/3 mx-auto">
                        <ul
                            className="flex mb-0 w-2/4 mx-auto list-none flex-wrap pt-3 pb-4 flex-row"
                            role="tablist"
                        >
                            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                <a
                                    className={
                                        "text-xs font-bold uppercase  rounded block leading-normal "
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(1);
                                    }}
                                    data-toggle="tab"
                                    href="#link1"
                                    role="tablist"
                                >
                                    <a href="#" class={`inline-block px-4 py-3  ${openTab === 1 ? 'bg-blue-400 text-white' : 'border-blue-400 text-blue-400'} border-2 rounded-full `} >Monthly</a>

                                </a>
                            </li>
                            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                <a
                                    className={
                                        "text-xs font-bold uppercase  rounded block leading-normal " +
                                        (openTab === 2
                                            ? "text-white bg-" + color + "-600"
                                            : "text-" + color + "-600 bg-white")
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(2);
                                    }}
                                    data-toggle="tab"
                                    href="#link2"
                                    role="tablist"
                                >
                                    <a href="#" class={`inline-block px-4 py-3 ${openTab === 2 ? 'bg-green-400 text-white' : 'border-green-400 '} border-2 rounded-full `} >Yearly</a>

                                </a>
                            </li>
                            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                <a
                                    className={
                                        "text-xs font-bold uppercase  rounded block leading-normal " +
                                        (openTab === 3
                                            ? "text-white bg-" + color + "-600"
                                            : "text-" + color + "-600 bg-white")
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(3);
                                    }}
                                    data-toggle="tab"
                                    href="#link3"
                                    role="tablist"
                                >
                                    <a href="#" class={`inline-block px-4 py-3  border-2 rounded-full ${openTab === 3 ? 'bg-yellow-400 text-black' : 'border-yellow-400 text-yellow-400'} `} >Lifetime</a>

                                </a>
                            </li>
                        </ul>
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
                            <div className="px-4 py-5 flex-auto">
                                <div className="tab-content tab-space">
                                    <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                        <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white border-t-4 border-blue-400 shadow xl:p-8">
                                            <h3 class="mb-4 text-2xl font-semibold">Starter Plan</h3>
                                            <p class="font-light text-gray-500 sm:text-lg">Best option for personal use & for your next project.</p>
                                            <div class="flex justify-center items-baseline my-8">
                                                <span class="mr-2 text-5xl font-extrabold">Free</span>
                                                <span class="text-gray-500">/month</span>
                                            </div>

                                            <ul role="list" class="mb-8 space-y-4 text-left">
                                                <li class="flex items-center space-x-3">

                                                    <svg class="flex-shrink-0 w-5 h-5 bg-green-500 text-white rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                    <span>Individual configuration</span>
                                                </li>
                                                <li class="flex items-center space-x-3">

                                                    <svg class="flex-shrink-0 w-5 h-5 bg-green-500 text-white rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                    <span>No setup, or hidden fees</span>
                                                </li>
                                                <li class="flex items-center space-x-3">

                                                    <svg class="flex-shrink-0 w-5 h-5 bg-green-500 text-white rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                    <span>Team size: <span class="font-semibold">1 developer</span></span>
                                                </li>
                                                <li class="flex items-center space-x-3">

                                                    <svg class="flex-shrink-0 w-5 h-5 bg-green-500 text-white rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                    <span>Premium support: <span class="font-semibold">6 months</span></span>
                                                </li>
                                                <li class="flex items-center space-x-3">

                                                    <svg class="flex-shrink-0 w-5 h-5 bg-green-500 text-white rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                    <span>Free updates: <span class="font-semibold">6 months</span></span>
                                                </li>
                                            </ul>
                                            <a href="#" class="inline-block px-4 py-3 font-bold border-2 rounded-full bg-blue-400 text-white uppercase">Monthly</a>
                                        </div>
                                    </div>
                                    <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                        <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white border-t-4 border-green-400 shadow xl:p-8">
                                            <h3 class="mb-4 text-2xl font-semibold">Basic Plan</h3>
                                            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Relevant for multiple users, extended & premium support.</p>
                                            <div class="flex justify-center items-baseline my-8">
                                                <span class="mr-2 text-5xl font-extrabold">$7</span>
                                                <span class="text-gray-500 dark:text-gray-400">/month</span>
                                            </div>

                                            <ul role="list" class="mb-8 space-y-4 text-left">
                                                <li class="flex items-center space-x-3">

                                                    <svg class="flex-shrink-0 w-5 h-5  text-white rounded-full bg-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                    <span>Individual configuration</span>
                                                </li>
                                                <li class="flex items-center space-x-3">

                                                    <svg class="flex-shrink-0 w-5 h-5 bg-green-500 text-white rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                    <span>No setup, or hidden fees</span>
                                                </li>
                                                <li class="flex items-center space-x-3">

                                                    <svg class="flex-shrink-0 w-5 h-5 bg-green-500 text-white rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                    <span>Team size: <span class="font-semibold">10 developers</span></span>
                                                </li>
                                                <li class="flex items-center space-x-3">

                                                    <svg class="flex-shrink-0 w-5 h-5 bg-green-500 text-white rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                    <span>Premium support: <span class="font-semibold">24 months</span></span>
                                                </li>
                                                <li class="flex items-center space-x-3">

                                                    <svg class="flex-shrink-0 w-5 h-5 bg-green-500 text-white rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                    <span>Free updates: <span class="font-semibold">24 months</span></span>
                                                </li>
                                            </ul>
                                            <a href="#" class="border border-transparent hover:border-blue-400 bg-blue-400 hover:bg-transparent focus:ring-4 rounded-full duration-300 focus:ring-primary-200 font-medium px-5 py-2.5 text-center hover:text-blue-400 text-white">Yearly</a>
                                        </div>
                                    </div>
                                    <div className={openTab === 3 ? "block" : "hidden"} id="link3">

                                        <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white border-t-4 border-yellow-400 shadow xl:p-8">
                                            <h3 class="mb-4 text-2xl font-semibold">Pro Plan</h3>
                                            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best for large scale uses and extended redistribution rights.</p>
                                            <div class="flex justify-center items-baseline my-8">
                                                <span class="mr-2 text-5xl font-extrabold">$15</span>
                                                <span class="text-gray-500 dark:text-gray-400">/month</span>
                                            </div>
                                            <ul role="list" class="mb-8 space-y-4 text-left">
                                                <li class="flex items-center space-x-3">
                                                    <svg class="flex-shrink-0 w-5 h-5 bg-green-500 text-white rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                    <span>Individual configuration</span>
                                                </li>
                                                <li class="flex items-center space-x-3">
                                                    <svg class="flex-shrink-0 w-5 h-5 bg-green-500 text-white rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                    <span>No setup, or hidden fees</span>
                                                </li>
                                                <li class="flex items-center space-x-3">
                                                    <svg class="flex-shrink-0 w-5 h-5 bg-green-500 text-white rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                    <span>Team size: <span class="font-semibold">100+ developers</span></span>
                                                </li>
                                                <li class="flex items-center space-x-3">
                                                    <svg class="flex-shrink-0 w-5 h-5 bg-green-500 text-white rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                    <span>Premium support: <span class="font-semibold">36 months</span></span>
                                                </li>
                                                <li class="flex items-center space-x-3">
                                                    <svg class="flex-shrink-0 w-5 h-5 bg-green-500 text-white rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                    <span>Free updates: <span class="font-semibold">36 months</span></span>
                                                </li>
                                            </ul>
                                            <a href="#" class="border border-blue-400 hover:bg-blue-400 focus:ring-4 rounded-full duration-300 focus:ring-primary-200 font-medium px-5 py-2.5 text-center text-blue-400 hover:text-white">Lifetime</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">




                </div>
            </div>
        </section>
    )
}
