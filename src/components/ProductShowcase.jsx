import React from 'react';
import Boite3D from './Boite3D';

export default function ProductShowcase() {
    return (
        <section id="tarifs" className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                {/* Left Column: Text */}
                <div className="w-full lg:w-1/2 order-2 lg:order-1 z-10">
                    <div className="mb-6">
                        <p className="font-kindheart text-[20px] text-gris-dark mb-2">Le coffret complet</p>
                        <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-gris-dark">
                            Tout pour <span className="text-rouge">l'éveil musical</span>
                        </h2>
                    </div>

                    <p className="text-gris-dark text-sm sm:text-base font-poppins leading-relaxed mb-8 max-w-[90%]">
                        Le pack Mélio contient tout le nécessaire pour des heures de découverte : la base interactive, une collection d'instruments en bois adaptés aux petites mains, et un guide d'activités pour les parents.
                    </p>

                    <a href='#pre-commande' className="bg-rouge hover:bg-opacity-90 text-white font-poppins font-bold py-3 px-8 rounded-full shadow-md transition-transform transform hover:scale-105">
                        Pré-commander maintenant
                    </a>
                </div>

                {/* Right Column: Boite3D with decorations */}
                <div className="w-full lg:w-1/2 relative order-1 lg:order-2 flex justify-center">
                    <div className="relative w-full max-w-[500px]">
                        {/* Boite3D Component */}
                        <div className="relative z-10">
                            <Boite3D />
                        </div>

                        {/* Price Badge (Yellow Blob Shape) */}
                        <div className="absolute top-0 left-0 w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center z-20">
                            <svg xmlns="http://www.w3.org/2000/svg" width="159" height="152" viewBox="0 0 159 152" fill="none" className="absolute inset-0 w-full h-full">
                                <path d="M159 76C159 84.2436 152.502 91.3605 150.074 98.7993C147.554 106.514 148.525 116.057 143.819 122.472C139.079 128.957 129.621 130.969 123.1 135.683C116.649 140.351 111.816 148.698 104.069 151.204C96.5886 153.619 87.7899 149.767 79.5 149.767C71.2101 149.767 62.4114 153.619 54.9308 151.204C47.1728 148.698 42.3514 140.351 35.8999 135.683C29.3789 130.969 19.9212 128.946 15.1808 122.472C10.4867 116.057 11.4463 106.514 8.92582 98.7993C6.49781 91.3605 0 84.2436 0 76C0 67.7564 6.49781 60.6395 8.92582 53.2007C11.4463 45.4859 10.4751 35.9431 15.1808 29.5275C19.9212 23.043 29.3789 21.0309 35.8999 16.317C42.3514 11.6491 47.1843 3.30195 54.9308 0.795516C62.4114 -1.61894 71.2101 2.23269 79.5 2.23269C87.7899 2.23269 96.5886 -1.61894 104.069 0.795516C111.827 3.30195 116.649 11.6491 123.1 16.317C129.621 21.0309 139.079 23.0545 143.819 29.5275C148.513 35.9431 147.554 45.4859 150.074 53.2007C152.502 60.6395 159 67.7564 159 76Z" fill="#F8B100" />
                            </svg>
                            <span className="relative text-white font-poppins font-bold text-lg sm:text-xl z-10">109,90€</span>
                        </div>

                        {/* Background Circle (Light Blue/Green) */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] bg-[#BDE0D7] rounded-full z-0 opacity-80"></div>
                    </div>
                </div>

            </div>
        </section>
    );
}
