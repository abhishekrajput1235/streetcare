import React from 'react';
import Section from '../components/Section';
import { CheckCircle } from 'lucide-react';

const Programs = () => {
    const programs = [
        {
            title: "Street Dog Welfare",
            desc: "Our flagship program focuses on the holistic well-being of street dogs.",
            details: [
                "Daily feeding of 500+ dogs.",
                "Anti-rabies vaccination drives.",
                "Sterilization (ABC) program to control population.",
                "Adoption drives for puppies."
            ],
            img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Gau Seva (Cow Welfare)",
            desc: "Dedicated to the protection and care of abandoned cows and bulls.",
            details: [
                "Shelter for old and non-milking cows.",
                "Medical treatment for accident victims (often due to plastic ingestion).",
                "Green fodder cultivation.",
                "Protection from illegal slaughter."
            ],
            img: "https://images.unsplash.com/photo-1545468860-71b951c5a65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Medical Emergency Response",
            desc: "Rapid response for animals in distress.",
            details: [
                "24/7 Ambulance service.",
                "On-site treatment for minor injuries.",
                "Critical care unit for severe cases.",
                "Post-operative care and rehabilitation."
            ],
            img: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <div className="pt-10">
            <Section>
                <h1 className="text-4xl font-bold text-center mb-16">Our Programs</h1>
                <div className="space-y-24">
                    {programs.map((prog, idx) => (
                        <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                            <div className="w-full md:w-1/2">
                                <img src={prog.img} alt={prog.title} className="rounded-2xl shadow-2xl w-full h-[400px] object-cover" />
                            </div>
                            <div className="w-full md:w-1/2">
                                <h2 className="text-3xl font-bold mb-4 text-gray-800">{prog.title}</h2>
                                <p className="text-xl text-gray-600 mb-8">{prog.desc}</p>
                                <ul className="space-y-4">
                                    {prog.details.map((detail, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                                            <span className="text-gray-700 text-lg">{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Programs;
