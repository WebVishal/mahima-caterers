import React from 'react'
import TestimonialsAndTeam from './Testimonials'

const Services = () => {
    return (
        <div>
            <div id="root">
                <section id="services" className="py-20 bg-neutral-100">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <span className="text-amber-500 font-semibold">Our Services</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2 animate__animated animate__fadeInUp">
                                Comprehensive Catering Solutions
                            </h2>
                            <div className="h-1 w-20 bg-amber-500 mx-auto mt-4"></div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div
                                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp">
                                <div className="bg-amber-500 h-2"></div>
                                <div className="p-6">
                                    <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z">
                                            </path>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Wedding Catering</h3>
                                    <p className="text-neutral-600 mb-4">Complete wedding catering solutions with customized menus and
                                        professional service.</p>
                                    <ul className="space-y-2 text-neutral-600">
                                        <li className="flex items-center">
                                            <svg className="w-4 h-4 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            Multi-cuisine options
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-4 h-4 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            Live cooking stations
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-4 h-4 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            Professional staff
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div
                                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp animate__delay-1s">
                                <div className="bg-amber-500 h-2"></div>
                                <div className="p-6">
                                    <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z">
                                            </path>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Corporate Events</h3>
                                    <p className="text-neutral-600 mb-4">Professional catering services for corporate meetings, conferences, and
                                        events.</p>
                                    <ul className="space-y-2 text-neutral-600">
                                        <li className="flex items-center">
                                            <svg className="w-4 h-4 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            Breakfast & lunch packages
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-4 h-4 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            Coffee break services
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-4 h-4 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            Customized menus
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div
                                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp animate__delay-2s">
                                <div className="bg-amber-500 h-2"></div>
                                <div className="p-6">
                                    <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7">
                                            </path>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Special Events</h3>
                                    <p className="text-neutral-600 mb-4">Catering services for birthdays, anniversaries, and special occasions.
                                    </p>
                                    <ul className="space-y-2 text-neutral-600">
                                        <li className="flex items-center">
                                            <svg className="w-4 h-4 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            Theme-based menus
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-4 h-4 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            Decorative food display
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-4 h-4 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            Personalized service
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-12">
                            <a href="#contact"
                                className="inline-block bg-amber-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-600 transition-colors animate__animated animate__fadeInUp">
                                Get a Free Quote
                            </a>
                        </div>
                    </div>
                </section>
            </div>
            {/* Wedding Planning */}
            <div id="root">
                <section id="wedding" className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <span className="text-amber-500 font-semibold">Wedding Planning</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2 animate__animated animate__fadeInUp">
                                Your Dream Wedding, Our Expertise
                            </h2>
                            <div className="h-1 w-20 bg-amber-500 mx-auto mt-4"></div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div
                                className="bg-neutral-50 rounded-xl p-6 hover:shadow-lg transition-shadow animate__animated animate__fadeInUp">
                                <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2">
                                        </path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Customized Planning</h3>
                                <p className="text-neutral-600">Personalized wedding planning services tailored to your vision and
                                    preferences.</p>
                            </div>

                            <div
                                className="bg-neutral-50 rounded-xl p-6 hover:shadow-lg transition-shadow animate__animated animate__fadeInUp animate__delay-1s">
                                <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                                        </path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Budget Management</h3>
                                <p className="text-neutral-600">Efficient budget planning and allocation for your wedding expenses.</p>
                            </div>

                            <div
                                className="bg-neutral-50 rounded-xl p-6 hover:shadow-lg transition-shadow animate__animated animate__fadeInUp animate__delay-2s">
                                <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                                        </path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Vendor Coordination</h3>
                                <p className="text-neutral-600">Seamless coordination with all wedding vendors and service providers.</p>
                            </div>
                        </div>

                        <div className="mt-20">
                            <h3 className="text-2xl font-bold text-center mb-10">Our Wedding Packages</h3>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div
                                    className="border border-amber-200 rounded-xl p-8 hover:border-amber-500 transition-colors animate__animated animate__fadeInUp">
                                    <h4 className="text-xl font-semibold text-amber-500 mb-4">Silver Package</h4>
                                    <ul className="space-y-3 mb-6">
                                        <li className="flex items-center">
                                            <svg className="w-5 h-5 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            Basic Menu Selection
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-5 h-5 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            Service Staff
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-5 h-5 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            Basic Decoration
                                        </li>
                                    </ul>
                                    <button
                                        className="w-full bg-amber-500 text-white py-2 rounded-full hover:bg-amber-600 transition-colors">Get
                                        Quote</button>
                                </div>

                                <div
                                    className="border-2 border-amber-500 rounded-xl p-8 relative bg-white shadow-lg animate__animated animate__fadeInUp animate__delay-1s">
                                    <div className="absolute top-0 right-4 bg-amber-500 text-white px-4 py-1 text-sm rounded-b-lg">Popular</div>
                                    <h4 className="text-xl font-semibold text-amber-500 mb-4">Gold Package</h4>
                                    <ul className="space-y-3 mb-6">
                                        <li className="flex items-center">
                                            <svg className="w-5 h-5 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            Premium Menu Selection
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-5 h-5 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            Professional Staff
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-5 h-5 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            Themed Decoration
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-5 h-5 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            Live Counters
                                        </li>
                                    </ul>
                                    <button
                                        className="w-full bg-amber-500 text-white py-2 rounded-full hover:bg-amber-600 transition-colors">Get
                                        Quote</button>
                                </div>

                                <div
                                    className="border border-amber-200 rounded-xl p-8 hover:border-amber-500 transition-colors animate__animated animate__fadeInUp animate__delay-2s">
                                    <h4 className="text-xl font-semibold text-amber-500 mb-4">Platinum Package</h4>
                                    <ul className="space-y-3 mb-6">
                                        <li className="flex items-center">
                                            <svg className="w-5 h-5 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            Luxury Menu Selection
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-5 h-5 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            Elite Service Team
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-5 h-5 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            Premium Decoration
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-5 h-5 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            International Cuisine
                                        </li>
                                    </ul>
                                    <button
                                        className="w-full bg-amber-500 text-white py-2 rounded-full hover:bg-amber-600 transition-colors">Get
                                        Quote</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* Decorations */}
            <div>
                <div id="root">
                    <section id="decorations" className="py-20 bg-neutral-100">
                        <div className="max-w-7xl mx-auto px-4">
                            <div className="text-center mb-16">
                                <span className="text-amber-500 font-semibold">Event Decorations</span>
                                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2 animate__animated animate__fadeInUp">
                                    Transform Your Venue
                                </h2>
                                <div className="h-1 w-20 bg-amber-500 mx-auto mt-4"></div>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div
                                    className="group bg-white rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300 animate__animated animate__fadeInUp">
                                    <div className="aspect-w-16 aspect-h-9 bg-amber-100">
                                        <div className="p-8 flex items-center justify-center">
                                            <svg className="w-20 h-20 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-2">Traditional Decor</h3>
                                        <p className="text-neutral-600">classNameic and elegant decorations perfect for traditional weddings and events.
                                        </p>
                                        <ul className="mt-4 space-y-2">
                                            <li className="flex items-center text-sm">
                                                <svg className="w-4 h-4 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                Floral arrangements
                                            </li>
                                            <li className="flex items-center text-sm">
                                                <svg className="w-4 h-4 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                Traditional motifs
                                            </li>
                                            <li className="flex items-center text-sm">
                                                <svg className="w-4 h-4 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                Elegant draping
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div
                                    className="group bg-white rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300 animate__animated animate__fadeInUp animate__delay-1s">
                                    <div className="aspect-w-16 aspect-h-9 bg-amber-100">
                                        <div className="p-8 flex items-center justify-center">
                                            <svg className="w-20 h-20 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-2">Modern Contemporary</h3>
                                        <p className="text-neutral-600">Sleek and minimalist designs for modern celebrations.</p>
                                        <ul className="mt-4 space-y-2">
                                            <li className="flex items-center text-sm">
                                                <svg className="w-4 h-4 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                Geometric patterns
                                            </li>
                                            <li className="flex items-center text-sm">
                                                <svg className="w-4 h-4 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                LED lighting
                                            </li>
                                            <li className="flex items-center text-sm">
                                                <svg className="w-4 h-4 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                Minimalist decor
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div
                                    className="group bg-white rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300 animate__animated animate__fadeInUp animate__delay-2s">
                                    <div className="aspect-w-16 aspect-h-9 bg-amber-100">
                                        <div className="p-8 flex items-center justify-center">
                                            <svg className="w-20 h-20 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-2">Theme Based</h3>
                                        <p className="text-neutral-600">Custom themed decorations to match your event concept.</p>
                                        <ul className="mt-4 space-y-2">
                                            <li className="flex items-center text-sm">
                                                <svg className="w-4 h-4 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                Custom themes
                                            </li>
                                            <li className="flex items-center text-sm">
                                                <svg className="w-4 h-4 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                Props & backdrops
                                            </li>
                                            <li className="flex items-center text-sm">
                                                <svg className="w-4 h-4 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                Themed lighting
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-20">
                                <h3 className="text-2xl font-bold text-center mb-12">Our Decoration Process</h3>
                                <div className="grid md:grid-cols-4 gap-8">
                                    <div className="text-center animate__animated animate__fadeInUp">
                                        <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <span className="text-white text-xl font-bold">1</span>
                                        </div>
                                        <h4 className="font-semibold mb-2">Consultation</h4>
                                        <p className="text-sm text-neutral-600">Initial meeting to discuss your vision and requirements</p>
                                    </div>

                                    <div className="text-center animate__animated animate__fadeInUp animate__delay-1s">
                                        <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <span className="text-white text-xl font-bold">2</span>
                                        </div>
                                        <h4 className="font-semibold mb-2">Design</h4>
                                        <p className="text-sm text-neutral-600">Creating custom decoration concepts and themes</p>
                                    </div>

                                    <div className="text-center animate__animated animate__fadeInUp animate__delay-2s">
                                        <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <span className="text-white text-xl font-bold">3</span>
                                        </div>
                                        <h4 className="font-semibold mb-2">Planning</h4>
                                        <p className="text-sm text-neutral-600">Detailed execution planning and coordination</p>
                                    </div>

                                    <div className="text-center animate__animated animate__fadeInUp animate__delay-3s">
                                        <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <span className="text-white text-xl font-bold">4</span>
                                        </div>
                                        <h4 className="font-semibold mb-2">Setup</h4>
                                        <p className="text-sm text-neutral-600">Professional installation and arrangement</p>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center mt-16">
                                <a href="#contact"
                                    className="inline-block bg-amber-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-600 transition-colors">
                                    Discuss Your Decoration Needs
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            {/* ddd */}
            <div>
                <TestimonialsAndTeam/>
            </div>
        </div>
    )
}

export default Services