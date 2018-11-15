import React from 'react';
import moment from 'moment';
import momentTimezone from 'moment-timezone';

const latest = (props) => {
    return (
        <div className="gallery">
            <p className="gallery-line"></p>
            <p className="gallery-title"><span className="gallery-title-text">latest news</span></p>
            {   
                props.topArticles.length > 0?
                props.topArticles['0'].map((article,index) => {
                    console.log('check')
                    return (
                        index < 5?
                        <figure className={`gallery__item gallery__item--${index}`} key={index-4}>    
                            <img className="gallery__img" alt='latest' src={`${article.urlToImage === null ? <img src={require('../../images/618278.jpg')}/> :article.urlToImage}`} />    
                            <figure className={`gallery__item--${index}-container`}>                      
                                <p className={`gallery__item--${index}-container-title`}>{article.title}</p>
                                <p className={`gallery__item--${index}-container-date`}><span id="redName">{article.source.name}</span> / {moment.tz(article.publishedAt,"UTC").fromNow()}</p>
                            </figure>                        
                        </figure>:
                        console.log('Loading...')
                    )
                }):
                console.log('Loading1...')
            }
        </div>
    )
}

export default latest;