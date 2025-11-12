
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Camera, MapPin, Mic, Users, Briefcase, Award, Calendar } from 'lucide-react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


const App: React.FC = () => {
  const services = [
    {
      icon: <Mic className="w-12 h-12 text-[#E50914]" />,
      title: "MC Sự Kiện Song Ngữ",
      description: "Dẫn dắt chuyên nghiệp cho các sự kiện hội nghị, gala, đám cưới, activation... bằng cả tiếng Việt và tiếng Anh."
    },
    {
      icon: <Users className="w-12 h-12 text-[#E50914]" />,
      title: "Team Building & Hoạt Náo",
      description: "Thiết kế và triển khai các hoạt động team building sôi nổi, gắn kết tinh thần đồng đội cho doanh nghiệp."
    },
    {
      icon: <MapPin className="w-12 h-12 text-[#E50914]" />,
      title: "Tour Guide Chuyên Nghiệp",
      description: "Hướng dẫn viên du lịch chuyên nghiệp, am hiểu văn hóa, lịch sử, mang đến những chuyến đi đầy ý nghĩa và đáng nhớ."
    },
    {
      icon: <Camera className="w-12 h-12 text-[#E50914]" />,
      title: "Reviewer & KOL",
      description: "Sản xuất nội dung review, quảng bá sản phẩm, địa điểm du lịch trên các nền tảng mạng xã hội."
    }
  ];

  const galleryImages = [
    "/picture/gallery1.jpg",
    "/picture/gallery2.jpg",
    "/picture/gallery3.jpg",
    "/picture/gallery4.jpg",
    "/picture/gallery5.jpg",
    "/picture/gallery6.jpg",
  ];
  
  const partners = [
    { name: "TechCorp", logo: "/logos/techcorp.png" },
    { name: "Innovate Ltd", logo: "/logos/innovate.png" },
    { name: "Z-Solutions", logo: "/logos/z-solutions.png" },
    { name: "Global Media", logo: "/logos/global-media.png" },
    { name: "NextGen Events", logo: "/logos/nextgen.png" },
    { name: "Prestige Hotels", logo: "/logos/prestige.png" }
  ];

  const testimonials = [
    {
      quote: "Hoài Thương đã mang đến một không khí vô cùng sôi động và chuyên nghiệp cho sự kiện của chúng tôi. Rất hài lòng!",
      name: "Anh Khoa",
      company: "Giám đốc Marketing, Z Corp"
    },
    {
      quote: "Chuyến đi Mộc Châu của gia đình tôi đã trở nên thật ý nghĩa và vui vẻ nhờ có bạn hướng dẫn viên nhiệt tình và am hiểu.",
      name: "Chị Lan Anh",
      company: "Du khách Hà Nội"
    },
    {
      quote: "Năng lượng tích cực và khả năng kết nối mọi người của Thương thật tuyệt vời. Buổi team building đã thành công ngoài mong đợi.",
      name: "Ms. Jenny",
      company: "HR Manager, TechVibe"
    }
  ];

  const showreelVideos = [
    {
      id: 1,
      title: "Gala Dinner Highlights",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 2,
      title: "Team Building Fun",
      embedUrl: "https://www.youtube.com/embed/3-M1J66l1-k"
    },
    {
      id: 3,
      title: "Wedding Ceremony Moments",
      embedUrl: "https://www.youtube.com/embed/o-YBDTqX_ZU"
    },
    {
      id: 4,
      title: "Corporate Conference Opening",
      embedUrl: "https://www.youtube.com/embed/9bZkp7q19f0"
    },
     {
      id: 5,
      title: "Product Launch Event",
      embedUrl: "https://www.youtube.com/embed/Y6aYx_lUrtM"
    },
  ];

  return (
    <div className="bg-[#141414] text-white min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section id="home" className="relative h-screen flex items-center justify-center text-center">
          <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
          <img src="/picture/hero-bg.jpg" alt="Background" className="absolute inset-0 w-full h-full object-cover z-[-1]" />
          <div className="relative z-10 p-4">
            <img src="/picture/avatar.jpg" alt="MC Hoài Thương" className="rounded-full w-40 h-40 md:w-48 md:h-48 mx-auto border-4 border-[#E50914] shadow-lg mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-2">MC Hoài Thương</h1>
            <p className="text-xl md:text-2xl text-[#E50914]">Professional MC & Tour Guide</p>
            <p className="mt-4 max-w-xl mx-auto text-lg text-gray-200">MC song ngữ chuyên nghiệp, người kể chuyện bằng trái tim và là đối tác tin cậy cho mọi sự kiện thành công.</p>
            <a href="#contact" className="mt-8 inline-block bg-[#E50914] text-white font-bold py-3 px-8 rounded-md hover:bg-[#b20710] transition duration-300">
              Booking Now
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-32 bg-[#202020]">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-5 gap-12 items-center">
              <div className="md:col-span-3 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-[#E50914]">Giới Thiệu</h2>
                <p className="mb-4 text-gray-300">Với nhiều năm kinh nghiệm trong lĩnh vực dẫn chương trình và hướng dẫn viên du lịch, tôi tự tin mang đến sự chuyên nghiệp, năng lượng và những giá trị tốt nhất cho khách hàng. </p>
                <p className="mb-6 text-gray-300">Phương châm làm việc của tôi là "Kết nối bằng trái tim", mỗi chương trình, mỗi chuyến đi đều được tôi đặt trọn tâm huyết để tạo nên những khoảnh khắc đáng nhớ và những trải nghiệm tuyệt vời.</p>
                 <div className="bg-[#141414]/50 p-6 rounded-lg border border-gray-700">
                    <h3 className="font-bold text-white mb-4 text-xl font-display">Thông tin cá nhân</h3>
                    <div className="grid grid-cols-2 gap-4 text-gray-300">
                        <p><strong>Kinh nghiệm:</strong> 5+ năm</p>
                        <p><strong>Chiều cao:</strong> 1m68</p>
                        <p><strong>Ngoại ngữ:</strong> Anh - Việt (Lưu loát)</p>
                        <p><strong>Giọng nói:</strong> Truyền cảm, năng lượng</p>
                    </div>
                </div>
              </div>
              <div className="md:col-span-2">
                <img src="/picture/about.jpg" alt="About MC Hoai Thuong" className="rounded-lg shadow-2xl mx-auto w-full max-w-sm" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section id="stats" className="py-20 bg-[#141414]">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="border border-[#E50914]/30 p-8 rounded-lg">
                        <Award className="w-12 h-12 text-[#E50914] mx-auto mb-4" />
                        <p className="text-4xl font-bold font-display">5+</p>
                        <p className="text-gray-400">Năm Kinh Nghiệm</p>
                    </div>
                    <div className="border border-[#E50914]/30 p-8 rounded-lg">
                        <Briefcase className="w-12 h-12 text-[#E50914] mx-auto mb-4" />
                        <p className="text-4xl font-bold font-display">300+</p>
                        <p className="text-gray-400">Sự Kiện Đã Dẫn</p>
                    </div>
                    <div className="border border-[#E50914]/30 p-8 rounded-lg">
                        <Calendar className="w-12 h-12 text-[#E50914] mx-auto mb-4" />
                        <p className="text-4xl font-bold font-display">50+</p>
                        <p className="text-gray-400">Thương Hiệu Hợp Tác</p>
                    </div>
                </div>
            </div>
        </section>
        
        {/* Showreel Section */}
        <section id="showreel" className="py-20 md:py-32 bg-[#202020]">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-display text-[#E50914]">Showreel Nổi Bật</h2>
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

        {/* Services Section */}
        <section id="services" className="py-20 md:py-32 bg-[#141414]">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-[#E50914]">Dịch Vụ Cung Cấp</h2>
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
        
        {/* Gallery Section */}
        <section id="gallery" className="py-20 md:py-32 bg-[#202020]">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-[#E50914]">Khoảnh Khắc Ấn Tượng</h2>
               <p className="text-gray-400 mt-2">Một vài hình ảnh trong các sự kiện và chuyến đi.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((src, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-lg aspect-square">
                  <img 
                    src={src}
                    alt={`Gallery image ${index + 1}`} 
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section id="partners" className="py-20 md:py-24 bg-[#141414]">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-display text-[#E50914]">Đối Tác Tin Cậy</h2>
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

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 md:py-32 bg-[#202020]">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-[#E50914]">Feedback Từ Khách Hàng</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {testimonials.map((testimonial, index) => (
                 <div key={index} className="bg-[#141414] p-8 rounded-lg shadow-lg">
                   <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
                   <p className="font-bold text-[#E50914]">{testimonial.name}</p>
                   <p className="text-sm text-gray-500">{testimonial.company}</p>
                 </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-[#141414]">
            <div className="container mx-auto px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-display text-[#E50914] mb-4">Báo Giá Dịch Vụ</h2>
                <p className="max-w-2xl mx-auto text-gray-400">
                    Mỗi sự kiện đều có những yêu cầu và quy mô riêng. Vui lòng liên hệ trực tiếp để nhận được báo giá chi tiết và phù hợp nhất với chương trình của bạn.
                </p>
            </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32 bg-[#202020]">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#E50914] mb-4">Liên Hệ Đặt Lịch</h2>
            <p className="max-w-xl mx-auto text-gray-400 mb-8">Sẵn sàng lắng nghe và đồng hành cùng bạn để tạo nên những sự kiện và hành trình thành công. Đừng ngần ngại kết nối!</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              <div className="text-xl space-y-4">
                <p><strong>Phone/Zalo:</strong> <a href="tel:09xx.xxx.xxx" className="hover:text-[#E50914]">09xx.xxx.xxx</a></p>
                <p><strong>Email:</strong> <a href="mailto:contact@hoaithuong.com" className="hover:text-[#E50914]">contact@hoaithuong.com</a></p>
                <div className="flex justify-center space-x-6 pt-4">
                  <a href="https://zalo.me/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8"><path d="M16.326 12.368l.89-3.486h-3.324v-2.18c0-.814.524-1.579 1.65-1.579h1.75V2L14.77 2c-2.85 0-4.64 1.6-4.64 4.57v2.8h-2.72v3.486h2.72v8.5h4.12v-8.5h2.434zM4.5 4.5l-2-2v19h19l2-2H4.5z" /></svg>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  </a>
                </div>
              </div>
              <div>
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://zalo.me/your_phone_number&bgcolor=202020&color=E50914" alt="QR Code Zalo" className="rounded-lg border-4 border-[#E50914]/50" />
                 <p className="text-gray-400 mt-2 text-sm">Quét mã để kết nối Zalo</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default App;