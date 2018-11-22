import React from 'react';
import moment from 'moment';
import momentTimezone from 'moment-timezone';
import { Link } from 'react-router-dom';

const trending = (props) => {
    return (
        <div className="trending__section">
            <p className="trending__section-line"></p>
            <p className="trending__section-title"><span className="trending__section-title-text">Trendings</span></p>
            {
                props.topArticles.map((article, index) => {
                    return (
                        index >= 8 && index < 16?
                        <Link id='link' to={`/article/${article.title}`}>
                            <div className="trending__section-container" key={index}>
                                <img className="trending__section-container-left" src={`${article.urlToImage}`} alt='article'/>
                                <div className="trending__section-container-right">
                                    <p className="trending__section-container-right-name"><span id="redName">{article.source.name}</span> / {moment.tz(article.publishedAt,"UTC").fromNow()}</p>
                                    <p className="trending__section-container-right-title">{article.title}</p>
                                </div>
                            </div>
                        </Link>:
                        null
                    )
                })
            }
        </div>
    )
}

export default trending;