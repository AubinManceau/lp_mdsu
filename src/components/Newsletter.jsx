import React, { useState } from 'react';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await fetch('/api/subscribe-newsletter.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email })
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', message: 'Merci ! Vous êtes maintenant inscrit à notre newsletter.' });
                setEmail('');
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
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    {/* Left Column: Text */}
                    <div className="lg:w-1/2 space-y-4">
                        <div>
                            <p className="font-kindheart text-[20px] text-gris-dark mb-2">Restez connecté</p>
                            <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-gris-dark">
                                Ne manquez <span className="text-jaune">aucune nouveauté</span>
                            </h2>
                        </div>
                        <p className="text-gris-dark text-sm sm:text-base font-poppins leading-relaxed max-w-lg">
                            Inscrivez-vous pour recevoir nos conseils d'éveil musical, des idées d'activités et les dernières actualités de Mélio.
                        </p>
                    </div>

                    {/* Right Column: Newsletter Form */}
                    <div className="lg:w-1/2 w-full">
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Votre adresse mail"
                                    required
                                    disabled={isSubmitting}
                                    className="flex-1 px-6 py-3 rounded-full border border-gris-light focus:outline-none focus:border-rouge/50 text-gris-dark font-poppins placeholder:text-gris-medium disabled:opacity-50"
                                />
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-rouge hover:bg-opacity-90 text-white font-poppins font-bold py-3 px-8 rounded-full shadow-md transition-transform transform hover:scale-105 whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Inscription...' : "Je m'inscris"}
                                </button>
                            </div>

                            {status.message && (
                                <div className={`p-3 rounded-lg text-sm font-poppins ${status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                                    {status.message}
                                </div>
                            )}

                            <p className="text-xs text-gris-medium font-poppins text-center sm:text-left">
                                En vous inscrivant, vous acceptez notre politique de confidentialité.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
