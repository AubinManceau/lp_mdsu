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
                        <div className="overflow-hidden rounded-[20px] h-[380px]">
                            <img
                                src={img1}
                                alt="Children playing"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="overflow-hidden rounded-[20px] h-[380px]">
                            <img
                                src={img1}
                                alt="Children playing"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-6">
                        <div className="overflow-hidden rounded-[20px] h-[215px]">
                            <img
                                src={img2}
                                alt="Child focused"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="overflow-hidden rounded-[20px] h-[215px]">
                            <img
                                src={img3}
                                alt="Building tower"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="overflow-hidden rounded-[20px] h-[380px]">
                            <img
                                src={img4}
                                alt="Block details"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col gap-6">
                        <div className="overflow-hidden rounded-[20px] h-[380px]">
                            <img
                                src={img1}
                                alt="Children playing"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="overflow-hidden rounded-[20px] h-[380px]">
                            <img
                                src={img4}
                                alt="Block details"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    {/* Yellow Star Decoration (Center) */}
                    <div className="hidden lg:block absolute top-1/4 left-2/3 transform -translate-x-2/3 -translate-y-1/4 w-24 h-24 z-10 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="118" height="118" viewBox="0 0 118 118" fill="none">
                            <path d="M118 58.9962C109.852 50.8485 99.1771 46.7785 88.4943 46.7785C96.0463 39.2264 100.712 28.7956 100.712 17.2804C89.1892 17.2804 78.7583 21.9537 71.2139 29.4981C71.2139 18.8229 67.1362 8.14767 58.9962 0C50.8485 8.14767 46.7785 18.8229 46.7785 29.4981C39.2264 21.946 28.7956 17.2804 17.2804 17.2804C17.2804 28.8032 21.9537 39.2341 29.5057 46.7861C18.8305 46.7861 8.14767 50.8561 0 59.0038C8.14767 67.1515 18.8229 71.2215 29.5057 71.2215C21.9537 78.7736 17.288 89.2044 17.288 100.72C28.8109 100.72 39.2417 96.0463 46.7861 88.5019C46.7861 99.1771 50.8638 109.852 59.0038 118C67.1515 109.852 71.2215 99.1771 71.2215 88.5019C78.7736 96.054 89.2044 100.72 100.72 100.72C100.72 89.1968 96.0463 78.7659 88.4943 71.2139C99.1695 71.2139 109.852 67.1438 118 58.9962Z" fill="#F8B100" />
                        </svg>
                    </div>

                    {/* Decorations */}
                    {/* Blue Arc (Left) */}
                    <div className="hidden lg:block absolute top-[-70px] left-[-60px] w-32 h-48 z-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="128" height="130" viewBox="0 0 128 130" fill="none">
                            <path d="M15.2009 48.4028C19.0895 42.2051 23.6961 36.3493 28.9872 30.923C55.4194 3.86372 93.238 -6.43716 127.708 4.01343L120.218 28.6342C94.9696 20.9744 67.0632 28.7484 47.3703 48.9028C27.6481 69.1039 20.8017 96.19 29.0778 121.327L4.63532 129.387C-4.26955 102.314 -0.128965 72.8356 15.2009 48.4028Z" fill="#3B64A0" />
                        </svg>
                    </div>

                    {/* Green Arc (Bottom Right) */}
                    <div className="hidden lg:block absolute bottom-[-75px] left-[28%] w-48 h-32 z-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="112" viewBox="0 0 200 112" fill="none">
                            <path d="M102.638 109.626C93.8136 108.113 85.0415 105.628 76.4365 102.168C33.5043 84.863 4.23139 46.8668 0.000305294 2.99373L31.3494 -1.63029e-07C34.443 32.1386 56.2392 60.0954 88.2187 72.9911C120.265 85.8981 154.104 81.028 178.693 59.9537L199.199 83.8579C172.712 106.545 137.427 115.592 102.638 109.626Z" fill="#BDE0D7" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
