import React, { useState, useEffect } from 'react';
import logo from '../assets/logo_melio_1765457139657.png';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Block scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <header className="bg-blanc border-b border-gray-100 py-4 px-4 sm:px-6 lg:px-8 relative z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* Logo */}
                <div className="flex-shrink-0">
                    <img src={logo} alt="Mélio" className="h-12 w-auto" />
                </div>

                {/* Navigation Links (Center) - Desktop */}
                <nav className="hidden md:flex items-center gap-8 lg:gap-12 flex-1 justify-center">
                    <a href="#" className="font-poppins font-bold text-gris-dark hover:text-rouge transition-colors text-sm lg:text-base">Link</a>
                    <a href="#" className="font-poppins font-bold text-gris-dark hover:text-rouge transition-colors text-sm lg:text-base">Link</a>
                    <a href="#" className="font-poppins font-bold text-gris-dark hover:text-rouge transition-colors text-sm lg:text-base">Link</a>
                    <a href="#" className="font-poppins font-bold text-gris-dark hover:text-rouge transition-colors text-sm lg:text-base">Link</a>
                </nav>

                {/* Right: Précommander Button - Desktop */}
                <div className="hidden md:flex items-center">
                    <button className="bg-rouge hover:bg-opacity-90 text-white font-poppins font-bold py-2 px-6 rounded-full shadow-md transition-transform transform hover:scale-105">
                        Précommander
                    </button>
                </div>

                {/* Burger Menu Button - Mobile */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden flex flex-col gap-1.5 p-2 z-50"
                    aria-label="Menu"
                >
                    <span className={`block w-6 h-0.5 bg-gris-dark transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-gris-dark transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-gris-dark transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu - Full height white panel sliding from left */}
            <div
                className={`md:hidden fixed top-[73px] left-0 right-0 bottom-0 bg-blanc transition-all duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                    }`}
                style={{ zIndex: 40 }}
            >
                <div className="flex flex-col items-center justify-center h-full px-6">
                    {/* Mobile Navigation Links */}
                    <nav className="flex flex-col gap-8 mb-12 text-center w-full">
                        <a
                            href="#"
                            className="font-poppins font-bold text-gris-dark hover:text-rouge transition-all duration-200 text-2xl py-2"
                            onClick={toggleMenu}
                        >
                            Link
                        </a>
                        <a
                            href="#"
                            className="font-poppins font-bold text-gris-dark hover:text-rouge transition-all duration-200 text-2xl py-2"
                            onClick={toggleMenu}
                        >
                            Link
                        </a>
                        <a
                            href="#"
                            className="font-poppins font-bold text-gris-dark hover:text-rouge transition-all duration-200 text-2xl py-2"
                            onClick={toggleMenu}
                        >
                            Link
                        </a>
                        <a
                            href="#"
                            className="font-poppins font-bold text-gris-dark hover:text-rouge transition-all duration-200 text-2xl py-2"
                            onClick={toggleMenu}
                        >
                            Link
                        </a>
                    </nav>

                    {/* Mobile Précommander Button */}
                    <button className="bg-rouge hover:bg-opacity-90 text-white font-poppins font-bold py-4 px-10 rounded-full shadow-md transition-all duration-200 transform hover:scale-105 w-full max-w-xs">
                        Précommander
                    </button>
                </div>
            </div>
        </header>
    );
}
