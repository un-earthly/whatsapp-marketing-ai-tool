// components/Testimonials.js

import React from 'react';

export default function Testimonials({ data }) {
    return (
        <section id="testimonials" className="w-full bg-gray-50 sm:py-16 py-12 md:py-20 relative">
            <div className="max-w-7xl flex mx-auto px-10">
                <div className="flex flex-col mb-7 sm:mb-20 items-start md:items-start justify-center w-1/2">
                    <h2 className=" sm:text-base text-xs uppercase font-semibold text-[#003a46]">our customers love our product</h2>
                    <p className="text-gray-900 mt-2 text-2xl sm:text-4xl tracking-tight font-bold sm:font-extrabold md:text-5xl">TESTIMONIALS</p>
                    <div className="mt-1 md:mt-4 ">
                        {/* <svg className="w-8 h-8 sm:block hidden mr-1.5 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd"></path>
                        </svg> */}
                        <p className="">Don&apos;t just take our word for it. view our hundreds of case studies and  testimonials</p>
                        <button className="bg-[#003a46] py-3 px-10 my-10 rounded-full text-white">View Case Studies</button>
                    </div>
                </div>
                <div className="w-1/2 max-h-[400px] overflow-scroll scrollbar-hide">
                    {data.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function TestimonialCard({ imageSrc, title, subtitle, content }) {
    return (
        <div className="col-span-4 space-y-6">
            <div className="h-auto flex bg-white rounded-xl shadow-sm p-6 relative">
                <div>
                    <div className="flex items-center border-b relative border-gray-100 border-solid pb-5 mb-5">
                        <span className="absolute top-0 -left-5 text-indigo-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#003a46" class="bi bi-quote" viewBox="0 0 16 16">
                                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                            </svg>
                        </span>
                        <div className="relative p-3 py-1">
                            <blockquote className="text-gray-400 z-10 leading-7 relative pb-3">{title + " " + content.slice(0, 80)}...</blockquote>

                            <p className="font-medium text-gray-400 text-sm"><span className='font-semibold'>{subtitle.split("-")[0]}</span>{subtitle.split("-")[1]}</p>
                        </div>
                    </div>
                </div>
                <img src={imageSrc} className="rounded-full mr-3 w-16 h-16" alt={title} />
            </div>
        </div>
    );
}
