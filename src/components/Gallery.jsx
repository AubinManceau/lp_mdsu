import React from 'react';
import img1 from '../assets/gallery_children_playing_blocks_1765453278228.png';
import img2 from '../assets/gallery_child_focused_blocks_1765453295238.png';
import img3 from '../assets/gallery_child_tower_blocks_1765453321919.png';
import img4 from '../assets/gallery_blocks_details_1765453337138.png';

export default function Gallery() {
    return (
        <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <p className="font-kindheart text-2xl sm:text-3xl text-gris-dark mb-2 transform -rotate-6">Sous-titres</p>
                    <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-bleu">
                        Lorem <span className="text-bleu">ipsum</span>
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-gray-600 font-poppins">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ligula commodo, sollicitudin diam ut, sagittis tortor. Nullam non ligula ut odio tincidunt volutpat. Nullam condimentum lorem at elit hendrerit feugiat.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-4">
                        <div className="overflow-hidden rounded-[30px] h-[300px]">
                            <img
                                src={img1}
                                alt="Children playing"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="overflow-hidden rounded-[30px] h-[300px]">
                            <img
                                src={img2}
                                alt="Child focused"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-4">
                        <div className="overflow-hidden rounded-[30px] h-[300px]">
                            <img
                                src={img3}
                                alt="Building tower"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="overflow-hidden rounded-[30px] h-[300px]">
                            <img
                                src={img4}
                                alt="Block details"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    {/* Column 3 - Merged for variety or just stick to design which seems to have 3 cols but maybe different heights? 
           The design image shows:
           Col 1: 2 pics
           Col 2: 2 pics
           Col 3: 2 pics (Top one tall, bottom one small? Or just 2 pics)
           Wait, looking at the image:
           Col 1: Boy and girl playing (top), Boy stacking (bottom)
           Col 2: Boy stacking (top), Boy stacking again (bottom)
           Col 3: Girl stacking (top - TALL), Boy stacking (bottom - SMALLER)
           
           Let's try to mimic that layout.
           */}
                    <div className="flex flex-col gap-4">
                        <div className="overflow-hidden rounded-[30px] h-[400px]"> {/* Taller */}
                            <img
                                src={img1}
                                alt="Children playing"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="overflow-hidden rounded-[30px] h-[200px]"> {/* Shorter */}
                            <img
                                src={img2}
                                alt="Child focused"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
