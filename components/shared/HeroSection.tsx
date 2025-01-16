import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
    return ( <div id="root">
            <section id="hero" className="relative h-screen bg-neutral-900">
                <div className="absolute inset-0 opacity-20" id="el-khiozz63">
                    <div
                        className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#ffffff33_1px,transparent_0)] [background-size:40px_40px]"
                        id="el-y5skz761">
                        </div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center" id="el-zgq5r2tw">
                    <div className="w-full md:w-1/2 text-white pt-20" id="el-98pisim1">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate__animated animate__fadeInUp" id="el-98wymnkt">
                            <span className="text-amber-500" id="el-ae5jd9wy">Elegant Catering</span> for Your Special Moments
                        </h1>

                        <p className="text-lg md:text-xl mb-8 text-gray-300 animate__animated animate__fadeInUp animate__delay-1s"
                            id="el-amxtembg">
                            Creating unforgettable culinary experiences for weddings and special events with passion and excellence.
                        </p>

                        <div className="flex gap-4 animate__animated animate__fadeInUp animate__delay-2s" id="el-lz7pnw9o">
                            <a href="#contact"
                                className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-3 rounded-full transition-all transform hover:scale-105"
                                id="el-slq4lnsn">
                                Book Now
                            </a>
                            <a href="#services"
                                className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black font-semibold px-8 py-3 rounded-full transition-all transform hover:scale-105"
                                id="el-5pp3kmpz">
                                Our Services
                            </a>
                        </div>

                        <div className="mt-12 flex gap-6 animate__animated animate__fadeInUp animate__delay-3s" id="el-byzxqtvr">
                            <div className="bg-neutral-800/50 backdrop-blur-sm p-4 rounded-lg" id="el-ryy5fjmo">
                                <h3 className="text-amber-500 font-semibold" id="el-7eyxrovu">Premium Quality</h3>
                                <p className="text-sm text-gray-400" id="el-0d8dqb8d">Finest ingredients</p>
                            </div>
                            <div className="bg-neutral-800/50 backdrop-blur-sm p-4 rounded-lg" id="el-9dgrko99">
                                <h3 className="text-amber-500 font-semibold" id="el-mjfyvvmd">Expert Chefs</h3>
                                <p className="text-sm text-gray-400" id="el-tztq1zp9">Professional team</p>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block w-1/2 relative h-full" id="el-snkkfc8i">
                        <div className="relative w-full h-full" id="el-svxro7iq">
                            <div className="absolute -top-20 -left-20 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl animate-pulse"
                                id="el-dv13iwvb"></div>
                            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl animate-pulse"
                                id="el-0gdwabtb"></div>

                            <div className="absolute inset-0 animate__animated animate__fadeIn animate__delay-1s">
                                <Image
                                    src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                                    alt="Elegant Catering Presentation"
                                    width={800}
                                    height={200}
                                    className="w-full h-full object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"/>
                            </div>

                            <div
                                className="absolute top-10 -right-5 bg-white/10 backdrop-blur-lg p-4 rounded-xl animate__animated animate__fadeInRight animate__delay-2s">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"                                          
                                            >
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold">100% Satisfaction</p>
                                        <p className="text-gray-300 text-sm">Guaranteed Service</p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="absolute bottom-10 -left-5 bg-white/10 backdrop-blur-lg p-4 rounded-xl animate__animated animate__fadeInLeft animate__delay-3s">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          >
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold">Custom Menus</p>
                                        <p className="text-gray-300 text-sm">Tailored for You</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" id="el-wggzw7hv">
                    <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-fvazly3r"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            id="el-vaj14vr6"></path>
                    </svg>
                </div>
            </section>
        </div>
    )
}
export default HeroSection