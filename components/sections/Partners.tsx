import React from 'react';
import { partners } from '../../data/portfolioData';

const Partners: React.FC = () => {
  return (
    <section id="partners" className="py-20 md:py-24 bg-[#141414]">
        <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-display text-gold-metallic">Đối Tác Tin Cậy</h2>
                <p className="text-gray-400 mt-2">Vinh dự được đồng hành cùng nhiều thương hiệu lớn nhỏ.</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-16">
                {partners.map(partner => (
                    <div key={partner.name} className="flex justify-center items-center">
                        <img 
                            src={partner.logo} 
                            alt={partner.name}
                            className="h-12 md:h-16 w-auto object-contain filter grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                            title={partner.name}
                        />
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Partners;