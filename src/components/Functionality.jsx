import React from 'react';
import stepImg1 from '../assets/etape-1.png';
import stepImg2 from '../assets/etape-2.png';
import stepImg3 from '../assets/etape-3.png';

export default function Functionality() {
    const steps = [
        {
            number: 1,
            title: "Placer l'instrument",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ligula commodo, sollicitudin diam ut, sagittis tortor.",
            img: stepImg1
        },
        {
            number: 2,
            title: "Placer l'instrument",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ligula commodo, sollicitudin diam ut, sagittis tortor.",
            img: stepImg2
        },
        {
            number: 3,
            title: "Écouter la magie",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ligula commodo, sollicitudin diam ut, sagittis tortor.",
            img: stepImg3
        }
    ];

    return (
        <section className="relative bg-bleu pt-16 pb-24 lg:pb-48 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <p className="font-kindheart text-[20px] text-white mb-2">Sous-titres</p>
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
                            <div className="relative h-[320px]">
                                <img
                                    src={step.img}
                                    alt={step.title}
                                    className="w-full h-full object-cover object-top"
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

                    <div className="hidden lg:block absolute top-[-45px] right-[-95px] w-48 h-48 z-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="145" height="112" viewBox="0 0 145 112" fill="none">
                            <path d="M81.6192 7.73189C88.3719 10.5486 94.9054 14.1296 101.128 18.4566C132.165 40.08 148.544 75.6902 143.903 111.409L118.386 108.069C121.79 81.9052 109.533 55.6568 86.4153 39.5457C63.2464 23.4134 35.4032 21.1136 11.9689 33.4101L0.000416765 10.6254C25.2405 -2.60954 54.9984 -3.37212 81.6192 7.73189Z" fill="#ED6B6A" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 w-full z-0">
                <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-24 sm:h-32 lg:h-48 text-white fill-current">
                    <path d="M0,224 C360,300 1080,100 1440,200 L1440,320 L0,320 Z" />
                </svg>
            </div>
        </section>
    );
}

