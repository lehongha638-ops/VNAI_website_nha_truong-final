
import React from 'react';

const About: React.FC = () => {
  const cards = [
    { icon: '🏫', title: 'Lịch Sử Hình Thành', desc: 'Thành lập ngày 03/09/2003, trường đã trải qua hơn 22 năm xây dựng và phát triển, không ngừng đổi mới giáo dục.' },
    { icon: '📍', title: 'Vị Trí', desc: 'Tọa lạc tại Quốc lộ 1K, khu phố Tân Hòa, phường Đông Hòa, TP. Hồ Chí Minh với cơ sở vật chất hiện đại.' },
    { icon: '🎯', title: 'Phương Châm', desc: '"Cổng trường em sạch - đẹp - an toàn" - Cam kết môi trường học tập an toàn, thân thiện và chất lượng.' }
  ];

  return (
    <section id="gioi-thieu" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-merriweather text-4xl font-black text-[#102E50] mb-4 relative inline-block">
            Về Chúng Tôi
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#E78B48] rounded-full" />
          </h2>
          <p className="text-[#E78B48] text-lg font-bold mt-4">Nơi khởi đầu hành trình tri thức rạng ngời</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div key={i} className="bg-gradient-to-br from-[#FCF9EA] to-white p-10 rounded-3xl shadow-xl hover:-translate-y-2 transition-transform border-t-4 border-[#102E50]">
              <div className="w-16 h-16 bg-[#102E50] rounded-full flex items-center justify-center text-3xl mb-6 shadow-lg">
                {card.icon}
              </div>
              <h3 className="font-merriweather text-2xl font-black text-[#102E50] mb-4">{card.title}</h3>
              <p className="text-[#102E50] leading-relaxed opacity-90">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;