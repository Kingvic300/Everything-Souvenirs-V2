import React from 'react';
import background from '../assets/background.png';

const HeroSection = () => {
    return (
        <div className="relative flex h-[90vh] w-full flex-col items-center justify-center overflow-hidden">
            {/* Background image */}
            <img
                src={background}
                alt="high-quality image of products being customized, e.g., laser engraving, embroidery"
                className="absolute inset-0 w-full h-full object-cover object-center scale-[1.3]"
                style={{ transformOrigin: 'center' }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-6 text-center max-w-5xl px-6">
                <h1 className="text-white text-6xl sm:text-8xl font-black leading-tight tracking-[-0.03em] drop-shadow-md">
                    Bringing Your Brand to Life —{" "}
                    <span className="text-yellow-400">One Gift at a Time</span>
                </h1>
                <h2 className="text-white/90 text-xl sm:text-3xl font-normal leading-relaxed max-w-3xl mx-auto drop-shadow">
                    We create custom branded gifts and promotional items that make a lasting
                    impression. Let us help you elevate your brand with high-quality products
                    and fast turnaround times.
                </h2>
            </div>

            {/* Buttons */}
            <div className="relative z-10 mt-10 flex flex-wrap justify-center gap-8">
                <button className="flex min-w-[160px] items-center justify-center rounded-xl h-16 px-10 bg-primary text-background-dark text-xl font-bold leading-normal tracking-[0.02em] transition-transform duration-200 hover:scale-110">
                    Request a Quote
                </button>

                <button className="flex min-w-[160px] items-center justify-center rounded-xl h-16 px-10 bg-white/10 text-white text-xl font-bold leading-normal tracking-[0.02em] transition-transform duration-200 hover:scale-110 hover:bg-white/20">
                    Explore Products
                </button>
            </div>
        </div>
    );
};

export default HeroSection;
