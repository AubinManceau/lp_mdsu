import React from 'react';
import img1 from '../assets/gallery_children_playing_blocks_1765453278228.png';
import img2 from '../assets/gallery_child_focused_blocks_1765453295238.png';
import img3 from '../assets/gallery_child_tower_blocks_1765453321919.png';
import img4 from '../assets/gallery_blocks_details_1765453337138.png';

export default function Gallery() {
    return (
        <section className="relative bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <p className="font-kindheart text-2xl sm:text-3xl text-gris-dark mb-2 transform -rotate-2">Sous-titres</p>
                    <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-gris-dark">
                        Lorem <span className="text-bleu">ipsum</span>
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-sm sm:text-base text-gris-dark font-poppins leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ligula commodo, sollicitudin diam ut, sagittis tortor. Nullam non ligula ut odio tincidunt volutpat. Nullam condimentum lorem at elit hendrerit feugiat.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-6">
                        <div className="overflow-hidden rounded-[20px] h-[320px]">
                            <img
                                src={img1}
                                alt="Children playing"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="overflow-hidden rounded-[20px] h-[320px]">
                            <img
                                src={img1}
                                alt="Children playing"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-6">
                        <div className="overflow-hidden rounded-[20px] h-[240px]">
                            <img
                                src={img2}
                                alt="Child focused"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="overflow-hidden rounded-[20px] h-[240px]">
                            <img
                                src={img3}
                                alt="Building tower"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="overflow-hidden rounded-[20px] h-[160px]">
                            <img
                                src={img4}
                                alt="Block details"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col gap-6">
                        <div className="overflow-hidden rounded-[20px] h-[320px]">
                            <img
                                src={img1}
                                alt="Children playing"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="overflow-hidden rounded-[20px] h-[320px]">
                            <img
                                src={img4}
                                alt="Block details"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    {/* Yellow Star Decoration (Center) */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 z-10 pointer-events-none">
                        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                            <path
                                d="M50 0 L61 39 L100 50 L61 61 L50 100 L39 61 L0 50 L39 39 Z"
                                fill="#F8B100"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Decorations */}
            {/* Blue Arc (Left) */}
            <div className="absolute top-1/4 left-0 w-32 h-48 z-0">
                <svg viewBox="0 0 100 200" fill="none" className="w-full h-full">
                    <path
                        d="M 0 0 Q 50 100, 0 200"
                        stroke="#3B64A0"
                        strokeWidth="30"
                        strokeLinecap="round"
                        fill="none"
                    />
                </svg>
            </div>

            {/* Green Arc (Bottom Right) */}
            <div className="absolute bottom-0 right-0 w-48 h-32 z-0">
                <svg viewBox="0 0 200 100" fill="none" className="w-full h-full">
                    <path
                        d="M 0 100 Q 100 50, 200 100"
                        stroke="#BDE0D7"
                        strokeWidth="30"
                        strokeLinecap="round"
                        fill="none"
                    />
                </svg>
            </div>
        </section>
    );
}
