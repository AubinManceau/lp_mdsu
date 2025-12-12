import React from 'react';
import heroImg from '../assets/hero.png';

export default function Hero() {
    return (
        <section className="relative w-full overflow-hidden">
            <div className="flex flex-col lg:flex-row h-auto lg:h-[700px] overflow-hidden">
                {/* Left Side (Beige) */}
                <div className="w-full lg:w-[55%] bg-beige flex flex-col justify-center px-6 sm:px-12 lg:pl-32 lg:pr-12 pb-20 pt-20 lg:pt-0 relative order-2 lg:order-1">
                    {/* Top Left Decoration */}
                    <div className="hidden lg:block absolute top-[-10px] left-0 w-32 h-32 md:w-40 md:h-40 z-10 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="141" height="140" viewBox="0 0 141 140" fill="none">
                            <path d="M114.32 93.8315C108.819 100.555 102.523 106.769 95.4845 112.376C60.3294 140.328 14.2491 146.848 -24.8052 129.419L-12.3268 101.527C16.2791 114.299 50.3075 109.285 76.4984 88.4663C102.731 67.5973 114.817 36.7059 108.8 5.86505L138.79 2.41675e-05C145.261 33.2142 136.007 67.3254 114.32 93.8315Z" fill="#F4ACBE" />
                        </svg>
                    </div>

                    <div className="relative z-20 max-w-xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-bold text-gris-dark leading-[1.1] mb-6">
                            <span className="block">La musique</span>
                            <span className="text-jaune block">prend vie <span className="text-gris-dark">entre</span></span>
                            <span className="block">les mains de</span>
                            <span className="block">votre enfant</span>
                        </h1>

                        <p className="text-gris-dark/80 font-poppins text-sm sm:text-base mb-8 max-w-md leading-relaxed">
                            Offrez à votre enfant une découverte ludique de la musique. Mélio transforme chaque note en une aventure captivante, favorisant l'éveil et l'apprentissage loin des écrans.
                        </p>

                        <a href="#tarifs" className="bg-rouge hover:bg-opacity-90 text-white font-poppins font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105">
                            Découvrir Mélio
                        </a>
                    </div>
                </div>

                {/* Right Side (Image) */}
                <div className="w-full lg:w-[45%] h-[400px] lg:h-full relative order-1 lg:order-2">
                    <img
                        src={heroImg}
                        alt="Happy family playing"
                        className="w-full h-full object-cover object-center"
                    />
                </div>
            </div>

            {/* Bottom White Wave Overlay - Making it absolute across the bottom */}
            <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none">
                <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-24 sm:h-32 lg:h-48 text-white fill-current">
                    <path d="M0,224 C360,300 1080,100 1440,200 L1440,320 L0,320 Z" />
                </svg>
            </div>

            {/* Decorations */}
            {/* Yellow Circles - Positioned absolute near bottom center-right */}
            <div className="hidden lg:block absolute bottom-[-20px] lg:bottom-[40px] left-1/2 lg:left-[55%] transform -translate-x-1/2 z-30 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="176" height="140" viewBox="0 0 176 140" fill="none">
                    <g clip-path="url(#clip0_8044_826)">
                        <path d="M67.1875 83.5011C61.3661 83.5011 56.625 78.7623 56.625 72.9327C56.625 67.1031 61.3571 62.3643 67.1875 62.3643C73.0179 62.3643 77.7411 67.1031 77.7411 72.9327C77.7411 78.7623 73.0089 83.5011 67.1875 83.5011ZM67.1875 67.3266C64.1071 67.3266 61.5982 69.8391 61.5982 72.9237C61.5982 76.0084 64.1071 78.5209 67.1875 78.5209C70.2679 78.5209 72.7768 76.0084 72.7768 72.9237C72.7768 69.8391 70.2679 67.3266 67.1875 67.3266Z" fill="#BDE0D7" />
                        <path d="M67.1876 91.584C56.9109 91.584 48.5537 83.2151 48.5537 72.9239C48.5537 62.6327 56.9109 54.2638 67.1876 54.2638C77.4644 54.2638 85.8216 62.6327 85.8216 72.9239C85.8216 83.2151 77.4644 91.584 67.1876 91.584ZM67.1876 59.244C59.6519 59.244 53.5269 65.3776 53.5269 72.9239C53.5269 80.4702 59.6519 86.6038 67.1876 86.6038C74.7234 86.6038 80.8484 80.4702 80.8484 72.9239C80.8484 65.3776 74.7234 59.244 67.1876 59.244Z" fill="#BDE0D7" />
                        <path d="M67.0716 99.5773C52.3484 99.5773 40.3662 87.5783 40.3662 72.8344C40.3662 58.0905 52.3484 46.0915 67.0716 46.0915C81.7948 46.0915 93.7769 58.0905 93.7769 72.8344C93.7769 87.5783 81.7948 99.5773 67.0716 99.5773ZM67.0716 51.0806C55.0894 51.0806 45.3394 60.8443 45.3394 72.8433C45.3394 84.8423 55.0894 94.606 67.0716 94.606C79.0537 94.606 88.8037 84.8423 88.8037 72.8433C88.8037 60.8443 79.0537 51.0806 67.0716 51.0806Z" fill="#BDE0D7" />
                        <path d="M67.0717 107.669C47.8931 107.669 32.2949 92.0488 32.2949 72.8433C32.2949 53.6378 47.8931 38.0176 67.0717 38.0176C86.2503 38.0176 101.849 53.6378 101.849 72.8433C101.849 92.0488 86.2503 107.669 67.0717 107.669ZM67.0717 42.9889C50.6342 42.9889 37.2681 56.3827 37.2681 72.8343C37.2681 89.286 50.6431 102.68 67.0717 102.68C83.5003 102.68 96.8753 89.286 96.8753 72.8343C96.8753 56.3827 83.5003 42.9889 67.0717 42.9889Z" fill="#BDE0D7" />
                        <path d="M67.0709 115.752C43.4459 115.752 24.2227 96.5014 24.2227 72.8433C24.2227 49.1851 43.4459 29.9348 67.0709 29.9348C90.6959 29.9348 109.919 49.1851 109.919 72.8433C109.919 96.5014 90.6959 115.752 67.0709 115.752ZM67.0709 34.9061C46.1869 34.9061 29.1959 51.921 29.1959 72.8343C29.1959 93.7476 46.1869 110.763 67.0709 110.763C87.9548 110.763 104.946 93.7476 104.946 72.8343C104.946 51.921 87.9548 34.9061 67.0709 34.9061Z" fill="#BDE0D7" />
                        <path d="M67.071 123.835C38.9907 123.835 16.1514 100.963 16.1514 72.8434C16.1514 44.7236 38.9907 21.8523 67.071 21.8523C95.1514 21.8523 117.991 44.7236 117.991 72.8434C117.991 100.963 95.1514 123.835 67.071 123.835ZM67.071 26.8235C41.7317 26.8235 21.1157 47.4686 21.1157 72.8434C21.1157 98.2183 41.7317 118.863 67.071 118.863C92.4103 118.863 113.026 98.2183 113.026 72.8434C113.026 47.4686 92.4103 26.8235 67.071 26.8235Z" fill="#BDE0D7" />
                        <path d="M67.0712 131.917C34.5444 131.917 8.08008 105.416 8.08008 72.8434C8.08008 40.2709 34.5354 13.7605 67.0712 13.7605C99.6069 13.7605 126.062 40.262 126.062 72.8345C126.062 105.407 99.5979 131.908 67.0712 131.908V131.917ZM67.0712 18.7407C37.2854 18.7407 13.0444 43.0069 13.0444 72.8434C13.0444 102.68 37.2765 126.946 67.0712 126.946C96.8658 126.946 121.098 102.68 121.098 72.8434C121.098 43.0069 96.8658 18.7407 67.0712 18.7407Z" fill="#BDE0D7" />
                        <path d="M67.0714 140C30.0893 140 0 109.869 0 72.8344C0 35.8003 30.0893 5.6777 67.0714 5.6777C104.054 5.6777 134.143 35.8093 134.143 72.8434C134.143 109.877 104.054 140.009 67.0714 140.009V140ZM67.0714 10.6579C32.8304 10.6579 4.97321 38.5542 4.97321 72.8434C4.97321 107.133 32.8304 135.029 67.0714 135.029C101.313 135.029 129.17 107.133 129.17 72.8434C129.17 38.5542 101.313 10.6579 67.0714 10.6579Z" fill="#BDE0D7" />
                        <path d="M166.768 18.8479C171.966 18.8479 176.179 14.6286 176.179 9.42394C176.179 4.21924 171.966 0 166.768 0C161.571 0 157.357 4.21924 157.357 9.42394C157.357 14.6286 161.571 18.8479 166.768 18.8479Z" fill="#B5BCDA" />
                    </g>
                    <defs>
                        <clipPath id="clip0_8044_826">
                            <rect width="176" height="140" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </section>
    );
}
