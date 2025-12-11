import React from 'react';

export default function Newsletter() {
    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    {/* Left Column: Text */}
                    <div className="lg:w-1/2 space-y-4">
                        <div>
                            <p className="font-kindheart text-2xl sm:text-3xl text-gris-dark mb-2 transform -rotate-2">Sous-titres</p>
                            <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-gris-dark">
                                Lorem <span className="text-jaune">ipsum</span>
                            </h2>
                        </div>
                        <p className="text-gris-dark text-sm sm:text-base font-poppins leading-relaxed max-w-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                        </p>
                    </div>

                    {/* Right Column: Newsletter Form */}
                    <div className="lg:w-1/2 w-full">
                        <form className="space-y-4">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    placeholder="Votre adresse mail"
                                    className="flex-1 px-6 py-3 rounded-full border border-gris-light focus:outline-none focus:border-rouge/50 text-gris-dark font-poppins placeholder:text-gris-medium"
                                />
                                <button
                                    type="submit"
                                    className="bg-rouge hover:bg-opacity-90 text-white font-poppins font-bold py-3 px-8 rounded-full shadow-md transition-transform transform hover:scale-105 whitespace-nowrap"
                                >
                                    Bouton
                                </button>
                            </div>
                            <p className="text-xs text-gris-medium font-poppins text-center sm:text-left">
                                By clicking sign up you're confirming that you agree with our Terms and Conditions.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
