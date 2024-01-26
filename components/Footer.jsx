import React from 'react'

export default function Footer() {
    return (
        <footer class="text-gray-400 max-w-7xl mx-auto body-font">
            <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div class="w-72 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a class="flex title-font font-bold items-center justify-start text-gray-900">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg> */}
                        <span class="font-bold text-3xl">LancePilot</span>
                    </a>
                    <p class="mt-2 text-sm text-gray-500 font-medium">Leave spreadsheets and lost buyer follow-up emails in the past. LancePilot helps you create structured and engaging sales process that ensures your buyer completes the right tasks at the right time.</p>
                    <a id="" href="#" class="inline-flex items-center text-sm justify-center w-40 h-10 mt-5 rounded-full bg-[#003a46] text-white">Book A Demo
                    </a>
                    <div className="mt-6">
                        <img className=' border border-[#003a46] p-2 rounded-full' src="https://assets-global.website-files.com/6470b7a72717e3daa364db1d/6470b7a72717e3daa364db49_Linkedin-icon.svg" alt="" />
                    </div>
                </div>
                <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-semibold text-gray-900 mb-3">Product</h2>
                        <nav class="list-none space-y-4 mb-10">
                            <li>
                                <a class="text-gray-400 text-sm hover:text-gray-800">Spaces</a>
                            </li>
                            <li>
                                <a class="text-gray-400 text-sm hover:text-gray-800">Action Plans</a>
                            </li>
                            <li>
                                <a class="text-gray-400 text-sm hover:text-gray-800">Intregations</a>
                            </li>
                            <li>
                                <a class="text-gray-400 text-sm hover:text-gray-800">Pricing</a>
                            </li>
                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-semibold text-gray-900 mb-3">Company</h2>
                        <nav class="list-none mb-10 space-y-4 ">
                            <li>
                                <a class="text-gray-400 text-sm hover:text-gray-800">Sign in</a>
                            </li>
                            <li>
                                <a class="text-gray-400 text-sm hover:text-gray-800">Jobs</a>
                            </li>
                            <li>
                                <a class="text-gray-400 text-sm hover:text-gray-800">About</a>
                            </li>
                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-semibold text-gray-900 mb-3">Templates</h2>
                        <nav class="list-none mb-10 space-y-4 ">
                            <li>
                                <a class="text-gray-400 text-sm hover:text-gray-800">Sales Proposal</a>
                            </li>
                            <li>
                                <a class="text-gray-400 text-sm hover:text-gray-800">Sales Room</a>
                            </li>
                            <li>
                                <a class="text-gray-400 text-sm hover:text-gray-800">Customer Onboarding</a>
                            </li>
                            <li>
                                <a class="text-gray-400 text-sm hover:text-gray-800">Action Plan</a>
                            </li>
                            <li>
                                <a class="text-gray-400 text-sm hover:text-gray-800">Success Plan</a>
                            </li>
                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-semibold text-gray-900 mb-3">Comparison</h2>
                        <nav class="list-none mb-10 space-y-4 ">
                            <li>
                                <a class="text-gray-400 text-sm hover:text-gray-800">Get Accept</a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="bg-gray-100">
                <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p class="text-gray-500 text-sm text-center sm:text-left">© LancePilot
                    </p>
                    <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a class="text-gray-500">
                            Data Policy
                        </a>
                        <a class="ml-3 text-gray-500">
                            Terms
                        </a>
                        <a class="ml-3 text-gray-500">
                            Imprint
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    )
}
