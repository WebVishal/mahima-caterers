import React from 'react'

const Contact = () => {

    // document.getElementById('contactForm').addEventListener('submit', function (e) {
    //     e.preventDefault();
    //     // Add your form submission logic here
    //     alert('Thank you for your message. We will get back to you soon!');
    //     this.reset();
    // });

    return (
        <div>

            <div id="root">
                <section id="contact" className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4" id="el-y3keu73j">
                        <div className="text-center mb-16" id="el-lpwq77fq">
                            <span className="text-amber-500 font-semibold" id="el-pzyzhzrx">Contact Us</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2 animate__animated animate__fadeInUp"
                                id="el-4yksu0gh">
                                Get In Touch
                            </h2>
                            <div className="h-1 w-20 bg-amber-500 mx-auto mt-4" id="el-o6fckbsq"></div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12" id="el-4t7kx4hn">
                            <div className="space-y-8" id="el-nqzvzyzu">
                                <div className="animate__animated animate__fadeInLeft" id="el-csf0yuay">
                                    <h3 className="text-2xl font-semibold mb-4" id="el-91yv0lkl">Let's Plan Your Event</h3>
                                    <p className="text-neutral-600 mb-6" id="el-zq6ru3wb">
                                        We'd love to hear from you. Reach out to us for any queries about our services.
                                    </p>
                                </div>

                                <div className="space-y-6" id="el-d56e18le">
                                    <div className="flex items-start space-x-4 animate__animated animate__fadeInLeft" id="el-m4geumlw">
                                        <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0"
                                            id="el-kyqow60t">
                                            <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                id="el-2civkk7r">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                    id="el-ahyimuuc"></path>
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" id="el-r7mrvme3"></path>
                                            </svg>
                                        </div>
                                        <div id="el-xoc16jk6">
                                            <h4 className="font-semibold mb-1" id="el-hcx6bysg">Address</h4>
                                            <p className="text-neutral-600" id="el-zjmpjyr8">Shop No B57, Ambedkar Nagar, Imli Phatak, Tonk Phatak, Jaipur, Rajasthan 302015</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4 animate__animated animate__fadeInLeft" id="el-13j937zx">
                                        <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0"
                                            id="el-hu3cgx8h">
                                            <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                id="el-d8lup82w">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                    id="el-h1rw8q1w"></path>
                                            </svg>
                                        </div>
                                        <div id="el-67hbh6qc">
                                            <h4 className="font-semibold mb-1" id="el-y0lz6d4t">Phone</h4>
                                            <p className="text-neutral-600" id="el-s5ffdh7s">+91+919785267056</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4 animate__animated animate__fadeInLeft" id="el-gerg70ip">
                                        <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0"
                                            id="el-2wa7yrzp">
                                            <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                id="el-063u79xq">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                    id="el-qbqg2euf"></path>
                                            </svg>
                                        </div>
                                        <div id="el-ewkdvo67">
                                            <h4 className="font-semibold mb-1" id="el-dul8qore">Email</h4>
                                            <p className="text-neutral-600" id="el-td7xjg96">info@mahimacaterers.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-neutral-50 p-8 rounded-xl animate__animated animate__fadeInRight" id="el-77iw98ae">
                                <form id="contactForm" className="space-y-6">
                                    <div id="el-3qz43bbo">
                                        <label className="block text-sm font-medium text-neutral-700 mb-1" id="el-r0jn6hrt">Name</label>
                                        <input type="text"
                                            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                            required id="el-gdt4fvcp" />
                                    </div>

                                    <div id="el-gcg2to5h">
                                        <label className="block text-sm font-medium text-neutral-700 mb-1" id="el-uei58ix5">Email</label>
                                        <input type="email"
                                            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                            required id="el-o0cv26um" />
                                    </div>

                                    <div id="el-cvi5ckj5">
                                        <label className="block text-sm font-medium text-neutral-700 mb-1" id="el-i6nympxd">Phone</label>
                                        <input type="tel"
                                            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                            required id="el-tdzh3ffh" />
                                    </div>

                                    <div id="el-tmr77ja4">
                                        <label className="block text-sm font-medium text-neutral-700 mb-1" id="el-f75f9sdz">Event Type</label>
                                        <select
                                            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                            required id="el-7k8gucc5">
                                            <option value="" id="el-fua487zm">Select Event Type</option>
                                            <option value="wedding" id="el-bg2l5i1d">Wedding</option>
                                            <option value="corporate" id="el-650mvj6a">Corporate Event</option>
                                            <option value="birthday" id="el-0n8qo8p7">Birthday Party</option>
                                            <option value="other" id="el-qa878ton">Other</option>
                                        </select>
                                    </div>

                                    <div id="el-zzz67tzm" className="">
                                        <label className="block text-sm font-medium text-neutral-700 mb-1" id="el-5chtgaqb">Message</label>
                                        <textarea rows={4}
                                            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                            required id="el-d0zkmy60"></textarea>
                                    </div>

                                    <button type="submit"
                                        className="w-full bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors"
                                        id="el-taqzagw4">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Contact