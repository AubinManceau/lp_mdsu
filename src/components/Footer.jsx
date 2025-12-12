import React from 'react';
import logo from '../assets/logo_melio_1765457139657.png';

export default function Footer() {
    return (
        <footer className="bg-beige py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Left Column: Logo and Description */}
                    <div className="space-y-4">
                        <img src={logo} alt="Mélio" className="h-12" />
                        <p className="text-gris-dark text-sm font-poppins max-w-xs">
                            Mélio, le jouet musical éducatif sans écran qui éveille la créativité des enfants.
                        </p>
                        {/* Social Icons */}
                        <div className="flex gap-4">
                            {/* Facebook */}
                            <a href="https://www.facebook.com/profile.php?id=61584730930977&locale=fr_FR" className="w-8 h-8 bg-gris-dark rounded-full flex items-center justify-center hover:bg-rouge transition-colors">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            {/* Instagram */}
                            <a href="https://www.instagram.com/melio.france/" className="w-8 h-8 bg-gris-dark rounded-full flex items-center justify-center hover:bg-rouge transition-colors">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            {/* TikTok */}
                            <a href="#" className="w-8 h-8 bg-gris-dark rounded-full flex items-center justify-center hover:bg-rouge transition-colors">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                </svg>
                            </a>
                            {/* Pinterest */}
                            <a href="#" className="w-8 h-8 bg-gris-dark rounded-full flex items-center justify-center hover:bg-rouge transition-colors">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.373 0 0 5.373 0 12c0 4.991 3.657 9.128 8.438 10.073-.117-.853-.223-2.165.047-3.095.242-.83 1.556-5.29 1.556-5.29s-.397-.794-.397-1.964c0-1.84 1.067-3.214 2.396-3.214 1.13 0 1.677.848 1.677 1.865 0 1.137-.724 2.837-1.098 4.414-.313 1.322.664 2.4 1.97 2.4 2.364 0 3.956-3.038 3.956-6.644 0-2.74-1.848-4.787-5.213-4.787-3.801 0-6.163 2.854-6.163 6.05 0 1.103.324 1.883.833 2.487.233.276.266.387.181.704-.06.232-.2.792-.258 1.014-.084.318-.345.432-.636.315-1.78-.725-2.607-2.672-2.607-4.862 0-3.616 2.962-7.953 8.82-7.953 4.711 0 7.812 3.414 7.812 7.076 0 4.846-2.696 8.462-6.667 8.462-1.333 0-2.586-.722-3.013-1.543l-.818 3.115c-.296 1.12-1.1 2.52-1.64 3.374A12.04 12.04 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Middle Column: Navigation */}
                    <div>
                        <h3 className="font-poppins font-bold text-gris-dark mb-4 uppercase text-sm">Navigation</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gris-dark text-sm font-poppins hover:text-rouge transition-colors">Accueil</a></li>
                            <li><a href="#" className="text-gris-dark text-sm font-poppins hover:text-rouge transition-colors">Découvrir</a></li>
                            <li><a href="#" className="text-gris-dark text-sm font-poppins hover:text-rouge transition-colors">Galerie</a></li>
                            <li><a href="#" className="text-gris-dark text-sm font-poppins hover:text-rouge transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Right Column: Informations */}
                    <div>
                        <h3 className="font-poppins font-bold text-gris-dark mb-4 uppercase text-sm">Informations</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gris-dark text-sm font-poppins hover:text-rouge transition-colors">FAQ</a></li>
                            <li><a href="#" className="text-gris-dark text-sm font-poppins hover:text-rouge transition-colors">Blog</a></li>
                            <li><a href="#" className="text-gris-dark text-sm font-poppins hover:text-rouge transition-colors">Presse</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gris-light pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-gris-dark text-xs font-poppins">
                        © 2025 Melio. Tous droits réservés.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-gris-dark text-xs font-poppins hover:text-rouge transition-colors">Politique de confidentialité</a>
                        <a href="#" className="text-gris-dark text-xs font-poppins hover:text-rouge transition-colors">Conditions d'utilisation</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
