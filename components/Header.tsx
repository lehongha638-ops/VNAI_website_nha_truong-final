
import React, { useState } from 'react';

interface HeaderProps {
  onHomeClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onHomeClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'TRANG CHỦ', id: 'trang-chu', action: onHomeClick },
    { name: 'GIỚI THIỆU', id: 'gioi-thieu' },
    { name: 'TIN TỨC', id: 'tin-tuc' },
    { name: 'KHÔNG GIAN VĂN HÓA HỒ CHÍ MINH', id: 'khong-gian-ho-chi-minh', isTwoLine: true },
    { name: 'THƯ VIỆN', id: 'thu-vien' },
    { name: 'LIÊN HỆ', id: 'lien-he' }
  ];

  return (
    <header className="sticky top-0 z-[1000] w-full font-sans">
      {/* Top Bar - Cleaned version */}
      <div className="bg-gradient-to-r from-[#0a1f36] to-[#102E50] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-xs md:text-sm">
          <div className="flex items-center gap-2">
            <div className="w-7 h-5 bg-[#DA251D] rounded-sm flex items-center justify-center text-[10px] text-[#FFCD00]">
              ★
            </div>
            <span className="font-bold tracking-wider">Tiếng Việt | Vietnamese</span>
          </div>
          <div className="hidden md:block opacity-70 italic font-medium">
            Chào mừng bạn đến với Trường Tiểu Học Nguyễn Bỉnh Khiêm
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-24 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer" onClick={onHomeClick}>
            <div className="w-12 h-12 md:w-14 md:h-14 bg-[#102E50] rounded-full flex items-center justify-center font-black text-white text-xl shadow-lg hover:rotate-3 transition-transform">
              NBK
            </div>
            <div className="font-sans">
              <div className="flex flex-col text-[#102E50] leading-[1.1] tracking-tight">
                {/* Dòng chữ Trường Tiểu Học sử dụng font Merriweather đồng nhất với tên trường */}
                <span className="text-[10px] md:text-[12px] font-bold uppercase tracking-widest opacity-80">Trường Tiểu Học</span>
                <span className="text-sm md:text-base lg:text-lg font-black whitespace-nowrap">Nguyễn Bỉnh Khiêm</span>
              </div>
              {/* Motto: Font Quicksand, nhỏ lại 1 size (9px) */}
              {/* <p className="text-[9px] text-[#E78B48] uppercase tracking-[0.15em] font-medium mt-1 font-sans">Sạch - Đẹp - An Toàn</p> */}
            </div>
          </div>

          {/* Desktop Menu - Font Merriweather, In đậm, Kích thước giảm 2 size (từ text-xl xuống text-base) */}
          <ul className="hidden lg:flex items-center gap-8 font-bold text-base tracking-tight font-sans">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a 
                  href={item.action ? 'javascript:void(0)' : `#${item.id}`} 
                  onClick={item.action ? item.action : undefined}
                  className="hover:text-[#E78B48] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#E78B48] after:transition-all hover:after:w-full transition-colors text-[#102E50]"
                >
                  {item.isTwoLine ? (
                    <span className="block leading-tight">
                      <span className="block">KHÔNG GIAN VĂN HÓA</span>
                      <span className="block">HỒ CHÍ MINH</span>
                    </span>
                  ) : (
                    item.name
                  )}
                </a>
              </li>
            ))}
            <button className="p-2.5 bg-[#FCF9EA] rounded-xl text-[#102E50] hover:bg-[#102E50] hover:text-white transition-all shadow-sm">
              🔍
            </button>
          </ul>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-2xl text-[#102E50]" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 p-6 absolute w-full shadow-2xl animate-fade-in-down">
            <ul className="flex flex-col gap-5 font-bold text-base font-sans">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <a 
                    href={item.action ? 'javascript:void(0)' : `#${item.id}`} 
                    onClick={() => {
                      if (item.action) item.action();
                      setIsMenuOpen(false);
                    }}
                    className="block hover:text-[#E78B48] py-2 border-b border-gray-50 last:border-0"
                  >
                    {item.isTwoLine ? (
                      <span className="block leading-tight">
                        <span className="block">KHÔNG GIAN VĂN HÓA</span>
                        <span className="block">HỒ CHÍ MINH</span>
                      </span>
                    ) : (
                      item.name
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
