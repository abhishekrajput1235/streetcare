import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import { Heart, Stethoscope, Utensils, Shield, Users, Award, ArrowRight, Dog } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="animate-fade-in">
            <Hero />

            {/* Section 2: Core Pillars */}
            <Section className="bg-white -mt-16 relative z-20 pt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <Shield className="h-12 w-12 text-primary" />,
                            title: "Rescue & Shelter",
                            desc: "Providing a safe haven for injured and abandoned animals."
                        },
                        {
                            icon: <Stethoscope className="h-12 w-12 text-primary" />,
                            title: "Medical Aid",
                            desc: "24/7 emergency veterinary care for street animals in distress."
                        },
                        {
                            icon: <Utensils className="h-12 w-12 text-primary" />,
                            title: "Daily Feeding",
                            desc: "Serving nutritious meals to over 500+ stray dogs and cows daily."
                        }
                    ].map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-xl border-b-4 border-primary hover:-translate-y-2 transition-transform duration-300">
                            <div className="mb-4 bg-orange-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto md:mx-0">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-center md:text-left">{item.title}</h3>
                            <p className="text-gray-600 text-center md:text-left">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Section 3: About Us Preview */}
            <Section className="bg-gray-50">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1596272875729-ed2c21d50e46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Cow Shelter"
                            className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                        />
                        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl hidden md:block">
                            <div className="flex items-center gap-4">
                                <div className="bg-green-100 p-3 rounded-full">
                                    <Award className="h-8 w-8 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Recognized by</p>
                                    <p className="font-bold text-gray-800">Animal Welfare Board</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span className="text-primary font-bold tracking-wider uppercase text-sm">Who We Are</span>
                        <h2 className="text-4xl font-bold mt-2 mb-6 text-gray-800">Dedicated to the Voiceless</h2>
                        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                            StreetCare Foundation was born from a simple act of kindness—feeding a hungry street dog. Today, we have grown into a movement that protects thousands of animals across the city.
                        </p>
                        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                            Our mission is to create a compassionate society where humans and animals coexist in harmony. We focus on sterilization, vaccination, and rehabilitation of street dogs and cows.
                        </p>
                        <Link to="/about" className="inline-flex items-center text-primary font-bold hover:text-orange-600 transition-colors text-lg">
                            Read Our Full Story <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </Section>

            {/* Section 4: Impact Stats */}
            <Section className="bg-dark text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-primary opacity-10 pattern-dots"></div>
                <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { number: "5,000+", label: "Animals Rescued" },
                        { number: "12,000+", label: "Meals Served" },
                        { number: "850+", label: "Sterilizations" },
                        { number: "200+", label: "Volunteers" }
                    ].map((stat, index) => (
                        <div key={index}>
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                            <div className="text-gray-300 text-lg">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Section 5: Our Programs */}
            <Section className="bg-white">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">What We Do</span>
                    <h2 className="text-4xl font-bold mt-2 mb-4 text-gray-800">Our Welfare Programs</h2>
                    <p className="text-gray-600">Comprehensive care systems designed to address the specific needs of street animals.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Gau Seva (Cow Welfare)",
                            img: "https://images.unsplash.com/photo-1545468860-71b951c5a65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                            desc: "Shelter and medical treatment for abandoned, old, and injured cows. We ensure they live their remaining years in peace."
                        },
                        {
                            title: "Street Dog Care",
                            img: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                            desc: "Regular feeding drives, anti-rabies vaccination camps, and sterilization programs to control the population humanely."
                        },
                        {
                            title: "Emergency Ambulance",
                            img: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                            desc: "A dedicated fleet of ambulances ready to respond to accident cases and medical emergencies 24/7."
                        }
                    ].map((prog, index) => (
                        <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                            <div className="h-64 overflow-hidden">
                                <img src={prog.img} alt={prog.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-3 text-gray-800">{prog.title}</h3>
                                <p className="text-gray-600 mb-6">{prog.desc}</p>
                                <Link to="/programs" className="text-primary font-semibold hover:text-orange-600 inline-flex items-center">
                                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Section 6: Urgent Appeal */}
            <Section className="bg-red-50 border-y border-red-100">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1535930749574-1399327ce78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Injured Dog"
                            className="rounded-xl shadow-lg w-full h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="inline-block bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-bold mb-4 animate-pulse">
                            URGENT APPEAL
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Help Us Save "Rocky"</h2>
                        <p className="text-gray-600 mb-6 text-lg">
                            Rocky was found with a severe leg injury after a road accident. He needs immediate surgery to walk again. The estimated cost is $500. Your small contribution can save his leg.
                        </p>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-red-100 mb-8">
                            <div className="flex justify-between text-sm font-semibold mb-2">
                                <span>Raised: $320</span>
                                <span>Goal: $500</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                                <div className="bg-red-500 h-3 rounded-full" style={{ width: '64%' }}></div>
                            </div>
                        </div>
                        <Link to="/donate" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold shadow-lg transition-colors">
                            Donate for Rocky
                        </Link>
                    </div>
                </div>
            </Section>

            {/* Section 7: Success Stories (Testimonials) */}
            <Section className="bg-white">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800">Happy Endings</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        {
                            name: "Gauri the Cow",
                            story: "Found starving and eating plastic, Gauri is now healthy and safe in our shelter.",
                            img: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                        },
                        {
                            name: "Sheru",
                            story: "Sheru beat cancer thanks to timely chemotherapy funded by our donors.",
                            img: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                        }
                    ].map((story, idx) => (
                        <div key={idx} className="bg-gray-50 p-8 rounded-2xl flex items-center gap-6">
                            <img src={story.img} alt={story.name} className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md" />
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{story.name}</h3>
                                <p className="text-gray-600 italic">"{story.story}"</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Section 8: CTA Volunteer */}
            <Section className="bg-primary text-white text-center">
                <div className="max-w-3xl mx-auto">
                    <Users className="h-16 w-16 mx-auto mb-6 text-white opacity-80" />
                    <h2 className="text-4xl font-bold mb-6">Be a Hero for the Voiceless</h2>
                    <p className="text-xl mb-10 opacity-90">
                        You don't need money to help. Your time and love are just as valuable. Join our team of volunteers today.
                    </p>
                    <Link to="/volunteer" className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
                        Join as Volunteer
                    </Link>
                </div>
            </Section>

            {/* Section 9: Newsletter/Updates */}
            <Section className="bg-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8 text-gray-800">Stay Updated</h2>
                    <div className="flex flex-col md:flex-row gap-4">
                        <input type="email" placeholder="Enter your email" className="flex-grow px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:border-primary" />
                        <button className="bg-dark text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-colors">
                            Subscribe
                        </button>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">We promise not to spam. Only happy updates!</p>
                </div>
            </Section>
        </div>
    );
};

export default Home;
