import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                    alt="Street Dog"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-sm font-semibold mb-6 border border-white/30">
                    Saving Lives Since 2015
                </span>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    Compassion for Every <span className="text-primary">Paw & Hoof</span>
                </h1>
                <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-2xl mx-auto">
                    We provide shelter, food, and medical care to abandoned street dogs and cows. Join us in creating a world where no animal suffers in silence.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        to="/donate"
                        className="bg-primary hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
                    >
                        Donate Now
                    </Link>
                    <Link
                        to="/volunteer"
                        className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
                    >
                        Become a Volunteer
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
