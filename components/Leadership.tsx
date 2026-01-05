
import React from 'react';

const Leadership: React.FC = () => {
  const leaders = [
    { initials: 'CTH', name: 'Cô Cần Thị Thúy Hưng', pos: 'Hiệu trưởng', period: '2003 - 2009' },
    { initials: 'LTH', name: 'Cô Lê Thu Hương', pos: 'Hiệu trưởng', period: '2009 - 2013' },
    { initials: 'TTT', name: 'Cô Trần Thị Thanh Thu', pos: 'Hiệu trưởng', period: '2013 - 2020' },
    { initials: 'TTH', name: 'Cô Trịnh Thị Thu Hiền', pos: 'Hiệu trưởng', period: 'Từ 2020 - nay' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-merriweather text-4xl font-black text-[#102E50] mb-4 relative inline-block">
            Ban Lãnh Đạo
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#E78B48] rounded-full" />
          </h2>
          <p className="text-[#E78B48] text-lg font-bold mt-4">Ban Giám Hiệu tâm huyết qua các thời kỳ</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((l, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border-t-4 border-[#102E50] hover:-translate-y-2 transition-transform text-center flex flex-col items-center">
              <div className="w-24 h-24 bg-[#102E50] rounded-full flex items-center justify-center font-black text-white text-3xl shadow-xl mb-6">
                {l.initials}
              </div>
              <h4 className="font-merriweather text-lg font-black text-[#102E50] mb-2 leading-tight">{l.name}</h4>
              <p className="text-sm font-bold text-[#102E50] opacity-70 uppercase tracking-widest">{l.pos}</p>
              <p className="text-xs font-black text-[#E78B48] mt-2">{l.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
