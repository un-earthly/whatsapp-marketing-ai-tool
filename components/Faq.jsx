'use client'
import React, { useState } from 'react';

export default function Faq() {
    const [showAnswers, setShowAnswers] = useState(Array(4).fill(false));

    const toggleAnswer = (index) => {
        const newShowAnswers = [...showAnswers];
        newShowAnswers[index] = !newShowAnswers[index];
        setShowAnswers(newShowAnswers);
    };
    const answers = [
        "Yes, you can! We believe in flexibility, and there are no long-term commitments. You can cancel your subscription at any time with no hidden fees or penalties.",
        "Creating a marketing campaign is easy with our platform. We provide a user-friendly interface that allows you to design, target, and launch campaigns effortlessly. If you need assistance, our support team is always here to help.",
        "Absolutely. We take data security seriously. Our platform employs robust encryption protocols and follows industry best practices to ensure your data remains safe and confidential.",
        "Yes, our platform is designed to be compatible with various third-party tools and services. We offer integrations that make it easy to connect with your existing marketing stack for a seamless experience.",

    ]
    return (
        <section id="faq" className="py-16 bg-white md:py-20 lg:py-24">
            <div className="max-w-6xl px-12 mx-auto xl:px-0">
                <h2 class="text-3xl font-black md:text-4xl lg:text-6xl xl:text-7xl">Frequently Asked Questions</h2>
                <p className="mt-4 text-xl font-[300] text-gray-700 lg:text-2xl">Here are some of the most common frequently asked questions</p>

                <div className="relative mt-12 space-y-3">
                    {[
                        'Can I cancel anytime?',
                        'How do I create a marketing campaign?',
                        'Is my data secure?',
                        'Can I integrate this with my existing tools?',
                    ].map((question, index) => (
                        <div key={index} className="relative overflow-hidden border-b border-gray-100 select-none">
                            <h4
                                onClick={() => toggleAnswer(index)}
                                className="flex items-center justify-between px-2 text-lg font-medium text-gray-700 cursor-pointer sm:text-xl md:text-2xl py-7 hover:text-gray-900"
                            >
                                <span>{question}</span>
                                <svg
                                    className={`w-6 h-6 mr-2 transition-all duration-200 ease-out transform rotate-${showAnswers[index] ? '-180' : '0'
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </h4>
                            <p
                                className="px-2 pt-0 -mt-2 text-gray-400 sm:text-lg py-7"
                                style={{
                                    display: showAnswers[index] ? 'block' : 'none',
                                }}
                            >
                                {answers[index]}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
