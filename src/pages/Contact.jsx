import React from 'react';
import Section from '../components/Section';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-10">
            <Section className="bg-gray-50">
                <h1 className="text-4xl font-bold text-center mb-16">Get in Touch</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white p-8 rounded-xl shadow-md text-center">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <MapPin className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="font-bold text-xl mb-2">Visit Us</h3>
                        <p className="text-gray-600">123 Animal Shelter Road,<br />Green Valley, City - 123456</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-md text-center">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Phone className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="font-bold text-xl mb-2">Call Us</h3>
                        <p className="text-gray-600">+91 98765 43210<br />+91 12345 67890</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-md text-center">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Mail className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="font-bold text-xl mb-2">Email Us</h3>
                        <p className="text-gray-600">info@streetwelfare.org<br />support@streetwelfare.org</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-12">
                    {/* Map Placeholder */}
                    <div className="w-full md:w-1/2 bg-gray-200 rounded-2xl min-h-[400px] flex items-center justify-center">
                        <p className="text-gray-500 font-bold">Google Map Embed</p>
                    </div>

                    {/* Form */}
                    <div className="w-full md:w-1/2 bg-white p-8 rounded-2xl shadow-lg">
                        <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Your Phone" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Your Email" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="How can we help?"></textarea>
                            </div>
                            <button className="w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-orange-600 transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Contact;
