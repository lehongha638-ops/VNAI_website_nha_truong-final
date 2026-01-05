
import React from 'react';
import { NewsItem } from '../App';

interface NewsProps {
  onSelectArticle: (article: NewsItem) => void;
}

const News: React.FC<NewsProps> = ({ onSelectArticle }) => {
  const newsItems: NewsItem[] = [
    { 
      date: '15/12/2025', 
      title: 'Hội nghị Giáo dục nghề nghiệp năm 2025', 
      excerpt: 'Bộ Giáo dục và Đào tạo tổ chức hội nghị về định hướng giáo dục nghề nghiệp...',
      image: 'https://picsum.photos/id/1040/800/600',
      content: 'Trong không khí trang trọng tại Hội trường lớn, Bộ Giáo dục và Đào tạo đã tổ chức thành công Hội nghị Giáo dục nghề nghiệp năm 2025. Hội nghị tập trung vào việc đổi mới chương trình giảng dạy, ứng dụng công nghệ số vào học đường và tăng cường kỹ năng thực hành cho học sinh ngay từ cấp tiểu học. Nhà trường chúng ta vinh dự có bài tham luận về mô hình trường học hạnh phúc.'
    },
    { 
      date: '10/12/2025', 
      title: 'Triển khai Nghị quyết số 71 của Đảng', 
      excerpt: 'Đảng ủy Bộ GDĐT chuẩn bị triển khai hội nghị học tập, triển khai Nghị quyết số 71...',
      image: 'https://picsum.photos/id/1041/800/600',
      content: 'Thực hiện chỉ đạo của Đảng ủy cấp trên, Chi bộ Trường Tiểu học Nguyễn Bỉnh Khiêm đã tổ chức buổi sinh hoạt chuyên đề nghiên cứu Nghị quyết số 71. Buổi họp nhấn mạnh vai trò của giáo dục trong việc hình thành nhân cách và bồi dưỡng lòng yêu nước cho thế hệ trẻ. Toàn thể giáo viên cam kết lồng ghép các giá trị đạo đức vào từng bài giảng.'
    },
    { 
      date: '05/12/2025', 
      title: 'Lễ khai giảng năm học mới tưng bừng', 
      excerpt: 'Trường Tiểu Học Nguyễn Bỉnh Khiêm long trọng tổ chức lễ khai giảng năm học mới...',
      image: 'https://picsum.photos/id/1042/800/600',
      content: 'Tiếng trống trường đã vang lên, báo hiệu một năm học mới đầy hứa hẹn. Lễ khai giảng năm nay diễn ra trong không khí phấn khởi với sự tham gia của đại diện chính quyền địa phương, các bậc phụ huynh và hơn 500 em học sinh. Đặc biệt, nhà trường đã trao tặng 20 suất học bổng cho các em học sinh vượt khó học giỏi, tiếp thêm động lực cho các em trên con đường chinh phục tri thức.'
    }
  ];

  return (
    <section id="tin-tuc" className="py-24 bg-[#FCF9EA]/50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-merriweather text-4xl font-black text-[#102E50] mb-4 relative inline-block">
            Tin Tức & Sự Kiện
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#E78B48] rounded-full" />
          </h2>
          <p className="text-[#E78B48] text-lg font-bold mt-4">Cập nhật thông tin mới nhất từ nhà trường</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((news, i) => (
            <div 
              key={i} 
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 transition-transform group cursor-pointer"
              onClick={() => onSelectArticle(news)}
            >
              <div className="relative h-56 bg-[#102E50] overflow-hidden">
                <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90" />
                <div className="absolute top-4 right-4 bg-white text-[#102E50] font-black text-xs px-3 py-2 rounded-lg shadow-md">
                  {news.date}
                </div>
              </div>
              <div className="p-8">
                <h4 className="font-merriweather text-xl font-black text-[#102E50] mb-4 leading-[1.5] group-hover:text-[#E78B48] transition-colors">
                  {news.title}
                </h4>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  {news.excerpt}
                </p>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectArticle(news);
                  }}
                  className="flex items-center gap-2 text-[#E78B48] font-black uppercase tracking-widest text-xs hover:gap-4 transition-all"
                >
                  Đọc thêm <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
