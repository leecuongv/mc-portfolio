import React from 'react';
import { Award, Briefcase, Calendar } from 'lucide-react';

const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-20 bg-[#141414]">
        <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="border border-[#B8860B]/50 p-8 rounded-lg">
                    <Award className="w-12 h-12 text-[#F0C746] mx-auto mb-4" />
                    <p className="text-4xl font-bold font-display">5+</p>
                    <p className="text-gray-400">Năm Kinh Nghiệm</p>
                </div>
                <div className="border border-[#B8860B]/50 p-8 rounded-lg">
                    <Briefcase className="w-12 h-12 text-[#F0C746] mx-auto mb-4" />
                    <p className="text-4xl font-bold font-display">300+</p>
                    <p className="text-gray-400">Sự Kiện Đã Dẫn</p>
                </div>
                <div className="border border-[#B8860B]/50 p-8 rounded-lg">
                    <Calendar className="w-12 h-12 text-[#F0C746] mx-auto mb-4" />
                    <p className="text-4xl font-bold font-display">50+</p>
                    <p className="text-gray-400">Thương Hiệu Hợp Tác</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Stats;