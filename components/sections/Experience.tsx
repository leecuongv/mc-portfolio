import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { experienceData } from '../../data/portfolioData';
import { PlayCircle } from 'lucide-react';

const Experience: React.FC = () => {
    const [activeTab, setActiveTab] = useState(experienceData[0].category);

    const activeCategory = experienceData.find(cat => cat.category === activeTab);

    return (
        <section id="experience" className="py-20 md:py-32 bg-[#202020]">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-display text-gold-metallic">Kinh Nghiệm Thực Chiến</h2>
                    <p className="text-gray-400 mt-2">Phân loại theo dòng sự kiện để bạn dễ dàng tìm kiếm.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
                    {experienceData.map(item => (
                        <button
                            key={item.category}
                            onClick={() => setActiveTab(item.category)}
                            className={`px-4 py-2 text-sm md:text-base rounded-md font-semibold transition-all duration-300 border-2 ${activeTab === item.category
                                    ? 'bg-gradient-to-br from-[#f0e68c] via-[#d4af37] to-[#b8860b] text-black border-transparent'
                                    : 'bg-transparent border-[#B8860B]/50 text-gray-300 hover:bg-[#B8860B]/20 hover:text-white'
                                }`}
                        >
                            {item.category}
                        </button>
                    ))}
                </div>

                <div className="relative">
                    {activeCategory && (
                        <Swiper
                            key={activeTab} // Re-mount swiper on tab change
                            modules={[Navigation, Pagination]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            className="w-full"
                        >
                            {activeCategory.events.map((event, index) => (
                                <SwiperSlide key={index}>
                                    <div className="bg-[#141414] rounded-lg shadow-2xl overflow-hidden flex flex-col md:flex-row items-center">
                                        <div className="w-full md:w-3/5 h-64 md:h-96">
                                            <img src={event.image} alt={event.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="w-full md:w-2/5 p-8 text-center md:text-left">
                                            {event.isHighlight && (
                                                 <span className="inline-block bg-gradient-to-r from-[#b8860b] to-[#d4af37] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                                                    Sự Kiện Điểm Nhấn
                                                 </span>
                                            )}
                                            <h3 className="text-2xl font-bold font-display mb-4">{event.name}</h3>
                                            <a
                                                href={event.videoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] font-bold py-2 px-6 rounded-md hover:bg-[#D4AF37] hover:text-black transition-all duration-300 transform hover:scale-105"
                                            >
                                                <PlayCircle size={20} />
                                                Xem Video
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Experience;