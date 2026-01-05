
import React, { useState, useRef } from 'react';
import { NewsItem } from '../App';

interface HCMSpaceProps {
  onSelectArticle: (article: NewsItem) => void;
}

const HCMSpace: React.FC<HCMSpaceProps> = ({ onSelectArticle }) => {
  const [portraitImage, setPortraitImage] = useState('https://upload.wikimedia.org/wikipedia/commons/1/1c/H%E1%BB%93_Ch%C3%AD_Minh_1946.jpg');
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadTarget, setUploadTarget] = useState<'portrait' | 'background' | null>(null);
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const hcmContent: Record<string, NewsItem> = {
    'cuo-doi': {
      title: 'Cuộc đời và sự nghiệp Chủ tịch Hồ Chí Minh',
      date: 'Chuyên mục Lịch sử',
      excerpt: 'Hành trình từ người thanh niên yêu nước Nguyễn Tất Thành đến vị lãnh tụ vĩ đại của dân tộc.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/H%E1%BB%93_Ch%C3%AD_Minh_1946.jpg',
      content: 'Chủ tịch Hồ Chí Minh (lúc nhỏ tên là Nguyễn Sinh Cung, khi đi học là Nguyễn Tất Thành, trong nhiều năm hoạt động cách mạng lấy tên là Nguyễn Ái Quốc và nhiều bí danh, bút danh khác) sinh ngày 19/5/1890 ở làng Kim Liên, xã Nam Liên (nay là xã Kim Liên), huyện Nam Đàn, tỉnh Nghệ An. Người đã dành cả cuộc đời mình cho sự nghiệp giải phóng dân tộc, vì độc lập tự do của Tổ quốc và hạnh phúc của nhân dân.'
    },
    'guong-dien-hinh': {
      title: 'Gương điển hình Học tập và làm theo lời Bác',
      date: 'Chuyên mục Tuyên dương',
      excerpt: 'Những tấm gương tiêu biểu của thầy và trò trường Nguyễn Bỉnh Khiêm.',
      image: 'https://picsum.photos/id/1060/800/600',
      content: 'Phong trào "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh" tại trường Tiểu học Nguyễn Bỉnh Khiêm luôn được duy trì sôi nổi. Chúng tôi tự hào giới thiệu những giáo viên tận tụy, những học sinh vượt khó, luôn lấy 5 điều Bác Hồ dạy làm kim chỉ nam cho mọi hành động.'
    },
    'tu-tuong': {
      title: 'Tư tưởng, đạo đức, phong cách Hồ Chí Minh',
      date: 'Chuyên mục Tư tưởng',
      excerpt: 'Học tập phong cách sống giản dị, khiêm tốn và tấm lòng nhân hậu của Bác.',
      image: 'https://picsum.photos/id/1050/800/600',
      content: 'Tư tưởng Hồ Chí Minh là một hệ thống quan điểm toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng Việt Nam. Đối với thế hệ măng non, việc học tập phong cách của Bác bắt đầu từ những việc nhỏ nhất: tiết kiệm, giữ gìn vệ sinh chung, và lòng hiếu thảo với cha mẹ.'
    },
    'the-gioi': {
      title: 'Hồ Chí Minh và tình hữu nghị thế giới',
      date: 'Chuyên mục Đối ngoại',
      excerpt: 'Dấu ấn của Người trên hành trình bôn ba khắp năm châu bốn biển.',
      image: 'https://picsum.photos/id/1035/800/600',
      content: 'Trong hành trình tìm đường cứu nước, Người đã đặt chân đến nhiều quốc gia, làm nhiều nghề để sống và hoạt động. Bác không chỉ là vị lãnh tụ của dân tộc Việt Nam mà còn là người bạn lớn của nhân dân yêu chuộng hòa bình trên toàn thế giới.'
    }
  };

  const handleLinkClick = (key: string) => {
    setActiveButton(key);
    if (hcmContent[key]) {
      onSelectArticle(hcmContent[key]);
    }
  };

  const handleUploadClick = (target: 'portrait' | 'background') => {
    setUploadTarget(target);
    fileInputRef.current?.click();
  };
  // console.log(activeButton);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0] && uploadTarget) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        const result = reader.result as string;
        if (uploadTarget === 'portrait') {
          setPortraitImage(result);
        } else if (uploadTarget === 'background') {
          setBackgroundImage(result);
        }
      };

      reader.readAsDataURL(file);
    }
    event.target.value = '';
    setUploadTarget(null);
  };

  return (
    <section
      id="khong-gian-ho-chi-minh"
      className="py-24 relative overflow-hidden group min-h-[700px] flex items-center scroll-mt-24"
    >
      {/* Background Gradient & Pattern */}
      <div
        className={`absolute inset-0 ${backgroundImage ? '' : 'bg-gradient-to-br from-[#f5e6d3] to-[#fff8e7]'}`}
        style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
      />

      {/* Dong Son Drum Watermark Pattern - More visible and centered */}
      {!backgroundImage && (
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `url('https://www.svgrepo.com/show/369719/dong-son-drum.svg')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '900px'
          }}
        />
      )}

      {/* Dark Overlay if Background Image is set */}
      {backgroundImage && <div className="absolute inset-0 bg-black/40" />}

      {/* Upload background button */}
      <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => handleUploadClick('background')}
          className="bg-[#E78B48] text-white font-bold py-2 px-4 rounded-xl shadow-lg hover:bg-orange-500 transition-colors"
        >
          Đổi ảnh nền
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        <div className="text-center mb-16">
          <h2 className={`font-merriweather text-4xl font-black mb-4 relative inline-block ${backgroundImage ? 'text-white' : 'text-[#102E50]'}`}>
            <span className="block">KHÔNG GIAN VĂN HÓA</span>
            <span className="block">HỒ CHÍ MINH</span>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#E78B48] rounded-full" />
          </h2>
          <p className={`text-lg font-bold mt-4 ${backgroundImage ? 'text-orange-300' : 'text-[#E78B48]'}`}>
            Tìm hiểu về cuộc đời và sự nghiệp của Chủ tịch Hồ Chí Minh
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column: Portrait */}
          <div className="lg:w-2/5 flex justify-center">
            <div className="relative group overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] transform transition-transform duration-500 hover:-rotate-1 max-w-sm border-8 border-white">
              <img
                src={portraitImage}
                alt="Hồ Chí Minh"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button
                  onClick={() => handleUploadClick('portrait')}
                  className="bg-[#E78B48] text-white font-bold py-2 px-4 rounded-xl shadow-lg"
                >
                  Đổi ảnh
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Cards - Using light orange bg context (no white container) */}
          <div className="lg:w-3/5 flex flex-col gap-4">
            <button
              onClick={() => handleLinkClick('cuo-doi')}
              className="group flex items-center gap-5 bg-gradient-to-r from-[#b91c1c] to-[#7f1d1d] p-3.5 rounded-[2.5rem] text-white font-bold hover:from-[#dc2626] transition-all shadow-xl border border-white/10 w-[76.5%]"
            >
              <div className={`w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-2xl shrink-0 transition-transform group-hover:rotate-12 ${activeButton === 'cuo-doi' ? 'rotate-12' : ''}`}>🎯</div>
              <div className="text-left">

                <h3 className="text-lg font-black">Cuộc đời, sự nghiệp</h3>
                <p className="text-xs opacity-60 font-medium">Khám phá hành trình cách mạng của Người</p>
              </div>
            </button>



            <button

              onClick={() => handleLinkClick('guong-dien-hinh')}

              className="group flex items-center gap-5 bg-gradient-to-r from-[#b91c1c] to-[#7f1d1d] p-3.5 rounded-[2.5rem] text-white font-bold hover:from-[#dc2626] transition-all shadow-xl border border-white/10 w-[76.5%]"

            >

              <div className={`w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-2xl shrink-0 transition-transform group-hover:rotate-12 ${activeButton === 'guong-dien-hinh' ? 'rotate-12' : ''}`}>🖼️</div>

              <div className="text-left">


                <h3 className="text-lg font-black">Gương điển hình</h3>

                <p className="text-xs opacity-60 font-medium">Tuyên dương Thầy và trò tiêu biểu</p>

              </div>

            </button>



            <button
  onClick={() => handleLinkClick('tu-tuong')}
  className="group flex items-center gap-5 bg-gradient-to-r from-[#b91c1c] to-[#7f1d1d] p-3.5 rounded-[2.5rem] text-white font-bold hover:from-[#dc2626] transition-all shadow-xl border border-white/10 w-[76.5%]"
>
  <div
    className={`w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-2xl shrink-0 transition-transform group-hover:rotate-12 ${
      activeButton === 'tu-tuong' ? 'rotate-12' : ''
    }`}
  >
    💭
  </div>

  <div className="text-left">
    <h3 className="text-lg font-black">Tư tưởng, đạo đức</h3>
    <p className="text-xs opacity-60 font-medium">
      Học tập và làm theo phong cách của Bác
    </p>
  </div>
</button>




            <button

              onClick={() => handleLinkClick('the-gioi')}

              className="group flex items-center gap-5 bg-gradient-to-r from-[#b91c1c] to-[#7f1d1d] p-3.5 rounded-[2.5rem] text-white font-bold hover:from-[#dc2626] transition-all shadow-xl border border-white/10 w-[76.5%]"

            >

              <div className={`w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-2xl shrink-0 transition-transform group-hover:rotate-12 ${activeButton === 'the-gioi' ? 'rotate-12' : ''}`}>🌍</div>

              <div className="text-left">


                <h3 className="text-lg font-black">Hồ Chí Minh & thế giới</h3>

                <p className="text-xs opacity-60 font-medium">Tình hữu nghị giữa các dân tộc</p>

              </div>

            </button>

            <a
              href="https://baotanghochiminh.vn/"
              target="_blank"
              onClick={() => setActiveButton('bao-tang')}
              className="group flex items-center gap-5 bg-gradient-to-r from-[#b91c1c] to-[#7f1d1d] p-3.5 rounded-[2.5rem] text-white font-bold hover:from-[#dc2626] transition-all shadow-xl border border-white/10 w-[76.5%]"
            >
              <div className={`w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-2xl shrink-0 transition-transform group-hover:rotate-12 ${activeButton === 'bao-tang' ? 'rotate-12' : ''}`}>🏛️</div>
              <div className={activeButton === 'bao-tang' ? 'text-left' : ''}>
                <h3 className="text-lg font-black">Tham quan Bảo tàng Hồ Chí Minh trực tuyến</h3>
                <p className="text-xs opacity-60 font-medium">Trải nghiệm không gian bảo tàng 3D sinh động</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/*"
      />
    </section>
  );
};

export default HCMSpace;
