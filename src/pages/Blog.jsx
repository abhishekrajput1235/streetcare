import React, { useState } from 'react';
import Section from '../components/Section';
import { Calendar, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
    const allPosts = [
        {
            id: 1,
            title: "How to Help a Heat-Struck Street Dog",
            date: "May 15, 2024",
            author: "Dr. Sharma",
            excerpt: "Summer can be deadly for street animals. Learn the signs of heatstroke and immediate first aid steps.",
            img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            title: "The Importance of Sterilization",
            date: "April 22, 2024",
            author: "Team StreetCare",
            excerpt: "Why ABC (Animal Birth Control) is the only humane way to manage the stray dog population.",
            img: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            title: "Rescuing 'Bholu': A Journey of Hope",
            date: "March 10, 2024",
            author: "Volunteer Priya",
            excerpt: "Read the heartwarming story of Bholu, a blind calf who found a forever home at our shelter.",
            img: "https://images.unsplash.com/photo-1545468860-71b951c5a65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 4,
            title: "Winter Care Tips for Strays",
            date: "Jan 15, 2024",
            author: "Dr. Verma",
            excerpt: "Simple ways to keep community animals warm and safe during the harsh winter months.",
            img: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 5,
            title: "Why Adoption is Better than Buying",
            date: "Dec 05, 2023",
            author: "Rahul S.",
            excerpt: "Adopting a street dog saves two lives: the one you adopt and the one who takes their place in the shelter.",
            img: "https://images.unsplash.com/photo-1535930749574-1399327ce78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 6,
            title: "Feeding 101: What Not to Give",
            date: "Nov 20, 2023",
            author: "Nutritionist Anjali",
            excerpt: "Common household foods that are toxic to dogs and cows. A must-read for all feeders.",
            img: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 7,
            title: "Volunteer Spotlight: Meet Sarah",
            date: "Oct 12, 2023",
            author: "Team StreetCare",
            excerpt: "Sarah has rescued over 50 animals this year alone. Read her inspiring journey.",
            img: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 8,
            title: "Understanding Dog Body Language",
            date: "Sep 28, 2023",
            author: "Trainer Mike",
            excerpt: "Learn to read the subtle signs dogs use to communicate fear, aggression, and happiness.",
            img: "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 9,
            title: "The Impact of Plastic on Cows",
            date: "Aug 15, 2023",
            author: "Vet Team",
            excerpt: "Plastic ingestion is a silent killer for stray cows. Here is how we can stop it.",
            img: "https://images.unsplash.com/photo-1596272875729-ed2c21d50e46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    // Calculate pagination
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = allPosts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(allPosts.length / postsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="pt-10 bg-gray-50 min-h-screen">
            <Section>
                <h1 className="text-4xl font-bold text-center mb-16">Latest Updates</h1>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {currentPosts.map((post) => (
                        <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                            <div className="h-48 overflow-hidden">
                                <img src={post.img} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                    <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                                    <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                                </div>
                                <h2 className="text-xl font-bold mb-3 text-gray-800 hover:text-primary cursor-pointer line-clamp-2">
                                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                                </h2>
                                <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>
                                <Link
                                    to={`/blog/${post.id}`}
                                    className="text-primary font-bold hover:underline inline-flex items-center mt-auto"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-4">
                        <button
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`p-3 rounded-full border ${currentPage === 1
                                    ? 'text-gray-300 border-gray-200 cursor-not-allowed'
                                    : 'text-gray-600 border-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-colors'
                                }`}
                        >
                            <ChevronLeft size={20} />
                        </button>

                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => paginate(i + 1)}
                                className={`w-10 h-10 rounded-full font-bold transition-colors ${currentPage === i + 1
                                        ? 'bg-primary text-white shadow-lg'
                                        : 'bg-white text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button
                            onClick={() => paginate(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`p-3 rounded-full border ${currentPage === totalPages
                                    ? 'text-gray-300 border-gray-200 cursor-not-allowed'
                                    : 'text-gray-600 border-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-colors'
                                }`}
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                )}
            </Section>
        </div>
    );
};

export default Blog;
