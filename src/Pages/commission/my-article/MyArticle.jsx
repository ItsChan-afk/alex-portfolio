import React from 'react';
import './article.css';

function MyArticle({ title, items }) {
    return (
        <>
            <article className='article-container'>
                <h4 style={{ textAlign: 'center' }}>{title}</h4>
                {items.map((item, index) => (
                    <div className='item' key={index}>
                        <p className='description' dangerouslySetInnerHTML={{ __html: item.description }}></p>
                        <p className='price'>{item.price}</p>
                    </div>
                ))}
            </article>
        </>
    );
}

export default MyArticle;
