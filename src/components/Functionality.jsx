import React from 'react';
import stepImg from '../assets/hero_family_playing_music_box_1765456709602.png';

export default function Functionality() {
    const steps = [
        {
            number: 1,
            title: "Placer l'instrument",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ligula commodo, sollicitudin diam ut, sagittis tortor."
        },
        {
            number: 2,
            title: "Placer l'instrument",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ligula commodo, sollicitudin diam ut, sagittis tortor."
        },
        {
            number: 3,
            title: "Écouter la magie",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ligula commodo, sollicitudin diam ut, sagittis tortor."
        }
    ];

    return (
        <section className="relative bg-bleu py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <p className="font-kindheart text-2xl sm:text-3xl text-white mb-2 transform -rotate-2">Sous-titres</p>
                    <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-white mb-4">
                        Lorem <span className="text-white">ipsum</span>
                    </h2>
                    <p className="text-white text-sm sm:text-base font-poppins leading-relaxed max-w-3xl mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ligula commodo, sollicitudin diam ut, sagittis tortor. Nullam non ligula ut odio tincidunt volutpat. Nullam condimentum lorem at elit hendrerit feugiat.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-white rounded-[20px] overflow-hidden shadow-lg">
                            {/* Image */}
                            <div className="relative h-48">
                                <img
                                    src={stepImg}
                                    alt={step.title}
                                    className="w-full h-full object-cover"
                                />
                                {/* Step Badge */}
                                <div className="absolute top-4 left-4 bg-jaune text-white font-poppins font-bold px-4 py-2 rounded-full text-sm">
                                    Étape {step.number}
                                </div>
                            </div>
                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-poppins font-bold text-jaune mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-gris-dark text-sm font-poppins leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorations */}
            {/* White Concentric Circles (Bottom Left) */}
            <div className="absolute bottom-8 left-8 w-32 h-32 z-0">
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                    <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="2" strokeOpacity="0.3" />
                    <circle cx="50" cy="50" r="38" stroke="white" strokeWidth="2" strokeOpacity="0.4" />
                    <circle cx="50" cy="50" r="31" stroke="white" strokeWidth="2" strokeOpacity="0.5" />
                    <circle cx="50" cy="50" r="24" stroke="white" strokeWidth="2" strokeOpacity="0.6" />
                    <circle cx="50" cy="50" r="17" stroke="white" strokeWidth="2" strokeOpacity="0.7" />
                    <circle cx="50" cy="50" r="10" stroke="white" strokeWidth="2" strokeOpacity="0.8" />
                </svg>
            </div>

            {/* Blue Dot */}
            <div className="absolute bottom-16 left-24 w-4 h-4 bg-[#9FA8DA] rounded-full z-0"></div>

            {/* Red Arc (Top Right) */}
            <div className="absolute top-0 right-0 w-48 h-48 z-0">
                <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
                    <path
                        d="M 200 0 Q 100 100, 200 200"
                        stroke="#ED6B6A"
                        strokeWidth="40"
                        strokeLinecap="round"
                        fill="none"
                        opacity="0.6"
                    />
                </svg>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 w-full z-0">
                <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-24">
                    <path
                        d="M0,60 C360,120 720,0 1080,60 C1260,90 1350,120 1440,120 L1440,120 L0,120 Z"
                        fill="white"
                    />
                </svg>
            </div>
        </section>
    );
}
