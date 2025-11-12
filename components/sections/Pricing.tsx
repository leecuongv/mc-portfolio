import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-[#141414]">
        <div className="container mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gold-metallic mb-4">Báo Giá Dịch Vụ</h2>
            <p className="max-w-2xl mx-auto text-gray-400">
                Mỗi sự kiện đều có những yêu cầu và quy mô riêng. Vui lòng liên hệ trực tiếp để nhận được báo giá chi tiết và phù hợp nhất với chương trình của bạn.
            </p>
        </div>
    </section>
  );
};

export default Pricing;