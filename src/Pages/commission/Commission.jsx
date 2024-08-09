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
        <MyArticle items={semiRealismArticle} title="Semi Realism"/>
      </div>

      {/* spacing ------------------------------ */}

      <div className='semi-realism-carousel'>
        <MyArticle items={animeArtArticle} title="Anime Art" />
      </div>
      <div className='semi-realism-article'>
        <TwoCarousel props={animeArtCarousel} />
      </div>

      {/* spacing ------------------------------ */}

      <div className='semi-realism-carousel'>
        <OneCarousel referenceSheet={referenceCarousel} />
      </div>
      <div className='semi-realism-article'>
        <MyArticle items={referenceArticle} title='Reference Sheet'/>
      </div>

      {/* spacing ------------------------------ */}
      <div className='semi-realism-carousel'>
        <MyArticle items={chibiArticle} title='Chibi' />
      </div>
      <div className='semi-realism-article'>
        <OneCarousel referenceSheet={chibiCarousel} />
      </div>


    </div>
  )
}

export default Commission


