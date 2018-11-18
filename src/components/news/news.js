import React from 'react';
import moment from 'moment';
import momentTimezone from 'moment-timezone';

const news = (props) => {
    return (
        <div className="news__section">
             {
                props.allArticles.map((article, index) => {
                    return (
                        <div className="news__section-container" key={index}>
                            <img className="news__section-container-left" src={`${article.urlToImage}`} alt='article'/>
                            <div className="news__section-container-right">
                                <p className="news__section-container-right-name"><span id="redName">{article.source.name}</span> / {moment.tz(article.publishedAt,"UTC").fromNow()}</p>
                                <p className="news__section-container-right-title">{article.title}</p>
                                <p className="news__section-container-right-description">{article.description.slice(0,200)}</p>
                            </div>
                        </div>
                    )
                })
             }
             <p onClick={props.buttonClick} className="news__section-button">click for more</p>
        </div>
    )
}

export default news;