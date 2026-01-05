
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import News from './components/News';
import HCMSpace from './components/HCMSpace';
import Gallery from './components/Gallery';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ArticleDetail from './components/ArticleDetail';

export interface NewsItem {
  date: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category?: string;
}

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleHomeClick = () => {
    setSelectedArticle(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Header onHomeClick={handleHomeClick} />
      <main>
        {selectedArticle ? (
          <ArticleDetail 
            article={selectedArticle} 
            onBack={() => setSelectedArticle(null)} 
          />
        ) : (
          <>
            <Hero />
            <About />
            <News onSelectArticle={setSelectedArticle} />
            <HCMSpace onSelectArticle={setSelectedArticle} />
            <Gallery />
            <Leadership />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
