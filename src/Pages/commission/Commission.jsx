import React from 'react';
import TwoCarousel from './my-carousels/TwoCarousel'
import MyArticle from './my-article/MyArticle'
import articleData from '/Users/mac/Documents/React/alex-portfolio/public/resources/article.json'
import carouselData from '/Users/mac/Documents/React/alex-portfolio/public/resources/commisions.json'
import './commission.css'
import OneCarousel from './my-carousels/OneCarousel';

// import commisionsData from '/public/resources/commisions.json'; 

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

      <div className='semi-realism-carousel'>
        <TwoCarousel props={semiRealismCarousel} />
      </div>
      <div className='semi-realism-article'>
        <MyArticle props={semiRealismArticle} />
      </div>

      {/* spacing ------------------------------ */}

      <div className='semi-realism-carousel'>
        <MyArticle props={animeArtArticle} />
      </div>
      <div className='semi-realism-article'>
        <TwoCarousel props={animeArtCarousel} />
      </div>

      {/* spacing ------------------------------ */}

      <div className='semi-realism-carousel'>
        <OneCarousel referenceSheet={referenceCarousel} />
      </div>
      <div className='semi-realism-article'>
        <MyArticle props={referenceArticle} />
      </div>

      {/* spacing ------------------------------ */}
      <div className='semi-realism-carousel'>
        <MyArticle props={chibiArticle} />
      </div>
      <div className='semi-realism-article'>
        <OneCarousel referenceSheet={chibiCarousel} />
      </div>


    </div>
  )
}

export default Commission


