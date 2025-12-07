import React from 'react';
import Section from '../components/Section';
import { Hand, Heart, Clock, Users } from 'lucide-react';

const Volunteer = () => {
    return (
        <div className="pt-10">
            <Section>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold mb-6">Join Our Volunteer Family</h1>
                    <p className="text-xl text-gray-600">
                        Be the change you wish to see. Whether you can spare an hour a week or a day a month, your time can save lives.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {[
                        { icon: <Hand className="h-10 w-10 text-primary" />, title: "Rescue Team", desc: "Help us catch and transport injured animals." },
                        { icon: <Heart className="h-10 w-10 text-primary" />, title: "Foster Care", desc: "Provide a temporary home for recovering animals." },
                        { icon: <Users className="h-10 w-10 text-primary" />, title: "Event Support", desc: "Help organize adoption drives and fundraisers." }
                    ].map((role, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-xl shadow-lg text-center hover:-translate-y-2 transition-transform">
                            <div className="bg-orange-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                {role.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{role.title}</h3>
                            <p className="text-gray-600">{role.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-gray-50 p-8 md:p-12 rounded-3xl shadow-inner">
                    <h2 className="text-3xl font-bold text-center mb-8">Volunteer Registration</h2>
                    <form className="max-w-2xl mx-auto space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary" />
                            <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary" />
                        </div>
                        <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text" placeholder="City / Location" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary" />
                            <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary bg-white">
                                <option>Select Interest Area</option>
                                <option>Rescue</option>
                                <option>Fostering</option>
                                <option>Events</option>
                                <option>Social Media</option>
                            </select>
                        </div>
                        <textarea rows="4" placeholder="Why do you want to volunteer?" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"></textarea>
                        <button className="w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-orange-600 transition-colors text-lg">
                            Submit Application
                        </button>
                    </form>
                </div>
            </Section>
        </div>
    );
};

export default Volunteer;
