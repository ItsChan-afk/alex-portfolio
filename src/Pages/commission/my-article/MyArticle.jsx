import React from 'react'
import './article.css'

function MyArticle({ props }) {
    return (
        <>
            <article className='article-container'>
                <h4 style={{ textAlign: 'center' }}>Semi Realism</h4>
                {props.map((item, index) => (
                    <div className='item' key={index}>
                        <p className='description' dangerouslySetInnerHTML={{ __html: item.description }}></p>
                        <p className='price'>{item.price}</p>
                    </div>
                ))}
            </article>
        </>
    )
}

export default MyArticle
