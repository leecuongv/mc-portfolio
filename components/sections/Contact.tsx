import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-[#202020]">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-gold-metallic mb-4">Liên Hệ Đặt Lịch</h2>
        <p className="max-w-xl mx-auto text-gray-400 mb-8">Sẵn sàng lắng nghe và đồng hành cùng bạn để tạo nên những sự kiện và hành trình thành công. Đừng ngần ngại kết nối!</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="text-xl space-y-4">
            <p><strong>Phone/Zalo:</strong> <a href="tel:09xx.xxx.xxx" className="hover:text-[#F0C746]">09xx.xxx.xxx</a></p>
            <p><strong>Email:</strong> <a href="mailto:contact@hoaian.com" className="hover:text-[#F0C746]">contact@hoaian.com</a></p>
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
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://zalo.me&bgcolor=202020&color=D4AF37" alt="QR Code Zalo" className="rounded-lg border-4 border-[#B8860B]/50" />
             <p className="text-gray-400 mt-2 text-sm">Quét mã để kết nối Zalo</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;