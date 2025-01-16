import React from 'react'
import Services from './Services'

const AboutUs = () => {
    return (
        <div>
            {/* Our Story */}
            <div id="root">
                <section id="about" className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-block">
                                    <span className="text-amber-500 font-semibold">About Us</span>
                                    <div className="h-1 w-20 bg-amber-500 mt-1"></div>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 animate__animated animate__fadeInUp">
                                    Crafting Culinary Excellence Since 2000
                                </h2>

                                <p className="text-neutral-600 leading-relaxed animate__animated animate__fadeInUp">
                                    At Mahima Caterers, we bring over 20 years of expertise in creating memorable dining experiences. Our
                                    passion for food and dedication to quality has made us one of the most trusted catering services for
                                    weddings and special events.
                                </p>

                                <div className="grid grid-cols-3 gap-4 py-6 animate__animated animate__fadeInUp">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-amber-500">20+</div>
                                        <div className="text-sm text-neutral-600">Years Experience</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-amber-500">1000+</div>
                                        <div className="text-sm text-neutral-600">Events Served</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-amber-500">50+</div>
                                        <div className="text-sm text-neutral-600">Team Members</div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3 animate__animated animate__fadeInUp">
                                        <div className="bg-amber-500 rounded-full p-1">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="text-neutral-700">Professional Chef Team</span>
                                    </div>
                                    <div className="flex items-center space-x-3 animate__animated animate__fadeInUp">
                                        <div className="bg-amber-500 rounded-full p-1">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="text-neutral-700">Customized Menu Options</span>
                                    </div>
                                    <div className="flex items-center space-x-3 animate__animated animate__fadeInUp">
                                        <div className="bg-amber-500 rounded-full p-1">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="text-neutral-700">Quality Ingredients</span>
                                    </div>
                                </div>
                            </div>

                            <div className="relative animate__animated animate__fadeInRight">
                                <div className="bg-amber-500/10 rounded-lg p-8">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-4">
                                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                                <svg className="w-8 h-8 text-amber-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z">
                                                    </path>
                                                </svg>
                                                <h3 className="font-semibold">Wedding Specialists</h3>
                                            </div>
                                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                                <svg className="w-8 h-8 text-amber-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4">
                                                    </path>
                                                </svg>
                                                <h3 className="font-semibold">Custom Menus</h3>
                                            </div>
                                        </div>
                                        <div className="space-y-4 mt-8">
                                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                                <svg className="w-8 h-8 text-amber-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z">
                                                    </path>
                                                </svg>
                                                <h3 className="font-semibold">Premium Service</h3>
                                            </div>
                                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                                <svg className="w-8 h-8 text-amber-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01">
                                                    </path>
                                                </svg>
                                                <h3 className="font-semibold">Event Planning</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* Our Services */}
            <div className='our-services'>
                <Services />
            </div>
        </div>
    )
}
export default AboutUs