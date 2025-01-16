import React from 'react'

const Header = () => {
    return (
        <div id="root">
            <section id="navbar" className="fixed w-full z-50 bg-neutral-900/90 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center py-4">
                        <div className="text-2xl font-bold text-amber-500">
                            Mahima Caterers
                        </div>
                        <nav className="hidden md:flex space-x-8 text-white">
                            <a href="#hero" className="hover:text-amber-500 transition-colors">Home</a>
                            <a href="#about" className="hover:text-amber-500 transition-colors">About</a>
                            <a href="#services" className="hover:text-amber-500 transition-colors">Services</a>
                            <a href="#wedding" className="hover:text-amber-500 transition-colors">Wedding</a>
                            <a href="#decorations" className="hover:text-amber-500 transition-colors">Decorations</a>
                            <a href="#gallery" className="hover:text-amber-500 transition-colors">Gallery</a>
                            <a href="#testimonials" className="hover:text-amber-500 transition-colors">Testimonials</a>
                            <a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a>
                        </nav>
                        <button className="md:hidden text-white" id="mobile-menu-button">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                                </path>
                            </svg>
                        </button>
                    </div>

                    <div className="md:hidden hidden" id="mobile-menu">
                        <div className="flex flex-col space-y-4 py-4 text-white">
                            <a href="#hero" className="hover:text-amber-500 transition-colors">Home</a>
                            <a href="#about" className="hover:text-amber-500 transition-colors">About</a>
                            <a href="#services" className="hover:text-amber-500 transition-colors">Services</a>
                            <a href="#wedding" className="hover:text-amber-500 transition-colors">Wedding</a>
                            <a href="#decorations" className="hover:text-amber-500 transition-colors">Decorations</a>
                            <a href="#gallery" className="hover:text-amber-500 transition-colors">Gallery</a>
                            <a href="#testimonials" className="hover:text-amber-500 transition-colors">Testimonials</a>
                            <a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Header