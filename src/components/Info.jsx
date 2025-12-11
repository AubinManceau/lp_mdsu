import React from 'react';
import infoImg from '../assets/hero_family_playing_music_box_1765456709602.png';

export default function Info() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                {/* Left Column: Image with Decorations */}
                <div className="w-full lg:w-1/2 relative order-1 flex justify-center">
                    {/* Image Container */}
                    <div className="relative w-full max-w-[500px]">
                        <img
                            src={infoImg}
                            alt="Family playing"
                            className="w-full h-auto object-cover rounded-[30px]"
                        />

                        {/* Decorations */}

                        {/* Pink Wave (Top Right) */}
                        <div className="absolute -top-8 -right-8 w-40 h-40 z-10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="255" height="158" viewBox="0 0 255 158" fill="none">
                                <g clip-path="url(#clip0_8066_830)">
                                    <path d="M179.512 148.543C174.787 148.777 170.042 148.6 165.27 147.895C147.579 145.302 132.488 135.795 121.605 120.352C115.088 111.097 110.347 101.49 105.801 92.2263C96.8096 73.987 90.6518 62.4819 77.9077 56.4134C61.6078 48.6404 38.2986 49.0569 13.9198 57.6046L0.325384 18.8238C34.8563 6.74901 69.6105 6.94244 95.6415 19.3464C121.915 31.8853 132.966 54.3117 142.71 74.1001C146.764 82.3308 150.59 90.1029 155.272 96.7457C159.669 102.962 164.748 106.324 171.237 107.267C185.402 109.329 207.145 100.442 228.018 84.0472L253.442 116.339C238.036 128.439 209.654 147.084 179.514 148.573L179.512 148.543Z" fill="#F4ACBE" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_8066_830">
                                        <rect width="248" height="145" fill="white" transform="translate(0 12.2303) rotate(-2.82673)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>

                        {/* Yellow Arc (Bottom Left) */}
                        <div className="absolute -bottom-8 -left-8 w-32 h-32 z-10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="216" height="109" viewBox="0 0 216 109" fill="none">
                                <g clip-path="url(#clip0_8066_828)">
                                    <path d="M118.967 103.013C110.03 102.473 101.039 100.961 92.1071 98.4627C47.5411 85.9522 14.2916 51.3822 5.29193 8.23411L36.1262 1.83283C42.713 33.4409 67.4335 58.8488 100.631 68.1728C133.895 77.5009 166.999 68.9625 189.139 45.3274L212.134 66.8479C188.285 92.2937 154.199 105.141 118.967 103.013Z" fill="#F8B100" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_8066_828">
                                        <rect width="210" height="96" fill="white" transform="translate(5.78941) rotate(3.4574)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Right Column: Text */}
                <div className="w-full lg:w-1/2 order-2">
                    <div className="mb-6">
                        <p className="font-kindheart text-2xl sm:text-3xl text-gris-dark mb-2 transform -rotate-2">Sous-titres</p>
                        <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-gris-dark">
                            Lorem <span className="text-rouge">ipsum</span>
                        </h2>
                    </div>

                    <p className="text-gris-dark text-sm sm:text-base font-poppins leading-relaxed mb-6 max-w-[80%]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ligula commodo, sollicitudin diam ut, sagittis tortor. Nullam non ligula ut odio tincidunt volutpat. Nullam condimentum lorem at elit hendrerit feugiat. In porta, libero vehicula commodo eleifend, velit urna accumsan velit, nec vehicula quam magna at turpis.
                        <br /><br />
                        Curabitur vel lorem et magna lacinia laoreet et non eros. Donec quis eros vel tellus aliquam tincidunt quis vitae turpis. Praesent tincidunt ac arcu eu mattis. Sed nisl mauris, porta ut ipsum suscipit, vulputate molestie mauris.
                    </p>

                    <button className="bg-rouge hover:bg-opacity-90 text-white font-poppins font-bold py-3 px-8 rounded-full shadow-md transition-transform transform hover:scale-105">
                        Bouton
                    </button>
                </div>

            </div>
        </section>
    );
}
