"use client"
import React, { useState } from 'react'

export default function CTA() {
    const [tab, setTab] = useState(1)
    return (
        <div class="max-w-6xl mx-auto">
            <div className="flex items-center justify-center flex-col space-y-10">
                <h2 className="text-5xl font-semibold w-2/3 text-center">Say goodbye to sales friction and hello to buyer success</h2>
                <p className='w-2/4 text-center'>Leave spreadsheets and lost follow-up emails in the past. Give buyers all relevant information in one interactive space</p>
                <div className='flex'>
                    <div className='flex flex-col items-start justify-start space-y-5'>
                        <div>
                            {tab === 1 ? <p id="" class="inline-flex cursor-pointer items-center text-sm justify-center w-80 h-14 rounded-full bg-[#003a46] text-white">Enhance your prospect follow-up

                            </p> : <button onClick={(e) => { e.preventDefault(); setTab(1) }} className='p-4'>Enhance your prospect follow-up</button>}
                            <div className={`${tab === 1 ? "flex" : "hidden"}`}>
                                <div className='p-4 w-4/5'>
                                    <p className='w-10/12 font-light'>Follow up on prospects with proposals that stand out from competition.</p>
                                    <a className=' inline-block capitalize underline py-4' href="">learn more</a>
                                </div>

                            </div>

                        </div>
                        <div>
                            {tab === 2 ? <a id="" class="inline-flex cursor-pointer items-center text-sm justify-center w-80 h-14 rounded-full bg-[#003a46] text-white">Smooth handover to customer success

                            </a> : <button onClick={(e) => { e.preventDefault(); setTab(2) }} className='p-4'>Smooth handover to customer success</button>}
                            <div className={`${tab === 2 ? "flex" : "hidden"}`}>
                                <div className='p-4 w-4/5'>
                                    <p className='w-10/12 font-light'>Follow up on prospects with proposals that stand out from competition.</p>
                                    <a className=' inline-block capitalize underline py-4' href="">learn more</a>
                                </div>

                            </div>

                        </div>
                        <div>

                            {tab === 3 ? <a id="" class="inline-flex cursor-pointer items-center text-sm justify-center w-80 h-14 rounded-full bg-[#003a46] text-white">Eliminate buyer onboarding headaches

                            </a> : <button className='p-4' onClick={(e) => { e.preventDefault(); setTab(3) }}>Eliminate buyer onboarding headaches</button>}
                            <div className={`${tab === 3 ? "flex h-full" : "hidden h-0"} duration-300`}>
                                <div className='p-4 w-4/5'>
                                    <p className='w-10/12 font-light'>Follow up on prospects with proposals that stand out from competition.</p>
                                    <a className=' inline-block capitalize underline py-4' href="">learn more</a>
                                </div>

                            </div>

                        </div>

                    </div>
                    <div>
                        {
                            tab === 1 ? <img src="https://assets-global.website-files.com/6470b7a72717e3daa364db1d/649453d592839ba6ed93d664_Screen%204-p-800.png" alt="" /> : tab === 2 ? <img src="https://assets-global.website-files.com/6470b7a72717e3daa364db1d/649453d5f18d8eab309a4d0d_Screen%205-p-800.png" alt="" /> : <img src="https://assets-global.website-files.com/6470b7a72717e3daa364db1d/649451353a3f35ab5ffbc1dd_Screen%206-p-800.png" />
                        }
                    </div>
                </div>
            </div>
            <div class="py-10 rounded-xl mt-10  text-white bg-[#003a46] ">
                <div class="my-10">
                    <div class="space-y-6">
                        <div class="w-6/12 mx-auto">
                            <p class="font-regular text-center">
                                Start your free trial and see results today.
                            </p>
                            <h2 class="font-semibold md:text-3xl text-center">
                                Ready to take control of your sales?</h2>
                        </div>
                        {/* <div class="relative w-3/6 mb-4 mx-auto">
                            <input type="email" id="email" name="email" class="w-full bg-white rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-5 leading-8 transition-colors duration-200 ease-in-out " placeholder='Enter Email' />
                        </div> */}
                        <div id="" class="flex items-center justify-center">
                            <a id="" href="#" class="inline-flex items-center text-sm justify-center w-48 h-10 rounded-full bg-white text-[#003a46]">Book A Call
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
