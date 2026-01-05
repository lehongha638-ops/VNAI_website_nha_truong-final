
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0a1f36] to-[#102E50] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="font-merriweather flex flex-col items-center mb-8 leading-tight">
          <span className="text-sm md:text-lg font-bold uppercase tracking-widest opacity-60 mb-2">Trường Tiểu Học</span>
          <span className="text-3xl md:text-5xl font-black tracking-tight">Nguyễn Bỉnh Khiêm</span>
        </div>
        <p className="max-w-2xl mx-auto opacity-70 mb-12 text-sm md:text-base leading-relaxed font-medium">
          Môi trường giáo dục thân thiện, chất lượng cao. Nơi ươm mầm những giá trị nhân văn và tri thức cho tương lai.
        </p>
        <div className="w-24 h-1 bg-[#E78B48] mx-auto mb-12 rounded-full" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-sm font-bold">
          <p className="opacity-50">© 2025 Trường Tiểu học Nguyễn Bỉnh Khiêm. Tất cả quyền lợi được bảo lưu.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-[#E78B48] transition-colors flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">f</span> Facebook
            </a>
            <a href="#" className="hover:text-[#E78B48] transition-colors flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">y</span> Youtube
            </a>
          </div>
        </div>
        <p className="mt-12 text-[10px] opacity-30 tracking-[0.3em] uppercase">Excellence • Integrity • Community</p>
      </div>
    </footer>
  );
};

export default Footer;
