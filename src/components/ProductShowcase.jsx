import React from 'react';
import Boite3D from './Boite3D';

export default function ProductShowcase() {
    return (
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                {/* Left Column: Text */}
                <div className="w-full lg:w-1/2 order-2 lg:order-1 z-10">
                    <div className="mb-6">
                        <p className="font-kindheart text-2xl sm:text-3xl text-gris-dark mb-2 transform -rotate-2">Sous-titres</p>
                        <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-gris-dark">
                            Lorem <span className="text-rouge">ipsum</span>
                        </h2>
                    </div>

                    <p className="text-gris-dark text-sm sm:text-base font-poppins leading-relaxed mb-8 max-w-[90%]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ligula commodo, sollicitudin diam ut, sagittis tortor. Nullam non ligula ut odio tincidunt volutpat. Nullam condimentum lorem at elit hendrerit feugiat. In porta, libero vehicula commodo eleifend, velit urna accumsan velit, nec vehicula quam magna at turpis. Curabitur vel lorem et magna lacinia laoreet et non eros. Donec quis eros vel tellus aliquam tincidunt quis vitae turpis. Praesent tincidunt ac arcu eu mattis. Sed nisl mauris, porta ut ipsum suscipit, vulputate molestie mauris.
                    </p>

                    <button className="bg-rouge hover:bg-opacity-90 text-white font-poppins font-bold py-3 px-8 rounded-full shadow-md transition-transform transform hover:scale-105">
                        Pré-commander
                    </button>
                </div>

                {/* Right Column: Boite3D with decorations */}
                <div className="w-full lg:w-1/2 relative order-1 lg:order-2 flex justify-center">
                    <div className="relative w-full max-w-[500px]">
                        {/* Boite3D Component */}
                        <div className="relative z-10">
                            <Boite3D />
                        </div>

                        {/* Price Badge (Yellow Circle) */}
                        <div className="absolute top-0 left-0 w-24 h-24 sm:w-28 sm:h-28 bg-jaune rounded-full flex items-center justify-center z-20 shadow-lg">
                            <span className="text-white font-poppins font-bold text-lg sm:text-xl">109,98€</span>
                        </div>

                        {/* Background Blob Shape (Light Blue/Green) */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] z-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="519" height="387" viewBox="0 0 519 387" fill="none">
                                <path d="M499.295 386.312C486.129 386.963 472.907 386.469 459.612 384.507C410.315 377.282 368.265 350.791 337.94 307.759C319.78 281.971 306.571 255.202 293.902 229.388C268.849 178.565 251.691 146.507 216.18 129.597C170.761 107.938 105.811 109.099 37.8807 132.917L0.000417207 24.8556C96.219 -8.79008 193.06 -8.2511 265.594 26.3119C338.803 61.2509 369.596 123.741 396.748 178.88C408.045 201.815 418.706 223.471 431.752 241.981C444.002 259.302 458.155 268.672 476.238 271.299C515.706 277.044 576.294 252.279 634.455 206.597L705.298 296.578C662.368 330.294 583.285 382.247 499.3 386.394L499.295 386.312Z" fill="#BDE0D7" />
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
