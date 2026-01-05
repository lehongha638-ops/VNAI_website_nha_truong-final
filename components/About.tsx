
import React from 'react';
import { NewsItem } from '../App';

interface AboutProps {
  onSelectArticle: (article: NewsItem) => void;
}

const About: React.FC<AboutProps> = ({ onSelectArticle }) => {
  const coreValues: Array<{ icon: string; title: string; desc: string; article?: NewsItem }> = [
    { 
      icon: '🏫', 
      title: 'Lịch Sử Hình Thành', 
      desc: 'Thành lập ngày 03/09/2003, trường đã trải qua hơn 22 năm xây dựng và phát triển, không ngừng đổi mới giáo dục.',
      article: {
        date: '03/09/2003',
        title: 'Lịch Sử Hình Thành Trường Tiểu Học Nguyễn Bỉnh Khiêm',
        excerpt: 'Hành trình hơn 22 năm xây dựng và phát triển',
        image: 'https://picsum.photos/id/1015/800/600',
        content: 'Trường Tiểu học Nguyễn Bỉnh Khiêm được thành lập ngày 03/09/2003, đánh dấu một bước ngoặt quan trọng trong sự nghiệp giáo dục tại khu vực. Từ những ngày đầu với cơ sở vật chất còn hạn chế, nhà trường đã không ngừng nỗ lực để phát triển và hoàn thiện. Qua hơn 22 năm, trường đã trở thành một trong những địa chỉ giáo dục uy tín, được phụ huynh và học sinh tin tưởng. Nhà trường luôn chú trọng đổi mới phương pháp giảng dạy, ứng dụng công nghệ thông tin vào giáo dục và tạo môi trường học tập thân thiện, an toàn cho học sinh.'
      }
    },
    { 
      icon: '💎', 
      title: 'Giá Trị Cốt Lõi', 
      desc: 'Tôn trọng, Trách nhiệm, Sáng tạo - Ba giá trị nền tảng định hướng mọi hoạt động giáo dục của nhà trường.',
      article: {
        date: 'Chuyên mục Giá trị',
        title: 'Giá Trị Cốt Lõi Của Trường Tiểu Học Nguyễn Bỉnh Khiêm',
        excerpt: 'Tôn trọng, Trách nhiệm, Sáng tạo - Ba trụ cột giáo dục',
        image: 'https://picsum.photos/id/1018/800/600',
        content: 'Trường Tiểu học Nguyễn Bỉnh Khiêm xây dựng nền giáo dục dựa trên ba giá trị cốt lõi: Tôn trọng, Trách nhiệm và Sáng tạo. Tôn trọng thể hiện qua việc tôn trọng sự khác biệt của mỗi học sinh, tôn trọng ý kiến và cảm xúc của các em. Trách nhiệm được rèn luyện qua việc giáo dục học sinh biết chịu trách nhiệm với bản thân, với gia đình và xã hội. Sáng tạo được khuyến khích qua các hoạt động học tập đa dạng, giúp học sinh phát triển tư duy độc lập và khả năng giải quyết vấn đề.'
      }
    },
    { 
      icon: '🎯', 
      title: 'Phương Châm', 
      desc: '"Cổng trường em sạch - đẹp - an toàn" - Cam kết môi trường học tập an toàn, thân thiện và chất lượng.',
      article: {
        date: 'Chuyên mục Phương châm',
        title: 'Phương Châm Giáo Dục: Sạch - Đẹp - An Toàn',
        excerpt: 'Cam kết tạo môi trường học tập lý tưởng',
        image: 'https://picsum.photos/id/1025/800/600',
        content: 'Phương châm "Cổng trường em sạch - đẹp - an toàn" không chỉ là khẩu hiệu mà còn là cam kết hành động của toàn thể cán bộ, giáo viên và nhân viên nhà trường. Sạch thể hiện qua việc giữ gìn vệ sinh môi trường, rèn luyện ý thức bảo vệ môi trường cho học sinh. Đẹp được thể hiện qua việc xây dựng cảnh quan trường học xanh - sạch - đẹp, tạo không gian học tập thân thiện. An toàn là ưu tiên hàng đầu, nhà trường luôn đảm bảo an toàn về thể chất và tinh thần cho mọi học sinh.'
      }
    }
  ];

  const handleCardClick = (article?: NewsItem) => {
    if (article) {
      onSelectArticle(article);
    }
  };

  return (
    <section id="gioi-thieu" className="py-24 bg-white overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-merriweather text-4xl font-black text-[#102E50] mb-4 relative inline-block">
            Về Chúng Tôi
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#E78B48] rounded-full" />
          </h2>
          <p className="text-[#E78B48] text-lg font-bold mt-4">Nơi khởi đầu hành trình tri thức rạng ngời</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((card, i) => (
            <button
              key={i}
              onClick={() => handleCardClick(card.article)}
              className="bg-gradient-to-br from-[#FCF9EA] to-white p-10 rounded-3xl shadow-xl hover:-translate-y-2 transition-transform border-t-4 border-[#102E50] text-left cursor-pointer group"
            >
              <div className="w-16 h-16 bg-[#102E50] rounded-full flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="font-merriweather text-2xl font-black text-[#102E50] mb-4 group-hover:text-[#E78B48] transition-colors">{card.title}</h3>
              <p className="text-[#102E50] leading-relaxed opacity-90">{card.desc}</p>
              {card.article && (
                <div className="mt-4 text-[#E78B48] font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Xem thêm →
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;