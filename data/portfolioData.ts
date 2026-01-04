import { Mic, Users, MapPin, Camera, PlayCircle } from 'lucide-react';
import React from 'react';

// Types
export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Partner {
  name: string;
  logo: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  company: string;
}

export interface ShowreelVideo {
  id: number;
  title: string;
  embedUrl: string;
}

export interface ExperienceEvent {
    name: string;
    image: string;
    videoUrl: string;
    isHighlight?: boolean;
}

export interface ExperienceCategory {
    category: string;
    events: ExperienceEvent[];
}


// Data
export const services: Service[] = [
    {
      // FIX: Replaced JSX with React.createElement because JSX syntax is not supported in .ts files.
      icon: React.createElement(Mic, { className: "w-12 h-12 text-[#F0C746]" }),
      title: "MC Sự Kiện Song Ngữ",
      description: "Dẫn dắt chuyên nghiệp cho các sự kiện hội nghị, gala, đám cưới, activation... bằng cả tiếng Việt và tiếng Anh."
    },
    {
      // FIX: Replaced JSX with React.createElement because JSX syntax is not supported in .ts files.
      icon: React.createElement(Users, { className: "w-12 h-12 text-[#F0C746]" }),
      title: "Team Building & Hoạt Náo",
      description: "Thiết kế và triển khai các hoạt động team building sôi nổi, gắn kết tinh thần đồng đội cho doanh nghiệp."
    },
    {
      // FIX: Replaced JSX with React.createElement because JSX syntax is not supported in .ts files.
      icon: React.createElement(MapPin, { className: "w-12 h-12 text-[#F0C746]" }),
      title: "Tour Guide Chuyên Nghiệp",
      description: "Hướng dẫn viên du lịch chuyên nghiệp, am hiểu văn hóa, lịch sử, mang đến những chuyến đi đầy ý nghĩa và đáng nhớ."
    },
    {
      // FIX: Replaced JSX with React.createElement because JSX syntax is not supported in .ts files.
      icon: React.createElement(Camera, { className: "w-12 h-12 text-[#F0C746]" }),
      title: "Reviewer & KOL",
      description: "Sản xuất nội dung review, quảng bá sản phẩm, địa điểm du lịch trên các nền tảng mạng xã hội."
    }
];
  
export const partners: Partner[] = [
    { name: "ViettinBank", logo: "/logos/ViettinBank.svg" },
    { name: "Honda", logo: "/logos/Honda.svg" },
    { name: "Yamaha", logo: "/logos/Yamaha.svg" },
    { name: "Sabeco", logo: "/logos/Sabeco.png" },
    { name: "OCB", logo: "/logos/OCB.png" },
    { name: "BIDV", logo: "/logos/BIDV.png" }
];

export const testimonials: Testimonial[] = [
    {
    quote: "Hoài Ân đã mang đến một không khí vô cùng sôi động và chuyên nghiệp cho sự kiện của chúng tôi. Rất hài lòng!",
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

export const showreelVideos: ShowreelVideo[] = [
    {
      id: 1,
      title: "Gala Dinner Highlights",
      embedUrl: "https://www.youtube.com/embed/Rzm_kltwHbg"
    },
    {
      id: 2,
      title: "Corporate Event Showreel",
      embedUrl: "https://www.youtube.com/embed/Rzm_kltwHbg"
    },
    {
      id: 3,
      title: "Wedding Ceremony Moments",
      embedUrl: "https://www.youtube.com/embed/Rzm_kltwHbg"
    },
    {
      id: 4,
      title: "MC Hosting Reel",
      embedUrl: "https://www.youtube.com/embed/Rzm_kltwHbg"
    },
     {
      id: 5,
      title: "Product Launch Event",
      embedUrl: "https://www.youtube.com/embed/Rzm_kltwHbg"
    },
];

export const experienceData: ExperienceCategory[] = [
    {
        category: "Văn hóa - Nghệ thuật - Giải trí",
        events: [
            { name: "Giải bóng đá Du lịch Miền Trung - Tây Nguyên 2025", image: "https://picsum.photos/800/600?random=1", videoUrl: "https://www.youtube.com/watch?v=ScgztW3-8sA", isHighlight: true },
            { name: "Vui hội trăng rằm", image: "https://picsum.photos/800/600?random=2", videoUrl: "https://www.youtube.com/watch?v=UIMBdh2YI0U", isHighlight: true },
        ],
    },
    {
        category: "Kỷ niệm - Tri ân - Vinh danh",
        events: [
            { name: "Amazone Awards", image: "https://picsum.photos/800/600?random=3", videoUrl: "https://www.youtube.com/watch?v=I_3s_14pSJE" },
            { name: "FHS 50 Anniversary", image: "https://picsum.photos/800/600?random=4", videoUrl: "https://www.youtube.com/watch?v=yYc3d342n8Y" },
        ],
    },
    {
        category: "Khai trương - Ra mắt",
        events: [
            { name: "Yamaha Grande Launch", image: "https://picsum.photos/800/600?random=5", videoUrl: "https://www.youtube.com/watch?v=eY2o_StiS0I" },
            { name: "FPT Opening", image: "https://picsum.photos/800/600?random=6", videoUrl: "https://www.youtube.com/watch?v=wE2Kmd22R0o" },
        ],
    },
    {
        category: "Hội nghị",
        events: [
            { name: "Amazone", image: "https://picsum.photos/800/600?random=7", videoUrl: "https://www.youtube.com/watch?v=l_n9C5mY_yA" },
            { name: "Sabeco Conference", image: "https://picsum.photos/800/600?random=8", videoUrl: "https://www.youtube.com/watch?v=t-0t2WWPTT0" },
        ],
    },
    {
        category: "Gala - Tiệc",
        events: [
            { name: "ViettinBank Gala", image: "https://picsum.photos/800/600?random=9", videoUrl: "https://www.youtube.com/watch?v=h5f_iI85i-E" },
        ],
    },
];