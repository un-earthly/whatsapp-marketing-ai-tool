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



                <div className="flex">

                    <div className="relative flex items-center justify-between gap-5 min-w-0 break-words bg-white w-full mb-6 rounded">


                        <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white border-t-4 border-blue-400 shadow xl:p-8">
                            <h3 class="mb-4 text-2xl font-semibold">Starter Plan</h3>
                            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Relevant for multiple users, extended & premium support.</p>
                            <div class="flex justify-center items-baseline my-8">
                                <span class="mr-2 text-5xl font-extrabold">Free</span>
                                <span class="text-gray-500 dark:text-gray-400">/month</span>
                            </div>

                            <ul role="list" class="mb-8 space-y-4 text-left">
                                <li class="flex items-center space-x-3">

                                    <svg class="flex-shrink-0 w-5 h-5  text-white rounded-full bg-[#003a46]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Individual configuration</span>
                                </li>
                                <li class="flex items-center space-x-3">

                                    <svg class="flex-shrink-0 w-5 h-5 bg-[#003a46] text-white rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>No setup, or hidden fees</span>
                                </li>
                                <li class="flex items-center space-x-3">

                                    <svg class="flex-shrink-0 w-5 h-5 bg-[#003a46] text-white rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Team size: <span class="font-semibold">10 developers</span></span>
                                </li>
                                <li class="flex items-center space-x-3">

                                    <svg class="flex-shrink-0 w-5 h-5 bg-[#003a46] text-white rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Premium support: <span class="font-semibold">24 months</span></span>
                                </li>
                                <li class="flex items-center space-x-3">

                                    <svg class="flex-shrink-0 w-5 h-5 bg-[#003a46] text-white rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Free updates: <span class="font-semibold">24 months</span></span>
                                </li>
                            </ul>
                            <a href="#" class="border border-transparent hover:border-[#003a46] bg-blue-400 hover:bg-transparent focus:ring-4 rounded-full duration-300 focus:ring-primary-200 font-medium px-5 py-2.5 text-center hover:text-[#003a46] text-white">MONTHLY</a>

                        </div>
                        <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white border-t-4 border-green-400 shadow xl:p-8">
                            <h3 class="mb-4 text-2xl font-semibold">Basic Plan</h3>
                            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Relevant for multiple users, extended & premium support.</p>
                            <div class="flex justify-center items-baseline my-8">
                                <span class="mr-2 text-5xl font-extrabold">$7</span>
                                <span class="text-gray-500 dark:text-gray-400">/month</span>
                            </div>

                            <ul role="list" class="mb-8 space-y-4 text-left">
                                <li class="flex items-center space-x-3">

                                    <svg class="flex-shrink-0 w-5 h-5  text-white rounded-full bg-[#003a46]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Individual configuration</span>
                                </li>
                                <li class="flex items-center space-x-3">

                                    <svg class="flex-shrink-0 w-5 h-5 bg-[#003a46] text-white rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>No setup, or hidden fees</span>
                                </li>
                                <li class="flex items-center space-x-3">

                                    <svg class="flex-shrink-0 w-5 h-5 bg-[#003a46] text-white rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Team size: <span class="font-semibold">10 developers</span></span>
                                </li>
                                <li class="flex items-center space-x-3">

                                    <svg class="flex-shrink-0 w-5 h-5 bg-[#003a46] text-white rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Premium support: <span class="font-semibold">24 months</span></span>
                                </li>
                                <li class="flex items-center space-x-3">

                                    <svg class="flex-shrink-0 w-5 h-5 bg-[#003a46] text-white rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Free updates: <span class="font-semibold">24 months</span></span>
                                </li>
                            </ul>
                            <a href="#" class="border border-transparent hover:border-[#003a46] bg-blue-400 hover:bg-transparent focus:ring-4 rounded-full duration-300 focus:ring-primary-200 font-medium px-5 py-2.5 text-center hover:text-[#003a46] text-white uppercase">Yearly</a>
                        </div>
                        <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white border-t-4 border-yellow-400 shadow xl:p-8">
                            <h3 class="mb-4 text-2xl font-semibold">Pro Plan</h3>
                            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best for large scale uses and extended redistribution rights.</p>
                            <div class="flex justify-center items-baseline my-8">
                                <span class="mr-2 text-5xl font-extrabold">$15</span>
                                <span class="text-gray-500 dark:text-gray-400">/month</span>
                            </div>
                            <ul role="list" class="mb-8 space-y-4 text-left">
                                <li class="flex items-center space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 bg-[#003a46] text-white rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Individual configuration</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 bg-[#003a46] text-white rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>No setup, or hidden fees</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 bg-[#003a46] text-white rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Team size: <span class="font-semibold">100+ developers</span></span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 bg-[#003a46] text-white rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Premium support: <span class="font-semibold">36 months</span></span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 bg-[#003a46] text-white rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Free updates: <span class="font-semibold">36 months</span></span>
                                </li>
                            </ul>
                            <a href="#" class="border border-transparent hover:border-[#003a46] bg-blue-400 hover:bg-transparent focus:ring-4 rounded-full duration-300 focus:ring-primary-200 font-medium px-5 py-2.5 uppercase text-center hover:text-[#003a46] text-white">Lifetime</a>
                        </div>
                    </div>

                </div>
            </div>

        </section >
    )
}
