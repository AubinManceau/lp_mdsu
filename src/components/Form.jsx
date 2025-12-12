import React, { useState } from 'react';

export default function Form() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await fetch('/api/add-contact.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', message: 'Merci ! Votre inscription a été enregistrée avec succès.' });
                setFormData({ firstName: '', lastName: '', email: '', phone: '' });
            } else {
                setStatus({ type: 'error', message: data.error || 'Une erreur est survenue. Veuillez réessayer.' });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Erreur de connexion. Veuillez réessayer.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="pre-commande" className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                {/* Left Column: Text */}
                <div className="lg:w-1/2 space-y-6">
                    <div>
                        <p className="font-kindheart text-[20px] text-gris-dark mb-2">Rejoignez l'aventure</p>
                        <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-gris-dark">
                            Pré-commandez <span className="text-rouge">votre Mélio</span>
                        </h2>
                    </div>
                    <p className="text-gris-dark font-poppins text-sm sm:text-base leading-relaxed">
                        Soyez parmi les premiers à recevoir Mélio. En vous inscrivant maintenant, vous bénéficiez d'un tarif préférentiel et d'une livraison prioritaire.
                    </p>
                </div>

                {/* Right Column: Form */}
                <div className="lg:w-1/2 w-full relative">
                    <div className="bg-white rounded-[30px] p-8 shadow-xl relative z-10 border border-gris-light/20">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label htmlFor="lastName" className="block text-sm font-poppins font-medium text-gris-medium">Nom</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Dubois"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gris-light focus:outline-none focus:border-rouge/50 text-gris-dark font-poppins"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label htmlFor="firstName" className="block text-sm font-poppins font-medium text-gris-medium">Prénom</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="Marie"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gris-light focus:outline-none focus:border-rouge/50 text-gris-dark font-poppins"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label htmlFor="email" className="block text-sm font-poppins font-medium text-gris-medium">Mail</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="marie.dubois@gmail.com"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gris-light focus:outline-none focus:border-rouge/50 text-gris-dark font-poppins"
                                />
                            </div>

                            <div className="space-y-1">
                                <label htmlFor="phone" className="block text-sm font-poppins font-medium text-gris-medium">Téléphone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+33"
                                    className="w-full px-4 py-3 rounded-xl border border-gris-light focus:outline-none focus:border-rouge/50 text-gris-dark font-poppins"
                                />
                            </div>

                            {status.message && (
                                <div className={`p-4 rounded-xl ${status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'} font-poppins text-sm`}>
                                    {status.message}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-rouge hover:bg-opacity-90 transition-all text-white font-poppins font-bold text-lg py-3 rounded-[20px] shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Envoi en cours...' : 'Valider ma pré-commande'}
                            </button>
                        </form>
                    </div>

                    {/* Yellow Circles SVG */}
                    <div className="absolute -bottom-16 -right-16 w-32 h-32 z-20">
                        <svg xmlns="http://www.w3.org/2000/svg" width="148" height="118" viewBox="0 0 148 118" fill="none">
                            <g clipPath="url(#clip0_8066_925)">
                                <path d="M56.4983 70.3795C51.603 70.3795 47.6162 66.3854 47.6162 61.4719C47.6162 56.5583 51.5955 52.5642 56.4983 52.5642C61.4011 52.5642 65.3729 56.5583 65.3729 61.4719C65.3729 66.3854 61.3936 70.3795 56.4983 70.3795ZM56.4983 56.7467C53.908 56.7467 51.7982 58.8644 51.7982 61.4643C51.7982 64.0643 53.908 66.1819 56.4983 66.1819C59.0886 66.1819 61.1984 64.0643 61.1984 61.4643C61.1984 58.8644 59.0886 56.7467 56.4983 56.7467Z" fill="#FDD179" />
                                <path d="M56.4985 77.1922C47.8567 77.1922 40.8291 70.1384 40.8291 61.4644C40.8291 52.7903 47.8567 45.7366 56.4985 45.7366C65.1404 45.7366 72.168 52.7903 72.168 61.4644C72.168 70.1384 65.1404 77.1922 56.4985 77.1922ZM56.4985 49.9342C50.1617 49.9342 45.0111 55.1039 45.0111 61.4644C45.0111 67.8248 50.1617 72.9946 56.4985 72.9946C62.8354 72.9946 67.986 67.8248 67.986 61.4644C67.986 55.1039 62.8354 49.9342 56.4985 49.9342Z" fill="#FDD179" />
                                <path d="M56.4011 83.9292C44.0202 83.9292 33.9443 73.8158 33.9443 61.3888C33.9443 48.9618 44.0202 38.8484 56.4011 38.8484C68.782 38.8484 78.8579 48.9618 78.8579 61.3888C78.8579 73.8158 68.782 83.9292 56.4011 83.9292ZM56.4011 43.0535C46.3252 43.0535 38.1264 51.2829 38.1264 61.3964C38.1264 71.5098 46.3252 79.7392 56.4011 79.7392C66.477 79.7392 74.6759 71.5098 74.6759 61.3964C74.6759 51.2829 66.477 43.0535 56.4011 43.0535Z" fill="#FDD179" />
                                <path d="M56.4013 90.7495C40.2739 90.7495 27.1572 77.584 27.1572 61.3965C27.1572 45.209 40.2739 32.0435 56.4013 32.0435C72.5288 32.0435 85.6455 45.209 85.6455 61.3965C85.6455 77.584 72.5288 90.7495 56.4013 90.7495ZM56.4013 36.2335C42.5789 36.2335 31.3392 47.5226 31.3392 61.389C31.3392 75.2554 42.5864 86.5444 56.4013 86.5444C70.2163 86.5444 81.4634 75.2554 81.4634 61.389C81.4634 47.5226 70.2163 36.2335 56.4013 36.2335Z" fill="#FDD179" />
                                <path d="M56.4006 97.562C36.5341 97.562 20.3691 81.3369 20.3691 61.3964C20.3691 41.4559 36.5341 25.2307 56.4006 25.2307C76.2671 25.2307 92.4321 41.4559 92.4321 61.3964C92.4321 81.3369 76.2671 97.562 56.4006 97.562ZM56.4006 29.4208C38.8391 29.4208 24.5512 43.7619 24.5512 61.3888C24.5512 79.0157 38.8391 93.3569 56.4006 93.3569C73.9621 93.3569 88.25 79.0157 88.25 61.3888C88.25 43.7619 73.9621 29.4208 56.4006 29.4208Z" fill="#FDD179" />
                                <path d="M56.4008 104.375C32.7878 104.375 13.582 85.0975 13.582 61.3965C13.582 37.6955 32.7878 18.4182 56.4008 18.4182C80.0138 18.4182 99.2196 37.6955 99.2196 61.3965C99.2196 85.0975 80.0138 104.375 56.4008 104.375ZM56.4008 22.6083C35.0928 22.6083 17.7565 40.0091 17.7565 61.3965C17.7565 82.7839 35.0928 100.185 56.4008 100.185C77.7089 100.185 95.0451 82.7839 95.0451 61.3965C95.0451 40.0091 77.7089 22.6083 56.4008 22.6083Z" fill="#FDD179" />
                                <path d="M56.4011 111.187C29.049 111.187 6.79492 88.8505 6.79492 61.3966C6.79492 33.9426 29.0415 11.5981 56.4011 11.5981C83.7606 11.5981 106.007 33.9351 106.007 61.389C106.007 88.843 83.7531 111.18 56.4011 111.18V111.187ZM56.4011 15.7957C31.354 15.7957 10.9694 36.2487 10.9694 61.3966C10.9694 86.5445 31.3465 106.997 56.4011 106.997C81.4556 106.997 101.833 86.5445 101.833 61.3966C101.833 36.2487 81.4556 15.7957 56.4011 15.7957Z" fill="#FDD179" />
                                <path d="M56.401 118C25.3024 118 0 92.6034 0 61.3889C0 30.1745 25.3024 4.7854 56.401 4.7854C87.4996 4.7854 112.802 30.182 112.802 61.3965C112.802 92.6109 87.4996 118.008 56.401 118.008V118ZM56.401 8.983C27.6073 8.983 4.18202 32.4956 4.18202 61.3965C4.18202 90.2973 27.6073 113.81 56.401 113.81C85.1946 113.81 108.62 90.2973 108.62 61.3965C108.62 32.4956 85.1946 8.983 56.401 8.983Z" fill="#FDD179" />
                                <path d="M140.237 15.8861C144.607 15.8861 148.15 12.3298 148.15 7.94303C148.15 3.55622 144.607 0 140.237 0C135.866 0 132.323 3.55622 132.323 7.94303C132.323 12.3298 135.866 15.8861 140.237 15.8861Z" fill="#B5BCDA" />
                            </g>
                            <defs>
                                <clipPath id="clip0_8066_925">
                                    <rect width="148" height="118" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>

                </div>
            </div>
        </section>
    );
}
