import React from 'react';
import Section from '../components/Section';
import { Calendar, User } from 'lucide-react';

const Blog = () => {
    const posts = [
        {
            title: "How to Help a Heat-Struck Street Dog",
            date: "May 15, 2024",
            author: "Dr. Sharma",
            excerpt: "Summer can be deadly for street animals. Learn the signs of heatstroke and immediate first aid steps.",
            img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "The Importance of Sterilization",
            date: "April 22, 2024",
            author: "Team StreetCare",
            excerpt: "Why ABC (Animal Birth Control) is the only humane way to manage the stray dog population.",
            img: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Rescuing 'Bholu': A Journey of Hope",
            date: "March 10, 2024",
            author: "Volunteer Priya",
            excerpt: "Read the heartwarming story of Bholu, a blind calf who found a forever home at our shelter.",
            img: "https://images.unsplash.com/photo-1545468860-71b951c5a65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <div className="pt-10">
            <Section>
                <h1 className="text-4xl font-bold text-center mb-16">Latest Updates</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, idx) => (
                        <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                            <div className="h-48 overflow-hidden">
                                <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                    <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                                    <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                                </div>
                                <h2 className="text-xl font-bold mb-3 text-gray-800 hover:text-primary cursor-pointer">{post.title}</h2>
                                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                <button className="text-primary font-bold hover:underline">Read More</button>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Blog;
