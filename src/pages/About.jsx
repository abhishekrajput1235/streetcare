import React from 'react';
import Section from '../components/Section';
import { Target, Eye, History, Users, FileText } from 'lucide-react';

const About = () => {
    return (
        <div className="pt-10">
            <Section className="bg-gray-50">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-5xl font-bold text-gray-800 mb-6">About StreetCare</h1>
                    <p className="text-xl text-gray-600">
                        We are a non-profit organization dedicated to the welfare of stray animals in India.
                        Since 2015, we have been working tirelessly to provide medical aid, food, and shelter to those in need.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-primary">
                        <div className="flex items-center gap-4 mb-6">
                            <Target className="h-10 w-10 text-primary" />
                            <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
                        </div>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            To eradicate the suffering of street animals through rescue, rehabilitation, and population control,
                            while fostering a culture of compassion and coexistence in the community.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-secondary">
                        <div className="flex items-center gap-4 mb-6">
                            <Eye className="h-10 w-10 text-secondary" />
                            <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
                        </div>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            A world where every street animal has a safe home, access to medical care, and lives free from cruelty and neglect.
                        </p>
                    </div>
                </div>
            </Section>

            <Section className="bg-white">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1559192823-e1d8e87def54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Team working"
                            className="rounded-2xl shadow-2xl"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <History className="text-primary" /> Our History
                        </h2>
                        <div className="space-y-6 border-l-2 border-gray-200 pl-6 ml-2">
                            {[
                                { year: '2015', event: 'Started with feeding 10 dogs in the neighborhood.' },
                                { year: '2017', event: 'Registered as an NGO and bought our first ambulance.' },
                                { year: '2019', event: 'Opened our first shelter for 50 cows and 100 dogs.' },
                                { year: '2023', event: 'Expanded to 3 cities and treated over 10,000 animals.' }
                            ].map((item, idx) => (
                                <div key={idx} className="relative">
                                    <span className="absolute -left-[33px] bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
                                        {item.year}
                                    </span>
                                    <p className="text-gray-600">{item.event}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="bg-gray-50">
                <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="text-center">
                            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                                <img src={`https://i.pravatar.cc/150?img=${i + 10}`} alt="Team Member" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="font-bold text-lg">Team Member {i}</h3>
                            <p className="text-primary text-sm">Position</p>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default About;
