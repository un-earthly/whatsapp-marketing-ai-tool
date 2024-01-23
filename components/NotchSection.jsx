"use client"
import React, { useState } from 'react'
import FeatureSpan from './FeatureSpan';
import {motion} from "framer-motion"
export default function NotchSection() {
    const [openTab, setOpenTab] = React.useState(1);
    const [color] = useState("[#003a46]")
    return (
        <div>
            {/* tab */}
            <section class="bg-white">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                        {/* <p className='text-blue-400 uppercase text-sm mb-4 font-semibold'>OUR flexible prices</p> */}
                        <h2 class="mb-4 text-5xl tracking-tight font-semibold text-gray-900">Who is LancePilot for?
                        </h2>
                        <p class="mb-5 font-light text-base text-gray-500 mx-auto">Notch is covering the buying process from the first demo to the sales-handover, helping you to impress buyers, increase deal win rates, and onboard customers smooth than ever.

                        </p>
                    </div>



                    <div className="flex flex-wrap">
                        <div className="mx-auto">
                            <ul
                                className="flex mb-0  max-w-xl mx-auto list-none flex-wrap pt-3 pb-4 flex-row"
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
                                        <a href="#" class={`inline-block px-4 py-2 ${openTab === 1 ? 'bg-[#003a46] text-white' : 'border-[#003a46] text-[#003a46]'} border-2 rounded-full `} >Sales Manager</a>

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
                                        <a href="#" class={`inline-block px-4 py-2 ${openTab === 2 ? 'bg-[#003a46] text-white' : 'border-[#003a46] text-[#003a46]'} border-2 rounded-full `} >Head of sales</a>

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
                                        <a href="#" class={`inline-block px-4 py-2 border-2 rounded-full ${openTab === 3 ? 'bg-[#003a46] text-white' : 'border-[#003a46] text-[#003a46]'} `} >Account Executive</a>

                                    </a>
                                </li>
                            </ul>
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
                                <div className="px-4 py-5 flex-auto">
                                    <div className="tab-content tab-space">
                                        <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                            <div className='flex flex-row-reverse max-w-7xl mx-auto items-center justify-center'>
                                                <div className='w-2/4'>
                                                    <img src="/t1-who-is-notch-for.png" className='rounded-t-3xl' alt="" />
                                                </div>
                                                <div className='space-y-7 w-3/5'>

                                                    <h2 className="text-5xl font-semibold">Stand out from your competition
                                                    </h2>
                                                    <div className='space-y-3'>
                                                        <FeatureSpan item="Personalize your sales follow up to impress buyers" />
                                                        <FeatureSpan item="Speed up deal momentum with sales templates" />
                                                        <FeatureSpan item="Automate your customer data with Integrations" />
                                                    </div>
                                                    <div className='space-x-4'>
                                                        <a href="#" class={`inline-block px-7 py-3 border-2 text-sm rounded-full bg-[#003a46] text-white`} >Get 14 day Free Trial</a>
                                                        <a href="#" class={`inline-block px-7 py-3 border-2 text-sm rounded-full border-[#003a46] text-[#003a46] `} >Book a demo</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                            <div className='flex flex-row-reverse max-w-7xl mx-auto items-center justify-center'>
                                                <div className='w-2/4'>
                                                    <img src="/t2-who-is-notch-for.png" className='rounded-t-3xl' alt="" />
                                                </div>
                                                <div className='space-y-7 w-3/5'>

                                                    <h2 className="text-5xl font-semibold">Stand out from your competition
                                                    </h2>
                                                    <div className='space-y-3'>
                                                        <FeatureSpan item="Personalize your sales follow up to impress buyers" />
                                                        <FeatureSpan item="Speed up deal momentum with sales templates" />
                                                        <FeatureSpan item="Automate your customer data with Integrations" />
                                                    </div>
                                                    <div className='space-x-4'>
                                                        <a href="#" class={`inline-block px-7 py-3 border-2 text-sm rounded-full bg-[#003a46] text-white`} >Get 14 day Free Trial</a>
                                                        <a href="#" class={`inline-block px-7 py-3 border-2 text-sm rounded-full border-[#003a46] text-[#003a46] `} >Book a demo</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={openTab === 3 ? "block" : "hidden"} id="link3">

                                            <div className='flex flex-row-reverse max-w-7xl mx-auto items-center justify-center'>
                                                <div className='w-2/4'>
                                                    <img src="/t3-who-is-notch-for.png" className='rounded-t-3xl' alt="" />
                                                </div>
                                                <div className='space-y-7 w-3/5'>

                                                    <h2 className="text-5xl font-semibold">Stand out from your competition
                                                    </h2>
                                                    <div className='space-y-3'>
                                                        <FeatureSpan item="Personalize your sales follow up to impress buyers" />
                                                        <FeatureSpan item="Speed up deal momentum with sales templates" />
                                                        <FeatureSpan item="Automate your customer data with Integrations" />
                                                    </div>
                                                </div>
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
            {/* section 1 */}
            <div className="space-y-10 my-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    <div className='flex max-w-7xl mx-auto items-center justify-center'>
                        <div className='w-2/4'>
                            <img src="https://assets-global.website-files.com/6470b7a72717e3daa364db1d/6488df42c12ee5afb6469210_sales-room-img-p-800.webp" alt="" />
                        </div>
                        <div className='space-y-7 w-3/5'>

                            <h2 className="text-5xl font-semibold">Share a personalized deal room with buyers</h2>
                            <p>Say goodbye to sales friction and hello to effortless sales success. Impress buyers with a personalized sales room where all information and resources are in one shared place.</p>
                            <div className='space-y-3'>
                                <FeatureSpan item="Create fully customizable, branded spaces" />
                                <FeatureSpan item="Select from more than 20 interactive elements" />
                                <FeatureSpan item="Consolidate all your sales resources" />
                            </div>
                        </div>
                    </div>

                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    <div className='flex flex-row-reverse max-w-7xl mx-auto items-center justify-center'>
                        <div className='w-2/4'>
                            <img src="https://assets-global.website-files.com/6470b7a72717e3daa364db1d/6488df411124f2c31074d8a4_action-plan-img-p-800.webp" alt="" />
                        </div>
                        <div className='space-y-7 w-3/5'>

                            <h2 className="text-5xl font-semibold">Clearly state what to do next for deal success</h2>
                            <p>Leave spreadsheets and lost follow-up emails in the past. Notch helps you create structured and engaging action plans that ensure the right people complete the right tasks at the right time.</p>
                            <div className='space-y-3'>
                                <FeatureSpan item="Link spaces to action plans automatically" />
                                <FeatureSpan item="Create interactive tasks and milestones" />
                                <FeatureSpan item="Keep everyone updated with meeting notes" />
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >

                    <div className='flex max-w-7xl mx-auto items-center justify-center'>
                        <div className='w-2/4'>
                            <img src="https://assets-global.website-files.com/6470b7a72717e3daa364db1d/6488e1c06263cccfeb942050_analytics-img-p-800.webp" alt="" />
                        </div>
                        <div className='space-y-7 w-3/5'>

                            <h2 className="text-5xl font-semibold">Use analytics to find important deals
                            </h2>
                            <p>Gain unparalleled insights into prospect engagement and buyer behavior. Use real-time data to identify hot deals, track content effectiveness, and optimize your sales team performance.

                            </p>
                            <div className='space-y-3'>
                                <FeatureSpan item="Uncover hidden buying intent" />
                                <FeatureSpan item="Qualify and convert high-priority deals" />
                                <FeatureSpan item="Improve forecasting accuracy with engagement analytics" />
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    <div className='flex flex-row-reverse max-w-7xl mx-auto items-center justify-center'>
                        <div className='w-2/4'>
                            <img src="https://assets-global.website-files.com/6470b7a72717e3daa364db1d/6488df411d5bb36e429f8075_share-img-p-800.webp" alt="" />
                        </div>
                        <div className='space-y-7 w-3/5'>


                            <h2 className="text-5xl font-semibold">All in one link, not a dozen emails</h2>
                            <p>Notch is designed with both buyers and sellers in mind -  Share your workspace with a magic link without requiring your buyers to register.



                            </p>
                            <div className='space-y-3'>
                                <FeatureSpan item=" Collaborate directly in the workspace without sign-up" />
                                <FeatureSpan item="Foster relationships and maintain transparency" />
                                <FeatureSpan item="Get on the same page with the buyer-team" />
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    <div className='flex flex-row-reverse max-w-7xl mx-auto items-center justify-center'>
                        <div className='w-2/4'>
                            <img src="https://assets-global.website-files.com/6470b7a72717e3daa364db1d/649002039c5194ad73416fa3_hubspot-img%20(1)-p-800.webp" alt="" />
                        </div>
                        <div className='space-y-7 w-3/5'>

                            <h2 className="text-5xl font-semibold">Works with your CRM


                            </h2>
                            <p>Connect Notch with your CRM to save time and avoid switching between tools.</p>
                            <div className='space-y-3'>
                                <FeatureSpan item="Use buyer engagement insights to buyer better lead scoring models" />
                                <FeatureSpan item="View latest interactions in your HubSpot activity history" />
                                <FeatureSpan item="Get started from the template library" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>



        </div>
    )
}
