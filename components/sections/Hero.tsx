import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
      <img src="/avt.png" alt="Background" className="absolute inset-0 w-full h-full object-cover z-[-1]" />
      <div className="relative z-10 p-4">
        <div className="relative inline-block p-1 rounded-full bg-gradient-to-br from-[#f0e68c] via-[#d4af37] to-[#b8860b] mb-6 shadow-lg">
          <img src="/avt.png" alt="MC Hoài Ân" className="rounded-full w-40 h-40 md:w-48 md:h-48 object-cover" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold font-display mb-2">MC Hoài Ân</h1>
        <p className="text-xl md:text-2xl text-gold-metallic font-semibold">Professional MC & Tour Guide</p>
        <p className="mt-4 max-w-xl mx-auto text-lg text-gray-200">MC song ngữ chuyên nghiệp, người kể chuyện bằng trái tim và là đối tác tin cậy cho mọi sự kiện thành công.</p>
        <a href="#contact" className="mt-8 inline-block bg-gradient-to-br from-[#f0e68c] via-[#d4af37] to-[#b8860b] text-black font-bold py-3 px-8 rounded-md hover:shadow-lg hover:shadow-[#d4af37]/20 transition-all duration-300 transform hover:scale-105">
          Booking Now
        </a>
      </div>
    </section>
  );
};

export default Hero;