import React from "react";
import { useTheme } from "../libs/useTheme.js";
import logo from "../assets/Logo.png";

const Header = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="fixed top-0 left-0 right-0 bg-background-light dark:bg-background-dark p-4 z-50 shadow-sm transition-colors duration-300">
            <div className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* LEFT - Logo */}
                <div className="flex items-center space-x-3">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-12 h-12 rounded-full object-cover"
                        onError={(e) => {
                            console.error("Failed to load logo");
                            e.target.style.display = "none";
                        }}
                    />
                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                        Everything Souvenirs
                    </span>
                </div>

                {/* CENTER - Navigation */}
                <div className="flex-1 flex justify-center">
                    <nav className="hidden md:flex space-x-8 text-gray-700 gap-6 dark:text-gray-300 font-medium">
                        <a href="#" className="hover:text-primary transition-colors">Home</a>
                        <a href="#" className="hover:text-primary transition-colors">Products</a>
                        <a href="#" className="hover:text-primary transition-colors">About</a>
                        <a href="#" className="hover:text-primary transition-colors">Contact</a>
                    </nav>
                </div>

                {/* RIGHT - Auth + Theme */}
                <div className="flex items-center space-x-4">
                    <button className="px-4 py-2 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all">
                        Login
                    </button>
                    <button className="px-4 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-all">
                        Sign Up
                    </button>
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                        title="Toggle theme"
                    >
                        {theme === "dark" ? "🌞" : "🌙"}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;