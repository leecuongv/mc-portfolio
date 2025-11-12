import React from 'react';
import { services } from '../../data/portfolioData';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-[#141414]">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gold-metallic">Dịch Vụ Cung Cấp</h2>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto">Mang đến những giải pháp chuyên nghiệp và sáng tạo cho mọi nhu cầu của bạn.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-[#202020] p-8 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-lg">
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 font-display">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;