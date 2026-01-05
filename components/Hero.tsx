
import React, { useState, useEffect, useRef } from 'react';
import { schoolGateImage, schoolYardImage, classroomImage, eventImage } from './ImageData';

const initialCarouselImages = [
  { url: schoolGateImage, title: 'Cổng Trường NBK', sub: 'Cổng trường em sạch - đẹp - an toàn' },
  { url: schoolYardImage, title: 'Sân Trường Rộng Rãi', sub: 'Không gian cho các hoạt động thể chất và ngoại khóa' },
  { url: classroomImage, title: 'Giờ Học Sôi Nổi', sub: 'Tương tác tích cực giữa thầy và trò trong mỗi tiết học' },
  { url: eventImage, title: 'Hoạt Động Ngoại Khóa', sub: 'Những sự kiện đáng nhớ, gắn kết tình thầy trò' },
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [carouselImages, setCarouselImages] = useState(initialCarouselImages);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [targetImageIndex, setTargetImageIndex] = useState<number | null>(null);


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const handleUploadClick = (index: number) => {
    setTargetImageIndex(index);
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0] && targetImageIndex !== null) {
      const file = event.target.files[0];
      const reader = new FileReader();
      
      reader.onloadend = () => {
        const newImages = [...carouselImages];
        newImages[targetImageIndex] = { ...newImages[targetImageIndex], url: reader.result as string };
        setCarouselImages(newImages);
      };
      
      reader.readAsDataURL(file);
    }
    event.target.value = '';
    setTargetImageIndex(null);
  };


  return (
    <section id="trang-chu" className="relative h-[500px] md:h-[650px] overflow-hidden group">
      {/* Slides */}
      {carouselImages.map((img, idx) => (
        <div 
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={img.url} alt={img.title} className="w-full h-full object-cover brightness-[0.6]" />
          <div className="absolute bottom-10 right-4 md:right-16 bg-[#102E50]/90 backdrop-blur-md text-white p-6 rounded-xl max-w-sm hidden sm:block shadow-2xl animate-fade-in-up">
            <h3 className="font-merriweather text-2xl font-black mb-2">{img.title}</h3>
            <p className="opacity-90">{img.sub}</p>
          </div>
        </div>
      ))}

      {/* Info Overlay */}
      <div className="absolute top-1/2 left-4 md:left-20 -translate-y-1/2 z-10 bg-[#102E50]/95 backdrop-blur-lg p-10 md:p-14 rounded-3xl max-w-md text-white shadow-[0_20px_60px_rgba(0,0,0,0.5)] hidden md:block border border-white/10">
        <h2 className="font-merriweather text-2xl md:text-3xl font-black mb-6 leading-tight">
          Trường Tiểu Học<br />Nguyễn Bỉnh Khiêm
        </h2>
        <p className="text-lg opacity-90 mb-8 font-medium border-l-4 border-[#E78B48] pl-4">
          Môi trường giáo dục chất lượng cao - Nơi ươm mầm tương lai tri thức.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {[
            { n: '22', l: 'NĂM THÀNH LẬP' },
            { n: '500+', l: 'HỌC SINH' },
            { n: '30+', l: 'GIÁO VIÊN' },
          ].map((stat, i) => (
            <div 
              key={i} 
              className="text-center p-3 bg-white text-[#102E50] rounded-2xl hover:bg-[#102E50] hover:text-white active:bg-[#102E50] active:text-white transition-all cursor-pointer shadow-md select-none"
            >
              <span className="block text-2xl font-black font-merriweather">{stat.n}</span>
              <span className="text-[8px] tracking-widest font-bold uppercase">{stat.l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <button 
        onClick={() => setCurrent((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white text-white hover:text-[#102E50] w-14 h-14 rounded-full backdrop-blur-md shadow-lg flex items-center justify-center transition-all z-20 border border-white/20"
      >
        ❮
      </button>
      <button 
        onClick={() => setCurrent((prev) => (prev + 1) % carouselImages.length)}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white text-white hover:text-[#102E50] w-14 h-14 rounded-full backdrop-blur-md shadow-lg flex items-center justify-center transition-all z-20 border border-white/20"
      >
        ❯
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        {carouselImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-500 ${i === current ? 'w-12 bg-white' : 'w-4 bg-white/40'}`}
          />
        ))}
      </div>

      {/* Upload Button */}
      <div className="absolute top-6 right-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => handleUploadClick(current)}
          className="bg-[#E78B48] text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-orange-500 transition-colors transform hover:scale-105"
        >
          Đổi ảnh
        </button>
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

export default Hero;
