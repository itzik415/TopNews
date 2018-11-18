import React from 'react';
import moment from 'moment';
import momentTimezone from 'moment-timezone';

const slider = (props) => {
    return (
        <div className="slider__section">
            <div className="slider__section-arrowDivLeft">
                <ion-icon onClick={props.movingArticlesLeft} id="arrowLeft" name="ios-arrow-back"></ion-icon>
            </div>
            <div className="slider__section-middle">
                {
                    props.topArticles.map((article, index) => {
                        return (
                            index < 5?
                                <div className={`slider__section-middle-${index}`} key={index}>
                                    <img className={`slider__section-middle-${index}-image`} src={`${article.urlToImage === null ? require('../../images/topNewsLogo.png') :article.urlToImage}`} alt='article'/>
                                    <div className={`slider__section-middle-${index}-article`}>
                                        <p className={`slider__section-middle-${index}-article-companyName`}><span id="redName">{article.source.name}</span> / {moment.tz(article.publishedAt,"UTC").fromNow()}</p>
                                        <p className={`slider__section-middle-${index}-article-title`}>{article.title}</p>
                                        <p className={`slider__section-middle-${index}-article-description`}>{article.description}</p>
                                    </div>
                                </div>:
                            null
                        )
                    })
                }
            </div>
            <div className="slider__section-arrowDivRight">
                <ion-icon onClick={props.movingArticlesRight} id="arrowRight" name="ios-arrow-forward"></ion-icon>
            </div>
        </div>
    )
}

export default slider;