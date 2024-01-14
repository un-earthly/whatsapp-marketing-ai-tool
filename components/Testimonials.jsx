// components/Testimonials.js

import React from 'react';

export default function Testimonials({ data }) {
    return (
        <section id="testimonials" className="w-full bg-gray-50 sm:py-16 py-12 md:py-20 relative">
            <div className="max-w-7xl mx-auto px-10">
                <div className="flex flex-col mb-7 sm:mb-20 items-start md:items-center justify-center">
                    <p className="sm:tracking-widest sm:text-base text-sm uppercase font-medium text-gray-500">What people are saying about us</p>
                    <h2 className="text-gray-900 mt-2 text-2xl sm:text-4xl tracking-tight font-bold sm:font-extrabold md:text-5xl dark:text-white">Don&apos;t just take our word for it.</h2>
                    <div className="mt-1 md:mt-4 items-center flex text-blue-600">
                        <svg className="w-8 h-8 sm:block hidden mr-1.5 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd"></path>
                        </svg>
                        <p className="text-xl md:text-4xl tracking-tight sm:font-bold sm:text-3xl">view our hundreds of testimonials</p>
                    </div>
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-6 w-full">
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
            <div className="h-auto bg-white rounded-xl shadow-sm p-6 relative">
                <div className="flex items-center border-b relative border-gray-100 border-solid pb-5 mb-5">
                    <img src={imageSrc} className="rounded-full mr-3 w-12 h-12" alt={title} />
                    <div className="relative">
                        <p className="font-semibold text-gray-600 leading-none my-1">{title}</p>
                        <p className="font-medium text-gray-400 text-sm">{subtitle}</p>
                    </div>
                </div>
                <blockquote className="text-gray-400 z-10 leading-7 relative pb-3">{content}</blockquote>
                <svg className="h-auto absolute z-0 top-0 right-0 w-12 opacity-30 mt-6 mr-7 text-gray-200" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
                </svg>
            </div>
        </div>
    );
}
