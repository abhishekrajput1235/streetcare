import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* About */}
                    <div>
                        <div className="flex items-center space-x-2 mb-6">
                            <Heart className="h-8 w-8 text-primary" fill="currentColor" />
                            <span className="text-2xl font-bold">Street<span className="text-primary">Care</span></span>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Dedicated to the welfare of street cows and dogs. We provide medical aid, shelter, and food to those who cannot speak for themselves.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-primary transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-primary transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-primary transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-primary transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/programs" className="text-gray-400 hover:text-primary transition-colors">Our Programs</Link></li>
                            <li><Link to="/volunteer" className="text-gray-400 hover:text-primary transition-colors">Volunteer</Link></li>
                            <li><Link to="/donate" className="text-gray-400 hover:text-primary transition-colors">Donate</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-gray-400">
                                <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
                                <span>123 Animal Shelter Road, Green Valley, City - 123456</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400">
                                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400">
                                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                                <span>info@streetwelfare.org</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Newsletter</h3>
                        <p className="text-gray-400 mb-4">Subscribe to get updates about our rescue missions.</p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-white"
                            />
                            <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} StreetCare Foundation. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
