import React from 'react';
import Section from '../components/Section';

const Gallery = () => {
    const images = [
        "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1596272875729-ed2c21d50e46?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1545468860-71b951c5a65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1535930749574-1399327ce78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ];

    return (
        <div className="pt-10">
            <Section>
                <h1 className="text-4xl font-bold text-center mb-16">Our Gallery</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {images.map((src, idx) => (
                        <div key={idx} className="relative group overflow-hidden rounded-xl aspect-square cursor-pointer">
                            <img
                                src={src}
                                alt={`Gallery ${idx}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                                <span className="text-white opacity-0 group-hover:opacity-100 font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    View
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Gallery;
