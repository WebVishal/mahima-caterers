import React from 'react'

const Gallery = () => {

    // document.addEventListener('DOMContentLoaded', function () {
    //     const filterButtons = document.querySelectorAll('.filter-btn');
    //     const galleryItems = document.querySelectorAll('.gallery-item');

    //     filterButtons.forEach(button => {
    //         button.addEventListener('click', () => {
    //             // Remove active className from all buttons
    //             filterButtons.forEach(btn => btn.classNameList.remove('active', 'bg-amber-500', 'text-white'));
    //             button.classNameList.add('active', 'bg-amber-500', 'text-white');

    //             const filterValue = button.getAttribute('data-filter');

    //             galleryItems.forEach(item => {
    //                 if (filterValue === 'all' || item.classNameList.contains(filterValue)) {
    //                     item.style.display = 'block';
    //                     item.classNameList.add('animate__fadeInUp');
    //                 } else {
    //                     item.style.display = 'none';
    //                     item.classNameList.remove('animate__fadeInUp');
    //                 }
    //             });
    //         });
    //     });
    // });

    return (
        <div>
            <div id="root">
                <section id="gallery" className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <span className="text-amber-500 font-semibold">Our Gallery</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2 animate__animated animate__fadeInUp">
                                Moments We've Created
                            </h2>
                            <div className="h-1 w-20 bg-amber-500 mx-auto mt-4"></div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <button
                                className="filter-btn active px-6 py-2 rounded-full bg-amber-500 text-white hover:bg-amber-600 transition-colors"
                                data-filter="all">
                                All
                            </button>
                            <button
                                className="filter-btn px-6 py-2 rounded-full bg-neutral-200 hover:bg-amber-500 hover:text-white transition-colors"
                                data-filter="wedding">
                                Weddings
                            </button>
                            <button
                                className="filter-btn px-6 py-2 rounded-full bg-neutral-200 hover:bg-amber-500 hover:text-white transition-colors"
                                data-filter="decoration">
                                Decorations
                            </button>
                            <button
                                className="filter-btn px-6 py-2 rounded-full bg-neutral-200 hover:bg-amber-500 hover:text-white transition-colors"
                                data-filter="food">
                                Food
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gallery-container">
                            <div className="gallery-item wedding decoration animate__animated animate__fadeInUp">
                                <div className="aspect-w-4 aspect-h-3 bg-neutral-200 rounded-lg overflow-hidden">
                                    <div className="w-full h-full flex items-center justify-center bg-amber-100">
                                        <svg className="w-16 h-16 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="gallery-item food animate__animated animate__fadeInUp">
                                <div className="aspect-w-4 aspect-h-3 bg-neutral-200 rounded-lg overflow-hidden">
                                    <div className="w-full h-full flex items-center justify-center bg-amber-100">
                                        <svg className="w-16 h-16 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="gallery-item decoration animate__animated animate__fadeInUp">
                                <div className="aspect-w-4 aspect-h-3 bg-neutral-200 rounded-lg overflow-hidden">
                                    <div className="w-full h-full flex items-center justify-center bg-amber-100">
                                        <svg className="w-16 h-16 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Gallery