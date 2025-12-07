import React, { useState } from 'react';
import Section from '../components/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedImage, setSelectedImage] = useState(null);

    const categories = ['All', 'Rescue', 'Shelter', 'Medical', 'Events'];

    const images = [
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Rescue",
            caption: "Rescuing a stranded puppy"
        },
        {
            id: 2,
            src: "https://images.unsplash.com/photo-1596272875729-ed2c21d50e46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Shelter",
            caption: "Morning feeding time at the shelter"
        },
        {
            id: 3,
            src: "https://images.unsplash.com/photo-1545468860-71b951c5a65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Shelter",
            caption: "Safe haven for cows"
        },
        {
            id: 4,
            src: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Medical",
            caption: "Vaccination drive in progress"
        },
        {
            id: 5,
            src: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Medical",
            caption: "Emergency treatment for an injured dog"
        },
        {
            id: 6,
            src: "https://images.unsplash.com/photo-1535930749574-1399327ce78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Rescue",
            caption: "A new beginning for this little one"
        },
        {
            id: 7,
            src: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Shelter",
            caption: "Peaceful moments"
        },
        {
            id: 8,
            src: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Events",
            caption: "Adoption drive success"
        },
        {
            id: 9,
            src: "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Rescue",
            caption: "Found safe and sound"
        }
    ];

    const filteredImages = selectedCategory === 'All'
        ? images
        : images.filter(img => img.category === selectedCategory);

    const handleNext = (e) => {
        e.stopPropagation();
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
        const nextIndex = (currentIndex + 1) % filteredImages.length;
        setSelectedImage(filteredImages[nextIndex]);
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
        const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
        setSelectedImage(filteredImages[prevIndex]);
    };

    return (
        <div className="pt-10 min-h-screen bg-gray-50">
            <Section>
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Gallery</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Glimpses of our daily life, rescue missions, and the happy faces we serve.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${selectedCategory === cat
                                    ? 'bg-primary text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-primary'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                >
                    <AnimatePresence>
                        {filteredImages.map((img) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                key={img.id}
                                className="relative group overflow-hidden rounded-xl shadow-md cursor-pointer bg-white"
                                onClick={() => setSelectedImage(img)}
                            >
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img
                                        src={img.src}
                                        alt={img.caption}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                                    <ZoomIn className="mb-2 h-8 w-8" />
                                    <p className="font-semibold text-lg">{img.caption}</p>
                                    <span className="text-sm text-gray-300 mt-1">{img.category}</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </Section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white p-2 hover:bg-white/20 rounded-full transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={32} />
                        </button>

                        <button
                            className="absolute left-4 text-white p-2 hover:bg-white/20 rounded-full transition-colors hidden md:block"
                            onClick={handlePrev}
                        >
                            <ChevronLeft size={40} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.5 }}
                            className="relative max-w-5xl max-h-[90vh] w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.caption}
                                className="w-full h-full object-contain max-h-[85vh] rounded-lg shadow-2xl"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white rounded-b-lg">
                                <h3 className="text-xl font-bold">{selectedImage.caption}</h3>
                                <p className="text-gray-300">{selectedImage.category}</p>
                            </div>
                        </motion.div>

                        <button
                            className="absolute right-4 text-white p-2 hover:bg-white/20 rounded-full transition-colors hidden md:block"
                            onClick={handleNext}
                        >
                            <ChevronRight size={40} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
