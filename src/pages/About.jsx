import React from 'react';
import Section from '../components/Section';
import { Target, Eye, History, Users, Heart, Shield, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import cow from '../assets/cow-calf.jpg';

const About = () => {
    const stats = [
        { label: "Years of Service", value: "8+" },
        { label: "Animals Rescued", value: "5000+" },
        { label: "Volunteers", value: "200+" },
        { label: "Awards Won", value: "15" }
    ];

    const values = [
        {
            icon: <Heart className="h-8 w-8 text-red-500" />,
            title: "Compassion",
            desc: "We believe every life has value and deserves to be treated with kindness and dignity."
        },
        {
            icon: <Shield className="h-8 w-8 text-blue-500" />,
            title: "Integrity",
            desc: "We operate with complete transparency in our funds, operations, and impact."
        },
        {
            icon: <Users className="h-8 w-8 text-green-500" />,
            title: "Community",
            desc: "We foster a culture of coexistence where humans and animals live in harmony."
        },
        {
            icon: <Target className="h-8 w-8 text-orange-500" />,
            title: "Action",
            desc: "We don't just talk about change; we are on the streets every day making it happen."
        }
    ];

    const timeline = [
        { year: '2015', title: 'The Beginning', desc: 'Started with a small group of friends feeding 10 dogs in the neighborhood.' },
        { year: '2017', title: 'Official Registration', desc: 'Registered as an NGO and purchased our first second-hand ambulance.' },
        { year: '2019', title: 'First Shelter', desc: 'Opened our first shelter capable of housing 50 cows and 100 dogs.' },
        { year: '2021', title: 'COVID Response', desc: 'Fed over 1000 animals daily during the lockdowns when street sources dried up.' },
        { year: '2023', title: 'Expansion', desc: 'Expanded operations to 3 major cities and set up a 24/7 trauma center.' }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={cow}
                        alt="About Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        Our Journey of <span className="text-primary">Compassion</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-200"
                    >
                        From a single bowl of milk to a movement that protects thousands.
                    </motion.p>
                </div>
            </div>

            {/* Our Story */}
            <Section>
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="w-full md:w-1/2">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1593134257782-e89567b7718a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Our Story"
                                className="rounded-2xl shadow-2xl z-10 relative"
                            />
                            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 rounded-full -z-0 hidden md:block"></div>
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full -z-0 hidden md:block"></div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm">Who We Are</span>
                        <h2 className="text-4xl font-bold mt-2 mb-6 text-gray-800">More Than Just an NGO</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            StreetCare was born on a rainy night in 2015 when our founder, Rajesh, found a shivering puppy under a tea stall. That simple act of saving one life sparked a realization: <span className="italic text-gray-800 font-medium">"If not us, then who?"</span>
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Today, we are a family of over 200 volunteers, veterinarians, and animal lovers dedicated to giving a voice to the voiceless. We don't just rescue; we rehabilitate, rehome, and restore dignity to the lives of street animals.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="border-l-4 border-primary pl-4">
                                    <div className="text-3xl font-bold text-gray-800">{stat.value}</div>
                                    <div className="text-sm text-gray-500">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* Core Values */}
            <Section className="bg-gray-50">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
                    <p className="text-gray-600">The principles that guide every rescue, every meal, and every decision we make.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((val, idx) => (
                        <motion.div
                            whileHover={{ y: -10 }}
                            key={idx}
                            className="bg-white p-8 rounded-xl shadow-lg text-center border-t-4 border-transparent hover:border-primary transition-all"
                        >
                            <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                {val.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-800">{val.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{val.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Timeline */}
            <Section>
                <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Our History</h2>
                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>

                    <div className="space-y-12">
                        {timeline.map((item, idx) => (
                            <div key={idx} className={`flex flex-col md:flex-row items-center justify-between ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="w-full md:w-5/12"></div>
                                <div className="z-10 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg mb-4 md:mb-0">
                                    <CheckCircle size={20} />
                                </div>
                                <div className="w-full md:w-5/12 bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
                                    <span className="text-primary font-bold text-xl mb-2 block">{item.year}</span>
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Team */}
            <Section className="bg-gray-900 text-white">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Meet the Heroes</h2>
                    <p className="text-gray-400">The dedicated team working behind the scenes.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {[
                        { name: "Rajesh Kumar", role: "Founder", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
                        { name: "Dr. Anita Roy", role: "Head Veterinarian", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
                        { name: "Vikram Singh", role: "Operations Head", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
                        { name: "Priya Sharma", role: "Volunteer Lead", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
                    ].map((member, idx) => (
                        <div key={idx} className="group relative overflow-hidden rounded-xl">
                            <img src={member.img} alt={member.name} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-xl font-bold">{member.name}</h3>
                                <p className="text-primary">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* CTA */}
            <Section className="bg-primary text-white text-center">
                <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                    Whether you want to volunteer, donate, or just spread the word, every action counts.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link to="/volunteer" className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                        Become a Volunteer
                    </Link>
                    <Link to="/donate" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-colors">
                        Make a Donation
                    </Link>
                </div>
            </Section>
        </div>
    );
};

export default About;
