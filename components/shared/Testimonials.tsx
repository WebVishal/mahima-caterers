import React from 'react';

const TestimonialsAndTeam = () => {
    return (
        <div id="root">
            {/* Testimonials Section */}
            <section id="testimonials" className="py-20 bg-neutral-100">
                {/* <div className="max-w-7xl mx-auto px-4" id="el-yheq5as9">
                    <div className="text-center mb-16" id="el-38268c62">
                        <span className="text-amber-500 font-semibold" id="el-i0e7nkxg">Testimonials</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2 animate__animated animate__fadeInUp"
                            id="el-q9w5vgen">
                            What Our Clients Say
                        </h2>
                        <div className="h-1 w-20 bg-amber-500 mx-auto mt-4" id="el-ycbkizze"></div>
                    </div>
                    <div className="relative testimonials-slider overflow-hidden swiper-initialized swiper-horizontal swiper-backface-hidden"
                        id="el-yctvgdu5">
                        <div className="swiper-wrapper" id="swiper-wrapper-7df6db3a1968acc7" aria-live="off">
                            <div className="swiper-slide swiper-slide-active" style={{ width: '368px', marginRight: '30px' }} role="group"
                                aria-label="1 / 3" data-swiper-slide-index="0" id="el-pacjf7df">
                                <div className="bg-white p-8 rounded-xl shadow-lg" id="el-yldd4ti1">
                                    <div className="flex items-center mb-6" id="el-o7pbz63s">
                                        <div
                                            className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl"
                                            id="el-auqf5vhe">A</div>
                                        <div className="ml-4" id="el-qjzgv3sa">
                                            <h4 className="font-semibold" id="el-m51g52wl">Amit Shah</h4>
                                            <p className="text-sm text-neutral-500" id="el-gcfiskad">Wedding Event</p>
                                        </div>
                                    </div>
                                    <div className="text-amber-500 mb-4" id="el-5ejx597h">★★★★★</div>
                                    <p className="text-neutral-600" id="el-bka1oqqb">"Exceptional service! The food was amazing and the decoration was exactly what we wanted. Highly recommend Mahima Caterers for any special occasion."</p>
                                </div>
                            </div>

                            <div className="swiper-slide swiper-slide-next" style={{ width: '368px', marginRight: '30px' }} role="group"
                                aria-label="2 / 3" data-swiper-slide-index="1" id="el-rbdd5wtw">
                                <div className="bg-white p-8 rounded-xl shadow-lg" id="el-rpgz3k6a">
                                    <div className="flex items-center mb-6" id="el-izf8oi85">
                                        <div
                                            className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl"
                                            id="el-a56urcc5">P</div>
                                        <div className="ml-4" id="el-b4ypmt4v">
                                            <h4 className="font-semibold" id="el-hh98hy4m">Priya Patel</h4>
                                            <p className="text-sm text-neutral-500" id="el-bdcqn43g">Corporate Event</p>
                                        </div>
                                    </div>
                                    <div className="text-amber-500 mb-4" id="el-oswxpzaz">★★★★★</div>
                                    <p className="text-neutral-600" id="el-4n35sdov">"Professional team, excellent food quality, and outstanding service. They made our corporate event truly memorable."</p>
                                </div>
                            </div>

                            <div className="swiper-slide" style={{ width: '368px', marginRight: '30px' }} role="group" aria-label="3 / 3"
                                data-swiper-slide-index="2" id="el-0hhi2o3x">
                                <div className="bg-white p-8 rounded-xl shadow-lg" id="el-1w62hayf">
                                    <div className="flex items-center mb-6" id="el-3raez0am">
                                        <div
                                            className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl"
                                            id="el-1h5rj10t">R</div>
                                        <div className="ml-4" id="el-gl65s4uu">
                                            <h4 className="font-semibold" id="el-q245tpb9">Rahul Verma</h4>
                                            <p className="text-sm text-neutral-500" id="el-9brwiumt">Wedding Reception</p>
                                        </div>
                                    </div>
                                    <div className="text-amber-500 mb-4" id="el-x0d0h48g">★★★★★</div>
                                    <p className="text-neutral-600" id="el-sl8o5cco">"The attention to detail in both food and decoration was impressive. Our guests couldn't stop praising the arrangements."</p>
                                </div>
                            </div>
                        </div>

                        <button
                            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-white transition-colors z-10 prev-button swiper-button-lock"
                            tabIndex={0} aria-label="Previous slide" aria-controls="swiper-wrapper-7df6db3a1968acc7" id="el-ajkwizka">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-zs6c9hem">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"
                                    id="el-2vlcy8ky"></path>
                            </svg>
                        </button>
                        <button
                            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-white transition-colors z-10 next-button swiper-button-lock"
                            tabIndex={0} aria-label="Next slide" aria-controls="swiper-wrapper-7df6db3a1968acc7" id="el-kca9hx2v">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-5nrjdttz">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"
                                    id="el-10xsy09f"></path>
                            </svg>
                        </button>

                        <div
                            className="swiper-pagination mt-8 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-lock"
                            id="el-lmzz108o">
                            <span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex={0}
                                role="button" aria-label="Go to slide 1" aria-current="true" id="el-jlhgg014"></span>
                            <span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 2"
                                id="el-q2xmsu7m"></span>
                            <span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 3"
                                id="el-dv1bbhbi"></span>
                        </div>
                        <span className="swiper-notification" aria-live="assertive" aria-atomic="true" id="el-84c5w8gs"></span>
                    </div>
                </div> */}

                {/* Our Team Section */}
                <div className="max-w-7xl mx-auto px-4" style={{ padding: '18px 0px 0px' }} id="el-yheq5as9-copy-1736738686113">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="text-amber-500 font-semibold">Our Team</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2 animate__animated animate__fadeInUp">
                            Meet Our Expert Team
                        </h2>
                        <div className="h-1 w-20 bg-amber-500 mx-auto mt-4"></div>
                    </div>

                    {/* Team Members Grid */}
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {/* Team Member 1 */}
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="text-center mb-4">
                                <div className="w-24 h-24 mx-auto bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl">A</div>
                                <h4 className="font-semibold mt-4">Vicky Atal</h4>
                                <p className="text-sm text-neutral-500">Head</p>
                            </div>
                            <p className="text-neutral-600">Vicky brings her culinary expertise to create mouthwatering dishes that leave a lasting impression on our clients.</p>
                        </div>

                        {/* Team Member 2 */}
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="text-center mb-4">
                                <div className="w-24 h-24 mx-auto bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl">V</div>
                                <h4 className="font-semibold mt-4">Abhishek</h4>
                                <p className="text-sm text-neutral-500">Event Planner</p>
                            </div>
                            <p className="text-neutral-600">Vikram ensures that every event is flawlessly executed, from start to finish, with meticulous attention to detail.</p>
                        </div>

                        {/* Team Member 3 */}
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="text-center mb-4">
                                <div className="w-24 h-24 mx-auto bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl">R</div>
                                <h4 className="font-semibold mt-4">Rohit Sharma</h4>
                                <p className="text-sm text-neutral-500">Decorator</p>
                            </div>
                            <p className="text-neutral-600">Rohit transforms venues into beautiful and elegant spaces that perfectly align with the theme of the event.</p>
                        </div>

                        {/* Team Member 4 */}
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="text-center mb-4">
                                <div className="w-24 h-24 mx-auto bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl">M</div>
                                <h4 className="font-semibold mt-4">Maya Kapoor</h4>
                                <p className="text-sm text-neutral-500">Customer Relations</p>
                            </div>
                            <p className="text-neutral-600">Maya is dedicated to providing exceptional customer service and ensuring that our clients have a seamless experience.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default TestimonialsAndTeam;
