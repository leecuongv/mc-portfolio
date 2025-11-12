import React from 'react';
import { testimonials } from '../../data/portfolioData';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-[#202020]">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gold-metallic">Feedback Từ Khách Hàng</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {testimonials.map((testimonial, index) => (
             <div key={index} className="bg-[#141414] p-8 rounded-lg shadow-lg">
               <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
               <p className="font-bold text-gold-metallic">{testimonial.name}</p>
               <p className="text-sm text-gray-500">{testimonial.company}</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;