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
    { name: "TechCorp", logo: "/logos/techcorp.png" },
    { name: "Innovate Ltd", logo: "/logos/innovate.png" },
    { name: "Z-Solutions", logo: "/logos/z-solutions.png" },
    { name: "Global Media", logo: "/logos/global-media.png" },
    { name: "NextGen Events", logo: "/logos/nextgen.png" },
    { name: "Prestige Hotels", logo: "/logos/prestige.png" }
];

export const testimonials: Testimonial[] = [
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

export const showreelVideos: ShowreelVideo[] = [
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

export const experienceData: ExperienceCategory[] = [
    {
        category: "Văn hóa - Nghệ thuật - Giải trí",
        events: [
            { name: "Miss Grand Vietnam", image: "/picture/experience/miss_grand.jpg", videoUrl: "#", isHighlight: true },
            { name: "Miss World Vietnam", image: "/picture/experience/miss_world.jpg", videoUrl: "#", isHighlight: true },
        ],
    },
    {
        category: "Kỷ niệm - Tri ân - Vinh danh",
        events: [
            { name: "Amazon Awards", image: "/picture/experience/amazon_awards.jpg", videoUrl: "#" },
            { name: "TCL Anniversary", image: "/picture/experience/tcl_anniversary.jpg", videoUrl: "#" },
        ],
    },
    {
        category: "Khai trương - Ra mắt",
        events: [
            { name: "Toyota Wigo Launch", image: "/picture/experience/toyota_wigo.jpg", videoUrl: "#" },
            { name: "FPT Opening", image: "/picture/experience/fpt_opening.jpg", videoUrl: "#" },
        ],
    },
    {
        category: "Hội nghị",
        events: [
            { name: "Amazon Global Selling", image: "/picture/experience/amazon_global.jpg", videoUrl: "#" },
            { name: "Sabeco Conference", image: "/picture/experience/sabeco_conf.jpg", videoUrl: "#" },
        ],
    },
    {
        category: "Gala - Tiệc",
        events: [
            { name: "Vietcombank Gala", image: "/picture/experience/vcb_gala.jpg", videoUrl: "#" },
        ],
    },
];