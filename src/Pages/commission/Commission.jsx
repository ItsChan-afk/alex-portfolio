import React from 'react';
import TwoCarousel from './my-carousels/TwoCarousel';
import MyArticle from './my-article/MyArticle';
import articleData from '/Users/mac/Documents/React/alex-portfolio/public/resources/article.json';
import carouselData from '/Users/mac/Documents/React/alex-portfolio/public/resources/commisions.json';
import './commission.css';
import OneCarousel from './my-carousels/OneCarousel';

function Commission() {
  const semiRealismArticle = articleData.semiRealism;
  const semiRealismCarousel = carouselData.semiRealism;

  const animeArtArticle = articleData.animeArtStyle;
  const animeArtCarousel = carouselData.animeArtStyle;

  const referenceArticle = articleData.characterSheet;
  const referenceCarousel = carouselData.referenceSheet;

  const chibiArticle = articleData.chibi;
  const chibiCarousel = carouselData.chibi;

  return (
    <div className="commission-container">
      <div className='left-container'>
        <TwoCarousel props={semiRealismCarousel} />
      </div>
      <div className='right-container'>
        <MyArticle items={semiRealismArticle} title="Semi Realism" />
      </div>

      {/* spacing ------------------------------ */}

      <div className='left-container'>
        <TwoCarousel props={animeArtCarousel} />
      </div>
      <div className='right-container'>

        <MyArticle items={animeArtArticle} title="Anime Art" />
      </div>

      {/* spacing ------------------------------ */}

      <div className='left-container'>
        <OneCarousel referenceSheet={referenceCarousel} />
      </div>
      <div className='right-container'>
        <MyArticle items={referenceArticle} title='Reference' />
      </div>

      {/* spacing ------------------------------ */}
      <div className='left-container'>
        <OneCarousel referenceSheet={chibiCarousel} />

      </div>
      <div className='right-container'>
        <MyArticle items={chibiArticle} title='Chibi' />

      </div>
    </div>
  );
}

export default Commission;
