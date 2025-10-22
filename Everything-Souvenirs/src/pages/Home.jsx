import React from "react";
import HeroSection from "../components/heroSection.jsx";
import Header from "../components/header.jsx";

const Home = () => {
    return (
        <div className="bg-background-dark font-display min-h-screen">
            {/* Remove the wrapper div and let Header handle its own fixed positioning */}
            <Header />

            {/* Main content with proper spacing */}
            <div className="max-w-[960px] mx-auto pt-24"> {/* Increased padding-top to account for fixed header */}
                <HeroSection />
            </div>
        </div>
    );
};

export default Home;