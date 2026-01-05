
import React, { useEffect } from 'react';
import { NewsItem } from '../App';

interface ArticleDetailProps {
  article: NewsItem;
  onBack: () => void;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [article]);

  return (
    <div className="py-12 bg-white min-h-screen animate-fade-in">
      <div className="max-w-4xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm font-bold text-[#E78B48] mb-8 uppercase tracking-widest">
          <button onClick={onBack} className="hover:underline">Trang chủ</button>
          <span>/</span>
          <span className="text-[#102E50]/50 truncate">Tin tức chi tiết</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <span className="inline-block bg-[#FCF9EA] text-[#E78B48] px-4 py-1 rounded-full text-xs font-black mb-4">
            {article.date}
          </span>
          <h1 className="font-merriweather text-3xl md:text-4xl lg:text-5xl font-black text-[#102E50] leading-[1.5] mb-6">
            {article.title}
          </h1>
          <p className="text-xl text-gray-500 italic border-l-4 border-[#E78B48] pl-6 py-2">
            {article.excerpt}
          </p>
        </div>

        {/* Main Image */}
        <div className="mb-12 rounded-[2.5rem] overflow-hidden shadow-2xl h-[300px] md:h-[500px]">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-[#102E50] leading-relaxed mb-16">
          <p className="text-lg md:text-xl mb-6">
            {article.content}
          </p>
          <p className="text-lg md:text-xl mb-6">
            Đây là nội dung mở rộng cho bài viết nhằm cung cấp thêm thông tin chi tiết cho quý phụ huynh và các em học sinh. Nhà trường luôn nỗ lực không ngừng để tạo ra môi trường học tập tốt nhất, nơi mỗi cá nhân đều được tôn trọng và phát triển toàn diện.
          </p>
          <div className="bg-[#FCF9EA] p-8 rounded-3xl border-l-8 border-[#102E50] my-10">
            <h4 className="font-merriweather text-xl font-black mb-4">Thông tin quan trọng:</h4>
            <ul className="list-disc pl-6 space-y-2 font-medium">
              <li>Mọi thắc mắc vui lòng liên hệ Văn phòng nhà trường.</li>
              <li>Các hoạt động sắp tới sẽ được cập nhật thường xuyên trên website.</li>
              <li>Kính chúc quý phụ huynh và các em học sinh một tuần học tập hiệu quả.</li>
            </ul>
          </div>
        </div>

        {/* Back button */}
        <div className="flex justify-center border-t border-gray-100 pt-12 mb-12">
          <button 
            onClick={onBack}
            className="bg-[#102E50] text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-[#E78B48] transition-all transform hover:scale-105 shadow-xl"
          >
            ← Quay lại trang chủ
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
