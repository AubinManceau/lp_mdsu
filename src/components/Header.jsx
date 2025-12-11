import React from 'react';
import logo from '../assets/logo_melio_1765457139657.png';

export default function Header() {
    return (
        <header className="bg-blanc border-b border-gray-100 py-4 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* Logo */}
                <div className="flex-shrink-0">
                    <img src={logo} alt="Mélio" className="h-12 w-auto" />
                </div>

                {/* Navigation Links (Center) */}
                <nav className="hidden md:flex items-center gap-8 lg:gap-12 flex-1 justify-center">
                    <a href="#" className="font-poppins font-bold text-gris-dark hover:text-rouge transition-colors text-sm lg:text-base">onglet</a>
                    <a href="#" className="font-poppins font-bold text-gris-dark hover:text-rouge transition-colors text-sm lg:text-base">Nos packs</a>
                    <a href="#" className="font-poppins font-bold text-gris-dark hover:text-rouge transition-colors text-sm lg:text-base">Application</a>
                    <a href="#" className="font-poppins font-bold text-gris-dark hover:text-rouge transition-colors text-sm lg:text-base">onglet</a>
                </nav>

                {/* Right: Précommander Button */}
                <div className="flex items-center">
                    <button className="bg-rouge hover:bg-opacity-90 text-white font-poppins font-bold py-2 px-6 rounded-full shadow-md transition-transform transform hover:scale-105">
                        Précommander
                    </button>
                </div>
            </div>
        </header>
    );
}
