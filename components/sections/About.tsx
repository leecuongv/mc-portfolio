import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-[#202020]">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-gold-metallic">Giới Thiệu</h2>
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
            <img src="https://images.unsplash.com/photo-1542385153-28565a9f268f?q=80&w=1935&auto=format&fit=crop" alt="About MC Hoai Thuong" className="rounded-lg shadow-2xl mx-auto w-full max-w-sm object-cover h-96" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;