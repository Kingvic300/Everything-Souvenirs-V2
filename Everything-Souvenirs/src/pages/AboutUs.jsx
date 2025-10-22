import React from 'react';
import Header from '../components/header';
import Footer from '../components/Footer';

const AboutUs = () => {
  const values = [
    {
      icon: 'Q',
      title: 'Quality',
      description: 'We are committed to the highest standard of excellence in every product we create.'
    },
    {
      icon: 'I',
      title: 'Innovation',
      description: 'We constantly explore new ideas and techniques to create unique and impactful gifts.'
    },
    {
      icon: 'T',
      title: 'Integrity',
      description: 'We build relationships based on honesty, transparency, and mutual respect.'
    },
    {
      icon: 'S',
      title: 'Speed',
      description: 'We pride ourselves on efficient turnaround and timely delivery without compromising quality.'
    }
  ];

  const team = [
    {
      name: 'Jane Doe',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'John Smith',
      role: 'Head of Design',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Emily Johnson',
      role: 'Lead Artisan',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Michael Brown',
      role: 'Chief Relations Manager',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />

      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 z-10"></div>
        <img
          src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Team collaboration"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Crafting Connections, One <span className="text-[#d4a574]">Gift</span> at a Time
          </h1>
          <p className="text-xl text-gray-300">
            Discover the story behind our passion for creating unique and memorable branded gifts.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-[#d4a574]">Our</span> <span className="text-white">Story</span>
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto">
            From a humble workshop to a leader in promotional gifting, our journey is one of passion, precision, and partnership.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <img
                src="https://images.pexels.com/photos/5623623/pexels-photo-5623623.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Craftsman at work"
                className="rounded-lg w-full h-[400px] object-cover"
              />
            </div>
            <div className="bg-[#d4a574] p-8 rounded-lg h-[400px] flex items-center">
              <div className="text-[#0a0a0a]">
                <p className="text-lg leading-relaxed">
                  Our story begins in a small, sunlit workshop, where a passion for <span className="font-semibold">craftsmanship</span> and a desire to create meaningful connections sparked an idea. We believed that a well-chosen gift could do more than just promote a brand; it could tell a story, forge a bond, and leave a lasting impression.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1a1a] p-8 rounded-lg mb-12">
            <p className="text-gray-300 text-lg leading-relaxed">
              Today, that belief remains at the heart of everything we do. We've grown into a team of artisans, designers, and strategists dedicated to helping businesses build stronger relationships through the art of thoughtful gifting. From our humble beginnings to where we are today, our commitment to quality, innovation, and the power of a personal touch drives us forward.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-[#d4a574]">Our</span> <span className="text-white">Mission</span>
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto">
            To help businesses build stronger relationships through the art of thoughtful, high-quality, and custom-branded gifting that tells their unique story.
          </p>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Team meeting"
              className="rounded-lg w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-[#d4a574]">Our</span> <span className="text-white">Values</span>
          </h2>
          <p className="text-center text-gray-400 mb-16">
            The principles that guide our craft and our partnerships.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 hover:border-[#d4a574] transition-all duration-300"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-[#d4a574] mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-[#d4a574]">Meet the</span> <span className="text-white">Team</span>
          </h2>
          <p className="text-center text-gray-400 mb-16">
            The artisans, designers, and strategists dedicated to bringing your brand's story to life.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="mb-6 overflow-hidden rounded-full w-48 h-48 mx-auto border-4 border-[#d4a574] group-hover:border-white transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-[#d4a574]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-white">Ready to Create Your Custom Gift?</span>
            <br />
            <span className="text-[#d4a574]">Let's Talk.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#d4a574] hover:bg-[#c49464] text-black font-semibold px-8 py-4 rounded-lg transition-colors duration-300">
              Contact Us
            </button>
            <button className="border-2 border-[#d4a574] hover:bg-[#d4a574] hover:text-black text-[#d4a574] font-semibold px-8 py-4 rounded-lg transition-all duration-300">
              View Products
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
