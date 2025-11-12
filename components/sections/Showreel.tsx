import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { showreelVideos } from '../../data/portfolioData';

const Showreel: React.FC = () => {
  return (
    <section id="showreel" className="py-20 md:py-32 bg-[#202020]">
        <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-display text-gold-metallic">Showreel Nổi Bật</h2>
                <p className="text-gray-400 mt-2 max-w-2xl mx-auto">Tổng hợp những khoảnh khắc ấn tượng và năng lượng nhất trên sân khấu.</p>
            </div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={true}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="w-full py-4"
            >
                {showreelVideos.map((video) => (
                    <SwiperSlide key={video.id} style={{ width: '80%', maxWidth: '500px' }}>
                      {({ isActive }) => (
                        <div className={`transition-transform duration-500 ${isActive ? 'scale-100' : 'scale-90'}`}>
                          <div className="rounded-lg overflow-hidden shadow-2xl bg-black flex flex-col">
                              <div className="aspect-w-16 aspect-h-9 bg-black">
                                  <iframe 
                                      className="w-full h-full" 
                                      src={video.embedUrl} 
                                      title={video.title} 
                                      frameBorder="0" 
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                      allowFullScreen>
                                  </iframe>
                              </div>
                              <div className="p-4 bg-[#141414]">
                                  <h3 className="text-lg font-bold text-white font-display truncate">{video.title}</h3>
                              </div>
                          </div>
                        </div>
                      )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>
  );
};

export default Showreel;