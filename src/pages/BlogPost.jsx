import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Section from '../components/Section';
import { Calendar, User, Heart, Share2, MessageCircle, Send, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const BlogPost = () => {
    const { id } = useParams();
    const [likes, setLikes] = useState(24);
    const [isLiked, setIsLiked] = useState(false);
    const [comments, setComments] = useState([
        { user: "Rohan", text: "Great initiative! Keep it up.", date: "2 hours ago" },
        { user: "Anjali", text: "I would love to volunteer for the next drive.", date: "5 hours ago" }
    ]);
    const [newComment, setNewComment] = useState("");

    // Mock Data (In a real app, fetch based on ID)
    const post = {
        title: "How to Help a Heat-Struck Street Dog",
        date: "May 15, 2024",
        author: "Dr. Sharma",
        img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        content: `
      <p class="mb-4">Summer temperatures in India can soar above 45°C, making it incredibly dangerous for street animals. Heatstroke is a life-threatening condition that requires immediate attention.</p>
      
      <h3 class="text-2xl font-bold mb-3 text-gray-800">Signs of Heatstroke</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Excessive panting and drooling</li>
        <li>Bright red gums and tongue</li>
        <li>Lethargy and uncoordinated movement</li>
        <li>Vomiting or collapse</li>
      </ul>

      <h3 class="text-2xl font-bold mb-3 text-gray-800">Immediate First Aid</h3>
      <p class="mb-4">If you see a dog suffering from heatstroke, act fast:</p>
      <ol class="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>Move to Shade:</strong> Immediately get the animal out of direct sunlight.</li>
        <li><strong>Cool Water:</strong> Pour cool (not ice-cold) water over their body, especially paws and head.</li>
        <li><strong>Hydrate:</strong> Offer small amounts of water to drink if they are conscious.</li>
        <li><strong>Call a Vet:</strong> Contact our emergency helpline immediately.</li>
      </ol>

      <p>Your quick action can save a life. Always keep a bowl of water outside your home during summer months.</p>
    `
    };

    const handleLike = () => {
        if (isLiked) {
            setLikes(likes - 1);
        } else {
            setLikes(likes + 1);
        }
        setIsLiked(!isLiked);
    };

    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (!newComment.trim()) return;
        setComments([...comments, { user: "You", text: newComment, date: "Just now" }]);
        setNewComment("");
    };

    return (
        <div className="pt-10 bg-gray-50 min-h-screen">
            <Section>
                <Link to="/blog" className="inline-flex items-center text-gray-600 hover:text-primary mb-8 transition-colors">
                    <ArrowLeft className="mr-2 h-5 w-5" /> Back to Blog
                </Link>

                <article className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
                    <img src={post.img} alt={post.title} className="w-full h-[400px] object-cover" />

                    <div className="p-8 md:p-12">
                        <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                            <span className="flex items-center gap-2"><Calendar size={16} /> {post.date}</span>
                            <span className="flex items-center gap-2"><User size={16} /> {post.author}</span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">{post.title}</h1>

                        <div
                            className="prose prose-lg max-w-none text-gray-600 mb-12"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* Interactions */}
                        <div className="flex items-center gap-6 border-t border-b border-gray-100 py-6 mb-12">
                            <button
                                onClick={handleLike}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${isLiked ? 'bg-red-50 text-red-500' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                <Heart className={`h-6 w-6 ${isLiked ? 'fill-current' : ''}`} />
                                <span className="font-bold">{likes} Likes</span>
                            </button>

                            <button
                                onClick={handleShare}
                                className="flex items-center gap-2 px-6 py-3 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all"
                            >
                                <Share2 className="h-6 w-6" />
                                <span className="font-bold">Share</span>
                            </button>
                        </div>

                        {/* Comments Section */}
                        <div className="bg-gray-50 rounded-xl p-8">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <MessageCircle className="text-primary" /> Comments ({comments.length})
                            </h3>

                            {/* Comment List */}
                            <div className="space-y-6 mb-8">
                                {comments.map((comment, idx) => (
                                    <div key={idx} className="bg-white p-4 rounded-lg shadow-sm">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-bold text-gray-800">{comment.user}</span>
                                            <span className="text-xs text-gray-400">{comment.date}</span>
                                        </div>
                                        <p className="text-gray-600">{comment.text}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Comment Form */}
                            <form onSubmit={handleCommentSubmit} className="relative">
                                <input
                                    type="text"
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                    placeholder="Write a comment..."
                                    className="w-full pl-6 pr-14 py-4 rounded-full border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-orange-100 transition-all"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2 top-2 p-2 bg-primary text-white rounded-full hover:bg-orange-600 transition-colors"
                                >
                                    <Send size={20} />
                                </button>
                            </form>
                        </div>
                    </div>
                </article>
            </Section>
        </div>
    );
};

export default BlogPost;
