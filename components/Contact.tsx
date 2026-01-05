
import React from 'react';

const Contact: React.FC = () => {
  const contacts = [
    { icon: '📍', title: 'Địa Chỉ', val: 'Quốc lộ 1K, khu phố Tân Hòa, Phường Đông Hòa, TP. Hồ Chí Minh' },
    { icon: '📞', title: 'Điện Thoại', val: '028.xxxx.xxxx\nHotline: 0909.xxx.xxx' },
    { icon: '📧', title: 'Email', val: 'contact@nbk.edu.vn\nadmissions@nbk.edu.vn' },
    { icon: '⏰', title: 'Giờ Làm Việc', val: 'Thứ 2 - Thứ 6: 7:00 - 16:00' }
  ];

  return (
    <section id="lien-he" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-merriweather text-4xl font-black text-[#102E50] mb-4 relative inline-block">
            Liên Hệ
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#E78B48] rounded-full" />
          </h2>
          <p className="text-[#E78B48] text-lg font-bold mt-4">Chúng tôi luôn sẵn sàng lắng nghe</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {contacts.map((c, i) => (
            <div key={i} className="bg-gradient-to-br from-[#FCF9EA] to-white p-8 rounded-3xl shadow-lg text-center hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-[#102E50] rounded-full flex items-center justify-center text-3xl mx-auto mb-6 shadow-xl">
                {c.icon}
              </div>
              <h4 className="font-merriweather text-xl font-black text-[#102E50] mb-3">{c.title}</h4>
              <p className="text-sm font-medium text-[#102E50] opacity-80 whitespace-pre-line leading-relaxed">
                {c.val}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;