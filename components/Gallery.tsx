
import React, { useState, useRef } from 'react';
import { schoolGateImage, schoolYardImage, classroomImage, eventImage } from './ImageData';

interface ImageItem {
  url: string;
  title: string;
  sub: string;
}

const Gallery: React.FC = () => {
  const [images, setImages] = useState<ImageItem[]>([
    { url: schoolGateImage, title: 'Cổng Trường', sub: 'Cổng trường em sạch - đẹp - an toàn' },
    { url: schoolYardImage, title: 'Sân Trường', sub: 'Không gian vui chơi và lễ hội' },
    { url: classroomImage, title: 'Lớp Học', sub: 'Nơi tri thức bắt đầu' },
    { url: eventImage, title: 'Hoạt Động Tập Thể', sub: 'Phát triển kỹ năng và thể chất' },
    { url: schoolYardImage, title: 'Khuôn Viên', sub: 'Cây xanh tạo bóng mát cho học sinh' },
    { url: classroomImage, title: 'Thư Viện', sub: 'An toàn và thân thiện' }
  ]);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [targetImageIndex, setTargetImageIndex] = useState<number | null>(null);

  const handleUploadClick = (index: number) => {
    setTargetImageIndex(index);
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0] && targetImageIndex !== null) {
      const file = event.target.files[0];
      const reader = new FileReader();
      
      reader.onloadend = () => {
        const newImages = [...images];
        newImages[targetImageIndex] = { ...newImages[targetImageIndex], url: reader.result as string };
        setImages(newImages);
      };
      
      reader.readAsDataURL(file);
    }
    event.target.value = ''; // Reset file input
    setTargetImageIndex(null);
  };

  return (
    <section id="thu-vien" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-merriweather text-4xl font-black text-[#102E50] mb-4 relative inline-block">
            Thư Viện Ảnh
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#E78B48] rounded-full" />
          </h2>
          <p className="text-[#E78B48] text-lg font-bold mt-4">Những khoảnh khắc đẹp tại trường Nguyễn Bỉnh Khiêm</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, i) => (
            <div key={img.title} className="group relative h-80 overflow-hidden rounded-[2.5rem] shadow-xl bg-white">
              <img src={img.url} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#102E50]/90 via-[#102E50]/20 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 p-10 flex flex-col justify-end pointer-events-none">
                <h4 className="font-merriweather text-2xl font-black text-white">{img.title}</h4>
                <p className="text-white/80 text-sm mt-2 italic">"{img.sub}"</p>
              </div>

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button
                  onClick={() => handleUploadClick(i)}
                  className="bg-[#E78B48] text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-orange-500 transition-colors transform hover:scale-105"
                >

                  Đổi ảnh
                </button>
              </div>

            </div>
          ))}
        </div>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept="image/*"
        />
      </div>
    </section>
  );
};

export default Gallery;
