import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Phone, Mail } from 'lucide-react';
import GoogleTranslate from './GoogleTranslate';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Our Programs', path: '/programs' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            {/* Top Bar */}
            <div className="bg-primary text-white py-2 hidden md:block">
                <div className="container mx-auto px-4 flex justify-between items-center text-sm">
                    <div className="flex items-center space-x-6">
                        <span className="flex items-center gap-2"><Phone size={16} /> +91 98765 43210</span>
                        <span className="flex items-center gap-2"><Mail size={16} /> info@streetwelfare.org</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <GoogleTranslate />
                        <Link to="/volunteer" className="hover:text-gray-200 transition">Volunteer</Link>
                        <Link to="/donate" className="hover:text-gray-200 transition">Donate</Link>
                    </div>
                </div>
            </div>

            {/* Main Nav */}
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    <Link to="/" className="flex items-center space-x-2">
                        <Heart className="h-8 w-8 text-primary" fill="currentColor" />
                        <span className="text-2xl font-bold text-gray-800">Street<span className="text-primary">Care</span></span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`font-medium transition-colors duration-200 ${isActive(link.path) ? 'text-primary' : 'text-gray-600 hover:text-primary'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/donate"
                            className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
                        >
                            Donate Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-primary focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block py-3 px-4 rounded-lg ${isActive(link.path)
                                    ? 'bg-orange-50 text-primary font-semibold'
                                    : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="px-4">
                            <GoogleTranslate />
                        </div>
                        <Link
                            to="/donate"
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center bg-primary text-white py-3 rounded-lg font-semibold mt-4"
                        >
                            Donate Now
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
